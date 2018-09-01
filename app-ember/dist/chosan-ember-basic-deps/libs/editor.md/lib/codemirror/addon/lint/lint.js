(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){"use strict"
var e="CodeMirror-lint-markers"
function n(t){t.parentNode&&t.parentNode.removeChild(t)}function o(e,o,r){var i=function(e,n){var o=document.createElement("div")
function r(e){if(!o.parentNode)return t.off(document,"mousemove",r)
o.style.top=Math.max(0,e.clientY-o.offsetHeight-5)+"px",o.style.left=e.clientX+5+"px"}return o.className="CodeMirror-lint-tooltip",o.appendChild(n.cloneNode(!0)),document.body.appendChild(o),t.on(document,"mousemove",r),r(e),null!=o.style.opacity&&(o.style.opacity=1),o}(e,o)
function a(){var e
t.off(r,"mouseout",a),i&&((e=i).parentNode&&(null==e.style.opacity&&n(e),e.style.opacity=0,setTimeout(function(){n(e)},600)),i=null)}var s=setInterval(function(){if(i)for(var t=r;;t=t.parentNode){if(t&&11==t.nodeType&&(t=t.host),t==document.body)return
if(!t){a()
break}}if(!i)return clearInterval(s)},400)
t.on(r,"mouseout",a)}function r(t,e,n){this.marked=[],this.options=e,this.timeout=null,this.hasGutter=n,this.onMouseOver=function(e){(function(t,e){var n=e.target||e.srcElement
if(!/\bCodeMirror-lint-mark-/.test(n.className))return
for(var o=n.getBoundingClientRect(),r=(o.left+o.right)/2,i=(o.top+o.bottom)/2,a=t.findMarksAt(t.coordsChar({left:r,top:i},"client")),s=0;s<a.length;++s){var l=a[s].__annotation
if(l)return f(l,e)}})(t,e)}}function i(t){var n=t.state.lint
n.hasGutter&&t.clearGutter(e)
for(var o=0;o<n.marked.length;++o)n.marked[o].clear()
n.marked.length=0}function a(e,n,r,i){var a=document.createElement("div"),s=a
return a.className="CodeMirror-lint-marker-"+n,r&&((s=a.appendChild(document.createElement("div"))).className="CodeMirror-lint-marker-multiple"),0!=i&&t.on(s,"mouseover",function(t){o(t,e,s)}),a}function s(t){var e=t.severity
e||(e="error")
var n=document.createElement("div")
return n.className="CodeMirror-lint-message-"+e,n.appendChild(document.createTextNode(t.message)),n}function l(t){var e=t.state.lint.options,n=e.options||e
e.async||e.getAnnotations.async?e.getAnnotations(t.getValue(),u,n,t):u(t,e.getAnnotations(t.getValue(),n,t))}function u(t,n){i(t)
for(var o,r=t.state.lint,l=r.options,u=function(t){for(var e=[],n=0;n<t.length;++n){var o=t[n],r=o.from.line;(e[r]||(e[r]=[])).push(o)}return e}(n),c=0;c<u.length;++c){var f=u[c]
if(f){for(var m=null,d=r.hasGutter&&document.createDocumentFragment(),p=0;p<f.length;++p){var v=f[p],g=v.severity
g||(g="error"),m="error"==(o=m)?o:g,l.formatAnnotation&&(v=l.formatAnnotation(v)),r.hasGutter&&d.appendChild(s(v)),v.to&&r.marked.push(t.markText(v.from,v.to,{className:"CodeMirror-lint-mark-"+g,__annotation:v}))}r.hasGutter&&t.setGutterMarker(c,e,a(d,m,f.length>1,r.options.tooltips))}}l.onUpdateLinting&&l.onUpdateLinting(n,u,t)}function c(t){var e=t.state.lint
clearTimeout(e.timeout),e.timeout=setTimeout(function(){l(t)},e.options.delay||500)}function f(t,e){var n=e.target||e.srcElement
o(e,s(t),n)}t.defineOption("lint",!1,function(n,o,a){if(a&&a!=t.Init&&(i(n),n.off("change",c),t.off(n.getWrapperElement(),"mouseover",n.state.lint.onMouseOver),delete n.state.lint),o){for(var s=n.getOption("gutters"),u=!1,f=0;f<s.length;++f)s[f]==e&&(u=!0)
var m=n.state.lint=new r(n,function(e,n){if(n instanceof Function)return{getAnnotations:n}
if(n&&!0!==n||(n={}),n.getAnnotations||(n.getAnnotations=e.getHelper(t.Pos(0,0),"lint")),!n.getAnnotations)throw new Error("Required option 'getAnnotations' missing (lint addon)")
return n}(n,o),u)
n.on("change",c),0!=m.options.tooltips&&t.on(n.getWrapperElement(),"mouseover",m.onMouseOver),l(n)}})})
