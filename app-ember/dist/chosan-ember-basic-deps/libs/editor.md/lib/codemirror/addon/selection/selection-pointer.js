(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
function t(e){e.state.selectionPointer.rects=null,o(e)}function o(e){e.state.selectionPointer.willUpdate||(e.state.selectionPointer.willUpdate=!0,setTimeout(function(){(function(e){var t=e.state.selectionPointer
if(!t)return
if(null==t.rects&&null!=t.mouseX&&(t.rects=[],e.somethingSelected()))for(var o=e.display.selectionDiv.firstChild;o;o=o.nextSibling)t.rects.push(o.getBoundingClientRect())
var n=!1
if(null!=t.mouseX)for(var i=0;i<t.rects.length;i++){var l=t.rects[i]
l.left<=t.mouseX&&l.right>=t.mouseX&&l.top<=t.mouseY&&l.bottom>=t.mouseY&&(n=!0)}var s=n?t.value:""
e.display.lineDiv.style.cursor!=s&&(e.display.lineDiv.style.cursor=s)})(e),e.state.selectionPointer.willUpdate=!1},50))}e.defineOption("selectionPointer",!1,function(n,i){var l=n.state.selectionPointer
l&&(e.off(n.getWrapperElement(),"mousemove",l.mousemove),e.off(n.getWrapperElement(),"mouseout",l.mouseout),e.off(window,"scroll",l.windowScroll),n.off("cursorActivity",t),n.off("scroll",t),n.state.selectionPointer=null,n.display.lineDiv.style.cursor=""),i&&(l=n.state.selectionPointer={value:"string"==typeof i?i:"default",mousemove:function(e){(function(e,t){var n=e.state.selectionPointer;(null==t.buttons?t.which:t.buttons)?n.mouseX=n.mouseY=null:(n.mouseX=t.clientX,n.mouseY=t.clientY)
o(e)})(n,e)},mouseout:function(e){(function(e,t){if(!e.getWrapperElement().contains(t.relatedTarget)){var n=e.state.selectionPointer
n.mouseX=n.mouseY=null,o(e)}})(n,e)},windowScroll:function(){t(n)},rects:null,mouseX:null,mouseY:null,willUpdate:!1},e.on(n.getWrapperElement(),"mousemove",l.mousemove),e.on(n.getWrapperElement(),"mouseout",l.mouseout),e.on(window,"scroll",l.windowScroll),n.on("cursorActivity",t),n.on("scroll",t))})})
