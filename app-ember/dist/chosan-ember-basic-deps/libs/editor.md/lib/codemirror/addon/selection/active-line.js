(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
var t="CodeMirror-activeline",n="CodeMirror-activeline-background"
function i(e){for(var i=0;i<e.state.activeLines.length;i++)e.removeLineClass(e.state.activeLines[i],"wrap",t),e.removeLineClass(e.state.activeLines[i],"background",n)}function r(e,r){for(var o=[],a=0;a<r.length;a++){var s=r[a]
if(s.empty()){var c=e.getLineHandleVisualStart(s.head.line)
o[o.length-1]!=c&&o.push(c)}}(function(e,t){if(e.length!=t.length)return!1
for(var n=0;n<e.length;n++)if(e[n]!=t[n])return!1
return!0})(e.state.activeLines,o)||e.operation(function(){i(e)
for(var r=0;r<o.length;r++)e.addLineClass(o[r],"wrap",t),e.addLineClass(o[r],"background",n)
e.state.activeLines=o})}function o(e,t){r(e,t.ranges)}e.defineOption("styleActiveLine",!1,function(t,n,a){var s=a&&a!=e.Init
n&&!s?(t.state.activeLines=[],r(t,t.listSelections()),t.on("beforeSelectionChange",o)):!n&&s&&(t.off("beforeSelectionChange",o),i(t),delete t.state.activeLines)})})
