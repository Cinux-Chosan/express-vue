(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){function o(e,o,n){var t
return(t=e.getWrapperElement().appendChild(document.createElement("div"))).className=n?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof o?t.innerHTML=o:t.appendChild(o),t}function n(e,o){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=o}e.defineExtension("openDialog",function(t,i,r){r||(r={}),n(this,null)
var u=o(this,t,r.bottom),l=!1,c=this
function f(e){if("string"==typeof e)s.value=e
else{if(l)return
l=!0,u.parentNode.removeChild(u),c.focus(),r.onClose&&r.onClose(u)}}var a,s=u.getElementsByTagName("input")[0]
return s?(r.value&&(s.value=r.value,s.select()),r.onInput&&e.on(s,"input",function(e){r.onInput(e,s.value,f)}),r.onKeyUp&&e.on(s,"keyup",function(e){r.onKeyUp(e,s.value,f)}),e.on(s,"keydown",function(o){r&&r.onKeyDown&&r.onKeyDown(o,s.value,f)||((27==o.keyCode||!1!==r.closeOnEnter&&13==o.keyCode)&&(s.blur(),e.e_stop(o),f()),13==o.keyCode&&i(s.value,o))}),!1!==r.closeOnBlur&&e.on(s,"blur",f),s.focus()):(a=u.getElementsByTagName("button")[0])&&(e.on(a,"click",function(){f(),c.focus()}),!1!==r.closeOnBlur&&e.on(a,"blur",f),a.focus()),f}),e.defineExtension("openConfirm",function(t,i,r){n(this,null)
var u=o(this,t,r&&r.bottom),l=u.getElementsByTagName("button"),c=!1,f=this,a=1
function s(){c||(c=!0,u.parentNode.removeChild(u),f.focus())}l[0].focus()
for(var d=0;d<l.length;++d){var p=l[d];(function(o){e.on(p,"click",function(n){e.e_preventDefault(n),s(),o&&o(f)})})(i[d]),e.on(p,"blur",function(){--a,setTimeout(function(){a<=0&&s()},200)}),e.on(p,"focus",function(){++a})}}),e.defineExtension("openNotification",function(t,i){n(this,f)
var r,u=o(this,t,i&&i.bottom),l=!1,c=i&&void 0!==i.duration?i.duration:5e3
function f(){l||(l=!0,clearTimeout(r),u.parentNode.removeChild(u))}return e.on(u,"click",function(o){e.e_preventDefault(o),f()}),c&&(r=setTimeout(f,c)),f})})