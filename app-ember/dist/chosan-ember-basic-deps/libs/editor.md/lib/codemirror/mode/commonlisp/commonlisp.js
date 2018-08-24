(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)})(function(t){"use strict"
t.defineMode("commonlisp",function(t){var e,n=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,r=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,o=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,i=/[^\s'`,@()\[\]";]/
function l(t){for(var e;e=t.next();)if("\\"==e)t.next()
else if(!i.test(e)){t.backUp(1)
break}return t.current()}function c(t,i){if(t.eatSpace())return e="ws",null
if(t.match(o))return"number"
var c
if("\\"==(c=t.next())&&(c=t.next()),'"'==c)return(i.tokenize=u)(t,i)
if("("==c)return e="open","bracket"
if(")"==c||"]"==c)return e="close","bracket"
if(";"==c)return t.skipToEnd(),e="ws","comment"
if(/['`,@]/.test(c))return null
if("|"==c)return t.skipTo("|")?(t.next(),"symbol"):(t.skipToEnd(),"error")
if("#"==c)return"["==(c=t.next())?(e="open","bracket"):/[+\-=\.']/.test(c)?null:/\d/.test(c)&&t.match(/^\d*#/)?null:"|"==c?(i.tokenize=a)(t,i):":"==c?(l(t),"meta"):"error"
var d=l(t)
return"."==d?null:(e="symbol","nil"==d||"t"==d||":"==d.charAt(0)?"atom":"open"==i.lastType&&(n.test(d)||r.test(d))?"keyword":"&"==d.charAt(0)?"variable-2":"variable")}function u(t,e){for(var n,r=!1;n=t.next();){if('"'==n&&!r){e.tokenize=c
break}r=!r&&"\\"==n}return"string"}function a(t,n){for(var r,o;r=t.next();){if("#"==r&&"|"==o){n.tokenize=c
break}o=r}return e="ws","comment"}return{startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:c}},token:function(n,o){n.sol()&&"number"!=typeof o.ctx.indentTo&&(o.ctx.indentTo=o.ctx.start+1),e=null
var i=o.tokenize(n,o)
return"ws"!=e&&(null==o.ctx.indentTo?"symbol"==e&&r.test(n.current())?o.ctx.indentTo=o.ctx.start+t.indentUnit:o.ctx.indentTo="next":"next"==o.ctx.indentTo&&(o.ctx.indentTo=n.column()),o.lastType=e),"open"==e?o.ctx={prev:o.ctx,start:n.column(),indentTo:null}:"close"==e&&(o.ctx=o.ctx.prev||o.ctx),i},indent:function(t,e){var n=t.ctx.indentTo
return"number"==typeof n?n:t.ctx.start+1},lineComment:";;",blockCommentStart:"#|",blockCommentEnd:"|#"}}),t.defineMIME("text/x-common-lisp","commonlisp")})
