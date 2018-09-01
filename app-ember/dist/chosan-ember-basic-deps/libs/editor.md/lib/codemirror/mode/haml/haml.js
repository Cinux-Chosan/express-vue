(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../ruby/ruby")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../ruby/ruby"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("haml",function(t){var n=e.getMode(t,{name:"htmlmixed"}),i=e.getMode(t,"ruby")
function r(e){return function(t,n){return t.peek()==e&&1==n.rubyState.tokenize.length?(t.next(),n.tokenize=u,"closeAttributeTag"):o(t,n)}}function o(e,t){return e.match("-#")?(e.skipToEnd(),"comment"):i.token(e,t.rubyState)}function u(e,t){var i=e.peek()
if("comment"==t.previousToken.style&&t.indented>t.previousToken.indented)return e.skipToEnd(),"commentLine"
if(t.startOfLine){if("!"==i&&e.match("!!"))return e.skipToEnd(),"tag"
if(e.match(/^%[\w:#\.]+=/))return t.tokenize=o,"hamlTag"
if(e.match(/^%[\w:]+/))return"hamlTag"
if("/"==i)return e.skipToEnd(),"comment"}if((t.startOfLine||"hamlTag"==t.previousToken.style)&&("#"==i||"."==i))return e.match(/[\w-#\.]*/),"hamlAttribute"
if(t.startOfLine&&!e.match("--\x3e",!1)&&("="==i||"-"==i))return t.tokenize=o,t.tokenize(e,t)
if("hamlTag"==t.previousToken.style||"closeAttributeTag"==t.previousToken.style||"hamlAttribute"==t.previousToken.style){if("("==i)return t.tokenize=r(")"),t.tokenize(e,t)
if("{"==i)return t.tokenize=r("}"),t.tokenize(e,t)}return n.token(e,t.htmlState)}return{startState:function(){return{htmlState:n.startState(),rubyState:i.startState(),indented:0,previousToken:{style:null,indented:0},tokenize:u}},copyState:function(t){return{htmlState:e.copyState(n,t.htmlState),rubyState:e.copyState(i,t.rubyState),indented:t.indented,previousToken:t.previousToken,tokenize:t.tokenize}},token:function(e,t){if(e.sol()&&(t.indented=e.indentation(),t.startOfLine=!0),e.eatSpace())return null
var n=t.tokenize(e,t)
if(t.startOfLine=!1,n&&"commentLine"!=n&&(t.previousToken={style:n,indented:t.indented}),e.eol()&&t.tokenize==o){e.backUp(1)
var i=e.peek()
e.next(),i&&","!=i&&(t.tokenize=u)}return"hamlTag"==n?n="tag":"commentLine"==n?n="comment":"hamlAttribute"==n?n="attribute":"closeAttributeTag"==n&&(n=null),n}}},"htmlmixed","ruby"),e.defineMIME("text/x-haml","haml")})
