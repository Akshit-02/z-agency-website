"""Apply exact-string edits inside one post's source block. Usage: postedit.py <file> <slug> <edits.json> [updated-date]"""
import json,sys
f,slug,ej=sys.argv[1:4]; upd=sys.argv[4] if len(sys.argv)>4 else None
t=open(f).read(); key=f'    slug: "{slug}",'
assert t.count(key)==1,('slug count',t.count(key))
i=t.index(key); nxt=t.find('    slug: "',i+len(key)); end=nxt if nxt!=-1 else len(t)
seg=t[i:end]
for e in json.load(open(ej)):
    a,b=e['old'],e['new']
    assert seg.count(a)==1,('edit not unique/missing',seg.count(a),a[:80]); seg=seg.replace(a,b)
if upd:
    head=seg.split('readingTime',1)[0]
    import re
    if 'updated:' in head: seg=re.sub(r'updated: "[0-9-]+"',f'updated: "{upd}"',seg,1)
    else:
        m=re.search(r'\n(\s+)date: "[0-9-]+",',seg); assert m,'no date'
        seg=seg[:m.end()]+f'\n{m.group(1)}updated: "{upd}",'+seg[m.end():]
open(f,'w').write(t[:i]+seg+t[end:]); print('ok',slug)
