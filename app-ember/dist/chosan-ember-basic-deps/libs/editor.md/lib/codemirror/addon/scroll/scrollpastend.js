(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
function n(n,i){e.changeEnd(i).line==n.lastLine()&&t(n)}function t(e){var n=""
e.lineCount()>1&&(n=e.display.scroller.clientHeight-30-e.getLineHandle(e.lastLine()).height+"px")
e.state.scrollPastEndPadding!=n&&(e.state.scrollPastEndPadding=n,e.display.lineSpace.parentNode.style.paddingBottom=n,e.setSize())}e.defineOption("scrollPastEnd",!1,function(i,o,d){d&&d!=e.Init&&(i.off("change",n),i.off("refresh",t),i.display.lineSpace.parentNode.style.paddingBottom="",i.state.scrollPastEndPadding=null),o&&(i.on("change",n),i.on("refresh",t),t(i))})})
