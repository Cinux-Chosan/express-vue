(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../javascript/javascript")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../javascript/javascript"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("pegjs",function(t){var n=e.getMode(t,"javascript")
return{startState:function(){return{inString:!1,stringType:null,inComment:!1,inChracterClass:!1,braced:0,lhs:!0,localState:null}},token:function(e,t){if(e&&(t.inString||t.inComment||'"'!=e.peek()&&"'"!=e.peek()||(t.stringType=e.peek(),e.next(),t.inString=!0)),t.inString||t.inComment||!e.match(/^\/\*/)||(t.inComment=!0),t.inString){for(;t.inString&&!e.eol();)e.peek()===t.stringType?(e.next(),t.inString=!1):"\\"===e.peek()?(e.next(),e.next()):e.match(/^.[^\\\"\']*/)
return t.lhs?"property string":"string"}if(t.inComment){for(;t.inComment&&!e.eol();)e.match(/\*\//)?t.inComment=!1:e.match(/^.[^\*]*/)
return"comment"}if(t.inChracterClass)for(;t.inChracterClass&&!e.eol();)e.match(/^[^\]\\]+/)||e.match(/^\\./)||(t.inChracterClass=!1)
else{if("["===e.peek())return e.next(),t.inChracterClass=!0,"bracket"
if(e.match(/^\/\//))return e.skipToEnd(),"comment"
if(t.braced||"{"===e.peek()){null===t.localState&&(t.localState=n.startState())
var r=n.token(e,t.localState),i=e.current()
if(!r)for(var a=0;a<i.length;a++)"{"===i[a]?t.braced++:"}"===i[a]&&t.braced--
return r}if(function(e){return e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)}(e))return":"===e.peek()?"variable":"variable-2"
if(-1!=["[","]","(",")"].indexOf(e.peek()))return e.next(),"bracket"
e.eatSpace()||e.next()}return null}}},"javascript")})
