(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("ecl",function(e){function t(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}var n,r,o=e.indentUnit,i=t("abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode"),a=t("apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait"),l=t("__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath"),s=t("ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode"),c=t("checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when"),u=t("catch class do else finally for if switch try while"),d=t("true false null"),p={"#":function(e,t){return!!t.startOfLine&&(e.skipToEnd(),"meta")}},f=/[+\-*&%=<>!?|\/]/
function m(e,t){var o,y=e.next()
if(p[y]){var b=p[y](e,t)
if(!1!==b)return b}if('"'==y||"'"==y)return t.tokenize=(o=y,function(e,t){for(var r,i=!1,a=!1;null!=(r=e.next());){if(r==o&&!i){a=!0
break}i=!i&&"\\"==r}return(a||!i&&!n)&&(t.tokenize=m),"string"}),t.tokenize(e,t)
if(/[\[\]{}\(\),;\:\.]/.test(y))return r=y,null
if(/\d/.test(y))return e.eatWhile(/[\w\.]/),"number"
if("/"==y){if(e.eat("*"))return t.tokenize=h,h(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"}if(f.test(y))return e.eatWhile(f),"operator"
e.eatWhile(/[\w\$_]/)
var g=e.current().toLowerCase()
if(i.propertyIsEnumerable(g))return u.propertyIsEnumerable(g)&&(r="newstatement"),"keyword"
if(a.propertyIsEnumerable(g))return u.propertyIsEnumerable(g)&&(r="newstatement"),"variable"
if(l.propertyIsEnumerable(g))return u.propertyIsEnumerable(g)&&(r="newstatement"),"variable-2"
if(s.propertyIsEnumerable(g))return u.propertyIsEnumerable(g)&&(r="newstatement"),"variable-3"
if(c.propertyIsEnumerable(g))return u.propertyIsEnumerable(g)&&(r="newstatement"),"builtin"
for(var v=g.length-1;v>=0&&(!isNaN(g[v])||"_"==g[v]);)--v
if(v>0){var x=g.substr(0,v+1)
if(s.propertyIsEnumerable(x))return u.propertyIsEnumerable(x)&&(r="newstatement"),"variable-3"}return d.propertyIsEnumerable(g)?"atom":null}function h(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=m
break}r="*"==n}return"comment"}function y(e,t,n,r,o){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=o}function b(e,t,n){return e.context=new y(e.indented,t,n,null,e.context)}function g(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new y((e||0)-o,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context
if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null
r=null
var o=(t.tokenize||m)(e,t)
if("comment"==o||"meta"==o)return o
if(null==n.align&&(n.align=!0),";"!=r&&":"!=r||"statement"!=n.type)if("{"==r)b(t,e.column(),"}")
else if("["==r)b(t,e.column(),"]")
else if("("==r)b(t,e.column(),")")
else if("}"==r){for(;"statement"==n.type;)n=g(t)
for("}"==n.type&&(n=g(t));"statement"==n.type;)n=g(t)}else r==n.type?g(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==r)&&b(t,e.column(),"statement")
else g(t)
return t.startOfLine=!1,o},indent:function(e,t){if(e.tokenize!=m&&null!=e.tokenize)return 0
var n=e.context,r=t&&t.charAt(0)
"statement"==n.type&&"}"==r&&(n=n.prev)
var i=r==n.type
return"statement"==n.type?n.indented+("{"==r?0:o):n.align?n.column+(i?0:1):n.indented+(i?0:o)},electricChars:"{}"}}),e.defineMIME("text/x-ecl","ecl")})
