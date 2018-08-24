(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){"use strict"
var e="CodeMirror-hint",i="CodeMirror-hint-active"
t.showHint=function(t,e,i){if(!e)return t.showHint(i)
i&&i.async&&(e.async=!0)
var n={hint:e}
if(i)for(var o in i)n[o]=i[o]
return t.showHint(n)}
var n=0
function o(t,e,i,o){if(t.async){var s=++n
t(e,function(t){n==s&&o(t)},i)}else o(t(e,i))}function s(t,e){this.cm=t,this.options=this.buildOptions(e),this.widget=this.onClose=null}function c(t){return"string"==typeof t?t:t.text}function l(t,e){for(;e&&e!=t;){if("LI"===e.nodeName.toUpperCase()&&e.parentNode==t)return e
e=e.parentNode}}function r(n,o){this.completion=n,this.data=o
var s=this,r=n.cm,h=this.hints=document.createElement("ul")
h.className="CodeMirror-hints",this.selectedHint=o.selectedHint||0
for(var f=o.list,a=0;a<f.length;++a){var u=h.appendChild(document.createElement("li")),p=f[a],d=e+(a!=this.selectedHint?"":" "+i)
null!=p.className&&(d=p.className+" "+d),u.className=d,p.render?p.render(u,o,p):u.appendChild(document.createTextNode(p.displayText||c(p))),u.hintId=a}var m=r.cursorCoords(n.options.alignWithWord?o.from:null),g=m.left,v=m.bottom,w=!0
h.style.left=g+"px",h.style.top=v+"px"
var y=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth),C=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);(n.options.container||document.body).appendChild(h)
var H=h.getBoundingClientRect()
if(H.bottom-C>0){var b=H.bottom-H.top
if(m.top-(m.bottom-H.top)-b>0)h.style.top=(v=m.top-b)+"px",w=!1
else if(b>C){h.style.height=C-5+"px",h.style.top=(v=m.bottom-H.top)+"px"
var x=r.getCursor()
o.from.ch!=x.ch&&(m=r.cursorCoords(x),h.style.left=(g=m.left)+"px",H=h.getBoundingClientRect())}}var k,A=H.right-y;(A>0&&(H.right-H.left>y&&(h.style.width=y-5+"px",A-=H.right-H.left-y),h.style.left=(g=m.left-A)+"px"),r.addKeyMap(this.keyMap=function(t,e){var i={Up:function(){e.moveFocus(-1)},Down:function(){e.moveFocus(1)},PageUp:function(){e.moveFocus(1-e.menuSize(),!0)},PageDown:function(){e.moveFocus(e.menuSize()-1,!0)},Home:function(){e.setFocus(0)},End:function(){e.setFocus(e.length-1)},Enter:e.pick,Tab:e.pick,Esc:e.close},n=t.options.customKeys,o=n?{}:i
function s(t,n){var s
s="string"!=typeof n?function(t){return n(t,e)}:i.hasOwnProperty(n)?i[n]:n,o[t]=s}if(n)for(var c in n)n.hasOwnProperty(c)&&s(c,n[c])
var l=t.options.extraKeys
if(l)for(var c in l)l.hasOwnProperty(c)&&s(c,l[c])
return o}(n,{moveFocus:function(t,e){s.changeActive(s.selectedHint+t,e)},setFocus:function(t){s.changeActive(t)},menuSize:function(){return s.screenAmount()},length:f.length,close:function(){n.close()},pick:function(){s.pick()},data:o})),n.options.closeOnUnfocus)&&(r.on("blur",this.onBlur=function(){k=setTimeout(function(){n.close()},100)}),r.on("focus",this.onFocus=function(){clearTimeout(k)}))
var T=r.getScrollInfo()
return r.on("scroll",this.onScroll=function(){var t=r.getScrollInfo(),e=r.getWrapperElement().getBoundingClientRect(),i=v+T.top-t.top,o=i-(window.pageYOffset||(document.documentElement||document.body).scrollTop)
if(w||(o+=h.offsetHeight),o<=e.top||o>=e.bottom)return n.close()
h.style.top=i+"px",h.style.left=g+T.left-t.left+"px"}),t.on(h,"dblclick",function(t){var e=l(h,t.target||t.srcElement)
e&&null!=e.hintId&&(s.changeActive(e.hintId),s.pick())}),t.on(h,"click",function(t){var e=l(h,t.target||t.srcElement)
e&&null!=e.hintId&&(s.changeActive(e.hintId),n.options.completeOnSingleClick&&s.pick())}),t.on(h,"mousedown",function(){setTimeout(function(){r.focus()},20)}),t.signal(o,"select",f[0],h.firstChild),!0}t.defineExtension("showHint",function(e){if(!(this.listSelections().length>1||this.somethingSelected())){this.state.completionActive&&this.state.completionActive.close()
var i=this.state.completionActive=new s(this,e),n=i.options.hint
if(n)return t.signal(this,"startCompletion",this),o(n,this,i.options,function(t){i.showHints(t)})}}),s.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.widget&&this.widget.close(),this.onClose&&this.onClose(),t.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(e,i){var n=e.list[i]
n.hint?n.hint(this.cm,e,n):this.cm.replaceRange(c(n),n.from||e.from,n.to||e.to,"complete"),t.signal(e,"pick",n),this.close()},showHints:function(t){if(!t||!t.list.length||!this.active())return this.close()
this.options.completeSingle&&1==t.list.length?this.pick(t,0):this.showWidget(t)},showWidget:function(e){this.widget=new r(this,e),t.signal(e,"shown")
var i,n=0,s=this,c=this.options.closeCharacters,l=this.cm.getCursor(),h=this.cm.getLine(l.line).length,f=window.requestAnimationFrame||function(t){return setTimeout(t,1e3/60)},a=window.cancelAnimationFrame||clearTimeout
function u(){i||(i=!0,s.close(),s.cm.off("cursorActivity",m),e&&t.signal(e,"close"))}function p(){i||(t.signal(e,"update"),o(s.options.hint,s.cm,s.options,d))}function d(t){if(e=t,!i){if(!e||!e.list.length)return u()
s.widget&&s.widget.close(),s.widget=new r(s,e)}}function m(){n&&(a(n),n=0)
var t=s.cm.getCursor(),e=s.cm.getLine(t.line)
t.line!=l.line||e.length-t.ch!=h-l.ch||t.ch<l.ch||s.cm.somethingSelected()||t.ch&&c.test(e.charAt(t.ch-1))?s.close():(n=f(p),s.widget&&s.widget.close())}this.cm.on("cursorActivity",m),this.onClose=u},buildOptions:function(t){var e=this.cm.options.hintOptions,i={}
for(var n in h)i[n]=h[n]
if(e)for(var n in e)void 0!==e[n]&&(i[n]=e[n])
if(t)for(var n in t)void 0!==t[n]&&(i[n]=t[n])
return i}},r.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap)
var t=this.completion.cm
this.completion.options.closeOnUnfocus&&(t.off("blur",this.onBlur),t.off("focus",this.onFocus)),t.off("scroll",this.onScroll)}},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(e,n){if(e>=this.data.list.length?e=n?this.data.list.length-1:0:e<0&&(e=n?0:this.data.list.length-1),this.selectedHint!=e){var o=this.hints.childNodes[this.selectedHint]
o.className=o.className.replace(" "+i,""),(o=this.hints.childNodes[this.selectedHint=e]).className+=" "+i,o.offsetTop<this.hints.scrollTop?this.hints.scrollTop=o.offsetTop-3:o.offsetTop+o.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=o.offsetTop+o.offsetHeight-this.hints.clientHeight+3),t.signal(this.data,"select",this.data.list[this.selectedHint],o)}},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}},t.registerHelper("hint","auto",function(e,i){var n,o=e.getHelpers(e.getCursor(),"hint")
if(o.length)for(var s=0;s<o.length;s++){var c=o[s](e,i)
if(c&&c.list.length)return c}else if(n=e.getHelper(e.getCursor(),"hintWords")){if(n)return t.hint.fromList(e,{words:n})}else if(t.hint.anyword)return t.hint.anyword(e,i)}),t.registerHelper("hint","fromList",function(e,i){for(var n=e.getCursor(),o=e.getTokenAt(n),s=[],c=0;c<i.words.length;c++){var l=i.words[c]
l.slice(0,o.string.length)==o.string&&s.push(l)}if(s.length)return{list:s,from:t.Pos(n.line,o.start),to:t.Pos(n.line,o.end)}}),t.commands.autocomplete=t.showHint
var h={hint:t.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnUnfocus:!0,completeOnSingleClick:!1,container:null,customKeys:null,extraKeys:null}
t.defineOption("hintOptions",null)})
