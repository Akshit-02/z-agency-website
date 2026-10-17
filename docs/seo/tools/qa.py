import json,re,collections as C,sys
S=sys.argv[1]; D=json.load(open(S+'/data.json')); posts=D['posts']
def texts(p):
    out=[p.get('excerpt','')]
    for s in p['content']:
        out.append(s['heading']); out+=s.get('body',[]); out+=s.get('checklist',[]) or []
        if s.get('callout'): out.append(s['callout']['text'])
        if s.get('table'): out+=[' | '.join(r) for r in s['table']['rows']]
    for f in p.get('faqs') or []: out+= [f['q'],f['a']]
    # extra fields used by special templates
    for k,v in p.items():
        if k in('content','faqs','excerpt','title','seoTitle','slug'): continue
        if isinstance(v,str) and len(v)>80: out.append(v)
        if isinstance(v,list):
            for x in v:
                if isinstance(x,str) and len(x)>60: out.append(x)
                if isinstance(x,dict):
                    for y in x.values():
                        if isinstance(y,str): out.append(y)
                        if isinstance(y,list): out+=[z for z in y if isinstance(z,str)]
                        if isinstance(y,dict): out+=[z for z in y.values() if isinstance(z,str)]
    return [t for t in out if t]
FILLER=r"in today's (fast-paced|digital|competitive)|ever-evolving|ever-changing|it'?s (important|worth) (to note|noting)|in conclusion|let'?s dive|game[- ]changer|unlock (the|your) (full )?potential|take (it|your \w+) to the next level|seamless(ly)?|cutting-edge|revolutioni[sz]e|in the digital age|look no further|elevate your"
LEAK=r"search summar|could not (open|verify|access)|blocked our|our fetcher|as reported by search|search results (say|show)|I (could|did) not|we could not confirm|according to search"
SELF=r"\b(leading|best-in-class|world-class|number one|#1|top-rated|industry-leading|guarantee[sd]?)\b"
STAT=r"\b\d{1,3}(\.\d+)?\s?(%|per ?cent)|\b\d+(\.\d+)?x (more|faster|higher)|\b(studies|research|surveys?) (show|find|suggest)s?"
YEARS=r"\b(in|as of|by|for) (2023|2024|2025)\b(?! (and|to|–|-) 20)"
rows=[]; faqq=C.Counter(); heads=C.Counter()
for p in posts:
    for f in p.get('faqs') or []: faqq[f['q'].strip().lower()]+=1
for p in posts:
    T=texts(p); full=' '.join(T)
    sents=re.split(r'(?<=[.!?])\s+',full)
    links=re.findall(r'\[\[(https?://[^|\]]+)',full)
    internal=re.findall(r'\[\[(/[^|\]]+)',full)
    unsourced=[s for s in sents if re.search(STAT,s,re.I) and 'http' not in s]
    words=len(re.findall(r"\w+",full))
    r=dict(slug=p['slug'],title=p.get('seoTitle') or p['title'],h1=p['title'],category=p['category'],services='|'.join(p['relatedServiceSlugs']),
      words=words,sections=len(p['content']),faqs=len(p.get('faqs') or []),ext_links=len(set(links)),body_internal_links=len(set(internal)),
      unsourced_stats=len(unsourced),filler=len(re.findall(FILLER,full,re.I)),leak=len(re.findall(LEAK,full,re.I)),selfclaims=len(re.findall(SELF,full,re.I)),
      old_year_refs=len(re.findall(YEARS,full)),dup_faq=sum(1 for f in (p.get('faqs') or []) if faqq[f['q'].strip().lower()]>3),
      has_quick_answer=int(bool(p.get('quickAnswer')) or any(re.search(r'quick answer|short answer|in short',s['heading'],re.I) for s in p['content'][:2])),
      has_table=int(any(s.get('table') for s in p['content'])),has_checklist=int(any(s.get('checklist') for s in p['content'])),
      has_code=int(any(s.get('code') for s in p['content'])),has_diagram=int(any(s.get('diagram') or s.get('visual') for s in p['content'])),
      date=p['date'],updated=p.get('updated',''),excerpt_len=len(p['excerpt']),
      india_cta=int(bool(re.search(r'across India|in India',' '.join(str(p.get(k,'')) for k in ('serviceLabel','ctaTitle','ctaDescription'))+' '.join((s.get('cta') or {}).get('description','') or '' for s in p['content'])))),
      examples_unsourced=' || '.join(x.strip()[:160] for x in unsourced[:2]))
    rows.append(r)
json.dump(rows,open(S+'/qa.json','w'))
def pct(k,f=lambda v:v>0): return f"{sum(1 for r in rows if f(r[k]))}"
for k in ['ext_links','unsourced_stats','filler','leak','selfclaims','old_year_refs','dup_faq','india_cta']: print(k,pct(k), 'zero ext' if k=='ext_links' else '')
print('no ext links',sum(1 for r in rows if r['ext_links']==0))
print('quick answer',sum(r['has_quick_answer'] for r in rows),'table',sum(r['has_table'] for r in rows),'checklist',sum(r['has_checklist'] for r in rows),'code',sum(r['has_code'] for r in rows),'diagram',sum(r['has_diagram'] for r in rows))
print('faq dup qs top',faqq.most_common(8))
print('words',sorted(r['words'] for r in rows)[::106])
for k in ['leak','selfclaims','old_year_refs']:
    print(k,[ (r['slug'],r[k]) for r in sorted(rows,key=lambda r:-r[k])[:8] if r[k]])
print('stats top',[(r['slug'],r['unsourced_stats']) for r in sorted(rows,key=lambda r:-r['unsourced_stats'])[:10]])
