(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.registerHelper("lint","css",function(r){var o=[]
if(!window.CSSLint)return o
for(var i=CSSLint.verify(r).messages,t=null,n=0;n<i.length;n++){var s=(t=i[n]).line-1,f=t.line-1,c=t.col-1,l=t.col
o.push({from:e.Pos(s,c),to:e.Pos(f,l),message:t.message,severity:t.type})}return o})})
