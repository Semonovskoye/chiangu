from fractions import Fraction as F
from pathlib import Path
import json,re
rows=[]
def ck(name,actual,expected):
 assert actual==expected,(name,actual,expected)
 rows.append(dict(check=name,result=str(actual),expected=str(expected),passed=True))
ck('Q40: 15 minutes in hours',F(15,60),F(1,4))
ck('Q40: 0.08/(0.5*0.25) g/(dm²·h)',F(8,100)/(F(1,2)*F(1,4)),F(64,100))
ck('Q72: two acetyl-CoA, two CO2 per turn',2*2,4)
ck('Q85: 10*2.5 + 2*1.5 + 4 ATP',10*F(5,2)+2*F(3,2)+4,32)
ck('Q88: oxidative ATP only',10*F(5,2)+2*F(3,2),28)
ck('Q88 original historical P/O 3 and 2 (not current universal yield)',10*3+2*2,34)
ck('Q85 historical 38 including substrate-level ATP',10*3+2*2+4,38)
ck('Q87 carbon conservation glucose -> 2 pyruvate',6//3,2)
# This only verifies the arithmetic under TWO explicitly different legend assumptions.
# Heights approximate the drawing; only their ordering is used; neither legend is invented as fact.
w=[22,32,34,34];b=[27,38,32,42]
ck('Q126 conditional: WHITE uptake/BROWN loss',sum(x>=y for x,y in zip(w,b)),1)
ck('Q126 conditional: BROWN uptake/WHITE loss',sum(y>=x for x,y in zip(w,b)),3)
ck('Q130: listed C3 examples (rice/potato/cassava/bean)',len(['lúa','khoai tây','sắn','đậu']),4)
Path('/mnt/data/nmnrt_hs2/tests/math-results.json').write_text(json.dumps({'scope':'Arithmetic under stated assumptions; Q126 remains ungradable without a legend. Species classifications were checked separately, not proved by this calculation.','checks':rows},ensure_ascii=False,indent=2))
print(len(rows),'checks passed')
