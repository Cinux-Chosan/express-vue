(function(n){"object"==typeof exports&&"object"==typeof module?n(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],n):n(CodeMirror)})(function(n){"use strict"
function o(o,e,i,t){if(i&&i.call){var f=i
i=null}else f=r(o,i,"rangeFinder")
"number"==typeof e&&(e=n.Pos(e,0))
var l=r(o,i,"minFoldSize")
function d(n){var r=f(o,e)
if(!r||r.to.line-r.from.line<l)return null
for(var i=o.findMarksAt(r.from),d=0;d<i.length;++d)if(i[d].__isFold&&"fold"!==t){if(!n)return null
r.cleared=!0,i[d].clear()}return r}var u=d(!0)
if(r(o,i,"scanUp"))for(;!u&&e.line>o.firstLine();)e=n.Pos(e.line-1,0),u=d(!1)
if(u&&!u.cleared&&"unfold"!==t){var a=function(n,o){var e=r(n,o,"widget")
if("string"==typeof e){var i=document.createTextNode(e);(e=document.createElement("span")).appendChild(i),e.className="CodeMirror-foldmarker"}return e}(o,i)
n.on(a,"mousedown",function(o){c.clear(),n.e_preventDefault(o)})
var c=o.markText(u.from,u.to,{replacedWith:a,clearOnEnter:!0,__isFold:!0})
c.on("clear",function(e,r){n.signal(o,"unfold",o,e,r)}),n.signal(o,"fold",o,u.from,u.to)}}n.newFoldFunction=function(n,e){return function(r,i){o(r,i,{rangeFinder:n,widget:e})}},n.defineExtension("foldCode",function(n,e,r){o(this,n,e,r)}),n.defineExtension("isFolded",function(n){for(var o=this.findMarksAt(n),e=0;e<o.length;++e)if(o[e].__isFold)return!0}),n.commands.toggleFold=function(n){n.foldCode(n.getCursor())},n.commands.fold=function(n){n.foldCode(n.getCursor(),null,"fold")},n.commands.unfold=function(n){n.foldCode(n.getCursor(),null,"unfold")},n.commands.foldAll=function(o){o.operation(function(){for(var e=o.firstLine(),r=o.lastLine();e<=r;e++)o.foldCode(n.Pos(e,0),null,"fold")})},n.commands.unfoldAll=function(o){o.operation(function(){for(var e=o.firstLine(),r=o.lastLine();e<=r;e++)o.foldCode(n.Pos(e,0),null,"unfold")})},n.registerHelper("fold","combine",function(){var n=Array.prototype.slice.call(arguments,0)
return function(o,e){for(var r=0;r<n.length;++r){var i=n[r](o,e)
if(i)return i}}}),n.registerHelper("fold","auto",function(n,o){for(var e=n.getHelpers(o,"fold"),r=0;r<e.length;r++){var i=e[r](n,o)
if(i)return i}})
var e={rangeFinder:n.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1}
function r(n,o,r){if(o&&void 0!==o[r])return o[r]
var i=n.options.foldOptions
return i&&void 0!==i[r]?i[r]:e[r]}n.defineOption("foldOptions",null),n.defineExtension("foldOption",function(n,o){return r(this,n,o)})})