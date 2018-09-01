(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("javascript",function(t,r){var n,a,i=t.indentUnit,o=r.statementIndent,c=r.jsonld,l=r.json||c,u=r.typescript,f=r.wordCharacters||/[\w$\xa1-\uffff]/,s=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"},o={if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:n,break:n,continue:n,new:n,delete:n,throw:n,debugger:n,var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:a,typeof:a,instanceof:a,true:i,false:i,null:i,undefined:i,NaN:i,Infinity:i,this:e("this"),module:e("module"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n}
if(u){var c={type:"variable",style:"variable-3"},l={interface:e("interface"),extends:e("extends"),constructor:e("constructor"),public:e("public"),private:e("private"),protected:e("protected"),static:e("static"),string:c,number:c,bool:c,any:c}
for(var f in l)o[f]=l[f]}return o}(),d=/[+\-*&%=<>!?|~^]/,p=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/
function v(e,t,r){return n=e,a=r,t}function m(e,t){var r,n=e.next()
if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,a=!1
if(c&&"@"==e.peek()&&e.match(p))return t.tokenize=m,v("jsonld-keyword","meta")
for(;null!=(n=e.next())&&(n!=r||a);)a=!a&&"\\"==n
return a||(t.tokenize=m),v("string","string")}),t.tokenize(e,t)
if("."==n&&e.match(/^\d+(?:[eE][+\-]?\d+)?/))return v("number","number")
if("."==n&&e.match(".."))return v("spread","meta")
if(/[\[\]{}\(\),;\:\.]/.test(n))return v(n)
if("="==n&&e.eat(">"))return v("=>","operator")
if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),v("number","number")
if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),v("number","number")
if("/"==n)return e.eat("*")?(t.tokenize=y,y(e,t)):e.eat("/")?(e.skipToEnd(),v("comment","comment")):"operator"==t.lastType||"keyword c"==t.lastType||"sof"==t.lastType||/^[\[{}\(,;:]$/.test(t.lastType)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return
"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyu])(?![gimyu]*\2))+\b/),v("regexp","string-2")):(e.eatWhile(d),v("operator","operator",e.current()))
if("`"==n)return t.tokenize=b,b(e,t)
if("#"==n)return e.skipToEnd(),v("error","error")
if(d.test(n))return e.eatWhile(d),v("operator","operator",e.current())
if(f.test(n)){e.eatWhile(f)
var a=e.current(),i=s.propertyIsEnumerable(a)&&s[a]
return i&&"."!=t.lastType?v(i.type,i.style,a):v("variable","variable",a)}}function y(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=m
break}n="*"==r}return v("comment","comment")}function b(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=m
break}n=!n&&"\\"==r}return v("quasi","string-2",e.current())}var k="([{}])"
function x(e,t){t.fatArrowAt&&(t.fatArrowAt=null)
var r=e.string.indexOf("=>",e.start)
if(!(r<0)){for(var n=0,a=!1,i=r-1;i>=0;--i){var o=e.string.charAt(i),c=k.indexOf(o)
if(c>=0&&c<3){if(!n){++i
break}if(0==--n)break}else if(c>=3&&c<6)++n
else if(f.test(o))a=!0
else{if(/["'\/]/.test(o))return
if(a&&!n){++i
break}}}a&&!n&&(t.fatArrowAt=i)}}var h={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0}
function g(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function w(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0
for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}var j={state:null,column:null,marked:null,cc:null}
function M(){for(var e=arguments.length-1;e>=0;e--)j.cc.push(arguments[e])}function V(){return M.apply(null,arguments),!0}function E(e){function t(t){for(var r=t;r;r=r.next)if(r.name==e)return!0
return!1}var n=j.state
if(n.context){if(j.marked="def",t(n.localVars))return
n.localVars={name:e,next:n.localVars}}else{if(t(n.globalVars))return
r.globalVars&&(n.globalVars={name:e,next:n.globalVars})}}var I={name:"this",next:{name:"arguments"}}
function z(){j.state.context={prev:j.state.context,vars:j.state.localVars},j.state.localVars=I}function T(){j.state.localVars=j.state.context.vars,j.state.context=j.state.context.prev}function A(e,t){var r=function(){var r=j.state,n=r.indented
if("stat"==r.lexical.type)n=r.lexical.indented
else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented
r.lexical=new g(n,j.stream.column(),e,null,r.lexical,t)}
return r.lex=!0,r}function C(){var e=j.state
e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function $(e){return function t(r){return r==e?V():";"==e?M():V(t)}}function q(e,t){return"var"==e?V(A("vardef",t.length),te,$(";"),C):"keyword a"==e?V(A("form"),O,q,C):"keyword b"==e?V(A("form"),q,C):"{"==e?V(A("}"),Z,C):";"==e?V():"if"==e?("else"==j.state.lexical.info&&j.state.cc[j.state.cc.length-1]==C&&j.state.cc.pop()(),V(A("form"),O,q,C,oe)):"function"==e?V(de):"for"==e?V(A("form"),ce,q,C):"variable"==e?V(A("stat"),J):"switch"==e?V(A("form"),O,A("}","switch"),$("{"),Z,C,C):"case"==e?V(O,$(":")):"default"==e?V($(":")):"catch"==e?V(A("form"),z,$("("),pe,$(")"),q,C,T):"module"==e?V(A("form"),z,ke,T,C):"class"==e?V(A("form"),ve,C):"export"==e?V(A("form"),xe,C):"import"==e?V(A("form"),he,C):M(A("stat"),O,$(";"),C)}function O(e){return S(e,!1)}function P(e){return S(e,!0)}function S(e,t){if(j.state.fatArrowAt==j.stream.start){var r=t?G:F
if("("==e)return V(z,A(")"),X(re,")"),C,$("=>"),r,T)
if("variable"==e)return M(z,re,$("=>"),r,T)}var n=t?U:H
return h.hasOwnProperty(e)?V(n):"function"==e?V(de,n):"keyword c"==e?V(t?N:W):"("==e?V(A(")"),W,Ve,$(")"),C,n):"operator"==e||"spread"==e?V(t?P:O):"["==e?V(A("]"),je,C,n):"{"==e?Y(L,"}",null,n):"quasi"==e?M(B,n):V()}function W(e){return e.match(/[;\}\)\],]/)?M():M(O)}function N(e){return e.match(/[;\}\)\],]/)?M():M(P)}function H(e,t){return","==e?V(O):U(e,t,!1)}function U(e,t,r){var n=0==r?H:U,a=0==r?O:P
return"=>"==e?V(z,r?G:F,T):"operator"==e?/\+\+|--/.test(t)?V(n):"?"==t?V(O,$(":"),a):V(a):"quasi"==e?M(B,n):";"!=e?"("==e?Y(P,")","call",n):"."==e?V(K,n):"["==e?V(A("]"),W,$("]"),C,n):void 0:void 0}function B(e,t){return"quasi"!=e?M():"${"!=t.slice(t.length-2)?V(B):V(O,D)}function D(e){if("}"==e)return j.marked="string-2",j.state.tokenize=b,V(B)}function F(e){return x(j.stream,j.state),M("{"==e?q:O)}function G(e){return x(j.stream,j.state),M("{"==e?q:P)}function J(e){return":"==e?V(C,q):M(H,$(";"),C)}function K(e){if("variable"==e)return j.marked="property",V()}function L(e,t){return"variable"==e||"keyword"==j.style?(j.marked="property",V("get"==t||"set"==t?Q:R)):"number"==e||"string"==e?(j.marked=c?"property":j.style+" property",V(R)):"jsonld-keyword"==e?V(R):"["==e?V(O,$("]"),R):void 0}function Q(e){return"variable"!=e?M(R):(j.marked="property",V(de))}function R(e){return":"==e?V(P):"("==e?M(de):void 0}function X(e,t){function r(n){if(","==n){var a=j.state.lexical
return"call"==a.info&&(a.pos=(a.pos||0)+1),V(e,r)}return n==t?V():V($(t))}return function(n){return n==t?V():M(e,r)}}function Y(e,t,r){for(var n=3;n<arguments.length;n++)j.cc.push(arguments[n])
return V(A(t,r),X(e,t),C)}function Z(e){return"}"==e?V():M(q,Z)}function _(e){if(u&&":"==e)return V(ee)}function ee(e){if("variable"==e)return j.marked="variable-3",V()}function te(){return M(re,_,ae,ie)}function re(e,t){return"variable"==e?(E(t),V()):"["==e?Y(re,"]"):"{"==e?Y(ne,"}"):void 0}function ne(e,t){return"variable"!=e||j.stream.match(/^\s*:/,!1)?("variable"==e&&(j.marked="property"),V($(":"),re,ae)):(E(t),V(ae))}function ae(e,t){if("="==t)return V(P)}function ie(e){if(","==e)return V(te)}function oe(e,t){if("keyword b"==e&&"else"==t)return V(A("form","else"),q,C)}function ce(e){if("("==e)return V(A(")"),le,$(")"),C)}function le(e){return"var"==e?V(te,$(";"),fe):";"==e?V(fe):"variable"==e?V(ue):M(O,$(";"),fe)}function ue(e,t){return"in"==t||"of"==t?(j.marked="keyword",V(O)):V(H,fe)}function fe(e,t){return";"==e?V(se):"in"==t||"of"==t?(j.marked="keyword",V(O)):M(O,$(";"),se)}function se(e){")"!=e&&V(O)}function de(e,t){return"*"==t?(j.marked="keyword",V(de)):"variable"==e?(E(t),V(de)):"("==e?V(z,A(")"),X(pe,")"),C,q,T):void 0}function pe(e){return"spread"==e?V(pe):M(re,_)}function ve(e,t){if("variable"==e)return E(t),V(me)}function me(e,t){return"extends"==t?V(O,me):"{"==e?V(A("}"),ye,C):void 0}function ye(e,t){return"variable"==e||"keyword"==j.style?(j.marked="property","get"==t||"set"==t?V(be,de,ye):V(de,ye)):"*"==t?(j.marked="keyword",V(ye)):";"==e?V(ye):"}"==e?V():void 0}function be(e){return"variable"!=e?M():(j.marked="property",V())}function ke(e,t){return"string"==e?V(q):"variable"==e?(E(t),V(we)):void 0}function xe(e,t){return"*"==t?(j.marked="keyword",V(we,$(";"))):"default"==t?(j.marked="keyword",V(O,$(";"))):M(q)}function he(e){return"string"==e?V():M(ge,we)}function ge(e,t){return"{"==e?Y(ge,"}"):("variable"==e&&E(t),V())}function we(e,t){if("from"==t)return j.marked="keyword",V(O)}function je(e){return"]"==e?V():M(P,Me)}function Me(e){return"for"==e?M(Ve,$("]")):","==e?V(X(N,"]")):M(X(P,"]"))}function Ve(e){return"for"==e?V(ce,Ve):"if"==e?V(O,Ve):void 0}return C.lex=!0,{startState:function(e){var t={tokenize:m,lastType:"sof",cc:[],lexical:new g((e||0)-i,0,"block",!1),localVars:r.localVars,context:r.localVars&&{vars:r.localVars},indented:0}
return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),x(e,t)),t.tokenize!=y&&e.eatSpace())return null
var r=t.tokenize(e,t)
return"comment"==n?r:(t.lastType="operator"!=n||"++"!=a&&"--"!=a?n:"incdec",function(e,t,r,n,a){var i=e.cc
for(j.state=e,j.stream=a,j.marked=null,j.cc=i,j.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():l?O:q)(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()()
return j.marked?j.marked:"variable"==r&&w(e,n)?"variable-2":t}}(t,r,n,a,e))},indent:function(t,n){if(t.tokenize==y)return e.Pass
if(t.tokenize!=m)return 0
var a=n&&n.charAt(0),c=t.lexical
if(!/^\s*else\b/.test(n))for(var l=t.cc.length-1;l>=0;--l){var u=t.cc[l]
if(u==C)c=c.prev
else if(u!=oe)break}"stat"==c.type&&"}"==a&&(c=c.prev),o&&")"==c.type&&"stat"==c.prev.type&&(c=c.prev)
var f=c.type,s=a==f
return"vardef"==f?c.indented+("operator"==t.lastType||","==t.lastType?c.info+1:0):"form"==f&&"{"==a?c.indented:"form"==f?c.indented+i:"stat"==f?c.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||d.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,n)?o||i:0):"switch"!=c.info||s||0==r.doubleIndentSwitch?c.align?c.column+(s?0:1):c.indented+(s?0:i):c.indented+(/^(?:case|default)\b/.test(n)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:l?null:"/*",blockCommentEnd:l?null:"*/",lineComment:l?null:"//",fold:"brace",helperType:l?"json":"javascript",jsonldMode:c,jsonMode:l}}),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})})
