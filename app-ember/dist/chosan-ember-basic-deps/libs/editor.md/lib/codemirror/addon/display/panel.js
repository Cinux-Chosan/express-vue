(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){function t(e,t,i,r){this.cm=e,this.node=t,this.options=i,this.height=r,this.cleared=!1}e.defineExtension("addPanel",function(e,i){this.state.panels||function(e){var t=e.getWrapperElement(),i=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,r=parseInt(i.height),s=e.state.panels={setHeight:t.style.height,heightLeft:r,panels:0,wrapper:document.createElement("div")}
t.parentNode.insertBefore(s.wrapper,t)
var n=e.hasFocus()
s.wrapper.appendChild(t),n&&e.focus()
e._setSize=e.setSize,null!=r&&(e.setSize=function(t,i){if(null==i)return this._setSize(t,i)
if(s.setHeight=i,"number"!=typeof i){var n=/^(\d+\.?\d*)px$/.exec(i)
n?i=Number(n[1]):(s.wrapper.style.height=i,i=s.wrapper.offsetHeight,s.wrapper.style.height="")}e._setSize(t,s.heightLeft+=i-r),r=i})}(this)
var r=this.state.panels
i&&"bottom"==i.position?r.wrapper.appendChild(e):r.wrapper.insertBefore(e,r.wrapper.firstChild)
var s=i&&i.height||e.offsetHeight
return this._setSize(null,r.heightLeft-=s),r.panels++,new t(this,e,i,s)}),t.prototype.clear=function(){if(!this.cleared){this.cleared=!0
var e=this.cm.state.panels
this.cm._setSize(null,e.heightLeft+=this.height),e.wrapper.removeChild(this.node),0==--e.panels&&function(e){var t=e.state.panels
e.state.panels=null
var i=e.getWrapperElement()
t.wrapper.parentNode.replaceChild(i,t.wrapper),i.style.height=t.setHeight,e.setSize=e._setSize,e.setSize()}(this.cm)}},t.prototype.changed=function(e){var t=null==e?this.node.offsetHeight:e,i=this.cm.state.panels
this.cm._setSize(null,i.height+=t-this.height),this.height=t}})