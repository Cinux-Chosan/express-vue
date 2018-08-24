(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("kotlin",function(e,t){function n(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}var r,i=t.multiLineStrings,o=n("package continue return object while break class data trait throw super when type this else This try val var fun for is in if do as true false null get set"),a=n("import where by get set abstract enum open annotation override private public internal protected catch out vararg inline finally final ref"),u=n("catch class do else finally for if where try while enum"),l=n("null true false this")
function s(e,t){var n=e.next()
if('"'==n||"'"==n)return f(n,e,t)
if("."==n&&e.eat("*"))return"word"
if(/[\[\]{}\(\),;\:\.]/.test(n))return r=n,null
if(/\d/.test(n))return e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number"
if("/"==n){if(e.eat("*"))return t.tokenize.push(d),d(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"
if(m(t.lastToken))return f(n,e,t)}if("-"==n&&e.eat(">"))return r="->",null
if(/[\-+*&%=<>!?|\/~]/.test(n))return e.eatWhile(/[\-+*&%=<>|~]/),"operator"
e.eatWhile(/[\w\$_]/)
var i=e.current()
return l.propertyIsEnumerable(i)?"atom":a.propertyIsEnumerable(i)?(u.propertyIsEnumerable(i)&&(r="newstatement"),"softKeyword"):o.propertyIsEnumerable(i)?(u.propertyIsEnumerable(i)&&(r="newstatement"),"keyword"):"word"}function f(e,t,n){var r=!1
if("/"!=e&&t.eat(e)){if(!t.eat(e))return"string"
r=!0}function o(t,n){for(var a,u=!1,l=!r;null!=(a=t.next());){if(a==e&&!u){if(!r)break
if(t.match(e+e)){l=!0
break}}if('"'==e&&"$"==a&&!u&&t.eat("{"))return n.tokenize.push(p()),"string"
if("$"==a&&!u&&!t.eat(" "))return n.tokenize.push(c()),"string"
u=!u&&"\\"==a}return i&&n.tokenize.push(o),l&&n.tokenize.pop(),"string"}return n.tokenize.push(o),o(t,n)}function p(){var e=1
function t(t,n){if("}"==t.peek()){if(0==--e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)}else"{"==t.peek()&&e++
return s(t,n)}return t.isBase=!0,t}function c(){function e(e,t){if(e.eat(/[\w]/)&&e.eatWhile(/[\w]/))return t.tokenize.pop(),"word"
return t.tokenize.pop(),"string"}return e.isBase=!0,e}function d(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize.pop()
break}r="*"==n}return"comment"}function m(e){return!e||"operator"==e||"->"==e||/[\.\[\{\(,;:]/.test(e)||"newstatement"==e||"keyword"==e||"proplabel"==e}function k(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function y(e,t,n){return e.context=new k(e.indented,t,n,null,e.context)}function h(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return s.isBase=!0,{startState:function(t){return{tokenize:[s],context:new k((t||0)-e.indentUnit,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(e,t){var n=t.context
if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"statement"!=n.type||m(t.lastToken)||(h(t),n=t.context)),e.eatSpace())return null
r=null
var i=t.tokenize[t.tokenize.length-1](e,t)
if("comment"==i)return i
if(null==n.align&&(n.align=!0),";"!=r&&":"!=r||"statement"!=n.type)if("->"==r&&"statement"==n.type&&"}"==n.prev.type)h(t),t.context.align=!1
else if("{"==r)y(t,e.column(),"}")
else if("["==r)y(t,e.column(),"]")
else if("("==r)y(t,e.column(),")")
else if("}"==r){for(;"statement"==n.type;)n=h(t)
for("}"==n.type&&(n=h(t));"statement"==n.type;)n=h(t)}else r==n.type?h(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==r)&&y(t,e.column(),"statement")
else h(t)
return t.startOfLine=!1,t.lastToken=r||i,i},indent:function(t,n){if(!t.tokenize[t.tokenize.length-1].isBase)return 0
var r=n&&n.charAt(0),i=t.context
"statement"!=i.type||m(t.lastToken)||(i=i.prev)
var o=r==i.type
return"statement"==i.type?i.indented+("{"==r?0:e.indentUnit):i.align?i.column+(o?0:1):i.indented+(o?0:e.indentUnit)},electricChars:"{}"}}),e.defineMIME("text/x-kotlin","kotlin")})