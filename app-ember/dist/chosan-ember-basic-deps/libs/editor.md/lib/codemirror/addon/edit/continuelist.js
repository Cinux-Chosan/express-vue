(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
var n=/^(\s*)(>[> ]*|[*+-]\s|(\d+)\.)(\s*)/,t=/^(\s*)(>[> ]*|[*+-]|(\d+)\.)(\s*)$/,i=/[*+-]\s/
e.commands.newlineAndIndentContinueMarkdownList=function(o){if(o.getOption("disableInput"))return e.Pass
for(var r=o.listSelections(),d=[],l=0;l<r.length;l++){var s,c=r[l].head,a=o.getStateAfter(c.line),f=!1!==a.list,u=!1!==a.quote
if(!r[l].empty()||!f&&!u||!(s=o.getLine(c.line).match(n)))return void o.execCommand("newlineAndIndent")
if(o.getLine(c.line).match(t))o.replaceRange("",{line:c.line,ch:0},{line:c.line,ch:c.ch+1}),d[l]="\n"
else{var m=s[1],p=s[4],h=i.test(s[2])||s[2].indexOf(">")>=0?s[2]:parseInt(s[3],10)+1+"."
d[l]="\n"+m+h+p}}o.replaceSelections(d)}})
