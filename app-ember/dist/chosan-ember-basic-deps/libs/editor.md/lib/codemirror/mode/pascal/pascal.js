(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("pascal",function(){var e=function(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0
return r}("and array begin case const div do downto else end file for forward integer boolean char function goto if in label mod nil not of or packed procedure program record repeat set string then to type until var while with"),r={null:!0},t=/[+\-*&%=<>!?|\/]/
function n(e,r){for(var t,n=!1;t=e.next();){if(")"==t&&n){r.tokenize=null
break}n="*"==t}return"comment"}return{startState:function(){return{tokenize:null}},token:function(o,i){if(o.eatSpace())return null
var a=(i.tokenize||function(o,i){var a,u=o.next()
if("#"==u&&i.startOfLine)return o.skipToEnd(),"meta"
if('"'==u||"'"==u)return i.tokenize=(a=u,function(e,r){for(var t,n=!1,o=!1;null!=(t=e.next());){if(t==a&&!n){o=!0
break}n=!n&&"\\"==t}return!o&&n||(r.tokenize=null),"string"}),i.tokenize(o,i)
if("("==u&&o.eat("*"))return i.tokenize=n,n(o,i)
if(/[\[\]{}\(\),;\:\.]/.test(u))return null
if(/\d/.test(u))return o.eatWhile(/[\w\.]/),"number"
if("/"==u&&o.eat("/"))return o.skipToEnd(),"comment"
if(t.test(u))return o.eatWhile(t),"operator"
o.eatWhile(/[\w\$_]/)
var f=o.current()
return e.propertyIsEnumerable(f)?"keyword":r.propertyIsEnumerable(f)?"atom":"variable"})(o,i)
return a},electricChars:"{}"}}),e.defineMIME("text/x-pascal","pascal")})
