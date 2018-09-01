(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("diff_match_patch")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","diff_match_patch"],e):e(CodeMirror,diff_match_patch)})(function(e,t){"use strict"
var r=e.Pos,i="http://www.w3.org/2000/svg"
function o(e,t){this.mv=e,this.type=t,this.classes="left"==t?{chunk:"CodeMirror-merge-l-chunk",start:"CodeMirror-merge-l-chunk-start",end:"CodeMirror-merge-l-chunk-end",insert:"CodeMirror-merge-l-inserted",del:"CodeMirror-merge-l-deleted",connect:"CodeMirror-merge-l-connect"}:{chunk:"CodeMirror-merge-r-chunk",start:"CodeMirror-merge-r-chunk-start",end:"CodeMirror-merge-r-chunk-end",insert:"CodeMirror-merge-r-inserted",del:"CodeMirror-merge-r-deleted",connect:"CodeMirror-merge-r-connect"}}function n(t){t.diffOutOfDate&&(t.diff=M(t.orig.getValue(),t.edit.getValue()),t.chunks=D(t.diff),t.diffOutOfDate=!1,e.signal(t.edit,"updateDiff",t.diff))}o.prototype={constructor:o,init:function(t,r,i){var o
this.edit=this.mv.edit,this.orig=e(t,A({value:r,readOnly:!this.mv.options.allowEditingOriginals},A(i))),this.diff=M(y(r),y(i.value)),this.chunks=D(this.diff),this.diffOutOfDate=this.dealigned=!1,this.showDifferences=!1!==i.showDifferences,this.forceUpdate=function(e){var t,r={from:0,to:0,marked:[]},i={from:0,to:0,marked:[]},o=!1
function a(t){l=!0,o=!1,"full"==t&&(e.svg&&N(e.svg),e.copyButtons&&N(e.copyButtons),f(e.edit,r.marked,e.classes),f(e.orig,i.marked,e.classes),r.from=r.to=i.from=i.to=0),n(e),e.showDifferences&&(h(e.edit,e.diff,r,DIFF_INSERT,e.classes),h(e.orig,e.diff,i,DIFF_DELETE,e.classes)),u(e),"align"==e.mv.options.connect&&m(e),l=!1}function c(t){l||(e.dealigned=!0,s(t))}function s(e){l||o||(clearTimeout(t),!0===e&&(o=!0),t=setTimeout(a,!0===e?20:250))}function d(t,o){e.diffOutOfDate||(e.diffOutOfDate=!0,r.from=r.to=i.from=i.to=0),c(o.text.length-1!=o.to.line-o.from.line)}return e.edit.on("change",d),e.orig.on("change",d),e.edit.on("markerAdded",c),e.edit.on("markerCleared",c),e.orig.on("markerAdded",c),e.orig.on("markerCleared",c),e.edit.on("viewportChange",function(){s(!1)}),e.orig.on("viewportChange",function(){s(!1)}),a(),a}(this),s(this,!0,!1),(o=this).edit.on("scroll",function(){a(o,DIFF_INSERT)&&u(o)}),o.orig.on("scroll",function(){a(o,DIFF_DELETE)&&u(o)})},setShowDifferences:function(e){(e=!1!==e)!=this.showDifferences&&(this.showDifferences=e,this.forceUpdate("full"))}}
var l=!1
function a(e,t){if(e.diffOutOfDate)return!1
if(!e.lockScroll)return!0
var r,i,o=+new Date
if(t==DIFF_INSERT?(r=e.edit,i=e.orig):(r=e.orig,i=e.edit),r.state.scrollSetBy==e&&(r.state.scrollSetAt||0)+50>o)return!1
var n=r.getScrollInfo()
if("align"==e.mv.options.connect)p=n.top
else{var l,a,s=.5*n.clientHeight,f=n.top+s,h=r.lineAtHeight(f,"local"),d=function(e,t,r){for(var i,o,n,l,a=0;a<e.length;a++){var c=e[a],s=r?c.editFrom:c.origFrom,f=r?c.editTo:c.origTo
null==o&&(s>t?(o=c.editFrom,l=c.origFrom):f>t&&(o=c.editTo,l=c.origTo)),f<=t?(i=c.editTo,n=c.origTo):s<=t&&(i=c.editFrom,n=c.origFrom)}return{edit:{before:i,after:o},orig:{before:n,after:l}}}(e.chunks,h,t==DIFF_INSERT),u=c(r,t==DIFF_INSERT?d.edit:d.orig),g=c(i,t==DIFF_INSERT?d.orig:d.edit),m=(f-u.top)/(u.bot-u.top),p=g.top-s+m*(g.bot-g.top)
if(p>n.top&&(a=n.top/s)<1)p=p*a+n.top*(1-a)
else if((l=n.height-n.clientHeight-n.top)<s){var v=i.getScrollInfo()
v.height-v.clientHeight-p>l&&(a=l/s)<1&&(p=p*a+(v.height-v.clientHeight-l)*(1-a))}}return i.scrollTo(n.left,p),i.state.scrollSetAt=o,i.state.scrollSetBy=e,!0}function c(e,t){var r=t.after
return null==r&&(r=e.lastLine()+1),{top:e.heightAtLine(t.before||0,"local"),bot:e.heightAtLine(r,"local")}}function s(e,t,r){e.lockScroll=t,t&&0!=r&&a(e,DIFF_INSERT)&&u(e),e.lockButton.innerHTML=t?"⇛⇚":"⇛&nbsp;&nbsp;⇚"}function f(t,r,i){for(var o=0;o<r.length;++o){var n=r[o]
n instanceof e.TextMarker?n.clear():n.parent&&(t.removeLineClass(n,"background",i.chunk),t.removeLineClass(n,"background",i.start),t.removeLineClass(n,"background",i.end))}r.length=0}function h(e,t,r,i,o){var n=e.getViewport()
e.operation(function(){r.from==r.to||n.from-r.to>20||r.from-n.to>20?(f(e,r.marked,o),d(e,t,i,r.marked,n.from,n.to,o),r.from=n.from,r.to=n.to):(n.from<r.from&&(d(e,t,i,r.marked,n.from,r.from,o),r.from=n.from),n.to>r.to&&(d(e,t,i,r.marked,r.to,n.to,o),r.to=n.to))})}function d(e,t,i,o,n,l,a){var c=r(0,0),s=r(n,0),f=e.clipPos(r(l-1)),h=i==DIFF_DELETE?a.del:a.insert
function d(t,r){for(var i=Math.max(n,t),c=Math.min(l,r),s=i;s<c;++s){var f=e.addLineClass(s,"background",a.chunk)
s==t&&e.addLineClass(f,"background",a.start),s==r-1&&e.addLineClass(f,"background",a.end),o.push(f)}t==r&&i==r&&c==r&&(i?o.push(e.addLineClass(i-1,"background",a.end)):o.push(e.addLineClass(i,"background",a.start)))}for(var u=0,g=0;g<t.length;++g){var m=t[g],p=m[0],v=m[1]
if(p==DIFF_EQUAL){var k=c.line+(I(t,g)?0:1)
x(c,v)
var C=c.line+(L(t,g)?1:0)
C>k&&(g&&d(u,k),u=C)}else if(p==i){var T=x(c,v,!0),F=R(s,c),y=B(f,T)
V(F,y)||o.push(e.markText(F,y,{className:h})),c=T}}u<=c.line&&d(u,c.line+1)}function u(e){if(e.showDifferences){if(e.svg){N(e.svg)
var t=e.gap.offsetWidth
_(e.svg,"width",t,"height",e.gap.offsetHeight)}e.copyButtons&&N(e.copyButtons)
for(var r=e.edit.getViewport(),i=e.orig.getViewport(),o=e.edit.getScrollInfo().top,n=e.orig.getScrollInfo().top,l=0;l<e.chunks.length;l++){var a=e.chunks[l]
a.editFrom<=r.to&&a.editTo>=r.from&&a.origFrom<=i.to&&a.origTo>=i.from&&k(e,a,n,o,t)}}}function g(e,t){for(var r=0,i=0,o=0;o<t.length;o++){var n=t[o]
if(n.editTo>e&&n.editFrom<=e)return null
if(n.editFrom>e)break
r=n.editTo,i=n.origTo}return i+(e-r)}function m(e,t){if(e.dealigned||t){if(!e.orig.curOp)return e.orig.operation(function(){m(e,t)})
e.dealigned=!1
var r=e.mv.left==e?e.mv.right:e.mv.left
r&&(n(r),r.dealigned=!1)
for(var i=function(e,t){for(var r=[],i=0;i<e.chunks.length;i++){var o=e.chunks[i]
r.push([o.origTo,o.editTo,t?g(o.editTo,t.chunks):null])}if(t)for(i=0;i<t.chunks.length;i++){o=t.chunks[i]
for(var n=0;n<r.length;n++){var l=r[n]
if(l[1]==o.editTo){n=-1
break}if(l[1]>o.editTo)break}n>-1&&r.splice(n-1,0,[g(o.editTo,e.chunks),o.editTo,o.origTo])}return r}(e,r),o=e.mv.aligners,l=0;l<o.length;l++)o[l].clear()
o.length=0
var a=[e.orig,e.edit],c=[]
r&&a.push(r.orig)
for(l=0;l<a.length;l++)c.push(a[l].getScrollInfo().top)
for(var s=0;s<i.length;s++)p(a,i[s],o)
for(l=0;l<a.length;l++)a[l].scrollTo(null,c[l])}}function p(e,t,r){for(var i=0,o=[],n=0;n<e.length;n++)if(null!=t[n]){var l=e[n].heightAtLine(t[n],"local")
o[n]=l,i=Math.max(i,l)}for(n=0;n<e.length;n++)if(null!=t[n]){var a=i-o[n]
a>1&&r.push(v(e[n],t[n],a))}}function v(e,t,r){var i=!0
t>e.lastLine()&&(t--,i=!1)
var o=document.createElement("div")
return o.className="CodeMirror-merge-spacer",o.style.height=r+"px",o.style.minWidth="1px",e.addLineWidget(t,o,{height:r,above:i})}function k(e,t,r,o,n){var l="left"==e.type,a=e.orig.heightAtLine(t.origFrom,"local")-r
if(e.svg){var c=a,s=e.edit.heightAtLine(t.editFrom,"local")-o
if(l){var f=c
c=s,s=f}var h=e.orig.heightAtLine(t.origTo,"local")-r,d=e.edit.heightAtLine(t.editTo,"local")-o
if(l){f=h
h=d,d=f}var u=" C "+n/2+" "+s+" "+n/2+" "+c+" "+(n+2)+" "+c,g=" C "+n/2+" "+h+" "+n/2+" "+d+" -1 "+d
_(e.svg.appendChild(document.createElementNS(i,"path")),"d","M -1 "+s+u+" L "+(n+2)+" "+h+g+" z","class",e.classes.connect)}if(e.copyButtons){var m=e.copyButtons.appendChild(O("div","left"==e.type?"⇝":"⇜","CodeMirror-merge-copy")),p=e.mv.options.allowEditingOriginals
if(m.title=p?"Push to left":"Revert chunk",m.chunk=t,m.style.top=a+"px",p){var v=e.orig.heightAtLine(t.editFrom,"local")-o,k=e.copyButtons.appendChild(O("div","right"==e.type?"⇝":"⇜","CodeMirror-merge-copy-reverse"))
k.title="Push to right",k.chunk={editFrom:t.origFrom,editTo:t.origTo,origFrom:t.editFrom,origTo:t.editTo},k.style.top=v+"px","right"==e.type?k.style.left="2px":k.style.right="2px"}}}function C(e,t,i,o){e.diffOutOfDate||t.replaceRange(i.getRange(r(o.origFrom,0),r(o.origTo,0)),r(o.editFrom,0),r(o.editTo,0))}var T=e.MergeView=function(t,r){if(!(this instanceof T))return new T(t,r)
this.options=r
var i=r.origLeft,n=null==r.origRight?r.orig:r.origRight,a=null!=i,c=null!=n,s=1+(a?1:0)+(c?1:0),f=[],h=this.left=null,d=this.right=null,p=this
if(a){h=this.left=new o(this,"left")
var v=O("div",null,"CodeMirror-merge-pane")
f.push(v),f.push(F(h))}var k=O("div",null,"CodeMirror-merge-pane")
if(f.push(k),c){d=this.right=new o(this,"right"),f.push(F(d))
var C=O("div",null,"CodeMirror-merge-pane")
f.push(C)}(c?C:k).className+=" CodeMirror-merge-pane-rightmost",f.push(O("div",null,null,"height: 0; clear: both;"))
var y=this.wrap=t.appendChild(O("div",f,"CodeMirror-merge CodeMirror-merge-"+s+"pane"))
this.edit=e(k,A(r)),h&&h.init(v,i,r),d&&d.init(C,n,r),r.collapseIdentical&&(l=!0,this.editor().operation(function(){(function(e,t){"number"!=typeof t&&(t=2)
for(var r=[],i=e.editor(),o=i.firstLine(),n=o,l=i.lastLine();n<=l;n++)r.push(!0)
e.left&&S(e.left,t,o,r)
e.right&&S(e.right,t,o,r)
for(var a=0;a<r.length;a++)if(r[a]){for(var c=a+o,s=1;a<r.length-1&&r[a+1];a++,s++);if(s>t){var f=[{line:c,cm:i}]
e.left&&f.push({line:g(c,e.left.chunks),cm:e.left.orig}),e.right&&f.push({line:g(c,e.right.chunks),cm:e.right.orig})
var h=E(s,f)
e.options.onCollapse&&e.options.onCollapse(e,c,s,h)}}})(p,r.collapseIdentical)}),l=!1),"align"==r.connect&&(this.aligners=[],m(this.left||this.right,!0))
var w=function(){h&&u(h),d&&u(d)}
e.on(window,"resize",w)
var M=setInterval(function(){for(var t=y.parentNode;t&&t!=document.body;t=t.parentNode);t||(clearInterval(M),e.off(window,"resize",w))},5e3)}
function F(t){var r=t.lockButton=O("div",null,"CodeMirror-merge-scrolllock")
r.title="Toggle locked scrolling"
var o=O("div",[r],"CodeMirror-merge-scrolllock-wrap")
e.on(r,"click",function(){s(t,!t.lockScroll)})
var n=[o]
if(!1!==t.mv.options.revertButtons&&(t.copyButtons=O("div",null,"CodeMirror-merge-copybuttons-"+t.type),e.on(t.copyButtons,"click",function(e){var r=e.target||e.srcElement
r.chunk&&("CodeMirror-merge-copy-reverse"!=r.className?C(t,t.edit,t.orig,r.chunk):C(t,t.orig,t.edit,r.chunk))}),n.unshift(t.copyButtons)),"align"!=t.mv.options.connect){var l=document.createElementNS&&document.createElementNS(i,"svg")
l&&!l.createSVGRect&&(l=null),t.svg=l,l&&n.push(l)}return t.gap=O("div",n,"CodeMirror-merge-gap")}function y(e){return"string"==typeof e?e:e.getValue()}T.prototype={constuctor:T,editor:function(){return this.edit},rightOriginal:function(){return this.right&&this.right.orig},leftOriginal:function(){return this.left&&this.left.orig},setShowDifferences:function(e){this.right&&this.right.setShowDifferences(e),this.left&&this.left.setShowDifferences(e)},rightChunks:function(){if(this.right)return n(this.right),this.right.chunks},leftChunks:function(){if(this.left)return n(this.left),this.left.chunks}}
var w=new t
function M(e,t){var r=w.diff_main(e,t)
w.diff_cleanupSemantic(r)
for(var i=0;i<r.length;++i){var o=r[i]
o[1]?i&&r[i-1][0]==o[0]&&(r.splice(i--,1),r[i][1]+=o[1]):r.splice(i--,1)}return r}function D(e){for(var t=[],i=0,o=0,n=r(0,0),l=r(0,0),a=0;a<e.length;++a){var c=e[a],s=c[0]
if(s==DIFF_EQUAL){var f=I(e,a)?0:1,h=n.line+f,d=l.line+f
x(n,c[1],null,l)
var u=L(e,a)?1:0,g=n.line+u,m=l.line+u
g>h&&(a&&t.push({origFrom:o,origTo:d,editFrom:i,editTo:h}),i=g,o=m)}else x(s==DIFF_INSERT?n:l,c[1])}return(i<=n.line||o<=l.line)&&t.push({origFrom:o,origTo:l.line+1,editFrom:i,editTo:n.line+1}),t}function L(e,t){if(t==e.length-1)return!0
var r=e[t+1][1]
return 1!=r.length&&10==r.charCodeAt(0)&&(t==e.length-2||(r=e[t+2][1]).length>1&&10==r.charCodeAt(0))}function I(e,t){if(0==t)return!0
var r=e[t-1][1]
return 10==r.charCodeAt(r.length-1)&&(1==t||10==(r=e[t-2][1]).charCodeAt(r.length-1))}function b(e,t,i){e.addLineClass(t,"wrap","CodeMirror-merge-collapsed-line")
var o=document.createElement("span")
o.className="CodeMirror-merge-collapsed-widget",o.title="Identical text collapsed. Click to expand."
var n=e.markText(r(t,0),r(i-1),{inclusiveLeft:!0,inclusiveRight:!0,replacedWith:o,clearOnEnter:!0})
function l(){n.clear(),e.removeLineClass(t,"wrap","CodeMirror-merge-collapsed-line")}return o.addEventListener("click",l),{mark:n,clear:l}}function E(e,t){var r=[]
function i(){for(var e=0;e<r.length;e++)r[e].clear()}for(var o=0;o<t.length;o++){var n=t[o],l=b(n.cm,n.line,n.line+e)
r.push(l),l.mark.on("clear",i)}return r[0].mark}function S(e,t,r,i){for(var o=0;o<e.chunks.length;o++)for(var n=e.chunks[o],l=n.editFrom-t;l<n.editTo+t;l++){var a=l+r
a>=0&&a<i.length&&(i[a]=!1)}}function O(e,t,r,i){var o=document.createElement(e)
if(r&&(o.className=r),i&&(o.style.cssText=i),"string"==typeof t)o.appendChild(document.createTextNode(t))
else if(t)for(var n=0;n<t.length;++n)o.appendChild(t[n])
return o}function N(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)}function _(e){for(var t=1;t<arguments.length;t+=2)e.setAttribute(arguments[t],arguments[t+1])}function A(e,t){for(var r in t||(t={}),e)e.hasOwnProperty(r)&&(t[r]=e[r])
return t}function x(e,t,i,o){for(var n=i?r(e.line,e.ch):e,l=0;;){var a=t.indexOf("\n",l)
if(-1==a)break;++n.line,o&&++o.line,l=a+1}return n.ch=(l?0:n.ch)+(t.length-l),o&&(o.ch=(l?0:o.ch)+(t.length-l)),n}function B(e,t){return(e.line-t.line||e.ch-t.ch)<0?e:t}function R(e,t){return(e.line-t.line||e.ch-t.ch)>0?e:t}function V(e,t){return e.line==t.line&&e.ch==t.ch}})
