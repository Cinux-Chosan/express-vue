(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){for(var n=["clike","css","javascript"],t=0;t<n.length;++t)e.extendMode(n[t],{blockCommentContinue:" * "})
function o(n){if(n.getOption("disableInput"))return e.Pass
for(var t,o=n.listSelections(),r=[],l=0;l<o.length;l++){var m=o[l].head,s=n.getTokenAt(m)
if("comment"!=s.type)return e.Pass
var c=e.innerMode(n.getMode(),s.state).mode
if(t){if(t!=c)return e.Pass}else t=c
var f=null
if(t.blockCommentStart&&t.blockCommentContinue){var a=s.string.indexOf(t.blockCommentEnd),u=n.getRange(e.Pos(m.line,0),e.Pos(m.line,s.end))
if(-1!=a&&a==s.string.length-t.blockCommentEnd.length&&m.ch>=a);else if(0==s.string.indexOf(t.blockCommentStart)){if(f=u.slice(0,s.start),!/^\s*$/.test(f)){f=""
for(var d=0;d<s.start;++d)f+=" "}}else-1!=(C=u.indexOf(t.blockCommentContinue))&&C+t.blockCommentContinue.length>s.start&&/^\s*$/.test(u.slice(0,C))&&(f=u.slice(0,C))
null!=f&&(f+=t.blockCommentContinue)}if(null==f&&t.lineComment&&i(n)){var C,g=n.getLine(m.line);(C=g.indexOf(t.lineComment))>-1&&(f=g.slice(0,C),/\S/.test(f)?f=null:f+=t.lineComment+g.slice(C+t.lineComment.length).match(/^\s*/)[0])}if(null==f)return e.Pass
r[l]="\n"+f}n.operation(function(){for(var e=o.length-1;e>=0;e--)n.replaceRange(r[e],o[e].from(),o[e].to(),"+insert")})}function i(e){var n=e.getOption("continueComments")
return!n||"object"!=typeof n||!1!==n.continueLineComment}e.defineOption("continueComments",null,function(n,t,i){if(i&&i!=e.Init&&n.removeKeyMap("continueComment"),t){var r="Enter"
"string"==typeof t?r=t:"object"==typeof t&&t.key&&(r=t.key)
var l={name:"continueComment"}
l[r]=o,n.addKeyMap(l)}})})