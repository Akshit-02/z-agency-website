import json,re,collections as C,sys
S=sys.argv[1]; D=json.load(open(S+'/data.json')); posts=D['posts']
STOP=set('a an the and or of to in for on with your you how what why when is are do does vs versus guide complete practical explained checklist best top ways tips 2026 step steps by from that this it its can should which who'.split())
def kw(p):
    t=(p.get('seoTitle') or p['title'])
    t=re.split(r'[:—(|?]',t)[0].strip().lower()
    t=re.sub(r'^\d+\s+','',t)
    return t
def key(k):
    toks=[w for w in re.findall(r'[a-z0-9]+',k) if w not in STOP]
    toks=[w[:-1] if w.endswith('s') and len(w)>4 else w for w in toks]
    return ' '.join(sorted(set(toks)))
rows=[]; g=C.defaultdict(list)
for p in posts:
    k=kw(p); g[key(k)].append(p['slug']); rows.append((p['slug'],k,key(k)))
coll={k:v for k,v in g.items() if len(v)>1}
print(len(coll),'colliding keyword keys,',sum(len(v) for v in coll.values()),'urls')
for k,v in sorted(coll.items(),key=lambda x:-len(x[1]))[:60]: print(repr(k),v)
json.dump({'rows':rows,'coll':coll},open(S+'/kw.json','w'))
