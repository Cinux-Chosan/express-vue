(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.registerHelper("fold","markdown",function(n,t){var r=100
function i(t){var r=n.getTokenTypeAt(e.Pos(t,0))
return r&&/\bheader\b/.test(r)}function o(e,n,t){var o=n&&n.match(/^#+/)
return o&&i(e)?o[0].length:(o=t&&t.match(/^[=\-]+\s*$/))&&i(e+1)?"="==t[0]?1:2:r}var f=n.getLine(t.line),l=n.getLine(t.line+1),c=o(t.line,f,l)
if(c!==r){for(var u=n.lastLine(),a=t.line,d=n.getLine(a+2);a<u&&!(o(a+1,l,d)<=c);)++a,l=d,d=n.getLine(a+2)
return{from:e.Pos(t.line,f.length),to:e.Pos(a,n.getLine(a).length)}}})})
