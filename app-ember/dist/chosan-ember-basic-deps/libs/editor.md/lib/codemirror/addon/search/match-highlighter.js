(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){"use strict"
var e=2,i="matchhighlight",n=100,r=!1
function o(t){var e=t.state.matchHighlighter
clearTimeout(e.timeout),e.timeout=setTimeout(function(){l(t)},e.delay)}function l(t){t.operation(function(){var e=t.state.matchHighlighter
if(e.overlay&&(t.removeOverlay(e.overlay),e.overlay=null),t.somethingSelected()||!e.showToken){var i=t.getCursor("from"),n=t.getCursor("to")
if(i.line==n.line&&(!e.wordsOnly||function(t,e,i){if(null!==t.getRange(e,i).match(/^\w+$/)){if(e.ch>0){var n={line:e.line,ch:e.ch-1},r=t.getRange(n,e)
if(null===r.match(/\W/))return!1}if(i.ch<t.getLine(e.line).length){var n={line:i.line,ch:i.ch+1},r=t.getRange(i,n)
if(null===r.match(/\W/))return!1}return!0}return!1}(t,i,n))){var r=t.getRange(i,n).replace(/^\s+|\s+$/g,"")
r.length>=e.minChars&&t.addOverlay(e.overlay=h(r,!1,e.style))}}else{for(var o=!0===e.showToken?/[\w$]/:e.showToken,l=t.getCursor(),s=t.getLine(l.line),a=l.ch,c=a;a&&o.test(s.charAt(a-1));)--a
for(;c<s.length&&o.test(s.charAt(c));)++c
a<c&&t.addOverlay(e.overlay=h(s.slice(a,c),o,e.style))}})}function h(t,e,i){return{token:function(n){if(n.match(t)&&(!e||function(t,e){return!(t.start&&e.test(t.string.charAt(t.start-1))||t.pos!=t.string.length&&e.test(t.string.charAt(t.pos)))}(n,e)))return i
n.next(),n.skipTo(t.charAt(0))||n.skipToEnd()}}}t.defineOption("highlightSelectionMatches",!1,function(h,s,a){if(a&&a!=t.Init){var c=h.state.matchHighlighter.overlay
c&&h.removeOverlay(c),clearTimeout(h.state.matchHighlighter.timeout),h.state.matchHighlighter=null,h.off("cursorActivity",o)}s&&(h.state.matchHighlighter=new function(t){"object"==typeof t&&(this.minChars=t.minChars,this.style=t.style,this.showToken=t.showToken,this.delay=t.delay,this.wordsOnly=t.wordsOnly),null==this.style&&(this.style=i),null==this.minChars&&(this.minChars=e),null==this.delay&&(this.delay=n),null==this.wordsOnly&&(this.wordsOnly=r),this.overlay=this.timeout=null}(s),l(h),h.on("cursorActivity",o))})})
