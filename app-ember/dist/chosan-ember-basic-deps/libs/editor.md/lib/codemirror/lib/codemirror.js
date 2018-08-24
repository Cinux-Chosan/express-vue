(function(e){if("object"==typeof exports&&"object"==typeof module)module.exports=e()
else{if("function"==typeof define&&define.amd)return define([],e)
this.CodeMirror=e()}})(function(){"use strict"
var e=/gecko\/\d/i.test(navigator.userAgent),t=/MSIE \d/.test(navigator.userAgent),r=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),n=t||r,i=n&&(t?document.documentMode||6:r[1]),o=/WebKit\//.test(navigator.userAgent),l=o&&/Qt\/\d+\.\d+/.test(navigator.userAgent),s=/Chrome\//.test(navigator.userAgent),a=/Opera\//.test(navigator.userAgent),u=/Apple Computer/.test(navigator.vendor),c=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),f=/PhantomJS/.test(navigator.userAgent),h=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),d=h||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),p=h||/Mac/.test(navigator.platform),g=/win/i.test(navigator.platform),v=a&&navigator.userAgent.match(/Version\/(\d*\.\d*)/)
v&&(v=Number(v[1])),v&&v>=15&&(a=!1,o=!0)
var m=p&&(l||a&&(null==v||v<12.11)),y=e||n&&i>=9,b=!1,w=!1
function x(t,r){if(!(this instanceof x))return new x(t,r)
this.options=r=r?uo(r):{},uo(Ur,r,!1),D(r)
var l=r.value
"string"==typeof l&&(l=new si(l,r.mode)),this.doc=l
var s=new x.inputStyles[r.inputStyle](this),c=this.display=new function(t,r,l){var s=this
this.input=l,s.scrollbarFiller=bo("div",null,"CodeMirror-scrollbar-filler"),s.scrollbarFiller.setAttribute("cm-not-content","true"),s.gutterFiller=bo("div",null,"CodeMirror-gutter-filler"),s.gutterFiller.setAttribute("cm-not-content","true"),s.lineDiv=bo("div",null,"CodeMirror-code"),s.selectionDiv=bo("div",null,null,"position: relative; z-index: 1"),s.cursorDiv=bo("div",null,"CodeMirror-cursors"),s.measure=bo("div",null,"CodeMirror-measure"),s.lineMeasure=bo("div",null,"CodeMirror-measure"),s.lineSpace=bo("div",[s.measure,s.lineMeasure,s.selectionDiv,s.cursorDiv,s.lineDiv],null,"position: relative; outline: none"),s.mover=bo("div",[bo("div",[s.lineSpace],"CodeMirror-lines")],null,"position: relative"),s.sizer=bo("div",[s.mover],"CodeMirror-sizer"),s.sizerWidth=null,s.heightForcer=bo("div",null,null,"position: absolute; height: "+_i+"px; width: 1px;"),s.gutters=bo("div",null,"CodeMirror-gutters"),s.lineGutter=null,s.scroller=bo("div",[s.sizer,s.heightForcer,s.gutters],"CodeMirror-scroll"),s.scroller.setAttribute("tabIndex","-1"),s.wrapper=bo("div",[s.scrollbarFiller,s.gutterFiller,s.scroller],"CodeMirror"),n&&i<8&&(s.gutters.style.zIndex=-1,s.scroller.style.paddingRight=0)
o||e&&d||(s.scroller.draggable=!0)
t&&(t.appendChild?t.appendChild(s.wrapper):t(s.wrapper))
s.viewFrom=s.viewTo=r.first,s.reportedViewFrom=s.reportedViewTo=r.first,s.view=[],s.renderedView=null,s.externalMeasured=null,s.viewOffset=0,s.lastWrapHeight=s.lastWrapWidth=0,s.updateLineNumbers=null,s.nativeBarWidth=s.barHeight=s.barWidth=0,s.scrollbarsClipped=!1,s.lineNumWidth=s.lineNumInnerWidth=s.lineNumChars=null,s.alignWidgets=!1,s.cachedCharWidth=s.cachedTextHeight=s.cachedPaddingH=null,s.maxLine=null,s.maxLineLength=0,s.maxLineChanged=!1,s.wheelDX=s.wheelDY=s.wheelStartX=s.wheelStartY=null,s.shift=!1,s.selForContextMenu=null,s.activeTouch=null,l.init(s)}(t,l,s)
c.wrapper.CodeMirror=this,N(this),T(this),r.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),r.autofocus&&!d&&c.input.focus(),z(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,draggingText:!1,highlight:new Qi,keySeq:null}
var f=this
for(var h in n&&i<11&&setTimeout(function(){f.display.input.reset(!0)},20),function(e){var t=e.display
Ei(t.scroller,"mousedown",Bt(e,er)),Ei(t.scroller,"dblclick",n&&i<11?Bt(e,function(t){if(!Vi(e,t)){var r=Jt(e,t)
if(r&&!rr(e,t)&&!Qt(e.display,t)){Oi(t)
var n=e.findWordAt(r)
Pe(e.doc,n.anchor,n.head)}}}):function(t){Vi(e,t)||Oi(t)})
y||Ei(t.scroller,"contextmenu",function(t){xr(e,t)})
var r,o={end:0}
function l(){t.activeTouch&&(r=setTimeout(function(){t.activeTouch=null},1e3),(o=t.activeTouch).end=+new Date)}function s(e,t){if(null==t.left)return!0
var r=t.left-e.left,n=t.top-e.top
return r*r+n*n>400}function c(t){Vi(e,t)||Ii(t)}Ei(t.scroller,"touchstart",function(e){if(!function(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}(e)){clearTimeout(r)
var n=+new Date
t.activeTouch={start:n,moved:!1,prev:n-o.end<=300?o:null},1==e.touches.length&&(t.activeTouch.left=e.touches[0].pageX,t.activeTouch.top=e.touches[0].pageY)}}),Ei(t.scroller,"touchmove",function(){t.activeTouch&&(t.activeTouch.moved=!0)}),Ei(t.scroller,"touchend",function(r){var n=t.activeTouch
if(n&&!Qt(t,r)&&null!=n.left&&!n.moved&&new Date-n.start<300){var i,o=e.coordsChar(t.activeTouch,"page")
i=!n.prev||s(n,n.prev)?new Ne(o,o):!n.prev.prev||s(n,n.prev.prev)?e.findWordAt(o):new Ne(ue(o.line,0),De(e.doc,ue(o.line+1,0))),e.setSelection(i.anchor,i.head),e.focus(),Oi(r)}l()}),Ei(t.scroller,"touchcancel",l),Ei(t.scroller,"scroll",function(){t.scroller.clientHeight&&(or(e,t.scroller.scrollTop),lr(e,t.scroller.scrollLeft,!0),Ri(e,"scroll",e))}),Ei(t.scroller,"mousewheel",function(t){cr(e,t)}),Ei(t.scroller,"DOMMouseScroll",function(t){cr(e,t)}),Ei(t.wrapper,"scroll",function(){t.wrapper.scrollTop=t.wrapper.scrollLeft=0}),e.options.dragDrop&&(Ei(t.scroller,"dragstart",function(t){(function(e,t){if(n&&(!e.state.draggingText||+new Date-nr<100))return void Ii(t)
if(Vi(e,t)||Qt(e.display,t))return
if(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.setDragImage&&!u){var r=bo("img",null,null,"position: fixed; left: 0; top: 0;")
r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",a&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),a&&r.parentNode.removeChild(r)}})(e,t)}),Ei(t.scroller,"dragenter",c),Ei(t.scroller,"dragover",c),Ei(t.scroller,"drop",Bt(e,ir)))
var f=t.input.getField()
Ei(f,"keyup",function(t){mr.call(e,t)}),Ei(f,"keydown",Bt(e,vr)),Ei(f,"keypress",Bt(e,yr)),Ei(f,"focus",co(br,e)),Ei(f,"blur",co(wr,e))}(this),function(){if(Ao)return
Ei(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,No(Zt)},100))}),Ei(window,"blur",function(){No(wr)}),Ao=!0
var e}(),Ht(this),this.curOp.forceUpdate=!0,fi(this,l),r.autofocus&&!d||f.hasFocus()?setTimeout(co(br,this),20):wr(this),Vr)Vr.hasOwnProperty(h)&&Vr[h](this,r[h],jr)
G(this),r.finishInit&&r.finishInit(this)
for(var p=0;p<$r.length;++p)$r[p](this)
It(this),o&&r.lineWrapping&&"optimizelegibility"==getComputedStyle(c.lineDiv).textRendering&&(c.lineDiv.style.textRendering="auto")}function C(e){e.doc.mode=x.getMode(e.options,e.doc.modeOption),S(e)}function S(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.frontier=e.doc.first,Ze(e,100),e.state.modeGen++,e.curOp&&jt(e)}function L(e){var t=Mt(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/Nt(e.display)-3)
return function(i){if(Dn(e.doc,i))return 0
var o=0
if(i.widgets)for(var l=0;l<i.widgets.length;l++)i.widgets[l].height&&(o+=i.widgets[l].height)
return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function k(e){var t=e.doc,r=L(e)
t.iter(function(e){var t=r(e)
t!=e.height&&gi(e,t)})}function T(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),vt(e)}function M(e){N(e),jt(e),setTimeout(function(){B(e)},20)}function N(e){var t=e.display.gutters,r=e.options.gutters
wo(t)
for(var n=0;n<r.length;++n){var i=r[n],o=t.appendChild(bo("div",null,"CodeMirror-gutter "+i))
"CodeMirror-linenumbers"==i&&(e.display.lineGutter=o,o.style.width=(e.display.lineNumWidth||1)+"px")}t.style.display=n?"":"none",A(e)}function A(e){var t=e.display.gutters.offsetWidth
e.display.sizer.style.marginLeft=t+"px"}function W(e){if(0==e.height)return 0
for(var t,r=e.text.length,n=e;t=Tn(n);){n=(i=t.find(0,!0)).from.line,r+=i.from.ch-i.to.ch}for(n=e;t=Mn(n);){var i=t.find(0,!0)
r-=n.text.length-i.from.ch,r+=(n=i.to.line).text.length-i.to.ch}return r}function O(e){var t=e.display,r=e.doc
t.maxLine=hi(r,r.first),t.maxLineLength=W(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=W(e)
r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e)})}function D(e){var t=oo(e.gutters,"CodeMirror-linenumbers");-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function H(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+tt(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+nt(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}function I(e,t,r){this.cm=r
var o=this.vert=bo("div",[bo("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),l=this.horiz=bo("div",[bo("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
e(o),e(l),Ei(o,"scroll",function(){o.clientHeight&&t(o.scrollTop,"vertical")}),Ei(l,"scroll",function(){l.clientWidth&&t(l.scrollLeft,"horizontal")}),this.checkedOverlay=!1,n&&i<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}function P(){}function z(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&ko(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new x.scrollbarModel[e.options.scrollbarStyle](function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),Ei(t,"mousedown",function(){e.state.focused&&setTimeout(function(){e.display.input.focus()},0)}),t.setAttribute("cm-not-content","true")},function(t,r){"horizontal"==r?lr(e,t):or(e,t)},e),e.display.scrollbars.addClass&&To(e.display.wrapper,e.display.scrollbars.addClass)}function E(e,t){t||(t=H(e))
var r=e.display.barWidth,n=e.display.barHeight
F(e,t)
for(var i=0;i<4&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&$(e),F(e,H(e)),r=e.display.barWidth,n=e.display.barHeight}function F(e,t){var r=e.display,n=r.scrollbars.update(t)
r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}function R(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop
n=Math.floor(n-et(e))
var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=mi(t,n),l=mi(t,i)
if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line
s<o?(o=s,l=mi(t,yi(hi(t,s))+e.wrapper.clientHeight)):Math.min(a,t.lastLine())>=l&&(o=mi(t,yi(hi(t,a))-e.wrapper.clientHeight),l=a)}return{from:o,to:Math.max(l,o+1)}}function B(e){var t=e.display,r=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=V(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&r[l].gutter&&(r[l].gutter.style.left=o)
var s=r[l].alignable
if(s)for(var a=0;a<s.length;a++)s[a].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function G(e){if(!e.options.lineNumbers)return!1
var t=e.doc,r=U(e.options,t.first+t.size-1),n=e.display
if(r.length!=n.lineNumChars){var i=n.measure.appendChild(bo("div",[bo("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,l=i.offsetWidth-o
return n.lineGutter.style.width="",n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-l),n.lineNumWidth=n.lineNumInnerWidth+l,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+"px",A(e),!0}return!1}function U(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function V(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function K(e,t,r){var n=e.display
this.viewport=t,this.visible=R(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=it(e),this.force=r,this.dims=Z(e),this.events=[]}function j(e,t){var r=e.display,n=e.doc
if(t.editorIsHidden)return _t(e),!1
if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==qt(e))return!1
G(e)&&(_t(e),t.dims=Z(e))
var i=n.first+n.size,l=Math.max(t.visible.from-e.options.viewportMargin,n.first),s=Math.min(i,t.visible.to+e.options.viewportMargin)
r.viewFrom<l&&l-r.viewFrom<20&&(l=Math.max(n.first,r.viewFrom)),r.viewTo>s&&r.viewTo-s<20&&(s=Math.min(i,r.viewTo)),w&&(l=Wn(e.doc,l),s=On(e.doc,s))
var a=l!=r.viewFrom||s!=r.viewTo||r.lastWrapHeight!=t.wrapperHeight||r.lastWrapWidth!=t.wrapperWidth;(function(e,t,r){var n=e.display
0==n.view.length||t>=n.viewTo||r<=n.viewFrom?(n.view=Kt(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=Kt(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(Yt(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(Kt(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,Yt(e,r))))
n.viewTo=r})(e,l,s),r.viewOffset=yi(hi(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px"
var u=qt(e)
if(!a&&0==u&&!t.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1
var c=So()
return u>4&&(r.lineDiv.style.display="none"),function(e,t,r){var n=e.display,i=e.options.lineNumbers,l=n.lineDiv,s=l.firstChild
function a(t){var r=t.nextSibling
return o&&p&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var u=n.view,c=n.viewFrom,f=0;f<u.length;f++){var h=u[f]
if(h.hidden);else if(h.node&&h.node.parentNode==l){for(;s!=h.node;)s=a(s)
var d=i&&null!=t&&t<=c&&h.lineNumber
h.changes&&(oo(h.changes,"gutter")>-1&&(d=!1),Q(e,h,c,r)),d&&(wo(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(U(e.options,c)))),s=h.node.nextSibling}else{var g=oe(e,h,c,r)
l.insertBefore(g,s)}c+=h.size}for(;s;)s=a(s)}(e,r.updateLineNumbers,t.dims),u>4&&(r.lineDiv.style.display=""),r.renderedView=r.view,c&&So()!=c&&c.offsetHeight&&c.focus(),wo(r.cursorDiv),wo(r.selectionDiv),r.gutters.style.height=0,a&&(r.lastWrapHeight=t.wrapperHeight,r.lastWrapWidth=t.wrapperWidth,Ze(e,400)),r.updateLineNumbers=null,!0}function X(e,t){t.force
for(var r=t.viewport,n=!0;;n=!1){if(n&&e.options.lineWrapping&&t.oldDisplayWidth!=it(e))!0
else if(!1,r&&null!=r.top&&(r={top:Math.min(e.doc.height+tt(e.display)-ot(e),r.top)}),t.visible=R(e.display,e.doc,r),t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)break
if(!j(e,t))break
$(e)
var i=H(e)
Xe(e),Y(e,i),E(e,i)}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function _(e,t){var r=new K(e,t)
if(j(e,r)){$(e),X(e,r)
var n=H(e)
Xe(e),Y(e,n),E(e,n),r.finish()}}function Y(e,t){e.display.sizer.style.minHeight=t.docHeight+"px"
var r=t.docHeight+e.display.barHeight
e.display.heightForcer.style.top=r+"px",e.display.gutters.style.height=Math.max(r+nt(e),t.clientHeight)+"px"}function $(e){for(var t=e.display,r=t.lineDiv.offsetTop,o=0;o<t.view.length;o++){var l,s=t.view[o]
if(!s.hidden){if(n&&i<8){var a=s.node.offsetTop+s.node.offsetHeight
l=a-r,r=a}else{var u=s.node.getBoundingClientRect()
l=u.bottom-u.top}var c=s.line.height-l
if(l<2&&(l=Mt(t)),(c>.001||c<-.001)&&(gi(s.line,l),q(s.line),s.rest))for(var f=0;f<s.rest.length;f++)q(s.rest[f])}}}function q(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.offsetHeight}function Z(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l)r[e.options.gutters[l]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[l]]=o.clientWidth
return{fixedPos:V(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function Q(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?te(e,t):"gutter"==o?ne(e,t,r,n):"class"==o?re(t):"widget"==o&&ie(e,t,n)}t.changes=null}function J(e){return e.node==e.text&&(e.node=bo("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),n&&i<8&&(e.node.style.zIndex=2)),e.node}function ee(e,t){var r=e.display.externalMeasured
return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):qn(e,t)}function te(e,t){var r=t.text.className,n=ee(e,t)
t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,re(t)):r&&(t.text.className=r)}function re(e){(function(e){var t=e.bgClass?e.bgClass+" "+(e.line.bgClass||""):e.line.bgClass
if(t&&(t+=" CodeMirror-linebackground"),e.background)t?e.background.className=t:(e.background.parentNode.removeChild(e.background),e.background=null)
else if(t){var r=J(e)
e.background=r.insertBefore(bo("div",null,t),r.firstChild)}})(e),e.line.wrapClass?J(e).className=e.line.wrapClass:e.node!=e.text&&(e.node.className="")
var t=e.textClass?e.textClass+" "+(e.line.textClass||""):e.line.textClass
e.text.className=t||""}function ne(e,t,r,n){t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null)
var i=t.line.gutterMarkers
if(e.options.lineNumbers||i){var o=J(t),l=t.gutter=bo("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px; width: "+n.gutterTotalWidth+"px")
if(e.display.input.setUneditable(l),o.insertBefore(l,t.text),t.line.gutterClass&&(l.className+=" "+t.line.gutterClass),!e.options.lineNumbers||i&&i["CodeMirror-linenumbers"]||(t.lineNumber=l.appendChild(bo("div",U(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+n.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),i)for(var s=0;s<e.options.gutters.length;++s){var a=e.options.gutters[s],u=i.hasOwnProperty(a)&&i[a]
u&&l.appendChild(bo("div",[u],"CodeMirror-gutter-elt","left: "+n.gutterLeft[a]+"px; width: "+n.gutterWidth[a]+"px"))}}}function ie(e,t,r){t.alignable&&(t.alignable=null)
for(var n=t.node.firstChild;n;n=i){var i=n.nextSibling
"CodeMirror-linewidget"==n.className&&t.node.removeChild(n)}le(e,t,r)}function oe(e,t,r,n){var i=ee(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),re(t),ne(e,t,r,n),le(e,t,n),t.node}function le(e,t,r){if(se(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)se(e,t.rest[n],t,r,!1)}function se(e,t,r,n,i){if(t.widgets)for(var o=J(r),l=0,s=t.widgets;l<s.length;++l){var a=s[l],u=bo("div",[a.node],"CodeMirror-linewidget")
a.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),ae(a,u,r,n),e.display.input.setUneditable(u),i&&a.above?o.insertBefore(u,r.gutter||r.text):o.appendChild(u),Gi(a,"redraw")}}function ae(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t)
var i=n.wrapperWidth
t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}I.prototype=uo({update:function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth
if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0"
var i=e.viewHeight-(t?n:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(r?n:0)
this.horiz.firstChild.style.width=e.scrollWidth-e.clientWidth+o+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedOverlay&&e.clientHeight>0&&(0==n&&this.overlayHack(),this.checkedOverlay=!0),{right:r?n:0,bottom:t?n:0}},setScrollLeft:function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e)},setScrollTop:function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e)},overlayHack:function(){var e=p&&!c?"12px":"18px"
this.horiz.style.minHeight=this.vert.style.minWidth=e
var t=this,r=function(e){Pi(e)!=t.vert&&Pi(e)!=t.horiz&&Bt(t.cm,er)(e)}
Ei(this.vert,"mousedown",r),Ei(this.horiz,"mousedown",r)},clear:function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}},I.prototype),P.prototype=uo({update:function(){return{bottom:0,right:0}},setScrollLeft:function(){},setScrollTop:function(){},clear:function(){}},P.prototype),x.scrollbarModel={native:I,null:P},K.prototype.signal=function(e,t){ji(e,t)&&this.events.push(arguments)},K.prototype.finish=function(){for(var e=0;e<this.events.length;e++)Ri.apply(null,this.events[e])}
var ue=x.Pos=function(e,t){if(!(this instanceof ue))return new ue(e,t)
this.line=e,this.ch=t},ce=x.cmpPos=function(e,t){return e.line-t.line||e.ch-t.ch}
function fe(e){return ue(e.line,e.ch)}function he(e,t){return ce(e,t)<0?t:e}function de(e,t){return ce(e,t)<0?e:t}function pe(e){e.state.focused||(e.display.input.focus(),br(e))}function ge(e){return e.options.readOnly||e.doc.cantEdit}var ve=null
function me(e,t,r,n){var i=e.doc
e.display.shift=!1,n||(n=i.sel)
var o=zo(t),l=null
e.state.pasteIncoming&&n.ranges.length>1&&(ve&&ve.join("\n")==t?l=n.ranges.length%ve.length==0&&lo(ve,zo):o.length==n.ranges.length&&(l=lo(o,function(e){return[e]})))
for(var s=n.ranges.length-1;s>=0;s--){var a=n.ranges[s],u=a.from(),c=a.to()
a.empty()&&(r&&r>0?u=ue(u.line,u.ch-r):e.state.overwrite&&!e.state.pasteIncoming&&(c=ue(c.line,Math.min(hi(i,c.line).text.length,c.ch+no(o).length))))
var f=e.curOp.updateInput,h={from:u,to:c,text:l?l[s%l.length]:o,origin:e.state.pasteIncoming?"paste":e.state.cutIncoming?"cut":"+input"}
if(Mr(e.doc,h),Gi(e,"inputRead",e,h),t&&!e.state.pasteIncoming&&e.options.electricChars&&e.options.smartIndent&&a.head.ch<100&&(!s||n.ranges[s-1].head.line!=a.head.line)){var d=e.getModeAt(a.head),p=Cr(h)
if(d.electricChars){for(var g=0;g<d.electricChars.length;g++)if(t.indexOf(d.electricChars.charAt(g))>-1){Er(e,p.line,"smart")
break}}else d.electricInput&&d.electricInput.test(hi(i,p.line).text.slice(0,p.ch))&&Er(e,p.line,"smart")}}Pr(e),e.curOp.updateInput=f,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1}function ye(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:ue(i,0),head:ue(i+1,0)}
r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function be(e){e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck","false")}function we(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new Qi,this.inaccurateSelection=!1,this.hasSelection=!1}function xe(){var e=bo("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none"),t=bo("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return o?e.style.width="1000px":e.setAttribute("wrap","off"),h&&(e.style.border="1px solid black"),be(e),t}function Ce(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new Qi}function Se(e,t){var r=at(e,t.line)
if(!r||r.hidden)return null
var n=hi(e.doc,t.line),i=lt(r,n,t.line),o=bi(n)
o&&$o(o,t.ch)
var l=dt(i.map,t.ch,"left")
return l.offset="right"==l.collapse?l.end:l.start,l}function Le(e,t){return t&&(e.bad=!0),e}function ke(e,t,r){var n
if(t==e.display.lineDiv){if(!(n=e.display.lineDiv.childNodes[r]))return Le(e.clipPos(ue(e.display.viewTo-1)),!0)
t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null
if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==n)return Te(o,t,r)}}function Te(e,t,r){var n=e.text.firstChild,i=!1
if(!t||!Co(n,t))return Le(ue(vi(e.line),0),!0)
if(t==n&&(i=!0,t=n.childNodes[r],r=0,!t)){var o=e.rest?no(e.rest):e.line
return Le(ue(vi(o),o.text.length),i)}var l=3==t.nodeType?t:null,s=t
for(l||1!=t.childNodes.length||3!=t.firstChild.nodeType||(l=t.firstChild,r&&(r=l.nodeValue.length));s.parentNode!=n;)s=s.parentNode
var a=e.measure,u=a.maps
function c(t,r,n){for(var i=-1;i<(u?u.length:0);i++)for(var o=i<0?a.map:u[i],l=0;l<o.length;l+=3){var s=o[l+2]
if(s==t||s==r){var c=vi(i<0?e.line:e.rest[i]),f=o[l]+n
return(n<0||s!=t)&&(f=o[l+(n?1:0)]),ue(c,f)}}}var f=c(l,s,r)
if(f)return Le(f,i)
for(var h=s.nextSibling,d=l?l.nodeValue.length-r:0;h;h=h.nextSibling){if(f=c(h,h.firstChild,0))return Le(ue(f.line,f.ch-d),i)
d+=h.textContent.length}var p=s.previousSibling
for(d=r;p;p=p.previousSibling){if(f=c(p,p.firstChild,-1))return Le(ue(f.line,f.ch+d),i)
d+=h.textContent.length}}function Me(e,t){this.ranges=e,this.primIndex=t}function Ne(e,t){this.anchor=e,this.head=t}function Ae(e,t){var r=e[t]
e.sort(function(e,t){return ce(e.from(),t.from())}),t=oo(e,r)
for(var n=1;n<e.length;n++){var i=e[n],o=e[n-1]
if(ce(o.to(),i.from())>=0){var l=de(o.from(),i.from()),s=he(o.to(),i.to()),a=o.empty()?i.from()==i.head:o.from()==o.head
n<=t&&--t,e.splice(--n,2,new Ne(a?s:l,a?l:s))}}return new Me(e,t)}function We(e,t){return new Me([new Ne(e,t||e)],0)}function Oe(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function De(e,t){if(t.line<e.first)return ue(e.first,0)
var r=e.first+e.size-1
return t.line>r?ue(r,hi(e,r).text.length):function(e,t){var r=e.ch
return null==r||r>t?ue(e.line,t):r<0?ue(e.line,0):e}(t,hi(e,t.line).text.length)}function He(e,t){return t>=e.first&&t<e.first+e.size}function Ie(e,t,r,n){if(e.cm&&e.cm.display.shift||e.extend){var i=t.anchor
if(n){var o=ce(r,i)<0
o!=ce(n,i)<0?(i=r,r=n):o!=ce(r,n)<0&&(r=n)}return new Ne(i,r)}return new Ne(n||r,r)}function Pe(e,t,r,n){Be(e,new Me([Ie(e,e.sel.primary(),t,r)],0),n)}function ze(e,t,r){for(var n=[],i=0;i<e.sel.ranges.length;i++)n[i]=Ie(e,e.sel.ranges[i],t[i],null)
Be(e,Ae(n,e.sel.primIndex),r)}function Ee(e,t,r,n){var i=e.sel.ranges.slice(0)
i[t]=r,Be(e,Ae(i,e.sel.primIndex),n)}function Fe(e,t,r,n){Be(e,We(t,r),n)}function Re(e,t,r){var n=e.history.done,i=no(n)
i&&i.ranges?(n[n.length-1]=t,Ge(e,t,r)):Be(e,t,r)}function Be(e,t,r){Ge(e,t,r),function(e,t,r,n){var i=e.history,o=n&&n.origin
r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||function(e,t,r,n){var i=t.charAt(0)
return"*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}(e,o,no(i.done),t))?i.done[i.done.length-1]=t:Li(t,i.done)
i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&!1!==n.clearRedo&&Ci(i.undone)}(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function Ge(e,t,r){(ji(e,"beforeSelectionChange")||e.cm&&ji(e.cm,"beforeSelectionChange"))&&(t=function(e,t){var r={ranges:t.ranges,update:function(t){this.ranges=[]
for(var r=0;r<t.length;r++)this.ranges[r]=new Ne(De(e,t[r].anchor),De(e,t[r].head))}}
return Ri(e,"beforeSelectionChange",e,r),e.cm&&Ri(e.cm,"beforeSelectionChange",e.cm,r),r.ranges!=t.ranges?Ae(r.ranges,r.ranges.length-1):t}(e,t)),Ue(e,Ke(e,t,r&&r.bias||(ce(t.primary().head,e.sel.primary().head)<0?-1:1),!0)),r&&!1===r.scroll||!e.cm||Pr(e.cm)}function Ue(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,Ki(e.cm)),Gi(e,"cursorActivity",e))}function Ve(e){Ue(e,Ke(e,e.sel,null,!1))}function Ke(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=je(e,l.anchor,r,n),a=je(e,l.head,r,n);(i||s!=l.anchor||a!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new Ne(s,a))}return i?Ae(i,t.primIndex):t}function je(e,t,r,n){var i=!1,o=t,l=r||1
e.cantEdit=!1
e:for(;;){var s=hi(e,o.line)
if(s.markedSpans)for(var a=0;a<s.markedSpans.length;++a){var u=s.markedSpans[a],c=u.marker
if((null==u.from||(c.inclusiveLeft?u.from<=o.ch:u.from<o.ch))&&(null==u.to||(c.inclusiveRight?u.to>=o.ch:u.to>o.ch))){if(n&&(Ri(c,"beforeCursorEnter"),c.explicitlyCleared)){if(s.markedSpans){--a
continue}break}if(!c.atomic)continue
var f=c.find(l<0?-1:1)
if(0==ce(f,o)&&(f.ch+=l,f.ch<0?f=f.line>e.first?De(e,ue(f.line-1)):null:f.ch>s.text.length&&(f=f.line<e.first+e.size-1?ue(f.line+1,0):null),!f)){if(i)return n?(e.cantEdit=!0,ue(e.first,0)):je(e,t,r,!0)
i=!0,f=t,l=-l}o=f
continue e}}return o}}function Xe(e){e.display.input.showSelection(e.display.input.prepareSelection())}function _e(e,t){for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++)if(!1!==t||l!=r.sel.primIndex){var s=r.sel.ranges[l],a=s.empty();(a||e.options.showCursorWhenSelecting)&&Ye(e,s,i),a||$e(e,s,o)}return n}function Ye(e,t,r){var n=Ct(e,t.head,"div",null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(bo("div"," ","CodeMirror-cursor"))
if(i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+"px",n.other){var o=r.appendChild(bo("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
o.style.display="",o.style.left=n.other.left+"px",o.style.top=n.other.top+"px",o.style.height=.85*(n.other.bottom-n.other.top)+"px"}}function $e(e,t,r){var n=e.display,i=e.doc,o=document.createDocumentFragment(),l=rt(e.display),s=l.left,a=Math.max(n.sizerWidth,it(e)-n.sizer.offsetLeft)-l.right
function u(e,t,r,n){t<0&&(t=0),t=Math.round(t),n=Math.round(n),o.appendChild(bo("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px; top: "+t+"px; width: "+(null==r?a-e:r)+"px; height: "+(n-t)+"px"))}function c(t,r,n){var o,l,c=hi(i,t),f=c.text.length
function h(r,n){return xt(e,ue(t,r),"div",c,n)}return function(e,t,r,n){if(!e)return n(t,r,"ltr")
for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?"rtl":"ltr"),i=!0)}i||n(t,r,"ltr")}(bi(c),r||0,null==n?f:n,function(e,t,i){var c,d,p,g=h(e,"left")
if(e==t)c=g,d=p=g.left
else{if(c=h(t-1,"right"),"rtl"==i){var v=g
g=c,c=v}d=g.left,p=c.right}null==r&&0==e&&(d=s),c.top-g.top>3&&(u(d,g.top,null,g.bottom),d=s,g.bottom<c.top&&u(d,g.bottom,null,c.top)),null==n&&t==f&&(p=a),(!o||g.top<o.top||g.top==o.top&&g.left<o.left)&&(o=g),(!l||c.bottom>l.bottom||c.bottom==l.bottom&&c.right>l.right)&&(l=c),d<s+1&&(d=s),u(d,c.top,p-d,c.bottom)}),{start:o,end:l}}var f=t.from(),h=t.to()
if(f.line==h.line)c(f.line,f.ch,h.ch)
else{var d=hi(i,f.line),p=hi(i,h.line),g=An(d)==An(p),v=c(f.line,f.ch,g?d.text.length+1:null).end,m=c(h.line,g?0:null,h.ch).start
g&&(v.top<m.top-2?(u(v.right,v.top,null,v.bottom),u(s,m.top,m.left,m.bottom)):u(v.right,v.top,m.left-v.right,v.bottom)),v.bottom<m.top&&u(s,v.bottom,null,m.top)}r.appendChild(o)}function qe(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var r=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Ze(e,t){e.doc.mode.startState&&e.doc.frontier<e.display.viewTo&&e.state.highlight.set(t,co(Qe,e))}function Qe(e){var t=e.doc
if(t.frontier<t.first&&(t.frontier=t.first),!(t.frontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=Zr(t.mode,Je(e,t.frontier)),i=[]
t.iter(t.frontier,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(t.frontier>=e.display.viewFrom){var l=o.styles,s=Kn(e,o,n,!0)
o.styles=s.styles
var a=o.styleClasses,u=s.classes
u?o.styleClasses=u:a&&(o.styleClasses=null)
for(var c=!l||l.length!=o.styles.length||a!=u&&(!a||!u||a.bgClass!=u.bgClass||a.textClass!=u.textClass),f=0;!c&&f<l.length;++f)c=l[f]!=o.styles[f]
c&&i.push(t.frontier),o.stateAfter=Zr(t.mode,n)}else Xn(e,o.text,n),o.stateAfter=t.frontier%5==0?Zr(t.mode,n):null
if(++t.frontier,+new Date>r)return Ze(e,e.options.workDelay),!0}),i.length&&Rt(e,function(){for(var t=0;t<i.length;t++)Xt(e,i[t],"text")})}}function Je(e,t,r){var n=e.doc,i=e.display
if(!n.mode.startState)return!0
var o=function(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>l;--s){if(s<=o.first)return o.first
var a=hi(o,s-1)
if(a.stateAfter&&(!r||s<=o.frontier))return s
var u=Ji(a.text,null,e.options.tabSize);(null==i||n>u)&&(i=s-1,n=u)}return i}(e,t,r),l=o>n.first&&hi(n,o-1).stateAfter
return l=l?Zr(n.mode,l):Qr(n.mode),n.iter(o,t,function(r){Xn(e,r.text,l)
var s=o==t-1||o%5==0||o>=i.viewFrom&&o<i.viewTo
r.stateAfter=s?Zr(n.mode,l):null,++o}),r&&(n.frontier=o),l}function et(e){return e.lineSpace.offsetTop}function tt(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function rt(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=xo(e.measure,bo("pre","x")),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)}
return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n}function nt(e){return _i-e.display.nativeBarWidth}function it(e){return e.display.scroller.clientWidth-nt(e)-e.display.barWidth}function ot(e){return e.display.scroller.clientHeight-nt(e)-e.display.barHeight}function lt(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]}
for(n=0;n<e.rest.length;n++)if(vi(e.rest[n])>r)return{map:e.measure.maps[n],cache:e.measure.caches[n],before:!0}}function st(e,t,r,n){return ct(e,ut(e,t),r,n)}function at(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Yt(e,t)]
var r=e.display.externalMeasured
return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function ut(e,t){var r=vi(t),n=at(e,r)
n&&!n.text?n=null:n&&n.changes&&Q(e,n,r,Z(e)),n||(n=function(e,t){var r=vi(t=An(t)),n=e.display.externalMeasured=new Vt(e.doc,t,r)
n.lineN=r
var i=n.built=qn(e,n)
return n.text=i.pre,xo(e.display.lineMeasure,i.pre),n}(e,t))
var i=lt(n,t,r)
return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function ct(e,t,r,o,l){t.before&&(r=-1)
var s,a=r+(o||"")
return t.cache.hasOwnProperty(a)?s=t.cache[a]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(function(e,t,r){var n=e.options.lineWrapping,i=n&&it(e)
if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[]
if(n){t.measure.width=i
for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1]
Math.abs(a.bottom-u.bottom)>2&&o.push((a.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}(e,t.view,t.rect),t.hasHeights=!0),(s=function(e,t,r,o){var l,s=dt(t.map,r,o),a=s.node,u=s.start,c=s.end,f=s.collapse
if(3==a.nodeType){for(var h=0;h<4;h++){for(;u&&yo(t.line.text.charAt(s.coverStart+u));)--u
for(;s.coverStart+c<s.coverEnd&&yo(t.line.text.charAt(s.coverStart+c));)++c
if(n&&i<9&&0==u&&c==s.coverEnd-s.coverStart)l=a.parentNode.getBoundingClientRect()
else if(n&&e.options.lineWrapping){var d=vo(a,u,c).getClientRects()
l=d.length?d["right"==o?d.length-1:0]:ht}else l=vo(a,u,c).getBoundingClientRect()||ht
if(l.left||l.right||0==u)break
c=u,u-=1,f="right"}n&&i<11&&(l=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=Ro)return Ro
var t=xo(e,bo("span","x")),r=t.getBoundingClientRect(),n=vo(t,0,1).getBoundingClientRect()
return Ro=Math.abs(r.left-n.left)>1}(e))return t
var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}(e.display.measure,l))}else{u>0&&(f=o="right"),l=e.options.lineWrapping&&(d=a.getClientRects()).length>1?d["right"==o?d.length-1:0]:a.getBoundingClientRect()}if(n&&i<9&&!u&&(!l||!l.left&&!l.right)){var p=a.parentNode.getClientRects()[0]
l=p?{left:p.left,right:p.left+Nt(e.display),top:p.top,bottom:p.bottom}:ht}for(var g=l.top-t.rect.top,v=l.bottom-t.rect.top,m=(g+v)/2,y=t.view.measure.heights,h=0;h<y.length-1&&!(m<y[h]);h++);var b=h?y[h-1]:0,w=y[h],x={left:("right"==f?l.right:l.left)-t.rect.left,right:("left"==f?l.left:l.right)-t.rect.left,top:b,bottom:w}
l.left||l.right||(x.bogus=!0)
e.options.singleCursorHeightPerLine||(x.rtop=g,x.rbottom=v)
return x}(e,t,r,o)).bogus||(t.cache[a]=s)),{left:s.left,right:s.right,top:l?s.rtop:s.top,bottom:l?s.rbottom:s.bottom}}we.prototype=uo({init:function(e){var t=this,r=this.cm,l=this.wrapper=xe(),s=this.textarea=l.firstChild
function a(e){if(r.somethingSelected())ve=r.getSelections(),t.inaccurateSelection&&(t.prevInput="",t.inaccurateSelection=!1,s.value=ve.join("\n"),io(s))
else{var n=ye(r)
ve=n.text,"cut"==e.type?r.setSelections(n.ranges,null,$i):(t.prevInput="",s.value=n.text.join("\n"),io(s))}"cut"==e.type&&(r.state.cutIncoming=!0)}e.wrapper.insertBefore(l,e.wrapper.firstChild),h&&(s.style.width="0px"),Ei(s,"input",function(){n&&i>=9&&t.hasSelection&&(t.hasSelection=null),t.poll()}),Ei(s,"paste",function(){if(o&&!r.state.fakedLastChar&&!(new Date-r.state.lastMiddleDown<200)){var e=s.selectionStart,n=s.selectionEnd
s.value+="$",s.selectionEnd=n,s.selectionStart=e,r.state.fakedLastChar=!0}r.state.pasteIncoming=!0,t.fastPoll()}),Ei(s,"cut",a),Ei(s,"copy",a),Ei(e.scroller,"paste",function(n){Qt(e,n)||(r.state.pasteIncoming=!0,t.focus())}),Ei(e.lineSpace,"selectstart",function(t){Qt(e,t)||Oi(t)})},prepareSelection:function(){var e=this.cm,t=e.display,r=e.doc,n=_e(e)
if(e.options.moveInputWithCursor){var i=Ct(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect()
n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left))}return n},showSelection:function(e){var t=this.cm.display
xo(t.cursorDiv,e.cursors),xo(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},reset:function(e){if(!this.contextMenuPending){var t,r,o=this.cm,l=o.doc
if(o.somethingSelected()){this.prevInput=""
var s=l.sel.primary(),a=(t=Fo&&(s.to().line-s.from().line>100||(r=o.getSelection()).length>1e3))?"-":r||o.getSelection()
this.textarea.value=a,o.state.focused&&io(this.textarea),n&&i>=9&&(this.hasSelection=a)}else e||(this.prevInput=this.textarea.value="",n&&i>=9&&(this.hasSelection=null))
this.inaccurateSelection=t}},getField:function(){return this.textarea},supportsTouch:function(){return!1},focus:function(){if("nocursor"!=this.cm.options.readOnly&&(!d||So()!=this.textarea))try{this.textarea.focus()}catch(e){}},blur:function(){this.textarea.blur()},resetPosition:function(){this.wrapper.style.top=this.wrapper.style.left=0},receivedFocus:function(){this.slowPoll()},slowPoll:function(){var e=this
e.pollingFast||e.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},fastPoll:function(){var e=!1,t=this
t.pollingFast=!0,t.polling.set(20,function r(){t.poll()||e?(t.pollingFast=!1,t.slowPoll()):(e=!0,t.polling.set(60,r))})},poll:function(){var e=this.cm,t=this.textarea,r=this.prevInput
if(!e.state.focused||Eo(t)&&!r||ge(e)||e.options.disableInput||e.state.keySeq)return!1
e.state.pasteIncoming&&e.state.fakedLastChar&&(t.value=t.value.substring(0,t.value.length-1),e.state.fakedLastChar=!1)
var o=t.value
if(o==r&&!e.somethingSelected())return!1
if(n&&i>=9&&this.hasSelection===o||p&&/[\uf700-\uf7ff]/.test(o))return e.display.input.reset(),!1
8203!=o.charCodeAt(0)||e.doc.sel!=e.display.selForContextMenu||r||(r="​")
for(var l=0,s=Math.min(r.length,o.length);l<s&&r.charCodeAt(l)==o.charCodeAt(l);)++l
var a=this
return Rt(e,function(){me(e,o.slice(l),r.length-l),o.length>1e3||o.indexOf("\n")>-1?t.value=a.prevInput="":a.prevInput=o}),!0},ensurePolled:function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},onKeyPress:function(){n&&i>=9&&(this.hasSelection=null),this.fastPoll()},onContextMenu:function(e){var t=this,r=t.cm,l=r.display,s=t.textarea,u=Jt(r,e),c=l.scroller.scrollTop
if(u&&!a){r.options.resetSelectionOnContextMenu&&-1==r.doc.sel.contains(u)&&Bt(r,Be)(r.doc,We(u),$i)
var f=s.style.cssText
if(t.wrapper.style.position="absolute",s.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(e.clientY-5)+"px; left: "+(e.clientX-5)+"px; z-index: 1000; background: "+(n?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",o)var h=window.scrollY
if(l.input.focus(),o&&window.scrollTo(null,h),l.input.reset(),r.somethingSelected()||(s.value=t.prevInput=" "),t.contextMenuPending=!0,l.selForContextMenu=r.doc.sel,clearTimeout(l.detectingSelectAll),n&&i>=9&&p(),y){Ii(e)
var d=function(){Fi(window,"mouseup",d),setTimeout(g,20)}
Ei(window,"mouseup",d)}else setTimeout(g,50)}function p(){if(null!=s.selectionStart){var e=r.somethingSelected(),n=s.value="​"+(e?s.value:"")
t.prevInput=e?"":"​",s.selectionStart=1,s.selectionEnd=n.length,l.selForContextMenu=r.doc.sel}}function g(){if(t.contextMenuPending=!1,t.wrapper.style.position="relative",s.style.cssText=f,n&&i<9&&l.scrollbars.setScrollTop(l.scroller.scrollTop=c),null!=s.selectionStart){(!n||n&&i<9)&&p()
var e=0,o=function(){l.selForContextMenu==r.doc.sel&&0==s.selectionStart?Bt(r,Jr.selectAll)(r):e++<10?l.detectingSelectAll=setTimeout(o,500):l.input.reset()}
l.detectingSelectAll=setTimeout(o,200)}}},setUneditable:so,needsContentAttribute:!1},we.prototype),Ce.prototype=uo({init:function(e){var t=this,r=t.cm,n=t.div=e.lineDiv
function i(e){if(r.somethingSelected())ve=r.getSelections(),"cut"==e.type&&r.replaceSelection("",null,"cut")
else{var t=ye(r)
ve=t.text,"cut"==e.type&&r.operation(function(){r.setSelections(t.ranges,0,$i),r.replaceSelection("",null,"cut")})}if(e.clipboardData&&!h)e.preventDefault(),e.clipboardData.clearData(),e.clipboardData.setData("text/plain",ve.join("\n"))
else{var n=xe(),i=n.firstChild
r.display.lineSpace.insertBefore(n,r.display.lineSpace.firstChild),i.value=ve.join("\n")
var o=document.activeElement
io(i),setTimeout(function(){r.display.lineSpace.removeChild(n),o.focus()},50)}}n.contentEditable="true",be(n),Ei(n,"paste",function(e){var t=e.clipboardData&&e.clipboardData.getData("text/plain")
t&&(e.preventDefault(),r.replaceSelection(t,null,"paste"))}),Ei(n,"compositionstart",function(e){var n=e.data
if(t.composing={sel:r.doc.sel,data:n,startData:n},n){var i=r.doc.sel.primary(),o=r.getLine(i.head.line).indexOf(n,Math.max(0,i.head.ch-n.length))
o>-1&&o<=i.head.ch&&(t.composing.sel=We(ue(i.head.line,o),ue(i.head.line,o+n.length)))}}),Ei(n,"compositionupdate",function(e){t.composing.data=e.data}),Ei(n,"compositionend",function(e){var r=t.composing
r&&(e.data==r.startData||/\u200b/.test(e.data)||(r.data=e.data),setTimeout(function(){r.handled||t.applyComposition(r),t.composing==r&&(t.composing=null)},50))}),Ei(n,"touchstart",function(){t.forceCompositionEnd()}),Ei(n,"input",function(){t.composing||t.pollContent()||Rt(t.cm,function(){jt(r)})}),Ei(n,"copy",i),Ei(n,"cut",i)},prepareSelection:function(){var e=_e(this.cm,!1)
return e.focus=this.cm.state.focused,e},showSelection:function(e){e&&this.cm.display.view.length&&(e.focus&&this.showPrimarySelection(),this.showMultipleSelections(e))},showPrimarySelection:function(){var e=window.getSelection(),t=this.cm.doc.sel.primary(),r=ke(this.cm,e.anchorNode,e.anchorOffset),n=ke(this.cm,e.focusNode,e.focusOffset)
if(!r||r.bad||!n||n.bad||0!=ce(de(r,n),t.from())||0!=ce(he(r,n),t.to())){var i=Se(this.cm,t.from()),o=Se(this.cm,t.to())
if(i||o){var l=this.cm.display.view,s=e.rangeCount&&e.getRangeAt(0)
if(i){if(!o){var a=l[l.length-1].measure,u=a.maps?a.maps[a.maps.length-1]:a.map
o={node:u[u.length-1],offset:u[u.length-2]-u[u.length-3]}}}else i={node:l[0].measure.map[2],offset:0}
try{var c=vo(i.node,i.offset,o.offset,o.node)}catch(e){}c&&(e.removeAllRanges(),e.addRange(c),s&&null==e.anchorNode&&e.addRange(s)),this.rememberSelection()}}},showMultipleSelections:function(e){xo(this.cm.display.cursorDiv,e.cursors),xo(this.cm.display.selectionDiv,e.selection)},rememberSelection:function(){var e=window.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},selectionInEditor:function(){var e=window.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return Co(this.div,t)},focus:function(){"nocursor"!=this.cm.options.readOnly&&this.div.focus()},blur:function(){this.div.blur()},getField:function(){return this.div},supportsTouch:function(){return!0},receivedFocus:function(){var e=this
this.selectionInEditor()?this.pollSelection():Rt(this.cm,function(){e.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,function t(){e.cm.state.focused&&(e.pollSelection(),e.polling.set(e.cm.options.pollInterval,t))})},pollSelection:function(){if(!this.composing){var e=window.getSelection(),t=this.cm
if(e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset){this.rememberSelection()
var r=ke(t,e.anchorNode,e.anchorOffset),n=ke(t,e.focusNode,e.focusOffset)
r&&n&&Rt(t,function(){Be(t.doc,We(r,n),$i),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}}},pollContent:function(){var e,t=this.cm,r=t.display,n=t.doc.sel.primary(),i=n.from(),o=n.to()
if(i.line<r.viewFrom||o.line>r.viewTo-1)return!1
if(i.line==r.viewFrom||0==(e=Yt(t,i.line)))var l=vi(r.view[0].line),s=r.view[0].node
else l=vi(r.view[e].line),s=r.view[e-1].node.nextSibling
var a=Yt(t,o.line)
if(a==r.view.length-1)var u=r.viewTo-1,c=r.view[a].node
else u=vi(r.view[a+1].line)-1,c=r.view[a+1].node.previousSibling
for(var f=zo(function(e,t,r,n,i){var o="",l=!1
function s(t){if(1==t.nodeType){var r=t.getAttribute("cm-text")
if(null!=r)return""==r&&(r=t.textContent.replace(/\u200b/g,"")),void(o+=r)
var a,u=t.getAttribute("cm-marker")
if(u){var c=e.findMarks(ue(n,0),ue(i+1,0),(d=+u,function(e){return e.id==d}))
return void(c.length&&(a=c[0].find())&&(o+=di(e.doc,a.from,a.to).join("\n")))}if("false"==t.getAttribute("contenteditable"))return
for(var f=0;f<t.childNodes.length;f++)s(t.childNodes[f]);/^(pre|div|p)$/i.test(t.nodeName)&&(l=!0)}else if(3==t.nodeType){var h=t.nodeValue
if(!h)return
l&&(o+="\n",l=!1),o+=h}var d}for(;s(t),t!=r;)t=t.nextSibling
return o}(t,s,c,l,u)),h=di(t.doc,ue(l,0),ue(u,hi(t.doc,u).text.length));f.length>1&&h.length>1;)if(no(f)==no(h))f.pop(),h.pop(),u--
else{if(f[0]!=h[0])break
f.shift(),h.shift(),l++}for(var d=0,p=0,g=f[0],v=h[0],m=Math.min(g.length,v.length);d<m&&g.charCodeAt(d)==v.charCodeAt(d);)++d
for(var y=no(f),b=no(h),w=Math.min(y.length-(1==f.length?d:0),b.length-(1==h.length?d:0));p<w&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p
f[f.length-1]=y.slice(0,y.length-p),f[0]=f[0].slice(d)
var x=ue(l,d),C=ue(u,h.length?no(h).length-p:0)
return f.length>1||f[0]||ce(x,C)?(Dr(t.doc,f,x,C,"+input"),!0):void 0},ensurePolled:function(){this.forceCompositionEnd()},reset:function(){this.forceCompositionEnd()},forceCompositionEnd:function(){this.composing&&!this.composing.handled&&(this.applyComposition(this.composing),this.composing.handled=!0,this.div.blur(),this.div.focus())},applyComposition:function(e){e.data&&e.data!=e.startData&&Bt(this.cm,me)(this.cm,e.data,0,e.sel)},setUneditable:function(e){e.setAttribute("contenteditable","false")},onKeyPress:function(e){e.preventDefault(),Bt(this.cm,me)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0)},onContextMenu:so,resetPosition:so,needsContentAttribute:!0},Ce.prototype),x.inputStyles={textarea:we,contenteditable:Ce},Me.prototype={primary:function(){return this.ranges[this.primIndex]},equals:function(e){if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var t=0;t<this.ranges.length;t++){var r=this.ranges[t],n=e.ranges[t]
if(0!=ce(r.anchor,n.anchor)||0!=ce(r.head,n.head))return!1}return!0},deepCopy:function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new Ne(fe(this.ranges[t].anchor),fe(this.ranges[t].head))
return new Me(e,this.primIndex)},somethingSelected:function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0
return!1},contains:function(e,t){t||(t=e)
for(var r=0;r<this.ranges.length;r++){var n=this.ranges[r]
if(ce(t,n.from())>=0&&ce(e,n.to())<=0)return r}return-1}},Ne.prototype={from:function(){return de(this.anchor,this.head)},to:function(){return he(this.anchor,this.head)},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}}
var ft,ht={left:0,right:0,top:0,bottom:0}
function dt(e,t,r){for(var n,i,o,l,s=0;s<e.length;s+=3){var a=e[s],u=e[s+1]
if(t<a?(i=0,o=1,l="left"):t<u?o=(i=t-a)+1:(s==e.length-3||t==u&&e[s+3]>t)&&(i=(o=u-a)-1,t>=u&&(l="right")),null!=i){if(n=e[s+2],a==u&&r==(n.insertLeft?"left":"right")&&(l=r),"left"==r&&0==i)for(;s&&e[s-2]==e[s-3]&&e[s-1].insertLeft;)n=e[2+(s-=3)],l="left"
if("right"==r&&i==u-a)for(;s<e.length-3&&e[s+3]==e[s+4]&&!e[s+5].insertLeft;)n=e[(s+=3)+2],l="right"
break}}return{node:n,start:i,end:o,collapse:l,coverStart:a,coverEnd:u}}function pt(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function gt(e){e.display.externalMeasure=null,wo(e.display.lineMeasure)
for(var t=0;t<e.display.view.length;t++)pt(e.display.view[t])}function vt(e){gt(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function mt(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function yt(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function bt(e,t,r,n){if(t.widgets)for(var i=0;i<t.widgets.length;++i)if(t.widgets[i].above){var o=zn(t.widgets[i])
r.top+=o,r.bottom+=o}if("line"==n)return r
n||(n="local")
var l=yi(t)
if("local"==n?l+=et(e.display):l-=e.display.viewOffset,"page"==n||"window"==n){var s=e.display.lineSpace.getBoundingClientRect()
l+=s.top+("window"==n?0:yt())
var a=s.left+("window"==n?0:mt())
r.left+=a,r.right+=a}return r.top+=l,r.bottom+=l,r}function wt(e,t,r){if("div"==r)return t
var n=t.left,i=t.top
if("page"==r)n-=mt(),i-=yt()
else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect()
n+=o.left,i+=o.top}var l=e.display.lineSpace.getBoundingClientRect()
return{left:n-l.left,top:i-l.top}}function xt(e,t,r,n,i){return n||(n=hi(e.doc,t.line)),bt(e,n,st(e,n,t.ch,i),r)}function Ct(e,t,r,n,i,o){function l(t,l){var s=ct(e,i,t,l?"right":"left",o)
return l?s.left=s.right:s.right=s.left,bt(e,n,s,r)}function s(e,t){var r=a[t],n=r.level%2
return e==Uo(r)&&t&&r.level<a[t-1].level?(e=Vo(r=a[--t])-(r.level%2?0:1),n=!0):e==Vo(r)&&t<a.length-1&&r.level<a[t+1].level&&(e=Uo(r=a[++t])-r.level%2,n=!1),n&&e==r.to&&e>r.from?l(e-1):l(e,n)}n=n||hi(e.doc,t.line),i||(i=ut(e,n))
var a=bi(n),u=t.ch
if(!a)return l(u)
var c=s(u,$o(a,u))
return null!=Bo&&(c.other=s(u,Bo)),c}function St(e,t){var r=0
t=De(e.doc,t)
e.options.lineWrapping||(r=Nt(e.display)*t.ch)
var n=hi(e.doc,t.line),i=yi(n)+et(e.display)
return{left:r,right:r,top:i,bottom:i+n.height}}function Lt(e,t,r,n){var i=ue(e,t)
return i.xRel=n,r&&(i.outside=!0),i}function kt(e,t,r){var n=e.doc
if((r+=e.display.viewOffset)<0)return Lt(n.first,0,!0,-1)
var i=mi(n,r),o=n.first+n.size-1
if(i>o)return Lt(n.first+n.size-1,hi(n,o).text.length,!0,1)
t<0&&(t=0)
for(var l=hi(n,i);;){var s=Tt(e,l,i,t,r),a=Mn(l),u=a&&a.find(0,!0)
if(!a||!(s.ch>u.from.ch||s.ch==u.from.ch&&s.xRel>0))return s
i=vi(l=u.to.line)}}function Tt(e,t,r,n,i){var o=i-yi(t),l=!1,s=2*e.display.wrapper.clientWidth,a=ut(e,t)
function u(n){var i=Ct(e,ue(r,n),"line",t,a)
return l=!0,o>i.bottom?i.left-s:o<i.top?i.left+s:(l=!1,i.left)}var c=bi(t),f=t.text.length,h=Ko(t),d=jo(t),p=u(h),g=l,v=u(d),m=l
if(n>v)return Lt(r,d,m,1)
for(;;){if(c?d==h||d==Zo(t,h,1):d-h<=1){for(var y=n<p||n-p<=v-n?h:d,b=n-(y==h?p:v);yo(t.text.charAt(y));)++y
return Lt(r,y,y==h?g:m,b<-1?-1:b>1?1:0)}var w=Math.ceil(f/2),x=h+w
if(c){x=h
for(var C=0;C<w;++C)x=Zo(t,x,1)}var S=u(x)
S>n?(d=x,v=S,(m=l)&&(v+=1e3),f=w):(h=x,p=S,g=l,f-=w)}}function Mt(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==ft){ft=bo("pre")
for(var t=0;t<49;++t)ft.appendChild(document.createTextNode("x")),ft.appendChild(bo("br"))
ft.appendChild(document.createTextNode("x"))}xo(e.measure,ft)
var r=ft.offsetHeight/50
return r>3&&(e.cachedTextHeight=r),wo(e.measure),r||1}function Nt(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=bo("span","xxxxxxxxxx"),r=bo("pre",[t])
xo(e.measure,r)
var n=t.getBoundingClientRect(),i=(n.right-n.left)/10
return i>2&&(e.cachedCharWidth=i),i||10}var At,Wt,Ot=null,Dt=0
function Ht(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,id:++Dt},Ot?Ot.ops.push(e.curOp):e.curOp.ownsGroup=Ot={ops:[e.curOp],delayedCallbacks:[]}}function It(e){var t=e.curOp.ownsGroup
if(t)try{(function(e){var t=e.delayedCallbacks,r=0
do{for(;r<t.length;r++)t[r]()
for(var n=0;n<e.ops.length;n++){var i=e.ops[n]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++](i.cm)}}while(r<t.length)})(t)}finally{Ot=null
for(var r=0;r<t.ops.length;r++)t.ops[r].cm.curOp=null;(function(e){for(var t=e.ops,r=0;r<t.length;r++)Pt(t[r])
for(var r=0;r<t.length;r++)n=t[r],n.updatedDisplay=n.mustUpdate&&j(n.cm,n.update)
var n
for(var r=0;r<t.length;r++)zt(t[r])
for(var r=0;r<t.length;r++)Et(t[r])
for(var r=0;r<t.length;r++)Ft(t[r])})(t)}}function Pt(e){var t=e.cm,r=t.display;(function(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=nt(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=nt(e)+"px",t.scrollbarsClipped=!0)})(t),e.updateMaxLine&&O(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new K(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function zt(e){var t=e.cm,r=t.display
e.updatedDisplay&&$(t),e.barMeasure=H(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=st(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+nt(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-it(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection())}function Et(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&lr(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1),e.preparedSelection&&t.display.input.showSelection(e.preparedSelection),e.updatedDisplay&&Y(t,e.barMeasure),(e.updatedDisplay||e.startHeight!=t.doc.height)&&E(t,e.barMeasure),e.selectionChanged&&qe(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing)}function Ft(e){var t=e.cm,r=t.display,n=t.doc
if(e.updatedDisplay&&X(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null==e.scrollTop||r.scroller.scrollTop==e.scrollTop&&!e.forceScroll||(n.scrollTop=Math.max(0,Math.min(r.scroller.scrollHeight-r.scroller.clientHeight,e.scrollTop)),r.scrollbars.setScrollTop(n.scrollTop),r.scroller.scrollTop=n.scrollTop),null==e.scrollLeft||r.scroller.scrollLeft==e.scrollLeft&&!e.forceScroll||(n.scrollLeft=Math.max(0,Math.min(r.scroller.scrollWidth-it(t),e.scrollLeft)),r.scrollbars.setScrollLeft(n.scrollLeft),r.scroller.scrollLeft=n.scrollLeft,B(t)),e.scrollToPos){var i=function(e,t,r,n){null==n&&(n=0)
for(var i=0;i<5;i++){var o=!1,l=Ct(e,t),s=r&&r!=t?Ct(e,r):l,a=Hr(e,Math.min(l.left,s.left),Math.min(l.top,s.top)-n,Math.max(l.left,s.left),Math.max(l.bottom,s.bottom)+n),u=e.doc.scrollTop,c=e.doc.scrollLeft
if(null!=a.scrollTop&&(or(e,a.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(o=!0)),null!=a.scrollLeft&&(lr(e,a.scrollLeft),Math.abs(e.doc.scrollLeft-c)>1&&(o=!0)),!o)break}return l}(t,De(n,e.scrollToPos.from),De(n,e.scrollToPos.to),e.scrollToPos.margin)
e.scrollToPos.isCursor&&t.state.focused&&function(e,t){if(Vi(e,"scrollCursorIntoView"))return
var r=e.display,n=r.sizer.getBoundingClientRect(),i=null
t.top+n.top<0?i=!0:t.bottom+n.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1)
if(null!=i&&!f){var o=bo("div","​",null,"position: absolute; top: "+(t.top-r.viewOffset-et(e.display))+"px; height: "+(t.bottom-t.top+nt(e)+r.barHeight)+"px; left: "+t.left+"px; width: 2px;")
e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}(t,i)}var o=e.maybeHiddenMarkers,l=e.maybeUnhiddenMarkers
if(o)for(var s=0;s<o.length;++s)o[s].lines.length||Ri(o[s],"hide")
if(l)for(s=0;s<l.length;++s)l[s].lines.length&&Ri(l[s],"unhide")
r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Ri(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function Rt(e,t){if(e.curOp)return t()
Ht(e)
try{return t()}finally{It(e)}}function Bt(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
Ht(e)
try{return t.apply(e,arguments)}finally{It(e)}}}function Gt(e){return function(){if(this.curOp)return e.apply(this,arguments)
Ht(this)
try{return e.apply(this,arguments)}finally{It(this)}}}function Ut(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
Ht(t)
try{return e.apply(this,arguments)}finally{It(t)}}}function Vt(e,t,r){this.line=t,this.rest=function(e){var t,r
for(;t=Mn(e);)e=t.find(1,!0).line,(r||(r=[])).push(e)
return r}(t),this.size=this.rest?vi(no(this.rest))-r+1:1,this.node=this.text=null,this.hidden=Dn(e,t)}function Kt(e,t,r){for(var n,i=[],o=t;o<r;o=n){var l=new Vt(e.doc,hi(e.doc,o),o)
n=o+l.size,i.push(l)}return i}function jt(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0)
var i=e.display
if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)w&&Wn(e.doc,t)<i.viewTo&&_t(e)
else if(r<=i.viewFrom)w&&On(e.doc,r+n)>i.viewFrom?_t(e):(i.viewFrom+=n,i.viewTo+=n)
else if(t<=i.viewFrom&&r>=i.viewTo)_t(e)
else if(t<=i.viewFrom){(o=$t(e,r,r+n,1))?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):_t(e)}else if(r>=i.viewTo){var o;(o=$t(e,t,t,-1))?(i.view=i.view.slice(0,o.index),i.viewTo=o.lineN):_t(e)}else{var l=$t(e,t,t,-1),s=$t(e,r,r+n,1)
l&&s?(i.view=i.view.slice(0,l.index).concat(Kt(e,l.lineN,s.lineN)).concat(i.view.slice(s.index)),i.viewTo+=n):_t(e)}var a=i.externalMeasured
a&&(r<a.lineN?a.lineN+=n:t<a.lineN+a.size&&(i.externalMeasured=null))}function Xt(e,t,r){e.curOp.viewChanged=!0
var n=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[Yt(e,t)]
if(null!=o.node){var l=o.changes||(o.changes=[]);-1==oo(l,r)&&l.push(r)}}}function _t(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function Yt(e,t){if(t>=e.display.viewTo)return null
if((t-=e.display.viewFrom)<0)return null
for(var r=e.display.view,n=0;n<r.length;n++)if((t-=r[n].size)<0)return n}function $t(e,t,r,n){var i,o=Yt(e,t),l=e.display.view
if(!w||r==e.doc.first+e.doc.size)return{index:o,lineN:r}
for(var s=0,a=e.display.viewFrom;s<o;s++)a+=l[s].size
if(a!=t){if(n>0){if(o==l.length-1)return null
i=a+l[o].size-t,o++}else i=a-t
t+=i,r+=i}for(;Wn(e.doc,r)!=r;){if(o==(n<0?0:l.length-1))return null
r+=n*l[o-(n<0?1:0)].size,o+=n}return{index:o,lineN:r}}function qt(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n]
i.hidden||i.node&&!i.changes||++r}return r}function Zt(e){var t=e.display
t.lastWrapHeight==t.wrapper.clientHeight&&t.lastWrapWidth==t.wrapper.clientWidth||(t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize())}function Qt(e,t){for(var r=Pi(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function Jt(e,t,r,n){var i=e.display
if(!r&&"true"==Pi(t).getAttribute("cm-not-content"))return null
var o,l,s=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-s.left,l=t.clientY-s.top}catch(t){return null}var a,u=kt(e,o,l)
if(n&&1==u.xRel&&(a=hi(e.doc,u.line).text).length==u.ch){var c=Ji(a,a.length,e.options.tabSize)-a.length
u=ue(u.line,Math.max(0,Math.round((o-rt(e.display).left)/Nt(e.display))-c))}return u}function er(e){var t=this,r=t.display
if(!(r.activeTouch&&r.input.supportsTouch()||Vi(t,e)))if(r.shift=e.shiftKey,Qt(r,e))o||(r.scroller.draggable=!1,setTimeout(function(){r.scroller.draggable=!0},100))
else if(!rr(t,e)){var l=Jt(t,e)
switch(window.focus(),zi(e)){case 1:l?function(e,t,r){n?setTimeout(co(pe,e),0):pe(e)
var l,s=+new Date
Wt&&Wt.time>s-400&&0==ce(Wt.pos,r)?l="triple":At&&At.time>s-400&&0==ce(At.pos,r)?(l="double",Wt={time:s,pos:r}):(l="single",At={time:s,pos:r})
var a,u=e.doc.sel,c=p?t.metaKey:t.ctrlKey
e.options.dragDrop&&Do&&!ge(e)&&"single"==l&&(a=u.contains(r))>-1&&!u.ranges[a].empty()?function(e,t,r,l){var s=e.display,a=Bt(e,function(u){o&&(s.scroller.draggable=!1),e.state.draggingText=!1,Fi(document,"mouseup",a),Fi(s.scroller,"drop",a),Math.abs(t.clientX-u.clientX)+Math.abs(t.clientY-u.clientY)<10&&(Oi(u),l||Pe(e.doc,r),s.input.focus(),n&&9==i&&setTimeout(function(){document.body.focus(),s.input.focus()},20))})
o&&(s.scroller.draggable=!0)
e.state.draggingText=a,s.scroller.dragDrop&&s.scroller.dragDrop()
Ei(document,"mouseup",a),Ei(s.scroller,"drop",a)}(e,t,r,c):function(e,t,r,n,i){var o=e.display,l=e.doc
Oi(t)
var s,a,u=l.sel,c=u.ranges
i&&!t.shiftKey?(a=l.sel.contains(r),s=a>-1?c[a]:new Ne(r,r)):s=l.sel.primary()
if(t.altKey)n="rect",i||(s=new Ne(r,r)),r=Jt(e,t,!0,!0),a=-1
else if("double"==n){var f=e.findWordAt(r)
s=e.display.shift||l.extend?Ie(l,s,f.anchor,f.head):f}else if("triple"==n){var h=new Ne(ue(r.line,0),De(l,ue(r.line+1,0)))
s=e.display.shift||l.extend?Ie(l,s,h.anchor,h.head):h}else s=Ie(l,s,r)
i?-1==a?(a=c.length,Be(l,Ae(c.concat([s]),a),{scroll:!1,origin:"*mouse"})):c.length>1&&c[a].empty()&&"single"==n?(Be(l,Ae(c.slice(0,a).concat(c.slice(a+1)),0)),u=l.sel):Ee(l,a,s,qi):(a=0,Be(l,new Me([s],0),qi),u=l.sel)
var d=r
var p=o.wrapper.getBoundingClientRect(),g=0
function v(t){var i=++g,c=Jt(e,t,!0,"rect"==n)
if(c)if(0!=ce(c,d)){pe(e),function(t){if(0==ce(d,t))return
if(d=t,"rect"==n){for(var i=[],o=e.options.tabSize,c=Ji(hi(l,r.line).text,r.ch,o),f=Ji(hi(l,t.line).text,t.ch,o),h=Math.min(c,f),p=Math.max(c,f),g=Math.min(r.line,t.line),v=Math.min(e.lastLine(),Math.max(r.line,t.line));g<=v;g++){var m=hi(l,g).text,y=eo(m,h,o)
h==p?i.push(new Ne(ue(g,y),ue(g,y))):m.length>y&&i.push(new Ne(ue(g,y),ue(g,eo(m,p,o))))}i.length||i.push(new Ne(r,r)),Be(l,Ae(u.ranges.slice(0,a).concat(i),a),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var b=s,w=b.anchor,x=t
if("single"!=n){if("double"==n)var C=e.findWordAt(t)
else var C=new Ne(ue(t.line,0),De(l,ue(t.line+1,0)))
ce(C.anchor,w)>0?(x=C.head,w=de(b.from(),C.anchor)):(x=C.anchor,w=he(b.to(),C.head))}var i=u.ranges.slice(0)
i[a]=new Ne(De(l,w),x),Be(l,Ae(i,a),qi)}}(c)
var f=R(o,l);(c.line>=f.to||c.line<f.from)&&setTimeout(Bt(e,function(){g==i&&v(t)}),150)}else{var h=t.clientY<p.top?-20:t.clientY>p.bottom?20:0
h&&setTimeout(Bt(e,function(){g==i&&(o.scroller.scrollTop+=h,v(t))}),50)}}function m(e){g=1/0,Oi(e),o.input.focus(),Fi(document,"mousemove",y),Fi(document,"mouseup",b),l.history.lastSelOrigin=null}var y=Bt(e,function(e){zi(e)?v(e):m(e)}),b=Bt(e,m)
Ei(document,"mousemove",y),Ei(document,"mouseup",b)}(e,t,r,l,c)}(t,e,l):Pi(e)==r.scroller&&Oi(e)
break
case 2:o&&(t.state.lastMiddleDown=+new Date),l&&Pe(t.doc,l),setTimeout(function(){r.input.focus()},20),Oi(e)
break
case 3:y&&xr(t,e)}}}function tr(e,t,r,n,i){try{var o=t.clientX,l=t.clientY}catch(t){return!1}if(o>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
n&&Oi(t)
var s=e.display,a=s.lineDiv.getBoundingClientRect()
if(l>a.bottom||!ji(e,r))return Hi(t)
l-=a.top-s.viewOffset
for(var u=0;u<e.options.gutters.length;++u){var c=s.gutters.childNodes[u]
if(c&&c.getBoundingClientRect().right>=o)return i(e,r,e,mi(e.doc,l),e.options.gutters[u],t),Hi(t)}}function rr(e,t){return tr(e,t,"gutterClick",!0,Gi)}var nr=0
function ir(e){var t=this
if(!Vi(t,e)&&!Qt(t.display,e)){Oi(e),n&&(nr=+new Date)
var r=Jt(t,e,!0),i=e.dataTransfer.files
if(r&&!ge(t))if(i&&i.length&&window.FileReader&&window.File)for(var o=i.length,l=Array(o),s=0,a=function(e,n){var i=new FileReader
i.onload=Bt(t,function(){if(l[n]=i.result,++s==o){var e={from:r=De(t.doc,r),to:r,text:zo(l.join("\n")),origin:"paste"}
Mr(t.doc,e),Re(t.doc,We(r,Cr(e)))}}),i.readAsText(e)},u=0;u<o;++u)a(i[u],u)
else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){t.display.input.focus()},20)
try{if(l=e.dataTransfer.getData("Text")){if(t.state.draggingText&&!(p?e.metaKey:e.ctrlKey))var c=t.listSelections()
if(Ge(t.doc,We(r,r)),c)for(u=0;u<c.length;++u)Dr(t.doc,"",c[u].anchor,c[u].head,"drag")
t.replaceSelection(l,"around","paste"),t.display.input.focus()}}catch(e){}}}}function or(t,r){Math.abs(t.doc.scrollTop-r)<2||(t.doc.scrollTop=r,e||_(t,{top:r}),t.display.scroller.scrollTop!=r&&(t.display.scroller.scrollTop=r),t.display.scrollbars.setScrollTop(r),e&&_(t),Ze(t,100))}function lr(e,t,r){(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)||(t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),e.doc.scrollLeft=t,B(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}var sr=0,ar=null
n?ar=-.53:e?ar=15:s?ar=-.7:u&&(ar=-1/3)
var ur=function(e){var t=e.wheelDeltaX,r=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}
function cr(t,r){var n=ur(r),i=n.x,l=n.y,s=t.display,u=s.scroller
if(i&&u.scrollWidth>u.clientWidth||l&&u.scrollHeight>u.clientHeight){if(l&&p&&o)e:for(var c=r.target,f=s.view;c!=u;c=c.parentNode)for(var h=0;h<f.length;h++)if(f[h].node==c){t.display.currentWheelTarget=c
break e}if(i&&!e&&!a&&null!=ar)return l&&or(t,Math.max(0,Math.min(u.scrollTop+l*ar,u.scrollHeight-u.clientHeight))),lr(t,Math.max(0,Math.min(u.scrollLeft+i*ar,u.scrollWidth-u.clientWidth))),Oi(r),void(s.wheelStartX=null)
if(l&&null!=ar){var d=l*ar,g=t.doc.scrollTop,v=g+s.wrapper.clientHeight
d<0?g=Math.max(0,g+d-50):v=Math.min(t.doc.height,v+d+50),_(t,{top:g,bottom:v})}sr<20&&(null==s.wheelStartX?(s.wheelStartX=u.scrollLeft,s.wheelStartY=u.scrollTop,s.wheelDX=i,s.wheelDY=l,setTimeout(function(){if(null!=s.wheelStartX){var e=u.scrollLeft-s.wheelStartX,t=u.scrollTop-s.wheelStartY,r=t&&s.wheelDY&&t/s.wheelDY||e&&s.wheelDX&&e/s.wheelDX
s.wheelStartX=s.wheelStartY=null,r&&(ar=(ar*sr+r)/(sr+1),++sr)}},200)):(s.wheelDX+=i,s.wheelDY+=l))}}function fr(e,t,r){if("string"==typeof t&&!(t=Jr[t]))return!1
e.display.input.ensurePolled()
var n=e.display.shift,i=!1
try{ge(e)&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=Yi}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}x.wheelEventPixels=function(e){var t=ur(e)
return t.x*=ar,t.y*=ar,t}
var hr=new Qi
function dr(e,t,r,n){var i=e.state.keySeq
if(i){if(nn(t))return"handled"
hr.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),t=i+" "+t}var o=function(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=rn(t,e.state.keyMaps[n],r,e)
if(i)return i}return e.options.extraKeys&&rn(t,e.options.extraKeys,r,e)||rn(t,e.options.keyMap,r,e)}(e,t,n)
return"multi"==o&&(e.state.keySeq=t),"handled"==o&&Gi(e,"keyHandled",e,t,r),"handled"!=o&&"multi"!=o||(Oi(r),qe(e)),i&&!o&&/\'$/.test(t)?(Oi(r),!0):!!o}function pr(e,t){var r=on(t,!0)
return!!r&&(t.shiftKey&&!e.state.keySeq?dr(e,"Shift-"+r,t,function(t){return fr(e,t,!0)})||dr(e,r,t,function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return fr(e,t)}):dr(e,r,t,function(t){return fr(e,t)}))}var gr=null
function vr(e){var t=this
if(pe(t),!Vi(t,e)){n&&i<11&&27==e.keyCode&&(e.returnValue=!1)
var r=e.keyCode
t.display.shift=16==r||e.shiftKey
var o=pr(t,e)
a&&(gr=o?r:null,!o&&88==r&&!Fo&&(p?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){var t=e.display.lineDiv
function r(e){18!=e.keyCode&&e.altKey||(ko(t,"CodeMirror-crosshair"),Fi(document,"keyup",r),Fi(document,"mouseover",r))}To(t,"CodeMirror-crosshair"),Ei(document,"keyup",r),Ei(document,"mouseover",r)}(t)}}function mr(e){16==e.keyCode&&(this.doc.sel.shift=!1),Vi(this,e)}function yr(e){var t=this
if(!(Qt(t.display,e)||Vi(t,e)||e.ctrlKey&&!e.altKey||p&&e.metaKey)){var r=e.keyCode,n=e.charCode
if(a&&r==gr)return gr=null,void Oi(e)
if(!a||e.which&&!(e.which<10)||!pr(t,e))(function(e,t,r){return dr(e,"'"+r+"'",t,function(t){return fr(e,t,!0)})})(t,e,String.fromCharCode(null==n?r:n))||t.display.input.onKeyPress(e)}}function br(e){"nocursor"!=e.options.readOnly&&(e.state.focused||(Ri(e,"focus",e),e.state.focused=!0,To(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),o&&setTimeout(function(){e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),qe(e))}function wr(e){e.state.focused&&(Ri(e,"blur",e),e.state.focused=!1,ko(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150)}function xr(e,t){Qt(e.display,t)||function(e,t){return!!ji(e,"gutterContextMenu")&&tr(e,t,"gutterContextMenu",!1,Ri)}(e,t)||e.display.input.onContextMenu(t)}var Cr=x.changeEnd=function(e){return e.text?ue(e.from.line+e.text.length-1,no(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}
function Sr(e,t){if(ce(e,t.from)<0)return e
if(ce(e,t.to)<=0)return Cr(t)
var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch
return e.line==t.to.line&&(n+=Cr(t).ch-t.to.ch),ue(r,n)}function Lr(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n]
r.push(new Ne(Sr(i.anchor,t),Sr(i.head,t)))}return Ae(r,e.sel.primIndex)}function kr(e,t,r){return e.line==t.line?ue(r.line,e.ch-t.ch+r.ch):ue(r.line+(e.line-t.line),e.ch)}function Tr(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){this.canceled=!0}}
return r&&(n.update=function(t,r,n,i){t&&(this.from=De(e,t)),r&&(this.to=De(e,r)),n&&(this.text=n),void 0!==i&&(this.origin=i)}),Ri(e,"beforeChange",e,n),e.cm&&Ri(e.cm,"beforeChange",e.cm,n),n.canceled?null:{from:n.from,to:n.to,text:n.text,origin:n.origin}}function Mr(e,t,r){if(e.cm){if(!e.cm.curOp)return Bt(e.cm,Mr)(e,t,r)
if(e.cm.state.suppressEdits)return}if(!(ji(e,"beforeChange")||e.cm&&ji(e.cm,"beforeChange"))||(t=Tr(e,t,!0))){var n=b&&!r&&function(e,t,r){var n=null
if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker
!r.readOnly||n&&-1!=oo(n,r)||(n||(n=[])).push(r)}}),!n)return null
for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a]
if(!(ce(u.to,s.from)<0||ce(u.from,s.to)>0)){var c=[a,1],f=ce(u.from,s.from),h=ce(u.to,s.to);(f<0||!l.inclusiveLeft&&!f)&&c.push({from:u.from,to:s.from}),(h>0||!l.inclusiveRight&&!h)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-1}}return i}(e,t.from,t.to)
if(n)for(var i=n.length-1;i>=0;--i)Nr(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text})
else Nr(e,t)}}function Nr(e,t){if(1!=t.text.length||""!=t.text[0]||0!=ce(t.from,t.to)){var r=Lr(e,t)
Si(e,t,r,e.cm?e.cm.curOp.id:NaN),Or(e,t,r,mn(e,t))
var n=[]
ci(e,function(e,r){r||-1!=oo(n,e.history)||(Wi(e.history,t),n.push(e.history)),Or(e,t,null,mn(e,t))})}}function Ar(e,t,r){if(!e.cm||!e.cm.state.suppressEdits){for(var n,i=e.history,o=e.sel,l="undo"==t?i.done:i.undone,s="undo"==t?i.undone:i.done,a=0;a<l.length&&(n=l[a],r?!n.ranges||n.equals(e.sel):n.ranges);a++);if(a!=l.length){for(i.lastOrigin=i.lastSelOrigin=null;(n=l.pop()).ranges;){if(Li(n,s),r&&!n.equals(e.sel))return void Be(e,n,{clearRedo:!1})
o=n}var u=[]
Li(o,s),s.push({changes:u,generation:i.generation}),i.generation=n.generation||++i.maxGeneration
var c=ji(e,"beforeChange")||e.cm&&ji(e.cm,"beforeChange")
for(a=n.changes.length-1;a>=0;--a){var f=n.changes[a]
if(f.origin=t,c&&!Tr(e,f,!1))return void(l.length=0)
u.push(xi(e,f))
var h=a?Lr(e,f):no(l)
Or(e,f,h,bn(e,f)),!a&&e.cm&&e.cm.scrollIntoView({from:f.from,to:Cr(f)})
var d=[]
ci(e,function(e,t){t||-1!=oo(d,e.history)||(Wi(e.history,f),d.push(e.history)),Or(e,f,null,bn(e,f))})}}}}function Wr(e,t){if(0!=t&&(e.first+=t,e.sel=new Me(lo(e.sel.ranges,function(e){return new Ne(ue(e.anchor.line+t,e.anchor.ch),ue(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){jt(e.cm,e.first,e.first-t,t)
for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)Xt(e.cm,n,"gutter")}}function Or(e,t,r,n){if(e.cm&&!e.cm.curOp)return Bt(e.cm,Or)(e,t,r,n)
if(t.to.line<e.first)Wr(e,t.text.length-1-(t.to.line-t.from.line))
else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
Wr(e,i),t={from:ue(e.first,0),to:ue(t.to.line+i,t.to.ch),text:[no(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:ue(o,hi(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=di(e,t.from,t.to),r||(r=Lr(e,t)),e.cm?function(e,t,r){var n=e.doc,i=e.display,o=t.from,l=t.to,s=!1,a=o.line
e.options.lineWrapping||(a=vi(An(hi(n,o.line))),n.iter(a,l.line+1,function(e){if(e==i.maxLine)return s=!0,!0}))
n.sel.contains(t.from,t.to)>-1&&Ki(e)
ni(n,t,r,L(e)),e.options.lineWrapping||(n.iter(a,o.line+t.text.length,function(e){var t=W(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)}),s&&(e.curOp.updateMaxLine=!0))
n.frontier=Math.min(n.frontier,o.line),Ze(e,400)
var u=t.text.length-(l.line-o.line)-1
t.full?jt(e):o.line!=l.line||1!=t.text.length||ri(e.doc,t)?jt(e,o.line,l.line+1,u):Xt(e,o.line,"text")
var c=ji(e,"changes"),f=ji(e,"change")
if(f||c){var h={from:o,to:l,text:t.text,removed:t.removed,origin:t.origin}
f&&Gi(e,"change",e,h),c&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(h)}e.display.selForContextMenu=null}(e.cm,t,n):ni(e,t,n),Ge(e,r,$i)}}function Dr(e,t,r,n,i){if(n||(n=r),ce(n,r)<0){var o=n
n=r,r=o}"string"==typeof t&&(t=zo(t)),Mr(e,{from:r,to:n,text:t,origin:i})}function Hr(e,t,r,n,i){var o=e.display,l=Mt(e.display)
r<0&&(r=0)
var s=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:o.scroller.scrollTop,a=ot(e),u={}
i-r>a&&(i=r+a)
var c=e.doc.height+tt(o),f=r<l,h=i>c-l
if(r<s)u.scrollTop=f?0:r
else if(i>s+a){var d=Math.min(r,(h?c:i)-a)
d!=s&&(u.scrollTop=d)}var p=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:o.scroller.scrollLeft,g=it(e)-(e.options.fixedGutter?o.gutters.offsetWidth:0),v=n-t>g
return v&&(n=t+g),t<10?u.scrollLeft=0:t<p?u.scrollLeft=Math.max(0,t-(v?0:10)):n>g+p-3&&(u.scrollLeft=n+(v?0:10)-g),u}function Ir(e,t,r){null==t&&null==r||zr(e),null!=t&&(e.curOp.scrollLeft=(null==e.curOp.scrollLeft?e.doc.scrollLeft:e.curOp.scrollLeft)+t),null!=r&&(e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+r)}function Pr(e){zr(e)
var t=e.getCursor(),r=t,n=t
e.options.lineWrapping||(r=t.ch?ue(t.line,t.ch-1):t,n=ue(t.line,t.ch+1)),e.curOp.scrollToPos={from:r,to:n,margin:e.options.cursorScrollMargin,isCursor:!0}}function zr(e){var t=e.curOp.scrollToPos
if(t){e.curOp.scrollToPos=null
var r=St(e,t.from),n=St(e,t.to),i=Hr(e,Math.min(r.left,n.left),Math.min(r.top,n.top)-t.margin,Math.max(r.right,n.right),Math.max(r.bottom,n.bottom)+t.margin)
e.scrollTo(i.scrollLeft,i.scrollTop)}}function Er(e,t,r,n){var i,o=e.doc
null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=Je(e,t):r="prev")
var l=e.options.tabSize,s=hi(o,t),a=Ji(s.text,null,l)
s.stateAfter&&(s.stateAfter=null)
var u,c=s.text.match(/^\s*/)[0]
if(n||/\S/.test(s.text)){if("smart"==r&&((u=o.mode.indent(i,s.text.slice(c.length),s.text))==Yi||u>150)){if(!n)return
r="prev"}}else u=0,r="not"
"prev"==r?u=t>o.first?Ji(hi(o,t-1).text,null,l):0:"add"==r?u=a+e.options.indentUnit:"subtract"==r?u=a-e.options.indentUnit:"number"==typeof r&&(u=a+r),u=Math.max(0,u)
var f="",h=0
if(e.options.indentWithTabs)for(var d=Math.floor(u/l);d;--d)h+=l,f+="\t"
if(h<u&&(f+=ro(u-h)),f!=c)Dr(o,f,ue(t,0),ue(t,c.length),"+input")
else for(d=0;d<o.sel.ranges.length;d++){var p=o.sel.ranges[d]
if(p.head.line==t&&p.head.ch<c.length){Ee(o,d,new Ne(h=ue(t,c.length),h))
break}}s.stateAfter=null}function Fr(e,t,r,n){var i=t,o=t
return"number"==typeof t?o=hi(e,Oe(e,t)):i=vi(t),null==i?null:(n(o,i)&&e.cm&&Xt(e.cm,i,r),o)}function Rr(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&ce(o.from,no(n).to)<=0;){var l=n.pop()
if(ce(l.from,o.from)<0){o.from=l.from
break}}n.push(o)}Rt(e,function(){for(var t=n.length-1;t>=0;t--)Dr(e.doc,"",n[t].from,n[t].to,"+delete")
Pr(e)})}function Br(e,t,r,n,i){var o=t.line,l=t.ch,s=r,a=hi(e,o),u=!0
function c(t){var n,s=(i?Zo:Qo)(a,l,r,!0)
if(null==s){if(t||!((n=o+r)<e.first||n>=e.first+e.size?u=!1:(o=n,a=hi(e,n))))return u=!1
l=i?(r<0?jo:Ko)(a):r<0?a.text.length:0}else l=s
return!0}if("char"==n)c()
else if("column"==n)c(!0)
else if("word"==n||"group"==n)for(var f=null,h="group"==n,d=e.cm&&e.cm.getHelper(t,"wordChars"),p=!0;!(r<0)||c(!p);p=!1){var g=a.text.charAt(l)||"\n",v=po(g,d)?"w":h&&"\n"==g?"n":!h||/\s/.test(g)?null:"p"
if(!h||p||v||(v="s"),f&&f!=v){r<0&&(r=1,c())
break}if(v&&(f=v),r>0&&!c(!p))break}var m=je(e,ue(o,l),s,!0)
return u||(m.hitSide=!0),m}function Gr(e,t,r,n){var i,o=e.doc,l=t.left
if("page"==n){var s=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)
i=t.top+r*(s-(r<0?1.5:.5)*Mt(e.display))}else"line"==n&&(i=r>0?t.bottom+3:t.top-3)
for(;;){var a=kt(e,l,i)
if(!a.outside)break
if(r<0?i<=0:i>=o.height){a.hitSide=!0
break}i+=5*r}return a}x.prototype={constructor:x,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,t){var r=this.options,n=r[e]
r[e]==t&&"mode"!=e||(r[e]=t,Vr.hasOwnProperty(e)&&Bt(this,Vr[e])(this,t,n))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](ln(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:Gt(function(e,t){var r=e.token?e:x.getMode(this.options,e)
if(r.startState)throw new Error("Overlays may not be stateful.")
this.state.overlays.push({mode:r,modeSpec:e,opaque:t&&t.opaque}),this.state.modeGen++,jt(this)}),removeOverlay:Gt(function(e){for(var t=this.state.overlays,r=0;r<t.length;++r){var n=t[r].modeSpec
if(n==e||"string"==typeof e&&n.name==e)return t.splice(r,1),this.state.modeGen++,void jt(this)}}),indentLine:Gt(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),He(this.doc,e)&&Er(this,e,t,r)}),indentSelection:Gt(function(e){for(var t=this.doc.sel.ranges,r=-1,n=0;n<t.length;n++){var i=t[n]
if(i.empty())i.head.line>r&&(Er(this,i.head.line,e,!0),r=i.head.line,n==this.doc.sel.primIndex&&Pr(this))
else{var o=i.from(),l=i.to(),s=Math.max(r,o.line)
r=Math.min(this.lastLine(),l.line-(l.ch?0:1))+1
for(var a=s;a<r;++a)Er(this,a,e)
var u=this.doc.sel.ranges
0==o.ch&&t.length==u.length&&u[n].from().ch>0&&Ee(this.doc,n,new Ne(o,u[n].to()),$i)}}}),getTokenAt:function(e,t){return Un(this,e,t)},getLineTokens:function(e,t){return Un(this,ue(e),t,!0)},getTokenTypeAt:function(e){e=De(this.doc,e)
var t,r=jn(this,hi(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch
if(0==o)t=r[2]
else for(;;){var l=n+i>>1
if((l?r[2*l-1]:0)>=o)i=l
else{if(!(r[2*l+1]<o)){t=r[2*l+2]
break}n=l+1}}var s=t?t.indexOf("cm-overlay "):-1
return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(e){var t=this.doc.mode
return t.innerMode?x.innerMode(t,this.getTokenAt(e).state).mode:t},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=[]
if(!qr.hasOwnProperty(t))return qr
var n=qr[t],i=this.getModeAt(e)
if("string"==typeof i[t])n[i[t]]&&r.push(n[i[t]])
else if(i[t])for(var o=0;o<i[t].length;o++){var l=n[i[t][o]]
l&&r.push(l)}else i.helperType&&n[i.helperType]?r.push(n[i.helperType]):n[i.name]&&r.push(n[i.name])
for(o=0;o<n._global.length;o++){var s=n._global[o]
s.pred(i,this)&&-1==oo(r,s.val)&&r.push(s.val)}return r},getStateAfter:function(e,t){var r=this.doc
return Je(this,(e=Oe(r,null==e?r.first+r.size-1:e))+1,t)},cursorCoords:function(e,t){var r=this.doc.sel.primary()
return Ct(this,null==e?r.head:"object"==typeof e?De(this.doc,e):e?r.from():r.to(),t||"page")},charCoords:function(e,t){return xt(this,De(this.doc,e),t||"page")},coordsChar:function(e,t){return kt(this,(e=wt(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=wt(this,{top:e,left:0},t||"page").top,mi(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t){var r=!1,n=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>n&&(e=n,r=!0)
var i=hi(this.doc,e)
return bt(this,i,{top:0,left:0},t||"page").top+(r?this.doc.height-yi(i):0)},defaultTextHeight:function(){return Mt(this.display)},defaultCharWidth:function(){return Nt(this.display)},setGutterMarker:Gt(function(e,t,r){return Fr(this.doc,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={})
return n[t]=r,!r&&go(n)&&(e.gutterMarkers=null),!0})}),clearGutter:Gt(function(e){var t=this,r=t.doc,n=r.first
r.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&(r.gutterMarkers[e]=null,Xt(t,n,"gutter"),go(r.gutterMarkers)&&(r.gutterMarkers=null)),++n})}),addLineWidget:Gt(function(e,t,r){return function(e,t,r,n){var i=new In(e,r,n)
i.noHScroll&&(e.display.alignWidgets=!0)
return Fr(e.doc,t,"widget",function(t){var r=t.widgets||(t.widgets=[])
if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,!Dn(e.doc,t)){var n=yi(t)<e.doc.scrollTop
gi(t,t.height+zn(i)),n&&Ir(e,null,i.height),e.curOp.forceUpdate=!0}return!0}),i}(this,e,t,r)}),removeLineWidget:function(e){e.clear()},lineInfo:function(e){if("number"==typeof e){if(!He(this.doc,e))return null
var t=e
if(!(e=hi(this.doc,e)))return null}else{if(null==(t=vi(e)))return null}return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o,l,s,a,u,c,f=this.display,h=(e=Ct(this,De(this.doc,e))).bottom,d=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),f.sizer.appendChild(t),"over"==n)h=e.top
else if("above"==n||"near"==n){var p=Math.max(f.wrapper.clientHeight,this.doc.height),g=Math.max(f.sizer.clientWidth,f.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>p)&&e.top>t.offsetHeight?h=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=p&&(h=e.bottom),d+t.offsetWidth>g&&(d=g-t.offsetWidth)}t.style.top=h+"px",t.style.left=t.style.right="","right"==i?(d=f.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?d=0:"middle"==i&&(d=(f.sizer.clientWidth-t.offsetWidth)/2),t.style.left=d+"px"),r&&(o=this,l=d,s=h,a=d+t.offsetWidth,u=h+t.offsetHeight,null!=(c=Hr(o,l,s,a,u)).scrollTop&&or(o,c.scrollTop),null!=c.scrollLeft&&lr(o,c.scrollLeft))},triggerOnKeyDown:Gt(vr),triggerOnKeyPress:Gt(yr),triggerOnKeyUp:mr,execCommand:function(e){if(Jr.hasOwnProperty(e))return Jr[e](this)},findPosH:function(e,t,r,n){var i=1
t<0&&(i=-1,t=-t)
for(var o=0,l=De(this.doc,e);o<t&&!(l=Br(this.doc,l,i,r,n)).hitSide;++o);return l},moveH:Gt(function(e,t){var r=this
r.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?Br(r.doc,n.head,e,t,r.options.rtlMoveVisually):e<0?n.from():n.to()},Zi)}),deleteH:Gt(function(e,t){var r=this.doc.sel,n=this.doc
r.somethingSelected()?n.replaceSelection("",null,"+delete"):Rr(this,function(r){var i=Br(n,r.head,e,t,!1)
return e<0?{from:i,to:r.head}:{from:r.head,to:i}})}),findPosV:function(e,t,r,n){var i=1,o=n
t<0&&(i=-1,t=-t)
for(var l=0,s=De(this.doc,e);l<t;++l){var a=Ct(this,s,"div")
if(null==o?o=a.left:a.left=o,(s=Gr(this,a,i,r)).hitSide)break}return s},moveV:Gt(function(e,t){var r=this,n=this.doc,i=[],o=!r.display.shift&&!n.extend&&n.sel.somethingSelected()
if(n.extendSelectionsBy(function(l){if(o)return e<0?l.from():l.to()
var s=Ct(r,l.head,"div")
null!=l.goalColumn&&(s.left=l.goalColumn),i.push(s.left)
var a=Gr(r,s,e,t)
return"page"==t&&l==n.sel.primary()&&Ir(r,null,xt(r,a,"div").top-s.top),a},Zi),i.length)for(var l=0;l<n.sel.ranges.length;l++)n.sel.ranges[l].goalColumn=i[l]}),findWordAt:function(e){var t=hi(this.doc,e.line).text,r=e.ch,n=e.ch
if(t){var i=this.getHelper(e,"wordChars");(e.xRel<0||n==t.length)&&r?--r:++n
for(var o=t.charAt(r),l=po(o,i)?function(e){return po(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!po(e)};r>0&&l(t.charAt(r-1));)--r
for(;n<t.length&&l(t.charAt(n));)++n}return new Ne(ue(e.line,r),ue(e.line,n))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?To(this.display.cursorDiv,"CodeMirror-overwrite"):ko(this.display.cursorDiv,"CodeMirror-overwrite"),Ri(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==So()},scrollTo:Gt(function(e,t){null==e&&null==t||zr(this),null!=e&&(this.curOp.scrollLeft=e),null!=t&&(this.curOp.scrollTop=t)}),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-nt(this)-this.display.barHeight,width:e.scrollWidth-nt(this)-this.display.barWidth,clientHeight:ot(this),clientWidth:it(this)}},scrollIntoView:Gt(function(e,t){if(null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:ue(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line)zr(this),this.curOp.scrollToPos=e
else{var r=Hr(this,Math.min(e.from.left,e.to.left),Math.min(e.from.top,e.to.top)-e.margin,Math.max(e.from.right,e.to.right),Math.max(e.from.bottom,e.to.bottom)+e.margin)
this.scrollTo(r.scrollLeft,r.scrollTop)}}),setSize:Gt(function(e,t){var r=this
function n(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}null!=e&&(r.display.wrapper.style.width=n(e)),null!=t&&(r.display.wrapper.style.height=n(t)),r.options.lineWrapping&&gt(this)
var i=r.display.viewFrom
r.doc.iter(i,r.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){Xt(r,i,"widget")
break}++i}),r.curOp.forceUpdate=!0,Ri(r,"refresh",this)}),operation:function(e){return Rt(this,e)},refresh:Gt(function(){var e=this.display.cachedTextHeight
jt(this),this.curOp.forceUpdate=!0,vt(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),A(this),(null==e||Math.abs(e-Mt(this.display))>.5)&&k(this),Ri(this,"refresh",this)}),swapDoc:Gt(function(e){var t=this.doc
return t.cm=null,fi(this,e),vt(this),this.display.input.reset(),this.scrollTo(e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,Gi(this,"swapDoc",this,t),t}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Xi(x)
var Ur=x.defaults={},Vr=x.optionHandlers={}
function Kr(e,t,r,n){x.defaults[e]=t,r&&(Vr[e]=n?function(e,t,n){n!=jr&&r(e,t,n)}:r)}var jr=x.Init={toString:function(){return"CodeMirror.Init"}}
Kr("value","",function(e,t){e.setValue(t)},!0),Kr("mode",null,function(e,t){e.doc.modeOption=t,C(e)},!0),Kr("indentUnit",2,C,!0),Kr("indentWithTabs",!1),Kr("smartIndent",!0),Kr("tabSize",4,function(e){S(e),vt(e),jt(e)},!0),Kr("specialChars",/[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(e,t){e.options.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),e.refresh()},!0),Kr("specialCharPlaceholder",function(e){var t=bo("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t},function(e){e.refresh()},!0),Kr("electricChars",!0),Kr("inputStyle",d?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),Kr("rtlMoveVisually",!g),Kr("wholeLineUpdateBefore",!0),Kr("theme","default",function(e){T(e),M(e)},!0),Kr("keyMap","default",function(e,t,r){var n=ln(t),i=r!=x.Init&&ln(r)
i&&i.detach&&i.detach(e,n),n.attach&&n.attach(e,i||null)}),Kr("extraKeys",null),Kr("lineWrapping",!1,function(e){e.options.lineWrapping?(To(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(ko(e.display.wrapper,"CodeMirror-wrap"),O(e)),k(e),jt(e),vt(e),setTimeout(function(){E(e)},100)},!0),Kr("gutters",[],function(e){D(e.options),M(e)},!0),Kr("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?V(e.display)+"px":"0",e.refresh()},!0),Kr("coverGutterNextToScrollbar",!1,function(e){E(e)},!0),Kr("scrollbarStyle","native",function(e){z(e),E(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),Kr("lineNumbers",!1,function(e){D(e.options),M(e)},!0),Kr("firstLineNumber",1,M,!0),Kr("lineNumberFormatter",function(e){return e},M,!0),Kr("showCursorWhenSelecting",!1,Xe,!0),Kr("resetSelectionOnContextMenu",!0),Kr("readOnly",!1,function(e,t){"nocursor"==t?(wr(e),e.display.input.blur(),e.display.disabled=!0):(e.display.disabled=!1,t||e.display.input.reset())}),Kr("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),Kr("dragDrop",!0),Kr("cursorBlinkRate",530),Kr("cursorScrollMargin",0)
Kr("cursorHeight",1,Xe,!0),Kr("singleCursorHeightPerLine",!0,Xe,!0),Kr("workTime",100),Kr("workDelay",100),Kr("flattenSpans",!0,S,!0),Kr("addModeClass",!1,S,!0),Kr("pollInterval",100),Kr("undoDepth",200,function(e,t){e.doc.history.undoDepth=t}),Kr("historyEventDelay",1250),Kr("viewportMargin",10,function(e){e.refresh()},!0),Kr("maxHighlightLength",1e4,S,!0),Kr("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),Kr("tabindex",null,function(e,t){e.display.input.getField().tabIndex=t||""}),Kr("autofocus",null)
var Xr=x.modes={},_r=x.mimeModes={}
x.defineMode=function(e,t){x.defaults.mode||"null"==e||(x.defaults.mode=e),arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Xr[e]=t},x.defineMIME=function(e,t){_r[e]=t},x.resolveMode=function(e){if("string"==typeof e&&_r.hasOwnProperty(e))e=_r[e]
else if(e&&"string"==typeof e.name&&_r.hasOwnProperty(e.name)){var t=_r[e.name]
"string"==typeof t&&(t={name:t}),(e=ao(t,e)).name=t.name}else if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return x.resolveMode("application/xml")
return"string"==typeof e?{name:e}:e||{name:"null"}},x.getMode=function(e,t){t=x.resolveMode(t)
var r=Xr[t.name]
if(!r)return x.getMode(e,"text/plain")
var n=r(e,t)
if(Yr.hasOwnProperty(t.name)){var i=Yr[t.name]
for(var o in i)i.hasOwnProperty(o)&&(n.hasOwnProperty(o)&&(n["_"+o]=n[o]),n[o]=i[o])}if(n.name=t.name,t.helperType&&(n.helperType=t.helperType),t.modeProps)for(var o in t.modeProps)n[o]=t.modeProps[o]
return n},x.defineMode("null",function(){return{token:function(e){e.skipToEnd()}}}),x.defineMIME("text/plain","null")
var Yr=x.modeExtensions={}
x.extendMode=function(e,t){uo(t,Yr.hasOwnProperty(e)?Yr[e]:Yr[e]={})},x.defineExtension=function(e,t){x.prototype[e]=t},x.defineDocExtension=function(e,t){si.prototype[e]=t},x.defineOption=Kr
var $r=[]
x.defineInitHook=function(e){$r.push(e)}
var qr=x.helpers={}
x.registerHelper=function(e,t,r){qr.hasOwnProperty(e)||(qr[e]=x[e]={_global:[]}),qr[e][t]=r},x.registerGlobalHelper=function(e,t,r,n){x.registerHelper(e,t,n),qr[e]._global.push({pred:r,val:n})}
var Zr=x.copyState=function(e,t){if(!0===t)return t
if(e.copyState)return e.copyState(t)
var r={}
for(var n in t){var i=t[n]
i instanceof Array&&(i=i.concat([])),r[n]=i}return r},Qr=x.startState=function(e,t,r){return!e.startState||e.startState(t,r)}
x.innerMode=function(e,t){for(;e.innerMode;){var r=e.innerMode(t)
if(!r||r.mode==e)break
t=r.state,e=r.mode}return r||{mode:e,state:t}}
var Jr=x.commands={selectAll:function(e){e.setSelection(ue(e.firstLine(),0),ue(e.lastLine()),$i)},singleSelection:function(e){e.setSelection(e.getCursor("anchor"),e.getCursor("head"),$i)},killLine:function(e){Rr(e,function(t){if(t.empty()){var r=hi(e.doc,t.head.line).text.length
return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:ue(t.head.line+1,0)}:{from:t.head,to:ue(t.head.line,r)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){Rr(e,function(t){return{from:ue(t.from().line,0),to:De(e.doc,ue(t.to().line+1,0))}})},delLineLeft:function(e){Rr(e,function(e){return{from:ue(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){Rr(e,function(t){var r=e.charCoords(t.head,"div").top+5
return{from:e.coordsChar({left:0,top:r},"div"),to:t.from()}})},delWrappedLineRight:function(e){Rr(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")
return{from:t.from(),to:n}})},undo:function(e){e.undo()},redo:function(e){e.redo()},undoSelection:function(e){e.undoSelection()},redoSelection:function(e){e.redoSelection()},goDocStart:function(e){e.extendSelection(ue(e.firstLine(),0))},goDocEnd:function(e){e.extendSelection(ue(e.lastLine()))},goLineStart:function(e){e.extendSelectionsBy(function(t){return Xo(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){e.extendSelectionsBy(function(t){return _o(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){e.extendSelectionsBy(function(t){return function(e,t){var r,n=hi(e.doc,t)
for(;r=Mn(n);)n=r.find(1,!0).line,t=null
var i=bi(n),o=i?i[0].level%2?Ko(n):jo(n):n.text.length
return ue(null==t?vi(n):t,o)}(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},Zi)},goLineLeft:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:r},"div")},Zi)},goLineLeftSmart:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return n.ch<e.getLine(n.line).search(/\S/)?_o(e,t.head):n},Zi)},goLineUp:function(e){e.moveV(-1,"line")},goLineDown:function(e){e.moveV(1,"line")},goPageUp:function(e){e.moveV(-1,"page")},goPageDown:function(e){e.moveV(1,"page")},goCharLeft:function(e){e.moveH(-1,"char")},goCharRight:function(e){e.moveH(1,"char")},goColumnLeft:function(e){e.moveH(-1,"column")},goColumnRight:function(e){e.moveH(1,"column")},goWordLeft:function(e){e.moveH(-1,"word")},goGroupRight:function(e){e.moveH(1,"group")},goGroupLeft:function(e){e.moveH(-1,"group")},goWordRight:function(e){e.moveH(1,"word")},delCharBefore:function(e){e.deleteH(-1,"char")},delCharAfter:function(e){e.deleteH(1,"char")},delWordBefore:function(e){e.deleteH(-1,"word")},delWordAfter:function(e){e.deleteH(1,"word")},delGroupBefore:function(e){e.deleteH(-1,"group")},delGroupAfter:function(e){e.deleteH(1,"group")},indentAuto:function(e){e.indentSelection("smart")},indentMore:function(e){e.indentSelection("add")},indentLess:function(e){e.indentSelection("subtract")},insertTab:function(e){e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=Ji(e.getLine(o.line),o.ch,n)
t.push(new Array(n-l%n+1).join(" "))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){Rt(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++){var i=t[n].head,o=hi(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new ue(i.line,i.ch-1)),i.ch>0)i=new ue(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),ue(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var l=hi(e.doc,i.line-1).text
l&&e.replaceRange(o.charAt(0)+"\n"+l.charAt(l.length-1),ue(i.line-1,l.length-1),ue(i.line,1),"+transpose")}r.push(new Ne(i,i))}e.setSelections(r)})},newlineAndIndent:function(e){Rt(e,function(){for(var t=e.listSelections().length,r=0;r<t;r++){var n=e.listSelections()[r]
e.replaceRange("\n",n.anchor,n.head,"+input"),e.indentLine(n.from().line+1,null,!0),Pr(e)}})},toggleOverwrite:function(e){e.toggleOverwrite()}},en=x.keyMap={}
function tn(e){for(var t,r,n,i,o=e.split(/-(?!$)/),l=(e=o[o.length-1],0);l<o.length-1;l++){var s=o[l]
if(/^(cmd|meta|m)$/i.test(s))i=!0
else if(/^a(lt)?$/i.test(s))t=!0
else if(/^(c|ctrl|control)$/i.test(s))r=!0
else{if(!/^s(hift)$/i.test(s))throw new Error("Unrecognized modifier name: "+s)
n=!0}}return t&&(e="Alt-"+e),r&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),n&&(e="Shift-"+e),e}en.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},en.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},en.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"},en.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},en.default=p?en.macDefault:en.pcDefault,x.normalizeKeyMap=function(e){var t={}
for(var r in e)if(e.hasOwnProperty(r)){var n=e[r]
if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue
if("..."==n){delete e[r]
continue}for(var i=lo(r.split(" "),tn),o=0;o<i.length;o++){var l,s
o==i.length-1?(s=r,l=n):(s=i.slice(0,o+1).join(" "),l="...")
var a=t[s]
if(a){if(a!=l)throw new Error("Inconsistent bindings for "+s)}else t[s]=l}delete e[r]}for(var u in t)e[u]=t[u]
return e}
var rn=x.lookupKey=function(e,t,r,n){var i=(t=ln(t)).call?t.call(e,n):t[e]
if(!1===i)return"nothing"
if("..."===i)return"multi"
if(null!=i&&r(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return rn(e,t.fallthrough,r,n)
for(var o=0;o<t.fallthrough.length;o++){var l=rn(e,t.fallthrough[o],r,n)
if(l)return l}}},nn=x.isModifierKey=function(e){var t="string"==typeof e?e:Go[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t},on=x.keyName=function(e,t){if(a&&34==e.keyCode&&e.char)return!1
var r=Go[e.keyCode],n=r
return null!=n&&!e.altGraphKey&&(e.altKey&&"Alt"!=r&&(n="Alt-"+n),(m?e.metaKey:e.ctrlKey)&&"Ctrl"!=r&&(n="Ctrl-"+n),(m?e.ctrlKey:e.metaKey)&&"Cmd"!=r&&(n="Cmd-"+n),!t&&e.shiftKey&&"Shift"!=r&&(n="Shift-"+n),n)}
function ln(e){return"string"==typeof e?en[e]:e}x.fromTextArea=function(e,t){if((t=t?uo(t):{}).value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var r=So()
t.autofocus=r==e||null!=e.getAttribute("autofocus")&&r==document.body}function n(){e.value=s.getValue()}if(e.form&&(Ei(e.form,"submit",n),!t.leaveSubmitMethodAlone)){var i=e.form,o=i.submit
try{var l=i.submit=function(){n(),i.submit=o,i.submit(),i.submit=l}}catch(e){}}t.finishInit=function(t){t.save=n,t.getTextArea=function(){return e},t.toTextArea=function(){t.toTextArea=isNaN,n(),e.parentNode.removeChild(t.getWrapperElement()),e.style.display="",e.form&&(Fi(e.form,"submit",n),"function"==typeof e.form.submit&&(e.form.submit=o))}},e.style.display="none"
var s=x(function(t){e.parentNode.insertBefore(t,e.nextSibling)},t)
return s}
var sn=x.StringStream=function(e,t){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0}
sn.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},eat:function(e){var t=this.string.charAt(this.pos)
if("string"==typeof e)var r=t==e
else r=t&&(e.test?e.test(t):e(t))
if(r)return++this.pos,t},eatWhile:function(e){for(var t=this.pos;this.eat(e););return this.pos>t},eatSpace:function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>e},skipToEnd:function(){this.pos=this.string.length},skipTo:function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},backUp:function(e){this.pos-=e},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Ji(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Ji(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return Ji(this.string,null,this.tabSize)-(this.lineStart?Ji(this.string,this.lineStart,this.tabSize):0)},match:function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e)
return n&&n.index>0?null:(n&&!1!==t&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e}
if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}}}
var an=0,un=x.TextMarker=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++an}
Xi(un),un.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp
if(t&&Ht(e),ji(this,"clear")){var r=this.find()
r&&Gi(this,"clear",r.from,r.to)}for(var n=null,i=null,o=0;o<this.lines.length;++o){var l=this.lines[o],s=gn(l.markedSpans,this)
e&&!this.collapsed?Xt(e,vi(l),"text"):e&&(null!=s.to&&(i=vi(l)),null!=s.from&&(n=vi(l))),l.markedSpans=vn(l.markedSpans,s),null==s.from&&this.collapsed&&!Dn(this.doc,l)&&e&&gi(l,Mt(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(o=0;o<this.lines.length;++o){var a=An(this.lines[o]),u=W(a)
u>e.display.maxLineLength&&(e.display.maxLine=a,e.display.maxLineLength=u,e.display.maxLineChanged=!0)}null!=n&&e&&this.collapsed&&jt(e,n,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Ve(e.doc)),e&&Gi(e,"markerCleared",e,this),t&&It(e),this.parent&&this.parent.clear()}},un.prototype.find=function(e,t){var r,n
null==e&&"bookmark"==this.type&&(e=1)
for(var i=0;i<this.lines.length;++i){var o=this.lines[i],l=gn(o.markedSpans,this)
if(null!=l.from&&(r=ue(t?o:vi(o),l.from),-1==e))return r
if(null!=l.to&&(n=ue(t?o:vi(o),l.to),1==e))return n}return r&&{from:r,to:n}},un.prototype.changed=function(){var e=this.find(-1,!0),t=this,r=this.doc.cm
e&&r&&Rt(r,function(){var n=e.line,i=vi(e.line),o=at(r,i)
if(o&&(pt(o),r.curOp.selectionChanged=r.curOp.forceUpdate=!0),r.curOp.updateMaxLine=!0,!Dn(t.doc,n)&&null!=t.height){var l=t.height
t.height=null
var s=zn(t)-l
s&&gi(n,n.height+s)}})},un.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&-1!=oo(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},un.prototype.detachLine=function(e){if(this.lines.splice(oo(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}}
an=0
function cn(e,t,r,n,i){if(n&&n.shared)return function(e,t,r,n,i){(n=uo(n)).shared=!1
var o=[cn(e,t,r,n,i)],l=o[0],s=n.widgetNode
return ci(e,function(e){s&&(n.widgetNode=s.cloneNode(!0)),o.push(cn(e,De(e,t),De(e,r),n,i))
for(var a=0;a<e.linked.length;++a)if(e.linked[a].isParent)return
l=no(o)}),new fn(o,l)}(e,t,r,n,i)
if(e.cm&&!e.cm.curOp)return Bt(e.cm,cn)(e,t,r,n,i)
var o=new un(e,i),l=ce(t,r)
if(n&&uo(n,o,!1),l>0||0==l&&!1!==o.clearWhenEmpty)return o
if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=bo("span",[o.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),n.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(Nn(e,t.line,t,r,o)||t.line!=r.line&&Nn(e,r.line,t,r,o))throw new Error("Inserting collapsed marker partially overlapping an existing one")
w=!0}o.addToHistory&&Si(e,{from:t,to:r,origin:"markText"},e.sel,NaN)
var s,a=t.line,u=e.cm
if(e.iter(a,r.line+1,function(e){u&&o.collapsed&&!u.options.lineWrapping&&An(e)==u.display.maxLine&&(s=!0),o.collapsed&&a!=t.line&&gi(e,0),function(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}(e,new pn(o,a==t.line?t.ch:null,a==r.line?r.ch:null)),++a}),o.collapsed&&e.iter(t.line,r.line+1,function(t){Dn(e,t)&&gi(t,0)}),o.clearOnEnter&&Ei(o,"beforeCursorEnter",function(){o.clear()}),o.readOnly&&(b=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++an,o.atomic=!0),u){if(s&&(u.curOp.updateMaxLine=!0),o.collapsed)jt(u,t.line,r.line+1)
else if(o.className||o.title||o.startStyle||o.endStyle||o.css)for(var c=t.line;c<=r.line;c++)Xt(u,c,"text")
o.atomic&&Ve(u.doc),Gi(u,"markerAdded",u,o)}return o}var fn=x.SharedTextMarker=function(e,t){this.markers=e,this.primary=t
for(var r=0;r<e.length;++r)e[r].parent=this}
function hn(e){return e.findMarks(ue(e.first,0),e.clipPos(ue(e.lastLine())),function(e){return e.parent})}function dn(e){for(var t=0;t<e.length;t++){var r=e[t],n=[r.primary.doc]
ci(r.primary.doc,function(e){n.push(e)})
for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==oo(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1))}}}function pn(e,t,r){this.marker=e,this.from=t,this.to=r}function gn(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r]
if(n.marker==t)return n}}function vn(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n])
return r}function mn(e,t){if(t.full)return null
var r=He(e,t.from.line)&&hi(e,t.from.line).markedSpans,n=He(e,t.to.line)&&hi(e,t.to.line).markedSpans
if(!r&&!n)return null
var i=t.from.ch,o=t.to.ch,l=0==ce(t.from,t.to),s=function(e,t,r){if(e)for(var n,i=0;i<e.length;++i){var o=e[i],l=o.marker
if(null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==l.type&&(!r||!o.marker.insertLeft)){var s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new pn(l,o.from,s?null:o.to))}}return n}(r,i,l),a=function(e,t,r){if(e)for(var n,i=0;i<e.length;++i){var o=e[i],l=o.marker
if(null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==l.type&&(!r||o.marker.insertLeft)){var s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new pn(l,s?null:o.from-t,null==o.to?null:o.to-t))}}return n}(n,o,l),u=1==t.text.length,c=no(t.text).length+(u?i:0)
if(s)for(var f=0;f<s.length;++f){if(null==(h=s[f]).to)(d=gn(a,h.marker))?u&&(h.to=null==d.to?null:d.to+c):h.to=i}if(a)for(f=0;f<a.length;++f){var h,d
if(null!=(h=a[f]).to&&(h.to+=c),null==h.from)(d=gn(s,h.marker))||(h.from=c,u&&(s||(s=[])).push(h))
else h.from+=c,u&&(s||(s=[])).push(h)}s&&(s=yn(s)),a&&a!=s&&(a=yn(a))
var p=[s]
if(!u){var g,v=t.text.length-2
if(v>0&&s)for(f=0;f<s.length;++f)null==s[f].to&&(g||(g=[])).push(new pn(s[f].marker,null,null))
for(f=0;f<v;++f)p.push(g)
p.push(a)}return p}function yn(e){for(var t=0;t<e.length;++t){var r=e[t]
null!=r.from&&r.from==r.to&&!1!==r.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function bn(e,t){var r=function(e,t){var r=t["spans_"+e.id]
if(!r)return null
for(var n=0,i=[];n<t.text.length;++n)i.push(Ti(r[n]))
return i}(e,t),n=mn(e,t)
if(!r)return n
if(!n)return r
for(var i=0;i<r.length;++i){var o=r[i],l=n[i]
if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e
o.push(a)}else l&&(r[i]=l)}return r}function wn(e){var t=e.markedSpans
if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e)
e.markedSpans=null}}function xn(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e)
e.markedSpans=t}}function Cn(e){return e.inclusiveLeft?-1:0}function Sn(e){return e.inclusiveRight?1:0}function Ln(e,t){var r=e.lines.length-t.lines.length
if(0!=r)return r
var n=e.find(),i=t.find(),o=ce(n.from,i.from)||Cn(e)-Cn(t)
if(o)return-o
var l=ce(n.to,i.to)||Sn(e)-Sn(t)
return l||t.id-e.id}function kn(e,t){var r,n=w&&e.markedSpans
if(n)for(var i,o=0;o<n.length;++o)(i=n[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!r||Ln(r,i.marker)<0)&&(r=i.marker)
return r}function Tn(e){return kn(e,!0)}function Mn(e){return kn(e,!1)}function Nn(e,t,r,n,i){var o=hi(e,t),l=w&&o.markedSpans
if(l)for(var s=0;s<l.length;++s){var a=l[s]
if(a.marker.collapsed){var u=a.marker.find(0),c=ce(u.from,r)||Cn(a.marker)-Cn(i),f=ce(u.to,n)||Sn(a.marker)-Sn(i)
if(!(c>=0&&f<=0||c<=0&&f>=0)&&(c<=0&&(ce(u.to,r)>0||a.marker.inclusiveRight&&i.inclusiveLeft)||c>=0&&(ce(u.from,n)<0||a.marker.inclusiveLeft&&i.inclusiveRight)))return!0}}}function An(e){for(var t;t=Tn(e);)e=t.find(-1,!0).line
return e}function Wn(e,t){var r=hi(e,t),n=An(r)
return r==n?t:vi(n)}function On(e,t){if(t>e.lastLine())return t
var r,n=hi(e,t)
if(!Dn(e,n))return t
for(;r=Mn(n);)n=r.find(1,!0).line
return vi(n)+1}function Dn(e,t){var r=w&&t.markedSpans
if(r)for(var n,i=0;i<r.length;++i)if((n=r[i]).marker.collapsed){if(null==n.from)return!0
if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&Hn(e,t,n))return!0}}function Hn(e,t,r){if(null==r.to){var n=r.marker.find(1,!0)
return Hn(e,n.line,gn(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0
for(var i,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&Hn(e,t,i))return!0}Xi(fn),fn.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var e=0;e<this.markers.length;++e)this.markers[e].clear()
Gi(this,"clear")}},fn.prototype.find=function(e,t){return this.primary.find(e,t)}
var In=x.LineWidget=function(e,t,r){if(r)for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n])
this.cm=e,this.node=t}
function Pn(e,t,r){yi(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Ir(e,null,r)}function zn(e){if(null!=e.height)return e.height
if(!Co(document.body,e.node)){var t="position: relative;"
e.coverGutter&&(t+="margin-left: -"+e.cm.display.gutters.offsetWidth+"px;"),e.noHScroll&&(t+="width: "+e.cm.display.wrapper.clientWidth+"px;"),xo(e.cm.display.measure,bo("div",[e.node],null,t))}return e.height=e.node.offsetHeight}Xi(In),In.prototype.clear=function(){var e=this.cm,t=this.line.widgets,r=this.line,n=vi(r)
if(null!=n&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1)
t.length||(r.widgets=null)
var o=zn(this)
Rt(e,function(){Pn(e,r,-o),Xt(e,n,"widget"),gi(r,Math.max(0,r.height-o))})}},In.prototype.changed=function(){var e=this.height,t=this.cm,r=this.line
this.height=null
var n=zn(this)-e
n&&Rt(t,function(){t.curOp.forceUpdate=!0,Pn(t,r,n),gi(r,r.height+n)})}
var En=x.Line=function(e,t,r){this.text=e,xn(this,t),this.height=r?r(this):1}
function Fn(e){e.parent=null,wn(e)}function Rn(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!r)break
e=e.slice(0,r.index)+e.slice(r.index+r[0].length)
var n=r[1]?"bgClass":"textClass"
null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function Bn(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var r=x.innerMode(e,t)
return r.mode.blankLine?r.mode.blankLine(r.state):void 0}}function Gn(e,t,r,n){for(var i=0;i<10;i++){n&&(n[0]=x.innerMode(e,r).mode)
var o=e.token(t,r)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}function Un(e,t,r,n){function i(e){return{start:f.start,end:f.pos,string:f.current(),type:o||null,state:e?Zr(l.mode,c):c}}var o,l=e.doc,s=l.mode
t=De(l,t)
var a,u=hi(l,t.line),c=Je(e,t.line,r),f=new sn(u.text,e.options.tabSize)
for(n&&(a=[]);(n||f.pos<t.ch)&&!f.eol();)f.start=f.pos,o=Gn(s,f,c),n&&a.push(i(!0))
return n?a:i()}function Vn(e,t,r,n,i,o,l){var s=r.flattenSpans
null==s&&(s=e.options.flattenSpans)
var a,u=0,c=null,f=new sn(t,e.options.tabSize),h=e.options.addModeClass&&[null]
for(""==t&&Rn(Bn(r,n),o);!f.eol();){if(f.pos>e.options.maxHighlightLength?(s=!1,l&&Xn(e,t,n,f.pos),f.pos=t.length,a=null):a=Rn(Gn(r,f,n,h),o),h){var d=h[0].name
d&&(a="m-"+(a?d+" "+a:d))}if(!s||c!=a){for(;u<f.start;)i(u=Math.min(f.start,u+5e4),c)
c=a}f.start=f.pos}for(;u<f.pos;){var p=Math.min(f.pos,u+5e4)
i(p,c),u=p}}function Kn(e,t,r,n){var i=[e.state.modeGen],o={}
Vn(e,t.text,e.doc.mode,r,function(e,t){i.push(e,t)},o,n)
for(var l=0;l<e.state.overlays.length;++l){var s=e.state.overlays[l],a=1,u=0
Vn(e,t.text,s.mode,!0,function(e,t){for(var r=a;u<e;){var n=i[a]
n>e&&i.splice(a,1,e,i[a+1],n),a+=2,u=Math.min(e,n)}if(t)if(s.opaque)i.splice(r,a-r,e,"cm-overlay "+t),a=r+2
else for(;r<a;r+=2){var o=i[r+1]
i[r+1]=(o?o+" ":"")+"cm-overlay "+t}},o)}return{styles:i,classes:o.bgClass||o.textClass?o:null}}function jn(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=Kn(e,t,t.stateAfter=Je(e,vi(t)))
t.styles=n.styles,n.classes?t.styleClasses=n.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.frontier&&e.doc.frontier++}return t.styles}function Xn(e,t,r,n){var i=e.doc.mode,o=new sn(t,e.options.tabSize)
for(o.start=o.pos=n||0,""==t&&Bn(i,r);!o.eol()&&o.pos<=e.options.maxHighlightLength;)Gn(i,o,r),o.start=o.pos}Xi(En),En.prototype.lineNo=function(){return vi(this)}
var _n={},Yn={}
function $n(e,t){if(!e||/^\s*$/.test(e))return null
var r=t.addModeClass?Yn:_n
return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function qn(e,t){var r=bo("span",null,null,o?"padding-right: .1px":null),i={pre:bo("pre",[r]),content:r,col:0,pos:0,cm:e}
t.measure={}
for(var l=0;l<=(t.rest?t.rest.length:0);l++){var s,a=l?t.rest[l-1]:t.line
i.pos=0,i.addToken=Zn,(n||o)&&e.getOption("lineWrapping")&&(i.addToken=Qn(i.addToken)),Io(e.display.measure)&&(s=bi(a))&&(i.addToken=Jn(i.addToken,s)),i.map=[],ti(a,i,jn(e,a,t!=e.display.externalMeasured&&vi(a))),a.styleClasses&&(a.styleClasses.bgClass&&(i.bgClass=Mo(a.styleClasses.bgClass,i.bgClass||"")),a.styleClasses.textClass&&(i.textClass=Mo(a.styleClasses.textClass,i.textClass||""))),0==i.map.length&&i.map.push(0,0,i.content.appendChild(Ho(e.display.measure))),0==l?(t.measure.map=i.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(i.map),(t.measure.caches||(t.measure.caches=[])).push({}))}return o&&/\bcm-tab\b/.test(i.content.lastChild.className)&&(i.content.className="cm-tab-wrap-hack"),Ri(e,"renderLine",e,t.line,i.pre),i.pre.className&&(i.textClass=Mo(i.pre.className,i.textClass||"")),i}function Zn(e,t,r,o,l,s,a){if(t){var u=e.cm.options.specialChars,c=!1
if(u.test(t)){m=document.createDocumentFragment()
for(var f=0;;){u.lastIndex=f
var h=u.exec(t),d=h?h.index-f:t.length-f
if(d){var p=document.createTextNode(t.slice(f,f+d))
n&&i<9?m.appendChild(bo("span",[p])):m.appendChild(p),e.map.push(e.pos,e.pos+d,p),e.col+=d,e.pos+=d}if(!h)break
if(f+=d+1,"\t"==h[0]){var g=e.cm.options.tabSize,v=g-e.col%g;(p=m.appendChild(bo("span",ro(v),"cm-tab"))).setAttribute("role","presentation"),p.setAttribute("cm-text","\t"),e.col+=v}else{(p=e.cm.options.specialCharPlaceholder(h[0])).setAttribute("cm-text",h[0]),n&&i<9?m.appendChild(bo("span",[p])):m.appendChild(p),e.col+=1}e.map.push(e.pos,e.pos+1,p),e.pos++}}else{e.col+=t.length
var m=document.createTextNode(t)
e.map.push(e.pos,e.pos+t.length,m),n&&i<9&&(c=!0),e.pos+=t.length}if(r||o||l||c||a){var y=r||""
o&&(y+=o),l&&(y+=l)
var b=bo("span",[m],y,a)
return s&&(b.title=s),e.content.appendChild(b)}e.content.appendChild(m)}}function Qn(e){function t(e){for(var t=" ",r=0;r<e.length-2;++r)t+=r%2?" ":" "
return t+=" "}return function(r,n,i,o,l,s){e(r,n.replace(/ {3,}/g,t),i,o,l,s)}}function Jn(e,t){return function(r,n,i,o,l,s){i=i?i+" cm-force-border":"cm-force-border"
for(var a=r.pos,u=a+n.length;;){for(var c=0;c<t.length;c++){var f=t[c]
if(f.to>a&&f.from<=a)break}if(f.to>=u)return e(r,n,i,o,l,s)
e(r,n.slice(0,f.to-a),i,o,null,s),o=null,n=n.slice(f.to-a),a=f.to}}}function ei(e,t,r,n){var i=!n&&r.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t}function ti(e,t,r){var n=e.markedSpans,i=e.text,o=0
if(n)for(var l,s,a,u,c,f,h,d=i.length,p=0,g=(L=1,""),v=0;;){if(v==p){a=u=c=f=s="",h=null,v=1/0
for(var m=[],y=0;y<n.length;++y){var b=n[y],w=b.marker
b.from<=p&&(null==b.to||b.to>p)?(null!=b.to&&v>b.to&&(v=b.to,u=""),w.className&&(a+=" "+w.className),w.css&&(s=w.css),w.startStyle&&b.from==p&&(c+=" "+w.startStyle),w.endStyle&&b.to==v&&(u+=" "+w.endStyle),w.title&&!f&&(f=w.title),w.collapsed&&(!h||Ln(h.marker,w)<0)&&(h=b)):b.from>p&&v>b.from&&(v=b.from),"bookmark"==w.type&&b.from==p&&w.widgetNode&&m.push(w)}if(h&&(h.from||0)==p&&(ei(t,(null==h.to?d+1:h.to)-p,h.marker,null==h.from),null==h.to))return
if(!h&&m.length)for(y=0;y<m.length;++y)ei(t,0,m[y])}if(p>=d)break
for(var x=Math.min(d,v);;){if(g){var C=p+g.length
if(!h){var S=C>x?g.slice(0,x-p):g
t.addToken(t,S,l?l+a:a,c,p+S.length==v?u:"",f,s)}if(C>=x){g=g.slice(x-p),p=x
break}p=C,c=""}g=i.slice(o,o=r[L++]),l=$n(r[L++],t.cm.options)}}else for(var L=1;L<r.length;L+=2)t.addToken(t,i.slice(o,o=r[L]),$n(r[L+1],t.cm.options))}function ri(e,t){return 0==t.from.ch&&0==t.to.ch&&""==no(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function ni(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){(function(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),wn(e),xn(e,r)
var i=n?n(e):1
i!=e.height&&gi(e,i)})(e,r,i,n),Gi(e,"change",e,t)}function l(e,t){for(var r=e,o=[];r<t;++r)o.push(new En(u[r],i(r),n))
return o}var s=t.from,a=t.to,u=t.text,c=hi(e,s.line),f=hi(e,a.line),h=no(u),d=i(u.length-1),p=a.line-s.line
if(t.full)e.insert(0,l(0,u.length)),e.remove(u.length,e.size-u.length)
else if(ri(e,t)){var g=l(0,u.length-1)
o(f,f.text,d),p&&e.remove(s.line,p),g.length&&e.insert(s.line,g)}else if(c==f){if(1==u.length)o(c,c.text.slice(0,s.ch)+h+c.text.slice(a.ch),d)
else(g=l(1,u.length-1)).push(new En(h+c.text.slice(a.ch),d,n)),o(c,c.text.slice(0,s.ch)+u[0],i(0)),e.insert(s.line+1,g)}else if(1==u.length)o(c,c.text.slice(0,s.ch)+u[0]+f.text.slice(a.ch),i(0)),e.remove(s.line+1,p)
else{o(c,c.text.slice(0,s.ch)+u[0],i(0)),o(f,h+f.text.slice(a.ch),d)
g=l(1,u.length-1)
p>1&&e.remove(s.line+1,p-1),e.insert(s.line+1,g)}Gi(e,"change",e,t)}function ii(e){this.lines=e,this.parent=null
for(var t=0,r=0;t<e.length;++t)e[t].parent=this,r+=e[t].height
this.height=r}function oi(e){this.children=e
for(var t=0,r=0,n=0;n<e.length;++n){var i=e[n]
t+=i.chunkSize(),r+=i.height,i.parent=this}this.size=t,this.height=r,this.parent=null}ii.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=e,n=e+t;r<n;++r){var i=this.lines[r]
this.height-=i.height,Fn(i),Gi(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var n=0;n<t.length;++n)t[n].parent=this},iterN:function(e,t,r){for(var n=e+t;e<n;++e)if(r(this.lines[e]))return!0}},oi.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t
for(var r=0;r<this.children.length;++r){var n=this.children[r],i=n.chunkSize()
if(e<i){var o=Math.min(t,i-e),l=n.height
if(n.removeInner(e,o),this.height-=l-n.height,i==o&&(this.children.splice(r--,1),n.parent=null),0==(t-=o))break
e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof ii))){var s=[]
this.collapse(s),this.children=[new ii(s)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,r){this.size+=t.length,this.height+=r
for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize()
if(e<=o){if(i.insertInner(e,t,r),i.lines&&i.lines.length>50){for(;i.lines.length>50;){var l=new ii(i.lines.splice(i.lines.length-25,25))
i.height-=l.height,this.children.splice(n+1,0,l),l.parent=this}this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=new oi(e.children.splice(e.children.length-5,5))
if(e.parent){e.size-=t.size,e.height-=t.height
var r=oo(e.parent.children,e)
e.parent.children.splice(r+1,0,t)}else{var n=new oi(e.children)
n.parent=e,e.children=[n,t],e=n}t.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize()
if(e<o){var l=Math.min(t,o-e)
if(i.iterN(e,l,r))return!0
if(0==(t-=l))break
e=0}else e-=o}}}
var li=0,si=x.Doc=function(e,t,r){if(!(this instanceof si))return new si(e,t,r)
null==r&&(r=0),oi.call(this,[new ii([new En("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=r
var n=ue(r,0)
this.sel=We(n),this.history=new wi(null),this.id=++li,this.modeOption=t,"string"==typeof e&&(e=zo(e)),ni(this,{from:n,to:n,text:e}),Be(this,We(n),$i)}
si.prototype=ao(oi.prototype,{constructor:si,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height
this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=pi(this,this.first,this.first+this.size)
return!1===e?t:t.join(e||"\n")},setValue:Ut(function(e){var t=ue(this.first,0),r=this.first+this.size-1
Mr(this,{from:t,to:ue(r,hi(this,r).text.length),text:zo(e),origin:"setValue",full:!0},!0),Be(this,We(t))}),replaceRange:function(e,t,r,n){Dr(this,e,t=De(this,t),r=r?De(this,r):t,n)},getRange:function(e,t,r){var n=di(this,De(this,e),De(this,t))
return!1===r?n:n.join(r||"\n")},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(He(this,e))return hi(this,e)},getLineNumber:function(e){return vi(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=hi(this,e)),An(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return De(this,e)},getCursor:function(e){var t=this.sel.primary()
return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:Ut(function(e,t,r){Fe(this,De(this,"number"==typeof e?ue(e,t||0):e),null,r)}),setSelection:Ut(function(e,t,r){Fe(this,De(this,e),De(this,t||e),r)}),extendSelection:Ut(function(e,t,r){Pe(this,De(this,e),t&&De(this,t),r)}),extendSelections:Ut(function(e,t){ze(this,function(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=De(e,t[n])
return r}(this,e))}),extendSelectionsBy:Ut(function(e,t){ze(this,lo(this.sel.ranges,e),t)}),setSelections:Ut(function(e,t,r){if(e.length){for(var n=0,i=[];n<e.length;n++)i[n]=new Ne(De(this,e[n].anchor),De(this,e[n].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),Be(this,Ae(i,t),r)}}),addSelection:Ut(function(e,t,r){var n=this.sel.ranges.slice(0)
n.push(new Ne(De(this,e),De(this,t||e))),Be(this,Ae(n,n.length-1),r)}),getSelection:function(e){for(var t,r=this.sel.ranges,n=0;n<r.length;n++){var i=di(this,r[n].from(),r[n].to())
t=t?t.concat(i):i}return!1===e?t:t.join(e||"\n")},getSelections:function(e){for(var t=[],r=this.sel.ranges,n=0;n<r.length;n++){var i=di(this,r[n].from(),r[n].to())
!1!==e&&(i=i.join(e||"\n")),t[n]=i}return t},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e
this.replaceSelections(n,t,r||"+input")},replaceSelections:Ut(function(e,t,r){for(var n=[],i=this.sel,o=0;o<i.ranges.length;o++){var l=i.ranges[o]
n[o]={from:l.from(),to:l.to(),text:zo(e[o]),origin:r}}var s=t&&"end"!=t&&function(e,t,r){for(var n=[],i=ue(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=kr(s.from,i,o),u=kr(Cr(s),i,o)
if(i=s.to,o=u,"around"==r){var c=e.sel.ranges[l],f=ce(c.head,c.anchor)<0
n[l]=new Ne(f?u:a,f?a:u)}else n[l]=new Ne(a,a)}return new Me(n,e.sel.primIndex)}(this,n,t)
for(o=n.length-1;o>=0;o--)Mr(this,n[o])
s?Re(this,s):this.cm&&Pr(this.cm)}),undo:Ut(function(){Ar(this,"undo")}),redo:Ut(function(){Ar(this,"redo")}),undoSelection:Ut(function(){Ar(this,"undo",!0)}),redoSelection:Ut(function(){Ar(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t
for(n=0;n<e.undone.length;n++)e.undone[n].ranges||++r
return{undo:t,redo:r}},clearHistory:function(){this.history=new wi(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Mi(this.history.done),undone:Mi(this.history.undone)}},setHistory:function(e){var t=this.history=new wi(this.history.maxGeneration)
t.done=Mi(e.done.slice(0),null,!0),t.undone=Mi(e.undone.slice(0),null,!0)},addLineClass:Ut(function(e,t,r){return Fr(this,e,"gutter"==t?"gutter":"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass"
if(e[n]){if(Lo(r).test(e[n]))return!1
e[n]+=" "+r}else e[n]=r
return!0})}),removeLineClass:Ut(function(e,t,r){return Fr(this,e,"gutter"==t?"gutter":"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[n]
if(!i)return!1
if(null==r)e[n]=null
else{var o=i.match(Lo(r))
if(!o)return!1
var l=o.index+o[0].length
e[n]=i.slice(0,o.index)+(o.index&&l!=i.length?" ":"")+i.slice(l)||null}return!0})}),markText:function(e,t,r){return cn(this,De(this,e),De(this,t),r,"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared}
return cn(this,e=De(this,e),e,r,"bookmark")},findMarksAt:function(e){var t=[],r=hi(this,(e=De(this,e)).line).markedSpans
if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,r){e=De(this,e),t=De(this,t)
var n=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var l=o.markedSpans
if(l)for(var s=0;s<l.length;s++){var a=l[s]
i==e.line&&e.ch>a.to||null==a.from&&i!=e.line||i==t.line&&a.from>t.ch||r&&!r(a.marker)||n.push(a.marker.parent||a.marker)}++i}),n},getAllMarks:function(){var e=[]
return this.iter(function(t){var r=t.markedSpans
if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker)}),e},posFromIndex:function(e){var t,r=this.first
return this.iter(function(n){var i=n.text.length+1
if(i>e)return t=e,!0
e-=i,++r}),De(this,ue(r,t))},indexFromPos:function(e){var t=(e=De(this,e)).ch
return e.line<this.first||e.ch<0?0:(this.iter(this.first,e.line,function(e){t+=e.text.length+1}),t)},copy:function(e){var t=new si(pi(this,this.first,this.first+this.size),this.modeOption,this.first)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,r=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to)
var n=new si(pi(this,t,r),e.mode||this.modeOption,t)
return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to)
if(ce(o,l)){var s=cn(e,o,l,n.primary,n.primary.type)
n.markers.push(s),s.parent=n}}}(n,hn(this)),n},unlinkDoc:function(e){if(e instanceof x&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t){if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),dn(hn(this))
break}}if(e.history==this.history){var r=[e.id]
ci(e,function(e){r.push(e.id)},!0),e.history=new wi(null),e.history.done=Mi(this.history.done,r),e.history.undone=Mi(this.history.undone,r)}},iterLinkedDocs:function(e){ci(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm}}),si.prototype.eachLine=si.prototype.iter
var ai="iter insert remove copy getEditor".split(" ")
for(var ui in si.prototype)si.prototype.hasOwnProperty(ui)&&oo(ai,ui)<0&&(x.prototype[ui]=function(e){return function(){return e.apply(this.doc,arguments)}}(si.prototype[ui]))
function ci(e,t,r){(function e(n,i,o){if(n.linked)for(var l=0;l<n.linked.length;++l){var s=n.linked[l]
if(s.doc!=i){var a=o&&s.sharedHist
r&&!a||(t(s.doc,a),e(s.doc,n,a))}}})(e,null,!0)}function fi(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,k(e),C(e),e.options.lineWrapping||O(e),e.options.mode=t.modeOption,jt(e)}function hi(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize()
if(t<o){r=i
break}t-=o}return r.lines[t]}function di(e,t,r){var n=[],i=t.line
return e.iter(t.line,r.line+1,function(e){var o=e.text
i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i}),n}function pi(e,t,r){var n=[]
return e.iter(t,r,function(e){n.push(e.text)}),n}function gi(e,t){var r=t-e.height
if(r)for(var n=e;n;n=n.parent)n.height+=r}function vi(e){if(null==e.parent)return null
for(var t=e.parent,r=oo(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize()
return r+t.first}function mi(e,t){var r=e.first
e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height
if(t<o){e=i
continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines)
for(n=0;n<e.lines.length;++n){var l=e.lines[n].height
if(t<l)break
t-=l}return r+n}function yi(e){for(var t=0,r=(e=An(e)).parent,n=0;n<r.lines.length;++n){var i=r.lines[n]
if(i==e)break
t+=i.height}for(var o=r.parent;o;o=(r=o).parent)for(n=0;n<o.children.length;++n){var l=o.children[n]
if(l==r)break
t+=l.height}return t}function bi(e){var t=e.order
return null==t&&(t=e.order=Jo(e.text)),t}function wi(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function xi(e,t){var r={from:fe(t.from),to:Cr(t),text:di(e,t.from,t.to)}
return ki(e,r,t.from.line,t.to.line+1),ci(e,function(e){ki(e,r,t.from.line,t.to.line+1)},!0),r}function Ci(e){for(;e.length;){if(!no(e).ranges)break
e.pop()}}function Si(e,t,r,n){var i=e.history
i.undone.length=0
var o,l=+new Date
if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&e.cm&&i.lastModTime>l-e.cm.options.historyEventDelay||"*"==t.origin.charAt(0)))&&(o=function(e,t){return t?(Ci(e.done),no(e.done)):e.done.length&&!no(e.done).ranges?no(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),no(e.done)):void 0}(i,i.lastOp==n))){var s=no(o.changes)
0==ce(t.from,t.to)&&0==ce(t.from,s.to)?s.to=Cr(t):o.changes.push(xi(e,t))}else{var a=no(i.done)
for(a&&a.ranges||Li(e.sel,i.done),o={changes:[xi(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=l,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,s||Ri(e,"historyAdded")}function Li(e,t){var r=no(t)
r&&r.ranges&&r.equals(e)||t.push(e)}function ki(e,t,r,n){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o})}function Ti(e){if(!e)return null
for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r])
return t?t.length?t:null:e}function Mi(e,t,r){for(var n=0,i=[];n<e.length;++n){var o=e[n]
if(o.ranges)i.push(r?Me.prototype.deepCopy.call(o):o)
else{var l=o.changes,s=[]
i.push({changes:s})
for(var a=0;a<l.length;++a){var u,c=l[a]
if(s.push({from:c.from,to:c.to,text:c.text}),t)for(var f in c)(u=f.match(/^spans_(\d+)$/))&&oo(t,Number(u[1]))>-1&&(no(s)[f]=c[f],delete c[f])}}}return i}function Ni(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function Ai(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0
if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0)
for(var s=0;s<o.ranges.length;s++)Ni(o.ranges[s].anchor,t,r,n),Ni(o.ranges[s].head,t,r,n)}else{for(s=0;s<o.changes.length;++s){var a=o.changes[s]
if(r<a.from.line)a.from=ue(a.from.line+n,a.from.ch),a.to=ue(a.to.line+n,a.to.ch)
else if(t<=a.to.line){l=!1
break}}l||(e.splice(0,i+1),i=0)}}}function Wi(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1
Ai(e.done,r,n,i),Ai(e.undone,r,n,i)}Xi(si)
var Oi=x.e_preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},Di=x.e_stopPropagation=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}
function Hi(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}var Ii=x.e_stop=function(e){Oi(e),Di(e)}
function Pi(e){return e.target||e.srcElement}function zi(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),p&&e.ctrlKey&&1==t&&(t=3),t}var Ei=x.on=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1)
else if(e.attachEvent)e.attachEvent("on"+t,r)
else{var n=e._handlers||(e._handlers={});(n[t]||(n[t]=[])).push(r)}},Fi=x.off=function(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1)
else if(e.detachEvent)e.detachEvent("on"+t,r)
else{var n=e._handlers&&e._handlers[t]
if(!n)return
for(var i=0;i<n.length;++i)if(n[i]==r){n.splice(i,1)
break}}},Ri=x.signal=function(e,t){var r=e._handlers&&e._handlers[t]
if(r)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)},Bi=null
function Gi(e,t){var r=e._handlers&&e._handlers[t]
if(r){var n,i=Array.prototype.slice.call(arguments,2)
Ot?n=Ot.delayedCallbacks:Bi?n=Bi:(n=Bi=[],setTimeout(Ui,0))
for(var o=0;o<r.length;++o)n.push(l(r[o]))}function l(e){return function(){e.apply(null,i)}}}function Ui(){var e=Bi
Bi=null
for(var t=0;t<e.length;++t)e[t]()}function Vi(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Ri(e,r||t.type,e,t),Hi(t)||t.codemirrorIgnore}function Ki(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==oo(r,t[n])&&r.push(t[n])}function ji(e,t){var r=e._handlers&&e._handlers[t]
return r&&r.length>0}function Xi(e){e.prototype.on=function(e,t){Ei(this,e,t)},e.prototype.off=function(e,t){Fi(this,e,t)}}var _i=30,Yi=x.Pass={toString:function(){return"CodeMirror.Pass"}},$i={scroll:!1},qi={origin:"*mouse"},Zi={origin:"+move"}
function Qi(){this.id=null}Qi.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)}
var Ji=x.countColumn=function(e,t,r,n,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length)
for(var o=n||0,l=i||0;;){var s=e.indexOf("\t",o)
if(s<0||s>=t)return l+(t-o)
l+=s-o,l+=r-l%r,o=s+1}}
function eo(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("\t",n);-1==o&&(o=e.length)
var l=o-n
if(o==e.length||i+l>=t)return n+Math.min(l,t-i)
if(i+=o-n,n=o+1,(i+=r-i%r)>=t)return n}}var to=[""]
function ro(e){for(;to.length<=e;)to.push(no(to)+" ")
return to[e]}function no(e){return e[e.length-1]}var io=function(e){e.select()}
function oo(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r
return-1}function lo(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n)
return r}function so(){}function ao(e,t){var r
return Object.create?r=Object.create(e):(so.prototype=e,r=new so),t&&uo(t,r),r}function uo(e,t,r){for(var n in t||(t={}),e)!e.hasOwnProperty(n)||!1===r&&t.hasOwnProperty(n)||(t[n]=e[n])
return t}function co(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}h?io=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:n&&(io=function(e){try{e.select()}catch(e){}})
var fo=/[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,ho=x.isWordChar=function(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||fo.test(e))}
function po(e,t){return t?!!(t.source.indexOf("\\w")>-1&&ho(e))||t.test(e):ho(e)}function go(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}var vo,mo=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function yo(e){return e.charCodeAt(0)>=768&&mo.test(e)}function bo(e,t,r,n){var i=document.createElement(e)
if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function wo(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function xo(e,t){return wo(e).appendChild(t)}vo=document.createRange?function(e,t,r,n){var i=document.createRange()
return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange()
try{n.moveToElementText(e.parentNode)}catch(e){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n}
var Co=x.contains=function(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}
function So(){return document.activeElement}function Lo(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}n&&i<11&&(So=function(){try{return document.activeElement}catch(e){return document.body}})
var ko=x.rmClass=function(e,t){var r=e.className,n=Lo(t).exec(r)
if(n){var i=r.slice(n.index+n[0].length)
e.className=r.slice(0,n.index)+(i?n[1]+i:"")}},To=x.addClass=function(e,t){var r=e.className
Lo(t).test(r)||(e.className+=(r?" ":"")+t)}
function Mo(e,t){for(var r=e.split(" "),n=0;n<r.length;n++)r[n]&&!Lo(r[n]).test(t)&&(t+=" "+r[n])
return t}function No(e){if(document.body.getElementsByClassName)for(var t=document.body.getElementsByClassName("CodeMirror"),r=0;r<t.length;r++){var n=t[r].CodeMirror
n&&e(n)}}var Ao=!1
var Wo,Oo,Do=function(){if(n&&i<9)return!1
var e=bo("div")
return"draggable"in e||"dragDrop"in e}()
function Ho(e){if(null==Wo){var t=bo("span","​")
xo(e,bo("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Wo=t.offsetWidth<=1&&t.offsetHeight>2&&!(n&&i<8))}var r=Wo?bo("span","​"):bo("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return r.setAttribute("cm-text",""),r}function Io(e){if(null!=Oo)return Oo
var t=xo(e,document.createTextNode("AخA")),r=vo(t,0,1).getBoundingClientRect()
if(!r||r.left==r.right)return!1
var n=vo(t,1,2).getBoundingClientRect()
return Oo=n.right-r.right<3}var Po,zo=x.splitLines=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;t<=n;){var i=e.indexOf("\n",t);-1==i&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r");-1!=l?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},Eo=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){try{var t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Fo="oncopy"in(Po=bo("div"))||(Po.setAttribute("oncopy","return;"),"function"==typeof Po.oncopy),Ro=null
var Bo,Go={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"}
function Uo(e){return e.level%2?e.to:e.from}function Vo(e){return e.level%2?e.from:e.to}function Ko(e){var t=bi(e)
return t?Uo(t[0]):0}function jo(e){var t=bi(e)
return t?Vo(no(t)):e.text.length}function Xo(e,t){var r=hi(e.doc,t),n=An(r)
n!=r&&(t=vi(n))
var i=bi(n),o=i?i[0].level%2?jo(n):Ko(n):0
return ue(t,o)}function _o(e,t){var r=Xo(e,t.line),n=hi(e.doc,r.line),i=bi(n)
if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch
return ue(r.line,l?0:o)}return r}function Yo(e,t,r){var n=e[0].level
return t==n||r!=n&&t<r}function $o(e,t){Bo=null
for(var r,n=0;n<e.length;++n){var i=e[n]
if(i.from<t&&i.to>t)return n
if(i.from==t||i.to==t){if(null!=r)return Yo(e,i.level,e[r].level)?(i.from!=i.to&&(Bo=r),n):(i.from!=i.to&&(Bo=n),r)
r=n}}return r}function qo(e,t,r,n){if(!n)return t+r
do{t+=r}while(t>0&&yo(e.text.charAt(t)))
return t}function Zo(e,t,r,n){var i=bi(e)
if(!i)return Qo(e,t,r,n)
for(var o=$o(i,t),l=i[o],s=qo(e,t,l.level%2?-r:r,n);;){if(s>l.from&&s<l.to)return s
if(s==l.from||s==l.to)return $o(i,s)==o?s:r>0==(l=i[o+=r]).level%2?l.to:l.from
if(!(l=i[o+=r]))return null
s=r>0==l.level%2?qo(e,l.to,-1,n):qo(e,l.from,1,n)}}function Qo(e,t,r,n){var i=t+r
if(n)for(;i>0&&yo(e.text.charAt(i));)i+=r
return i<0||i>e.text.length?null:i}x.keyNames=Go,function(){for(var e=0;e<10;e++)Go[e+48]=Go[e+96]=String(e)
for(e=65;e<=90;e++)Go[e]=String.fromCharCode(e)
for(e=1;e<=12;e++)Go[e+111]=Go[e+63235]="F"+e}()
var Jo=function(){var e="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",t="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm"
var r=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,n=/[stwN]/,i=/[LRr]/,o=/[Lb1n]/,l=/[1n]/
function s(e,t,r){this.level=e,this.from=t,this.to=r}return function(a){if(!r.test(a))return!1
for(var u,c=a.length,f=[],h=0;h<c;++h)f.push(y=(u=a.charCodeAt(h))<=247?e.charAt(u):1424<=u&&u<=1524?"R":1536<=u&&u<=1773?t.charAt(u-1536):1774<=u&&u<=2220?"r":8192<=u&&u<=8203?"w":8204==u?"b":"L")
h=0
for(var d="L";h<c;++h){"m"==(y=f[h])?f[h]=d:d=y}h=0
for(var p="L";h<c;++h){"1"==(y=f[h])&&"r"==p?f[h]="n":i.test(y)&&(p=y,"r"==y&&(f[h]="R"))}for(h=1,d=f[0];h<c-1;++h){"+"==(y=f[h])&&"1"==d&&"1"==f[h+1]?f[h]="1":","!=y||d!=f[h+1]||"1"!=d&&"n"!=d||(f[h]=d),d=y}for(h=0;h<c;++h){if(","==(y=f[h]))f[h]="N"
else if("%"==y){for(var g=h+1;g<c&&"%"==f[g];++g);for(var v=h&&"!"==f[h-1]||g<c&&"1"==f[g]?"1":"N",m=h;m<g;++m)f[m]=v
h=g-1}}for(h=0,p="L";h<c;++h){var y=f[h]
"L"==p&&"1"==y?f[h]="L":i.test(y)&&(p=y)}for(h=0;h<c;++h)if(n.test(f[h])){for(g=h+1;g<c&&n.test(f[g]);++g);var b="L"==(h?f[h-1]:"L"),w="L"==(g<c?f[g]:"L")
for(v=b||w?"L":"R",m=h;m<g;++m)f[m]=v
h=g-1}var x,C=[]
for(h=0;h<c;)if(o.test(f[h])){var S=h
for(++h;h<c&&o.test(f[h]);++h);C.push(new s(0,S,h))}else{var L=h,k=C.length
for(++h;h<c&&"L"!=f[h];++h);for(m=L;m<h;)if(l.test(f[m])){L<m&&C.splice(k,0,new s(1,L,m))
var T=m
for(++m;m<h&&l.test(f[m]);++m);C.splice(k,0,new s(2,T,m)),L=m}else++m
L<h&&C.splice(k,0,new s(1,L,h))}return 1==C[0].level&&(x=a.match(/^\s+/))&&(C[0].from=x[0].length,C.unshift(new s(0,0,x[0].length))),1==no(C).level&&(x=a.match(/\s+$/))&&(no(C).to-=x[0].length,C.push(new s(0,c-x[0].length,c))),C[0].level!=no(C).level&&C.push(new s(C[0].level,c,c)),C}}()
return x.version="5.0.0",x})