(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("haxe",function(e,t){var n,r,i=e.indentUnit,a=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),n=e("keyword b"),r=e("keyword c"),i=e("operator"),a={type:"atom",style:"atom"},o={type:"attribute",style:"attribute"},u=e("typedef")
return{if:t,while:t,else:n,do:n,try:n,return:r,break:r,continue:r,new:r,throw:r,var:e("var"),inline:o,static:o,using:e("import"),public:o,private:o,cast:e("cast"),import:e("import"),macro:e("macro"),function:e("function"),catch:e("catch"),untyped:e("untyped"),callback:e("cb"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,never:e("property_access"),trace:e("trace"),class:u,abstract:u,enum:u,interface:u,typedef:u,extends:u,implements:u,dynamic:u,true:a,false:a,null:a}}(),o=/[+\-*&%=<>!?|]/
function u(e,t,n){return t.tokenize=n,n(e,t)}function c(e,t){for(var n,r=!1;null!=(n=e.next());){if(n==t&&!r)return!1
r=!r&&"\\"==n}return r}function l(e,t,i){return n=e,r=i,t}function f(e,t){var n=e.next()
if('"'==n||"'"==n)return u(e,t,(r=n,function(e,t){return c(e,r)||(t.tokenize=f),l("string","string")}))
if(/[\[\]{}\(\),;\:\.]/.test(n))return l(n)
if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),l("number","number")
if(/\d/.test(n)||"-"==n&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),l("number","number")
if(t.reAllowed&&"~"==n&&e.eat(/\//))return c(e,"/"),e.eatWhile(/[gimsu]/),l("regexp","string-2")
if("/"==n)return e.eat("*")?u(e,t,d):e.eat("/")?(e.skipToEnd(),l("comment","comment")):(e.eatWhile(o),l("operator",null,e.current()))
if("#"==n)return e.skipToEnd(),l("conditional","meta")
if("@"==n)return e.eat(/:/),e.eatWhile(/[\w_]/),l("metadata","meta")
if(o.test(n))return e.eatWhile(o),l("operator",null,e.current())
if(/[A-Z]/.test(n))return e.eatWhile(/[\w_<>]/),l("type","variable-3",i=e.current())
e.eatWhile(/[\w_]/)
var r,i=e.current(),s=a.propertyIsEnumerable(i)&&a[i]
return s&&t.kwAllowed?l(s.type,s.style,i):l("variable","variable",i)}function d(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=f
break}r="*"==n}return l("comment","comment")}var s={atom:!0,number:!0,variable:!0,string:!0,regexp:!0}
function m(e,t,n,r,i,a){this.indented=e,this.column=t,this.type=n,this.prev=i,this.info=a,null!=r&&(this.align=r)}function p(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0}function v(e,t){if(/[a-z]/.test(t.charAt(0)))return!1
for(var n=e.importedtypes.length,r=0;r<n;r++)if(e.importedtypes[r]==t)return!0}function y(e){for(var t=x.state,n=t.importedtypes;n;n=n.next)if(n.name==e)return
t.importedtypes={name:e,next:t.importedtypes}}var x={state:null,column:null,marked:null,cc:null}
function h(){for(var e=arguments.length-1;e>=0;e--)x.cc.push(arguments[e])}function b(){return h.apply(null,arguments),!0}function k(e){var t=x.state
if(t.context){x.marked="def"
for(var n=t.localVars;n;n=n.next)if(n.name==e)return
t.localVars={name:e,next:t.localVars}}}var w={name:"this",next:null}
function g(){x.state.context||(x.state.localVars=w),x.state.context={prev:x.state.context,vars:x.state.localVars}}function A(){x.state.localVars=x.state.context.vars,x.state.context=x.state.context.prev}function V(e,t){var n=function(){var n=x.state
n.lexical=new m(n.indented,x.stream.column(),e,null,n.lexical,t)}
return n.lex=!0,n}function S(){var e=x.state
e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function E(e){return function t(n){return n==e?b():";"==e?h():b(t)}}function W(e){return"@"==e?b(Z):"var"==e?b(V("vardef"),F,E(";"),S):"keyword a"==e?b(V("form"),z,W,S):"keyword b"==e?b(V("form"),W,S):"{"==e?b(V("}"),g,B,S,A):";"==e?b():"attribute"==e?b(T):"function"==e?b(H):"for"==e?b(V("form"),E("("),V(")"),$,E(")"),S,W,S):"variable"==e?b(V("stat"),_):"switch"==e?b(V("form"),z,V("}","switch"),E("{"),B,S,S):"case"==e?b(z,E(":")):"default"==e?b(E(":")):"catch"==e?b(V("form"),g,E("("),N,E(")"),W,S,A):"import"==e?b(O,E(";")):"typedef"==e?b(P):h(V("stat"),z,E(";"),S)}function z(e){return s.hasOwnProperty(e)?b(C):"function"==e?b(H):"keyword c"==e?b(M):"("==e?b(V(")"),M,E(")"),S,C):"operator"==e?b(z):"["==e?b(V("]"),q(z,"]"),S,C):"{"==e?b(V("}"),q(j,"}"),S,C):b()}function M(e){return e.match(/[;\}\)\],]/)?h():h(z)}function C(e,t){return"operator"==e&&/\+\+|--/.test(t)?b(C):"operator"==e||":"==e?b(z):";"!=e?"("==e?b(V(")"),q(z,")"),S,C):"."==e?b(D,C):"["==e?b(V("]"),z,E("]"),S,C):void 0:void 0}function T(e){return"attribute"==e?b(T):"function"==e?b(H):"var"==e?b(F):void 0}function Z(e){return":"==e?b(Z):"variable"==e?b(Z):"("==e?b(V(")"),q(I,")"),S,W):void 0}function I(e){if("variable"==e)return b()}function O(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(y(t),b()):"variable"==e||"property"==e||"."==e||"*"==t?b(O):void 0}function P(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(y(t),b()):"type"==e&&/[A-Z]/.test(t.charAt(0))?b():void 0}function _(e){return":"==e?b(S,W):h(C,E(";"),S)}function D(e){if("variable"==e)return x.marked="property",b()}function j(e){if("variable"==e&&(x.marked="property"),s.hasOwnProperty(e))return b(E(":"),z)}function q(e,t){function n(r){return","==r?b(e,n):r==t?b():b(E(t))}return function(r){return r==t?b():h(e,n)}}function B(e){return"}"==e?b():h(W,B)}function F(e,t){return"variable"==e?(k(t),b(J,U)):b()}function U(e,t){return"="==t?b(z,U):","==e?b(F):void 0}function $(e,t){return"variable"==e&&k(t),b(V(")"),g,G,z,S,W,A)}function G(e,t){if("in"==t)return b()}function H(e,t){return"variable"==e?(k(t),b(H)):"new"==t?b(H):"("==e?b(V(")"),g,q(N,")"),S,J,W,A):void 0}function J(e){if(":"==e)return b(K)}function K(e){return"type"==e?b():"variable"==e?b():"{"==e?b(V("}"),q(L,"}"),S):void 0}function L(e){if("variable"==e)return b(J)}function N(e,t){if("variable"==e)return k(t),b(J)}return S.lex=!0,{startState:function(e){return{tokenize:f,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new m((e||0)-i,0,"block",!1),localVars:t.localVars,importedtypes:["Int","Float","String","Void","Std","Bool","Dynamic","Array"],context:t.localVars&&{vars:t.localVars},indented:0}},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation()),e.eatSpace())return null
var i=t.tokenize(e,t)
return"comment"==n?i:(t.reAllowed=!("operator"!=n&&"keyword c"!=n&&!n.match(/^[\[{}\(,;:]$/)),t.kwAllowed="."!=n,function(e,t,n,r,i){var a=e.cc
for(x.state=e,x.stream=i,x.marked=null,x.cc=a,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((a.length?a.pop():W)(n,r)){for(;a.length&&a[a.length-1].lex;)a.pop()()
return x.marked?x.marked:"variable"==n&&p(e,r)?"variable-2":"variable"==n&&v(e,r)?"variable-3":t}}(t,i,n,r,e))},indent:function(e,t){if(e.tokenize!=f)return 0
var n=t&&t.charAt(0),r=e.lexical
"stat"==r.type&&"}"==n&&(r=r.prev)
var a=r.type,o=n==a
return"vardef"==a?r.indented+4:"form"==a&&"{"==n?r.indented:"stat"==a||"form"==a?r.indented+i:"switch"!=r.info||o?r.align?r.column+(o?0:1):r.indented+(o?0:i):r.indented+(/^(?:case|default)\b/.test(t)?i:2*i)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-haxe","haxe"),e.defineMode("hxml",function(){return{startState:function(){return{define:!1,inString:!1}},token:function(e,t){var n=e.peek(),r=e.sol()
if("#"==n)return e.skipToEnd(),"comment"
if(r&&"-"==n){var i="variable-2"
return e.eat(/-/),"-"==e.peek()&&(e.eat(/-/),i="keyword a"),"D"==e.peek()&&(e.eat(/[D]/),i="keyword c",t.define=!0),e.eatWhile(/[A-Z]/i),i}n=e.peek()
return 0==t.inString&&"'"==n&&(t.inString=!0,n=e.next()),1==t.inString?(e.skipTo("'")||e.skipToEnd(),"'"==e.peek()&&(e.next(),t.inString=!1),"string"):(e.next(),null)},lineComment:"#"}}),e.defineMIME("text/x-hxml","hxml")})