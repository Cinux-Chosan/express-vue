(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../fold/xml-fold")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../fold/xml-fold"],e):e(CodeMirror)})(function(e){e.defineOption("autoCloseTags",!1,function(i,s,l){if(l!=e.Init&&l&&i.removeKeyMap("autoCloseTags"),s){var c={name:"autoCloseTags"};("object"!=typeof s||s.whenClosing)&&(c["'/'"]=function(t){return function(t){return t.getOption("disableInput")?e.Pass:o(t,!0)}(t)}),("object"!=typeof s||s.whenOpening)&&(c["'>'"]=function(o){return function(o){if(o.getOption("disableInput"))return e.Pass
for(var i=o.listSelections(),s=[],l=0;l<i.length;l++){if(!i[l].empty())return e.Pass
var c=i[l].head,d=o.getTokenAt(c),f=e.innerMode(o.getMode(),d.state),g=f.state
if("xml"!=f.mode.name||!g.tagName)return e.Pass
var u=o.getOption("autoCloseTags"),m="html"==f.mode.configuration,h="object"==typeof u&&u.dontCloseTags||m&&t,p="object"==typeof u&&u.indentTags||m&&n,v=g.tagName
d.end>c.ch&&(v=v.slice(0,v.length-d.end+c.ch))
var b=v.toLowerCase()
if(!v||"string"==d.type&&(d.end!=c.ch||!/[\"\']/.test(d.string.charAt(d.string.length-1))||1==d.string.length)||"tag"==d.type&&"closeTag"==g.type||d.string.indexOf("/")==d.string.length-1||h&&r(h,b)>-1||a(o,v,c,g,!0))return e.Pass
var y=p&&r(p,b)>-1
s[l]={indent:y,text:">"+(y?"\n\n":"")+"</"+v+">",newPos:y?e.Pos(c.line+1,0):e.Pos(c.line,c.ch+1)}}for(var l=i.length-1;l>=0;l--){var x=s[l]
o.replaceRange(x.text,i[l].head,i[l].anchor,"+insert")
var P=o.listSelections().slice(0)
P[l]={head:x.newPos,anchor:x.newPos},o.setSelections(P),x.indent&&(o.indentLine(x.newPos.line,null,!0),o.indentLine(x.newPos.line+1,null,!0))}}(o)}),i.addKeyMap(c)}})
var t=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],n=["applet","blockquote","body","button","div","dl","fieldset","form","frameset","h1","h2","h3","h4","h5","h6","head","html","iframe","layer","legend","object","ol","p","select","table","ul"]
function o(t,n){for(var o=t.listSelections(),r=[],i=n?"/":"</",s=0;s<o.length;s++){if(!o[s].empty())return e.Pass
var l=o[s].head,c=t.getTokenAt(l),d=e.innerMode(t.getMode(),c.state),f=d.state
if(n&&("string"==c.type||"<"!=c.string.charAt(0)||c.start!=l.ch-1))return e.Pass
if("xml"!=d.mode.name)if("htmlmixed"==t.getMode().name&&"javascript"==d.mode.name)r[s]=i+"script>"
else{if("htmlmixed"!=t.getMode().name||"css"!=d.mode.name)return e.Pass
r[s]=i+"style>"}else{if(!f.context||!f.context.tagName||a(t,f.context.tagName,l,f))return e.Pass
r[s]=i+f.context.tagName+">"}}t.replaceSelections(r),o=t.listSelections()
for(s=0;s<o.length;s++)(s==o.length-1||o[s].head.line<o[s+1].head.line)&&t.indentLine(o[s].head.line)}function r(e,t){if(e.indexOf)return e.indexOf(t)
for(var n=0,o=e.length;n<o;++n)if(e[n]==t)return n
return-1}function a(t,n,o,r,a){if(!e.scanForClosingTag)return!1
var i=Math.min(t.lastLine()+1,o.line+500),s=e.scanForClosingTag(t,o,null,i)
if(!s||s.tag!=n)return!1
for(var l=r.context,c=a?1:0;l&&l.tagName==n;l=l.prev)++c
o=s.to
for(var d=1;d<c;d++){var f=e.scanForClosingTag(t,o,null,i)
if(!f||f.tag!=n)return!1
o=f.to}return!0}e.commands.closeTag=function(e){return o(e)}})