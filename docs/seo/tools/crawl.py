import sys, json, re, urllib.request, concurrent.futures as cf
from html.parser import HTMLParser
urls=[l.strip() for l in open(sys.argv[1]) if l.strip()]
HOST='https://www.zspace.in'
class P(HTMLParser):
    def __init__(s):
        super().__init__(); s.title=''; s.intitle=False; s.meta={}; s.links=[]; s.canon=None; s.h1=[]; s.inh1=False; s.h2=0
        s.jsonld=[]; s.injs=False; s.buf=''; s.imgs=0; s.noalt=0; s.text=[]; s.skip=0; s.hreflang=[]; s.inmain=0; s.maintext=[]
    def handle_starttag(s,t,a):
        a=dict(a)
        if t=='title': s.intitle=True
        if t=='meta':
            k=a.get('name') or a.get('property')
            if k: s.meta[k.lower()]=a.get('content','')
        if t=='link' and a.get('rel')=='canonical': s.canon=a.get('href')
        if t=='link' and a.get('rel')=='alternate' and a.get('hreflang'): s.hreflang.append(a.get('hreflang'))
        if t=='a' and a.get('href'): s.links.append(a['href'])
        if t=='h1': s.inh1=True; s.h1.append('')
        if t=='h2': s.h2+=1
        if t=='script' and a.get('type')=='application/ld+json': s.injs=True; s.buf=''
        elif t in('script','style','noscript'): s.skip+=1
        if t=='img':
            s.imgs+=1
            if not a.get('alt'): s.noalt+=1
        if t in ('main','article'): s.inmain+=1
    def handle_endtag(s,t):
        if t=='title': s.intitle=False
        if t=='h1': s.inh1=False
        if t=='script' and s.injs: s.injs=False; s.jsonld.append(s.buf)
        elif t in('script','style','noscript') and s.skip: s.skip-=1
        if t in ('main','article') and s.inmain: s.inmain-=1
    def handle_data(s,d):
        if s.intitle: s.title+=d
        if s.inh1: s.h1[-1]+=d
        if s.injs: s.buf+=d; return
        if not s.skip:
            s.text.append(d)
            if s.inmain: s.maintext.append(d)
def norm(h):
    h=h.split('#')[0].split('?')[0]
    if h.startswith(HOST): h=h[len(HOST):]
    if h.startswith('/') and not h.startswith('//'): return h.rstrip('/') or '/'
    return None
def go(u):
    try:
        req=urllib.request.Request(u,headers={'User-Agent':'Mozilla/5.0 zspace-audit'})
        r=urllib.request.urlopen(req,timeout=40); html=r.read().decode('utf8','replace'); st=r.status; fu=r.geturl()
    except Exception as e:
        return {'url':u,'status':getattr(e,'code',0),'err':str(e)[:100]}
    p=P(); p.feed(html)
    types=[];bad=0
    for j in p.jsonld:
        try:
            d=json.loads(j); items=d if isinstance(d,list) else d.get('@graph',[d])
            for it in items:
                t=it.get('@type'); types+= t if isinstance(t,list) else [t]
        except Exception: bad+=1
    words=len(re.findall(r"\w+"," ".join(p.maintext or p.text)))
    internal=sorted(set(x for x in (norm(l) for l in p.links) if x))
    external=sorted(set(l for l in p.links if l.startswith('http') and not l.startswith(HOST)))
    return {'url':u,'status':st,'final':fu,'bytes':len(html),'title':p.title.strip(),'desc':p.meta.get('description',''),
      'robots':p.meta.get('robots',''),'canonical':p.canon,'h1':[h.strip() for h in p.h1],'h2':p.h2,'jsonld':types,'jsonld_bad':bad,
      'words':words,'imgs':p.imgs,'noalt':p.noalt,'hreflang':p.hreflang,'internal':internal,'external_n':len(external),
      'external':external[:60],'author':p.meta.get('author',''),'ogimg':p.meta.get('og:image','')}
with cf.ThreadPoolExecutor(12) as ex, open(sys.argv[2],'w') as o:
    for i,res in enumerate(ex.map(go,urls)):
        o.write(json.dumps(res)+'\n')
        if i%200==0: print(i,file=sys.stderr)
