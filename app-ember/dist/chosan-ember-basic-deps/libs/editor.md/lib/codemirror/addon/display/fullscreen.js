(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineOption("fullScreen",!1,function(t,o,r){r==e.Init&&(r=!1),!r!=!o&&(o?function(e){var t=e.getWrapperElement()
e.state.fullScreenRestore={scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset,width:t.style.width,height:t.style.height},t.style.width="",t.style.height="auto",t.className+=" CodeMirror-fullscreen",document.documentElement.style.overflow="hidden",e.refresh()}(t):function(e){var t=e.getWrapperElement()
t.className=t.className.replace(/\s*CodeMirror-fullscreen\b/,""),document.documentElement.style.overflow=""
var o=e.state.fullScreenRestore
t.style.width=o.width,t.style.height=o.height,window.scrollTo(o.scrollLeft,o.scrollTop),e.refresh()}(t))})})
