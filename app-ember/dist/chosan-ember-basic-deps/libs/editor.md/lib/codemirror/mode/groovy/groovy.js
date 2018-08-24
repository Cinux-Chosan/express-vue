(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("groovy",function(e){function t(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}var n,r=t("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws transient try void volatile while"),i=t("catch class do else finally for if switch try while enum interface def"),o=t("null true false this")
function a(e,t){var a=e.next()
if('"'==a||"'"==a)return l(a,e,t)
if(/[\[\]{}\(\),;\:\.]/.test(a))return n=a,null
if(/\d/.test(a))return e.eatWhile(/[\w\.]/),e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number"
if("/"==a){if(e.eat("*"))return t.tokenize.push(u),u(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"
if(f(t.lastToken))return l(a,e,t)}if("-"==a&&e.eat(">"))return n="->",null
if(/[+\-*&%=<>!?|\/~]/.test(a))return e.eatWhile(/[+\-*&%=<>|~]/),"operator"
if(e.eatWhile(/[\w\$_]/),"@"==a)return e.eatWhile(/[\w\$_\.]/),"meta"
if("."==t.lastToken)return"property"
if(e.eat(":"))return n="proplabel","property"
var s=e.current()
return o.propertyIsEnumerable(s)?"atom":r.propertyIsEnumerable(s)?(i.propertyIsEnumerable(s)&&(n="newstatement"),"keyword"):"variable"}function l(e,t,n){var r=!1
if("/"!=e&&t.eat(e)){if(!t.eat(e))return"string"
r=!0}function i(t,n){for(var i,o=!1,a=!r;null!=(i=t.next());){if(i==e&&!o){if(!r)break
if(t.match(e+e)){a=!0
break}}if('"'==e&&"$"==i&&!o&&t.eat("{"))return n.tokenize.push(s()),"string"
o=!o&&"\\"==i}return a&&n.tokenize.pop(),"string"}return n.tokenize.push(i),i(t,n)}function s(){var e=1
function t(t,n){if("}"==t.peek()){if(0==--e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)}else"{"==t.peek()&&e++
return a(t,n)}return t.isBase=!0,t}function u(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize.pop()
break}r="*"==n}return"comment"}function f(e){return!e||"operator"==e||"->"==e||/[\.\[\{\(,;:]/.test(e)||"newstatement"==e||"keyword"==e||"proplabel"==e}function c(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function p(e,t,n){return e.context=new c(e.indented,t,n,null,e.context)}function d(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}return a.isBase=!0,{startState:function(t){return{tokenize:[a],context:new c((t||0)-e.indentUnit,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(e,t){var r=t.context
if(e.sol()&&(null==r.align&&(r.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"statement"!=r.type||f(t.lastToken)||(d(t),r=t.context)),e.eatSpace())return null
n=null
var i=t.tokenize[t.tokenize.length-1](e,t)
if("comment"==i)return i
if(null==r.align&&(r.align=!0),";"!=n&&":"!=n||"statement"!=r.type)if("->"==n&&"statement"==r.type&&"}"==r.prev.type)d(t),t.context.align=!1
else if("{"==n)p(t,e.column(),"}")
else if("["==n)p(t,e.column(),"]")
else if("("==n)p(t,e.column(),")")
else if("}"==n){for(;"statement"==r.type;)r=d(t)
for("}"==r.type&&(r=d(t));"statement"==r.type;)r=d(t)}else n==r.type?d(t):("}"==r.type||"top"==r.type||"statement"==r.type&&"newstatement"==n)&&p(t,e.column(),"statement")
else d(t)
return t.startOfLine=!1,t.lastToken=n||i,i},indent:function(t,n){if(!t.tokenize[t.tokenize.length-1].isBase)return 0
var r=n&&n.charAt(0),i=t.context
"statement"!=i.type||f(t.lastToken)||(i=i.prev)
var o=r==i.type
return"statement"==i.type?i.indented+("{"==r?0:e.indentUnit):i.align?i.column+(o?0:1):i.indented+(o?0:e.indentUnit)},electricChars:"{}",fold:"brace"}}),e.defineMIME("text/x-groovy","groovy")})