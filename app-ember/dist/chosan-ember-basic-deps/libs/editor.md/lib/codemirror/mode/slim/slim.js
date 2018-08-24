(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../ruby/ruby")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../ruby/ruby"],t):t(CodeMirror)})(function(t){"use strict"
t.defineMode("slim",function(e){var n=t.getMode(e,{name:"htmlmixed"}),i=t.getMode(e,"ruby"),r={html:n,ruby:i},o={ruby:"ruby",javascript:"javascript",css:"text/css",sass:"text/x-sass",scss:"text/x-scss",less:"text/x-less",styl:"text/x-styl",coffee:"coffeescript",asciidoc:"text/x-asciidoc",markdown:"text/x-markdown",textile:"text/x-textile",creole:"text/x-creole",wiki:"text/x-wiki",mediawiki:"text/x-mediawiki",rdoc:"text/x-rdoc",builder:"text/x-builder",nokogiri:"text/x-nokogiri",erb:"application/x-erb"},u=function(t){var e=[]
for(var n in t)e.push(n)
return new RegExp("^("+e.join("|")+"):")}(o),a={commentLine:"comment",slimSwitch:"operator special",slimTag:"tag",slimId:"attribute def",slimClass:"attribute qualifier",slimAttribute:"attribute",slimSubmode:"keyword special",closeAttributeTag:null,slimDoctype:null,lineContinuation:null},c={"{":"}","[":"]","(":")"},l="_a-zA-ZÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�",s=l+"\\-0-9·̀-ͯ‿-⁀",k=new RegExp("^[:"+l+"](?::["+s+"]|["+s+"]*)"),d=new RegExp("^[:"+l+"][:\\."+s+"]*(?=\\s*=)"),m=new RegExp("^[:"+l+"][:\\."+s+"]*"),f=/^\.-?[_a-zA-Z]+[\w\-]*/,b=/^#[_a-zA-Z]+[\w\-]*/
function z(t,e){t.stack={parent:t.stack,style:"continuation",indented:e,tokenize:t.line},t.line=t.tokenize}function p(t){t.line==t.tokenize&&(t.line=t.stack.tokenize,t.stack=t.stack.parent)}function x(t,e){return function(n,i){return n.peek()==t&&1==i.rubyState.tokenize.length?(n.next(),i.tokenize=e,"closeAttributeTag"):y(n,i)}}function h(t){var e,n=function(n,i){if(1==i.rubyState.tokenize.length&&!i.rubyState.context.prev){if(n.backUp(1),n.eatSpace())return i.rubyState=e,i.tokenize=t,t(n,i)
n.next()}return y(n,i)}
return function(t,r){return e=r.rubyState,r.rubyState=i.startState(),r.tokenize=n,y(t,r)}}function y(t,e){return i.token(t,e.rubyState)}function S(t,e){return t.match(/^#\{/)?(e.tokenize=x("}",e.tokenize),null):function(t,e,n,i,r){var o=t.current(),u=o.search(n)
return u>-1&&(e.tokenize=function(t,e,n){var i=function(i,r){return r.tokenize=e,i.pos<t?(i.pos=t,n):r.tokenize(i,r)}
return function(t,n){return n.tokenize=i,e(t,n)}}(t.pos,e.tokenize,r),t.backUp(o.length-u-i)),r}(t,e,/[^\\]#\{/,1,n.token(t,e.htmlState))}function v(t){return function(e,n){var i=function(t,e){return t.match(/^\\$/)?"lineContinuation":S(t,e)}(e,n)
return e.eol()&&(n.tokenize=t),i}}function w(t,e,n){return e.stack={parent:e.stack,style:"html",indented:t.column()+n,tokenize:e.line},e.line=e.tokenize=S,null}function g(t,e){return t.skipToEnd(),e.stack.style}function M(t,e){return t.eat(e.stack.endQuote)?(e.line=e.stack.line,e.tokenize=e.stack.tokenize,e.stack=e.stack.parent,null):t.match(m)?(e.tokenize=C,"slimAttribute"):(t.next(),null)}function C(t,e){return t.match(/^==?/)?(e.tokenize=E,null):M(t,e)}function E(t,e){var n=t.peek()
return'"'==n||"'"==n?(e.tokenize=D(n,"string",!0,!1,M),t.next(),e.tokenize(t,e)):"["==n?h(M)(t,e):t.match(/^(true|false|nil)\b/)?(e.tokenize=M,"keyword"):h(M)(t,e)}function A(e,n){if(e.match(/^#\{/))return n.tokenize=x("}",n.tokenize),null
var i=new t.StringStream(e.string.slice(n.stack.indented),e.tabSize)
i.pos=e.pos-n.stack.indented,i.start=e.start-n.stack.indented,i.lastColumnPos=e.lastColumnPos-n.stack.indented,i.lastColumnValue=e.lastColumnValue-n.stack.indented
var r=n.subMode.token(i,n.subState)
return e.pos=i.pos+n.stack.indented,r}function L(t,e){return e.stack.indented=t.column(),e.line=e.tokenize=A,e.tokenize(t,e)}function $(n){return r.hasOwnProperty(n)?r[n]:r[n]=function(n){var i=o[n],r=t.mimeModes[i]
if(r)return t.getMode(e,r)
var u=t.modes[i]
return u?u(e,{name:i}):t.getMode(e,"null")}(n)}function T(t,e){return t.skipToEnd(),"slimDoctype"}function U(t,e){var n,i
if("<"==t.peek())return(e.tokenize=v(e.tokenize))(t,e)
if(t.match(/^[|']/))return w(t,e,1)
if(t.match(/^\/(!|\[\w+])?/))return function(t,e){return e.stack={parent:e.stack,style:"comment",indented:e.indented+1,tokenize:e.line},e.line=g,g(t,e)}(t,e)
if(t.match(/^(-|==?[<>]?)/))return e.tokenize=function(t,e){return function(n,i){if(p(i),n.match(/^\\$/))return z(i,t),"lineContinuation"
var r=e(n,i)
return n.eol()&&n.current().match(/(?:^|[^\\])(?:\\\\)*\\$/)&&n.backUp(1),r}}(t.column(),(n=t.column(),i=y,function(t,e){p(e)
var r=i(t,e)
return t.eol()&&t.current().match(/,$/)&&z(e,n),r})),"slimSwitch"
if(t.match(/^doctype\b/))return e.tokenize=T,"keyword"
var r=t.match(u)
return r?function(t,e){var n=$(t),i=n.startState&&n.startState()
return e.subMode=n,e.subState=i,e.stack={parent:e.stack,style:"sub",indented:e.indented+1,tokenize:e.line},e.line=e.tokenize=L,"slimSubmode"}(r[1],e):O(t,e)}function j(t,e){return e.startOfLine?U(t,e):O(t,e)}function O(t,e){return t.eat("*")?(e.tokenize=h(R),null):t.match(k)?(e.tokenize=R,"slimTag"):q(t,e)}function R(t,e){return t.match(/^(<>?|><?)/)?(e.tokenize=q,null):q(t,e)}function q(t,e){return t.match(b)?(e.tokenize=q,"slimId"):t.match(f)?(e.tokenize=q,"slimClass"):I(t,e)}function I(t,e){return t.match(/^([\[\{\(])/)?function(t,e,n){return t.stack={parent:t.stack,style:"wrapper",indented:t.indented+1,tokenize:n,line:t.line,endQuote:e},t.line=t.tokenize=M,null}(e,c[RegExp.$1],I):t.match(d)?(e.tokenize=P,"slimAttribute"):"*"==t.peek()?(t.next(),e.tokenize=h(Q),null):Q(t,e)}function P(t,e){return t.match(/^==?/)?(e.tokenize=Z,null):I(t,e)}function Z(t,e){var n=t.peek()
return'"'==n||"'"==n?(e.tokenize=D(n,"string",!0,!1,I),t.next(),e.tokenize(t,e)):"["==n?h(I)(t,e):":"==n?h(_)(t,e):t.match(/^(true|false|nil)\b/)?(e.tokenize=I,"keyword"):h(I)(t,e)}function _(t,e){return t.backUp(1),t.match(/^[^\s],(?=:)/)?(e.tokenize=h(_),null):(t.next(),I(t,e))}function D(t,e,n,i,r){return function(o,u){p(u)
var a=0==o.current().length
if(o.match(/^\\$/,a))return a?(z(u,u.indented),"lineContinuation"):e
if(o.match(/^#\{/,a))return a?(u.tokenize=x("}",u.tokenize),null):e
for(var c,l=!1;null!=(c=o.next());){if(c==t&&(i||!l)){u.tokenize=r
break}if(n&&"#"==c&&!l&&o.eat("{")){o.backUp(2)
break}l=!l&&"\\"==c}return o.eol()&&l&&o.backUp(1),e}}function Q(t,e){return t.match(/^==?/)?(e.tokenize=y,"slimSwitch"):t.match(/^\/$/)?(e.tokenize=j,null):t.match(/^:/)?(e.tokenize=O,"slimSwitch"):(w(t,e,0),e.tokenize(t,e))}var V={startState:function(){return{htmlState:n.startState(),rubyState:i.startState(),stack:null,last:null,tokenize:j,line:j,indented:0}},copyState:function(e){return{htmlState:t.copyState(n,e.htmlState),rubyState:t.copyState(i,e.rubyState),subMode:e.subMode,subState:e.subMode&&t.copyState(e.subMode,e.subState),stack:e.stack,last:e.last,tokenize:e.tokenize,line:e.line}},token:function(t,e){if(t.sol())for(e.indented=t.indentation(),e.startOfLine=!0,e.tokenize=e.line;e.stack&&e.stack.indented>e.indented&&"slimSubmode"!=e.last;)e.line=e.tokenize=e.stack.tokenize,e.stack=e.stack.parent,e.subMode=null,e.subState=null
if(t.eatSpace())return null
var n=e.tokenize(t,e)
return e.startOfLine=!1,n&&(e.last=n),a.hasOwnProperty(n)?a[n]:n},blankLine:function(t){if(t.subMode&&t.subMode.blankLine)return t.subMode.blankLine(t.subState)},innerMode:function(t){return t.subMode?{state:t.subState,mode:t.subMode}:{state:t,mode:V}}}
return V},"htmlmixed","ruby"),t.defineMIME("text/x-slim","slim"),t.defineMIME("application/x-slim","slim")})
