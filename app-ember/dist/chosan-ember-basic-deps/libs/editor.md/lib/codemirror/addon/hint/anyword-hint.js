(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
var r=/[\w$]+/
e.registerHelper("hint","anyword",function(o,t){for(var i=t&&t.word||r,n=t&&t.range||500,f=o.getCursor(),a=o.getLine(f.line),c=f.ch,s=c;s&&i.test(a.charAt(s-1));)--s
for(var l=s!=c&&a.slice(s,c),d=[],u={},p=new RegExp(i.source,"g"),g=-1;g<=1;g+=2)for(var h=f.line,m=Math.min(Math.max(h+g*n,o.firstLine()),o.lastLine())+g;h!=m;h+=g)for(var y,b=o.getLine(h);y=p.exec(b);)h==f.line&&y[0]===l||l&&0!=y[0].lastIndexOf(l,0)||Object.prototype.hasOwnProperty.call(u,y[0])||(u[y[0]]=!0,d.push(y[0]))
return{list:d,from:e.Pos(f.line,s),to:e.Pos(f.line,c)}})})
