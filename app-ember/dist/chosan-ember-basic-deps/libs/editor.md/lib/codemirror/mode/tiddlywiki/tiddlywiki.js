(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("tiddlywiki",function(){var e={},t=function(){function e(e){return{type:e,style:"macro"}}return{allTags:e("allTags"),closeAll:e("closeAll"),list:e("list"),newJournal:e("newJournal"),newTiddler:e("newTiddler"),permaview:e("permaview"),saveChanges:e("saveChanges"),search:e("search"),slider:e("slider"),tabs:e("tabs"),tag:e("tag"),tagging:e("tagging"),tags:e("tags"),tiddler:e("tiddler"),timeline:e("timeline"),today:e("today"),version:e("version"),option:e("option"),with:e("with"),filter:e("filter")}}(),r=/[\w_\-]/i,n=/^\-\-\-\-+$/,i=/^\/\*\*\*$/,o=/^\*\*\*\/$/,a=/^<<<$/,u=/^\/\/\{\{\{$/,c=/^\/\/\}\}\}$/,f=/^<!--\{\{\{-->$/,l=/^<!--\}\}\}-->$/,m=/^\{\{\{$/,s=/^\}\}\}$/,d=/.*?\}\}\}/
function h(e,t,r){return t.tokenize=r,r(e,t)}function k(e,t,r){return e,r,t}function b(t,s){var d,b=t.sol()
if(s.block=!1,d=t.peek(),b&&/[<\/\*{}\-]/.test(d)){if(t.match(m))return s.block=!0,h(t,s,g)
if(t.match(a))return k("quote","quote")
if(t.match(i)||t.match(o))return k("code","comment")
if(t.match(u)||t.match(c)||t.match(f)||t.match(l))return k("code","comment")
if(t.match(n))return k("hr","hr")}if(d=t.next(),b&&/[\/\*!#;:>|]/.test(d)){if("!"==d)return t.skipToEnd(),k("header","header")
if("*"==d)return t.eatWhile("*"),k("list","comment")
if("#"==d)return t.eatWhile("#"),k("list","comment")
if(";"==d)return t.eatWhile(";"),k("list","comment")
if(":"==d)return t.eatWhile(":"),k("list","comment")
if(">"==d)return t.eatWhile(">"),k("quote","quote")
if("|"==d)return k("table","header")}if("{"==d&&t.match(/\{\{/))return h(t,s,g)
if(/[hf]/i.test(d)&&/[ti]/i.test(t.peek())&&t.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return k("link","link")
if('"'==d)return k("string","string")
if("~"==d)return k("text","brace")
if(/[\[\]]/.test(d)&&t.peek()==d)return t.next(),k("brace","brace")
if("@"==d)return t.eatWhile(r),k("link","link")
if(/\d/.test(d))return t.eatWhile(/\d/),k("number","number")
if("/"==d){if(t.eat("%"))return h(t,s,p)
if(t.eat("/"))return h(t,s,v)}if("_"==d&&t.eat("_"))return h(t,s,y)
if("-"==d&&t.eat("-")){if(" "!=t.peek())return h(t,s,w)
if(" "==t.peek())return k("text","brace")}if("'"==d&&t.eat("'"))return h(t,s,x)
if("<"!=d)return k(d)
if(t.eat("<"))return h(t,s,$)
t.eatWhile(/[\w\$_]/)
var z=t.current(),W=e.propertyIsEnumerable(z)&&e[z]
return W?k(W.type,W.style,z):k("text",null,z)}function p(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=b
break}n="%"==r}return k("comment","comment")}function x(e,t){for(var r,n=!1;r=e.next();){if("'"==r&&n){t.tokenize=b
break}n="'"==r}return k("text","strong")}function g(e,t){var r=t.block
return r&&e.current()?k("code","comment"):!r&&e.match(d)?(t.tokenize=b,k("code","comment")):r&&e.sol()&&e.match(s)?(t.tokenize=b,k("code","comment")):(e.next(),k("code","comment"))}function v(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=b
break}n="/"==r}return k("text","em")}function y(e,t){for(var r,n=!1;r=e.next();){if("_"==r&&n){t.tokenize=b
break}n="_"==r}return k("text","underlined")}function w(e,t){for(var r,n=!1;r=e.next();){if("-"==r&&n){t.tokenize=b
break}n="-"==r}return k("text","strikethrough")}function $(e,r){var n,i,o
return"<<"==e.current()?k("brace","macro"):(n=e.next())?">"==n&&">"==e.peek()?(e.next(),r.tokenize=b,k("brace","macro")):(e.eatWhile(/[\w\$_]/),i=e.current(),(o=t.propertyIsEnumerable(i)&&t[i])?k(o.type,o.style,i):k("macro",null,i)):(r.tokenize=b,k(n))}return{startState:function(){return{tokenize:b,indented:0,level:0}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},electricChars:""}}),e.defineMIME("text/x-tiddlywiki","tiddlywiki")})
