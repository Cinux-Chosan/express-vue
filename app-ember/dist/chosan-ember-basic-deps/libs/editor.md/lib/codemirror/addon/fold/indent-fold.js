(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.registerHelper("fold","indent",function(t,n){var i=t.getOption("tabSize"),o=t.getLine(n.line)
if(/\S/.test(o)){for(var r=function(t){return e.countColumn(t,null,i)},f=r(o),l=null,u=n.line+1,c=t.lastLine();u<=c;++u){var d=t.getLine(u)
if(r(d)>f)l=u
else if(/\S/.test(d))break}return l?{from:e.Pos(n.line,o.length),to:e.Pos(l,t.getLine(l).length)}:void 0}})})
