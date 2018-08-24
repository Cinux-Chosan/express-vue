(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("julia",function(e,t){var n="error"
function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var i=t.operators||/^\.?[|&^\\%*+\-<>!=\/]=?|\?|~|:|\$|\.[<>]|<<=?|>>>?=?|\.[<>=]=|->?|\/\/|\bin\b/,a=t.delimiters||/^[;,()[\]{}]/,o=t.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*!*/,l=/^(`|'|"{3}|([br]?"))/,c=r(["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","macro","module","baremodule","type","immutable","quote","typealias","abstract","bitstype","ccall"]),u=r(["true","false","enumerate","open","close","nothing","NaN","Inf","print","println","Int","Int8","Uint8","Int16","Uint16","Int32","Uint32","Int64","Uint64","Int128","Uint128","Bool","Char","Float16","Float32","Float64","Array","Vector","Matrix","String","UTF8String","ASCIIString","error","warn","info","@printf"]),f=r(["begin","function","type","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"]),s=r(["end","else","elseif","catch","finally"]),m=/^@[_A-Za-z][_A-Za-z0-9]*/,p=/^:[_A-Za-z][_A-Za-z0-9]*/
function h(e){var t=d(e)
return"["==t||"{"==t}function d(e){return 0==e.scopes.length?null:e.scopes[e.scopes.length-1]}function g(e,r){var b=r.leaving_expr
if(e.sol()&&(b=!1),r.leaving_expr=!1,b&&e.match(/^'+/))return"operator"
if(e.match(/^\.{2,3}/))return"operator"
if(e.eatSpace())return null
var v=e.peek()
if("#"===v)return e.skipToEnd(),"comment"
"["===v&&r.scopes.push("["),"{"===v&&r.scopes.push("{")
var x,y=d(r)
if("["===y&&"]"===v&&(r.scopes.pop(),r.leaving_expr=!0),"{"===y&&"}"===v&&(r.scopes.pop(),r.leaving_expr=!0),")"===v&&(r.leaving_expr=!0),!h(r)&&(x=e.match(f,!1))&&r.scopes.push(x),!h(r)&&e.match(s,!1)&&r.scopes.pop(),h(r)&&e.match(/^end/))return"number"
if(e.match(/^=>/))return"operator"
if(e.match(/^[0-9\.]/,!1)){var _=RegExp(/^im\b/),z=!1
if(e.match(/^\d*\.(?!\.)\d+([ef][\+\-]?\d+)?/i)&&(z=!0),e.match(/^\d+\.(?!\.)\d*/)&&(z=!0),e.match(/^\.\d+/)&&(z=!0),z)return e.match(_),r.leaving_expr=!0,"number"
var F=!1
if(e.match(/^0x[0-9a-f]+/i)&&(F=!0),e.match(/^0b[01]+/i)&&(F=!0),e.match(/^0o[0-7]+/i)&&(F=!0),e.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(F=!0),e.match(/^0(?![\dx])/i)&&(F=!0),F)return e.match(_),r.leaving_expr=!0,"number"}return e.match(/^(::)|(<:)/)?"operator":!b&&e.match(p)?"string":e.match(i)?"operator":e.match(l)?(r.tokenize=function(e){for(;"rub".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1)
var r=1==e.length,i="string"
function a(a,o){for(;!a.eol();)if(a.eatWhile(/[^'"\\]/),a.eat("\\")){if(a.next(),r&&a.eol())return i}else{if(a.match(e))return o.tokenize=g,i
a.eat(/['"]/)}if(r){if(t.singleLineStringErrors)return n
o.tokenize=g}return i}return a.isString=!0,a}(e.current()),r.tokenize(e,r)):e.match(m)?"meta":e.match(a)?null:e.match(c)?"keyword":e.match(u)?"builtin":e.match(o)?(r.leaving_expr=!0,"variable"):(e.next(),n)}return{startState:function(){return{tokenize:g,scopes:[],leaving_expr:!1}},token:function(e,t){var r=function(e,t){null
var r=t.tokenize(e,t)
return"."===e.current()?(null===(r=e.match(o,!1)?null:n)&&"meta"===t.lastStyle&&(r="meta"),r):r}(e,t)
return t.lastStyle=r,r},indent:function(e,t){var n=0
return"end"!=t&&"]"!=t&&"}"!=t&&"else"!=t&&"elseif"!=t&&"catch"!=t&&"finally"!=t||(n=-1),4*(e.scopes.length+n)},lineComment:"#",fold:"indent",electricChars:"edlsifyh]}"}}),e.defineMIME("text/x-julia","julia")})
