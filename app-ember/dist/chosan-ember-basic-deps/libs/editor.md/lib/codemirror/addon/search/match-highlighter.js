(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){"use strict"
var e=2,i="matchhighlight",n=100,r=!1
function o(t){"object"==typeof t&&(this.minChars=t.minChars,this.style=t.style,this.showToken=t.showToken,this.delay=t.delay,this.wordsOnly=t.wordsOnly),null==this.style&&(this.style=i),null==this.minChars&&(this.minChars=e),null==this.delay&&(this.delay=n),null==this.wordsOnly&&(this.wordsOnly=r),this.overlay=this.timeout=null}function l(t){var e=t.state.matchHighlighter
clearTimeout(e.timeout),e.timeout=setTimeout(function(){h(t)},e.delay)}function h(t){t.operation(function(){var e=t.state.matchHighlighter
if(e.overlay&&(t.removeOverlay(e.overlay),e.overlay=null),t.somethingSelected()||!e.showToken){var i=t.getCursor("from"),n=t.getCursor("to")
if(i.line==n.line&&(!e.wordsOnly||function(t,e,i){if(null!==t.getRange(e,i).match(/^\w+$/)){if(e.ch>0){var n={line:e.line,ch:e.ch-1},r=t.getRange(n,e)
if(null===r.match(/\W/))return!1}if(i.ch<t.getLine(e.line).length){var n={line:i.line,ch:i.ch+1},r=t.getRange(i,n)
if(null===r.match(/\W/))return!1}return!0}return!1}(t,i,n))){var r=t.getRange(i,n).replace(/^\s+|\s+$/g,"")
r.length>=e.minChars&&t.addOverlay(e.overlay=s(r,!1,e.style))}}else{for(var o=!0===e.showToken?/[\w$]/:e.showToken,l=t.getCursor(),h=t.getLine(l.line),a=l.ch,c=a;a&&o.test(h.charAt(a-1));)--a
for(;c<h.length&&o.test(h.charAt(c));)++c
a<c&&t.addOverlay(e.overlay=s(h.slice(a,c),o,e.style))}})}function s(t,e,i){return{token:function(n){if(n.match(t)&&(!e||function(t,e){return!(t.start&&e.test(t.string.charAt(t.start-1))||t.pos!=t.string.length&&e.test(t.string.charAt(t.pos)))}(n,e)))return i
n.next(),n.skipTo(t.charAt(0))||n.skipToEnd()}}}t.defineOption("highlightSelectionMatches",!1,function(e,i,n){if(n&&n!=t.Init){var r=e.state.matchHighlighter.overlay
r&&e.removeOverlay(r),clearTimeout(e.state.matchHighlighter.timeout),e.state.matchHighlighter=null,e.off("cursorActivity",l)}i&&(e.state.matchHighlighter=new o(i),h(e),e.on("cursorActivity",l))})})
