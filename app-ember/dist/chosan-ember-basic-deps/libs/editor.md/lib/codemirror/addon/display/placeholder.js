(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){function r(e){e.state.placeholder&&(e.state.placeholder.parentNode.removeChild(e.state.placeholder),e.state.placeholder=null)}function o(e){r(e)
var o=e.state.placeholder=document.createElement("pre")
o.style.cssText="height: 0; overflow: visible",o.className="CodeMirror-placeholder",o.appendChild(document.createTextNode(e.getOption("placeholder"))),e.display.lineSpace.insertBefore(o,e.display.lineSpace.firstChild)}function t(e){n(e)&&o(e)}function l(e){var t=e.getWrapperElement(),l=n(e)
t.className=t.className.replace(" CodeMirror-empty","")+(l?" CodeMirror-empty":""),l?o(e):r(e)}function n(e){return 1===e.lineCount()&&""===e.getLine(0)}e.defineOption("placeholder","",function(o,n,a){var i=a&&a!=e.Init
if(n&&!i)o.on("blur",t),o.on("change",l),l(o)
else if(!n&&i){o.off("blur",t),o.off("change",l),r(o)
var c=o.getWrapperElement()
c.className=c.className.replace(" CodeMirror-empty","")}n&&!o.hasFocus()&&t(o)})})
