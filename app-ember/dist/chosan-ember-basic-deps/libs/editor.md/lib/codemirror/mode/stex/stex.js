(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){"use strict"
t.defineMode("stex",function(){function t(t,e){t.cmdState.push(e)}function e(t){return t.cmdState.length>0?t.cmdState[t.cmdState.length-1]:null}function n(t,e,n){return function(){this.name=t,this.bracketNo=0,this.style=e,this.styles=n,this.argument=null,this.styleIdentifier=function(){return this.styles[this.bracketNo-1]||null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}var r={}
function i(t,e){t.f=e}function a(n,a){var o
if(n.match(/^\\[a-zA-Z@]+/)){var f=n.current().slice(1)
return t(a,o=new(o=r[f]||r.DEFAULT)),i(a,u),o.style}if(n.match(/^\\[$&%#{}_]/))return"tag"
if(n.match(/^\\[,;!\/\\]/))return"tag"
if(n.match("\\["))return i(a,function(t,e){return c(t,e,"\\]")}),"keyword"
if(n.match("$$"))return i(a,function(t,e){return c(t,e,"$$")}),"keyword"
if(n.match("$"))return i(a,function(t,e){return c(t,e,"$")}),"keyword"
var s=n.next()
return"%"==s?(n.skipToEnd(),"comment"):"}"==s||"]"==s?(o=e(a))?(o.closeBracket(s),i(a,u),"bracket"):"error":"{"==s||"["==s?(t(a,o=new(o=r.DEFAULT)),"bracket"):/\d/.test(s)?(n.eatWhile(/[\w.%]/),"atom"):(n.eatWhile(/[\w\-_]/),"begin"==(o=function(t){for(var e=t.cmdState,n=e.length-1;n>=0;n--){var r=e[n]
if("DEFAULT"!=r.name)return r}return{styleIdentifier:function(){return null}}}(a)).name&&(o.argument=n.current()),o.styleIdentifier())}function c(t,e,n){if(t.eatSpace())return null
if(t.match(n))return i(e,a),"keyword"
if(t.match(/^\\[a-zA-Z@]+/))return"tag"
if(t.match(/^[a-zA-Z]+/))return"variable-2"
if(t.match(/^\\[$&%#{}_]/))return"tag"
if(t.match(/^\\[,;!\/]/))return"tag"
if(t.match(/^[\^_&]/))return"tag"
if(t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))return null
if(t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))return"number"
var r=t.next()
return"{"==r||"}"==r||"["==r||"]"==r||"("==r||")"==r?"bracket":"%"==r?(t.skipToEnd(),"comment"):"error"}function u(t,n){var r=t.peek()
return"{"==r||"["==r?(e(n).openBracket(r),t.eat(r),i(n,a),"bracket"):/[ \t\r]/.test(r)?(t.eat(r),null):(i(n,a),function(t){var e=t.cmdState.pop()
e&&e.closeBracket()}(n),a(t,n))}return r.importmodule=n("importmodule","tag",["string","builtin"]),r.documentclass=n("documentclass","tag",["","atom"]),r.usepackage=n("usepackage","tag",["atom"]),r.begin=n("begin","tag",["atom"]),r.end=n("end","tag",["atom"]),r.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=this.openBracket=this.closeBracket=function(){}},{startState:function(){return{cmdState:[],f:a}},copyState:function(t){return{cmdState:t.cmdState.slice(),f:t.f}},token:function(t,e){return e.f(t,e)},blankLine:function(t){t.f=a,t.cmdState.length=0},lineComment:"%"}}),t.defineMIME("text/x-stex","stex"),t.defineMIME("text/x-latex","stex")})
