(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("r",function(e){function t(e){for(var t=e.split(" "),n={},r=0;r<t.length;++r)n[t[r]]=!0
return n}var n,r=t("NULL NA Inf NaN NA_integer_ NA_real_ NA_complex_ NA_character_"),i=t("list quote bquote eval return call parse deparse"),a=t("if else repeat while function for in next break"),o=t("if else repeat while function for"),l=/[+\-*\/^<>=!&|~$:]/
function c(e,t){n=null
var u,f=e.next()
if("#"==f)return e.skipToEnd(),"comment"
if("0"==f&&e.eat("x"))return e.eatWhile(/[\da-f]/i),"number"
if("."==f&&e.eat(/\d/))return e.match(/\d*(?:e[+\-]?\d+)?/),"number"
if(/\d/.test(f))return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number"
if("'"==f||'"'==f)return t.tokenize=(u=f,function(e,t){if(e.eat("\\")){var n=e.next()
return"x"==n?e.match(/^[a-f0-9]{2}/i):("u"==n||"U"==n)&&e.eat("{")&&e.skipTo("}")?e.next():"u"==n?e.match(/^[a-f0-9]{4}/i):"U"==n?e.match(/^[a-f0-9]{8}/i):/[0-7]/.test(n)&&e.match(/^[0-7]{1,2}/),"string-2"}for(var r;null!=(r=e.next());){if(r==u){t.tokenize=c
break}if("\\"==r){e.backUp(1)
break}}return"string"}),"string"
if("."==f&&e.match(/.[.\d]+/))return"keyword"
if(/[\w\.]/.test(f)&&"_"!=f){e.eatWhile(/[\w\.]/)
var d=e.current()
return r.propertyIsEnumerable(d)?"atom":a.propertyIsEnumerable(d)?(o.propertyIsEnumerable(d)&&!e.match(/\s*if(\s+|$)/,!1)&&(n="block"),"keyword"):i.propertyIsEnumerable(d)?"builtin":"variable"}return"%"==f?(e.skipTo("%")&&e.next(),"variable-2"):"<"==f&&e.eat("-")?"arrow":"="==f&&t.ctx.argList?"arg-is":l.test(f)?"$"==f?"dollar":(e.eatWhile(l),"operator"):/[\(\){}\[\];]/.test(f)?(n=f,";"==f?"semi":null):null}function u(e,t,n){e.ctx={type:t,indent:e.indent,align:null,column:n.column(),prev:e.ctx}}function f(e){e.indent=e.ctx.indent,e.ctx=e.ctx.prev}return{startState:function(){return{tokenize:c,ctx:{type:"top",indent:-e.indentUnit,align:!1},indent:0,afterIdent:!1}},token:function(e,t){if(e.sol()&&(null==t.ctx.align&&(t.ctx.align=!1),t.indent=e.indentation()),e.eatSpace())return null
var r=t.tokenize(e,t)
"comment"!=r&&null==t.ctx.align&&(t.ctx.align=!0)
var i=t.ctx.type
return";"!=n&&"{"!=n&&"}"!=n||"block"!=i||f(t),"{"==n?u(t,"}",e):"("==n?(u(t,")",e),t.afterIdent&&(t.ctx.argList=!0)):"["==n?u(t,"]",e):"block"==n?u(t,"block",e):n==i&&f(t),t.afterIdent="variable"==r||"keyword"==r,r},indent:function(t,n){if(t.tokenize!=c)return 0
var r=n&&n.charAt(0),i=t.ctx,a=r==i.type
return"block"==i.type?i.indent+("{"==r?0:e.indentUnit):i.align?i.column+(a?0:1):i.indent+(a?0:e.indentUnit)},lineComment:"#"}}),e.defineMIME("text/x-rsrc","r")})
