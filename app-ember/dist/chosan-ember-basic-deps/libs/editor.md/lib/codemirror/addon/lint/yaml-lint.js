(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.registerHelper("lint","yaml",function(o){var r=[]
try{jsyaml.load(o)}catch(o){var i=o.mark
r.push({from:e.Pos(i.line,i.column),to:e.Pos(i.line,i.column),message:o.message})}return r})})