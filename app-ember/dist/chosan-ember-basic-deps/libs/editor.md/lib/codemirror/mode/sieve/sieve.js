(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("sieve",function(e){function n(e){for(var n={},t=e.split(" "),r=0;r<t.length;++r)n[t[r]]=!0
return n}var t=n("if elsif else stop require"),r=n("true false not"),i=e.indentUnit
function o(e,n){var i,f=e.next()
if("/"==f&&e.eat("*"))return n.tokenize=l,l(e,n)
if("#"===f)return e.skipToEnd(),"comment"
if('"'==f)return n.tokenize=(i=f,function(e,n){for(var t,r=!1;null!=(t=e.next())&&(t!=i||r);)r=!r&&"\\"==t
return r||(n.tokenize=o),"string"}),n.tokenize(e,n)
if("("==f)return n._indent.push("("),n._indent.push("{"),null
if("{"===f)return n._indent.push("{"),null
if(")"==f&&(n._indent.pop(),n._indent.pop()),"}"===f)return n._indent.pop(),null
if(","==f)return null
if(";"==f)return null
if(/[{}\(\),;]/.test(f))return null
if(/\d/.test(f))return e.eatWhile(/[\d]/),e.eat(/[KkMmGg]/),"number"
if(":"==f)return e.eatWhile(/[a-zA-Z_]/),e.eatWhile(/[a-zA-Z0-9_]/),"operator"
e.eatWhile(/\w/)
var a=e.current()
return"text"==a&&e.eat(":")?(n.tokenize=u,"string"):t.propertyIsEnumerable(a)?"keyword":r.propertyIsEnumerable(a)?"atom":null}function u(e,n){return n._multiLineString=!0,e.sol()?("."==e.next()&&e.eol()&&(n._multiLineString=!1,n.tokenize=o),"string"):(e.eatSpace(),"#"==e.peek()?(e.skipToEnd(),"comment"):(e.skipToEnd(),"string"))}function l(e,n){for(var t,r=!1;null!=(t=e.next());){if(r&&"/"==t){n.tokenize=o
break}r="*"==t}return"comment"}return{startState:function(e){return{tokenize:o,baseIndent:e||0,_indent:[]}},token:function(e,n){return e.eatSpace()?null:(n.tokenize||o)(e,n)},indent:function(e,n){var t=e._indent.length
return n&&"}"==n[0]&&t--,t<0&&(t=0),t*i},electricChars:"}"}}),e.defineMIME("application/sieve","sieve")})