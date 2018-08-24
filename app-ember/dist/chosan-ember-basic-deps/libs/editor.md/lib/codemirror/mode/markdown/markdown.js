(function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror"),require("../xml/xml"),require("../meta")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../xml/xml","../meta"],t):t(CodeMirror)})(function(t){"use strict"
t.defineMode("markdown",function(e,i){var n=t.modes.hasOwnProperty("xml"),r=t.getMode(e,n?{name:"xml",htmlMode:!0}:"text/plain")
void 0===i.highlightFormatting&&(i.highlightFormatting=!1),void 0===i.maxBlockquoteDepth&&(i.maxBlockquoteDepth=0),void 0===i.underscoresBreakWords&&(i.underscoresBreakWords=!0),void 0===i.fencedCodeBlocks&&(i.fencedCodeBlocks=!1),void 0===i.taskLists&&(i.taskLists=!1),void 0===i.strikethrough&&(i.strikethrough=!1)
var a=0,o="header",l="comment",h="quote",g="variable-2",s="variable-3",f="keyword",u="hr",m="tag",c="formatting",d="link",k="link",p="link",v="string",x="em",S="strong",L="strikethrough",F=/^([*\-=_])(?:\s*\1){2,}\s*$/,b=/^[*\-+]\s+/,q=/^[0-9]+\.\s+/,M=/^\[(x| )\](?=\s)/,w=/^#+/,C=/^(?:\={1,}|-{1,})$/,D=/^[^#!\[\]*_\\<>` "'(~]+/
function H(t,e,i){return e.f=e.inline=i,i(t,e)}function T(t){return t.linkTitle=!1,t.em=!1,t.strong=!1,t.strikethrough=!1,t.quote=0,n||t.f!=y||(t.f=j,t.block=B),t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.thisLineHasContent=!1,null}function B(n,r){var a=n.sol(),o=!1!==r.list
!1!==r.list&&r.indentationDiff>=0?(r.indentationDiff<4&&(r.indentation-=r.indentationDiff),r.list=null):!1!==r.list&&r.indentation>0?(r.list=null,r.listDepth=Math.floor(r.indentation/4)):!1!==r.list&&(r.list=!1,r.listDepth=0)
var h=null
if(r.indentationDiff>=4)return r.indentation-=4,n.skipToEnd(),l
if(n.eatSpace())return null
if(h=n.match(w))return r.header=h[0].length<=6?h[0].length:6,i.highlightFormatting&&(r.formatting="header"),r.f=r.inline,N(r)
if(r.prevLineHasContent&&(h=n.match(C)))return r.header="="==h[0].charAt(0)?1:2,i.highlightFormatting&&(r.formatting="header"),r.f=r.inline,N(r)
if(n.eat(">"))return r.indentation++,r.quote=a?1:r.quote+1,i.highlightFormatting&&(r.formatting="quote"),n.eatSpace(),N(r)
if("["===n.peek())return H(n,r,U)
if(n.match(F,!0))return u
if((!r.prevLineHasContent||o)&&(n.match(b,!1)||n.match(q,!1))){var g=null
return n.match(b,!0)?g="ul":(n.match(q,!0),g="ol"),r.indentation+=4,r.list=!0,r.listDepth++,i.taskLists&&n.match(M,!1)&&(r.taskList=!0),r.f=r.inline,i.highlightFormatting&&(r.formatting=["list","list-"+g]),N(r)}return i.fencedCodeBlocks&&n.match(/^```[ \t]*([\w+#]*)/,!0)?(r.localMode=function(i){if(t.findModeByName){var n=t.findModeByName(i)
n&&(i=n.mime||n.mimes[0])}var r=t.getMode(e,i)
return"null"==r.name?null:r}(RegExp.$1),r.localMode&&(r.localState=r.localMode.startState()),r.f=r.block=_,i.highlightFormatting&&(r.formatting="code-block"),r.code=!0,N(r)):H(n,r,r.inline)}function y(t,e){var i=r.token(t,e.htmlState)
return(n&&null===e.htmlState.tagStart&&!e.htmlState.context||e.md_inside&&t.current().indexOf(">")>-1)&&(e.f=j,e.block=B,e.htmlState=null),i}function _(t,e){return t.sol()&&t.match("```",!1)?(e.localMode=e.localState=null,e.f=e.block=$,null):e.localMode?e.localMode.token(t,e.localState):(t.skipToEnd(),l)}function $(t,e){t.match("```"),e.block=B,e.f=j,i.highlightFormatting&&(e.formatting="code-block"),e.code=!0
var n=N(e)
return e.code=!1,n}function N(t){var e=[]
if(t.formatting){e.push(c),"string"==typeof t.formatting&&(t.formatting=[t.formatting])
for(var n=0;n<t.formatting.length;n++)e.push(c+"-"+t.formatting[n]),"header"===t.formatting[n]&&e.push(c+"-"+t.formatting[n]+"-"+t.header),"quote"===t.formatting[n]&&(!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=t.quote?e.push(c+"-"+t.formatting[n]+"-"+t.quote):e.push("error"))}if(t.taskOpen)return e.push("meta"),e.length?e.join(" "):null
if(t.taskClosed)return e.push("property"),e.length?e.join(" "):null
if(t.linkHref)return e.push(v),e.length?e.join(" "):null
if(t.strong&&e.push(S),t.em&&e.push(x),t.strikethrough&&e.push(L),t.linkText&&e.push(p),t.code&&e.push(l),t.header&&(e.push(o),e.push(o+"-"+t.header)),t.quote&&(e.push(h),!i.maxBlockquoteDepth||i.maxBlockquoteDepth>=t.quote?e.push(h+"-"+t.quote):e.push(h+"-"+i.maxBlockquoteDepth)),!1!==t.list){var r=(t.listDepth-1)%3
r?1===r?e.push(s):e.push(f):e.push(g)}return t.trailingSpaceNewLine?e.push("trailing-space-new-line"):t.trailingSpace&&e.push("trailing-space-"+(t.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function O(t,e){if(t.match(D,!0))return N(e)}function j(e,n){var o=n.text(e,n)
if(void 0!==o)return o
if(n.list)return n.list=null,N(n)
if(n.taskList)return"x"!==e.match(M,!0)[1]?n.taskOpen=!0:n.taskClosed=!0,i.highlightFormatting&&(n.formatting="task"),n.taskList=!1,N(n)
if(n.taskOpen=!1,n.taskClosed=!1,n.header&&e.match(/^#+$/,!0))return i.highlightFormatting&&(n.formatting="header"),N(n)
var l=e.sol(),h=e.next()
if("\\"===h&&(e.next(),i.highlightFormatting))return(x=N(n))?x+" formatting-escape":"formatting-escape"
if(n.linkTitle){n.linkTitle=!1
var g=h
"("===h&&(g=")")
var s="^\\s*(?:[^"+(g=(g+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"))+"\\\\]+|\\\\\\\\|\\\\.)"+g
if(e.match(new RegExp(s),!0))return v}if("`"===h){var f=n.formatting
i.highlightFormatting&&(n.formatting="code")
var u=N(n),c=e.pos
e.eatWhile("`")
var p=1+e.pos-c
return n.code?p===a?(n.code=!1,u):(n.formatting=f,N(n)):(a=p,n.code=!0,N(n))}if(n.code)return N(n)
if("!"===h&&e.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return e.match(/\[[^\]]*\]/),n.inline=n.f=W,m
if("["===h&&e.match(/.*\](\(.*\)| ?\[.*\])/,!1))return n.linkText=!0,i.highlightFormatting&&(n.formatting="link"),N(n)
if("]"===h&&n.linkText&&e.match(/\(.*\)| ?\[.*\]/,!1)){i.highlightFormatting&&(n.formatting="link")
var x=N(n)
return n.linkText=!1,n.inline=n.f=W,x}if("<"===h&&e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1))return n.f=n.inline=E,i.highlightFormatting&&(n.formatting="link"),(x=N(n))?x+=" ":x="",x+d
if("<"===h&&e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1))return n.f=n.inline=E,i.highlightFormatting&&(n.formatting="link"),(x=N(n))?x+=" ":x="",x+k
if("<"===h&&e.match(/^\w/,!1)){if(-1!=e.string.indexOf(">")){var S=e.string.substring(1,e.string.indexOf(">"));/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(S)&&(n.md_inside=!0)}return e.backUp(1),n.htmlState=t.startState(r),function(t,e,i){return e.f=e.block=i,i(t,e)}(e,n,y)}if("<"===h&&e.match(/^\/\w*?>/))return n.md_inside=!1,"tag"
var L=!1
if(!i.underscoresBreakWords&&"_"===h&&"_"!==e.peek()&&e.match(/(\w)/,!1)){var F=e.pos-2
if(F>=0){var b=e.string.charAt(F)
"_"!==b&&b.match(/(\w)/,!1)&&(L=!0)}}if("*"===h||"_"===h&&!L)if(l&&" "===e.peek());else{if(n.strong===h&&e.eat(h)){i.highlightFormatting&&(n.formatting="strong")
u=N(n)
return n.strong=!1,u}if(!n.strong&&e.eat(h))return n.strong=h,i.highlightFormatting&&(n.formatting="strong"),N(n)
if(n.em===h){i.highlightFormatting&&(n.formatting="em")
u=N(n)
return n.em=!1,u}if(!n.em)return n.em=h,i.highlightFormatting&&(n.formatting="em"),N(n)}else if(" "===h&&(e.eat("*")||e.eat("_"))){if(" "===e.peek())return N(n)
e.backUp(1)}if(i.strikethrough)if("~"===h&&e.eatWhile(h)){if(n.strikethrough){i.highlightFormatting&&(n.formatting="strikethrough")
u=N(n)
return n.strikethrough=!1,u}if(e.match(/^[^\s]/,!1))return n.strikethrough=!0,i.highlightFormatting&&(n.formatting="strikethrough"),N(n)}else if(" "===h&&e.match(/^~~/,!0)){if(" "===e.peek())return N(n)
e.backUp(2)}return" "===h&&(e.match(/ +$/,!1)?n.trailingSpace++:n.trailingSpace&&(n.trailingSpaceNewLine=!0)),N(n)}function E(t,e){if(">"===t.next()){e.f=e.inline=j,i.highlightFormatting&&(e.formatting="link")
var n=N(e)
return n?n+=" ":n="",n+d}return t.match(/^[^>]+/,!0),d}function W(t,e){if(t.eatSpace())return null
var n,r=t.next()
return"("===r||"["===r?(e.f=e.inline=(n="("===r?")":"]",function(t,e){var r=t.next()
if(r===n){e.f=e.inline=j,i.highlightFormatting&&(e.formatting="link-string")
var a=N(e)
return e.linkHref=!1,a}return t.match(function(t){return I[t]||(t=(t+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),I[t]=new RegExp("^(?:[^\\\\]|\\\\.)*?("+t+")")),I[t]}(n),!0)&&t.backUp(1),e.linkHref=!0,N(e)}),i.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,N(e)):"error"}function U(t,e){return t.match(/^[^\]]*\]:/,!1)?(e.f=R,t.next(),i.highlightFormatting&&(e.formatting="link"),e.linkText=!0,N(e)):H(t,e,j)}function R(t,e){if(t.match(/^\]:/,!0)){e.f=e.inline=A,i.highlightFormatting&&(e.formatting="link")
var n=N(e)
return e.linkText=!1,n}return t.match(/^[^\]]+/,!0),p}function A(t,e){return t.eatSpace()?null:(t.match(/^[^\s]+/,!0),void 0===t.peek()?e.linkTitle=!0:t.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),e.f=e.inline=j,v)}var I=[]
var P={startState:function(){return{f:B,prevLineHasContent:!1,thisLineHasContent:!1,block:B,htmlState:null,indentation:0,inline:j,text:O,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,em:!1,strong:!1,header:0,taskList:!1,list:!1,listDepth:0,quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1}},copyState:function(e){return{f:e.f,prevLineHasContent:e.prevLineHasContent,thisLineHasContent:e.thisLineHasContent,block:e.block,htmlState:e.htmlState&&t.copyState(r,e.htmlState),indentation:e.indentation,localMode:e.localMode,localState:e.localMode?t.copyState(e.localMode,e.localState):null,inline:e.inline,text:e.text,formatting:!1,linkTitle:e.linkTitle,em:e.em,strong:e.strong,strikethrough:e.strikethrough,header:e.header,taskList:e.taskList,list:e.list,listDepth:e.listDepth,quote:e.quote,trailingSpace:e.trailingSpace,trailingSpaceNewLine:e.trailingSpaceNewLine,md_inside:e.md_inside}},token:function(t,e){if(e.formatting=!1,t.sol()){var i=!!e.header
if(e.header=0,t.match(/^\s*$/,!0)||i)return e.prevLineHasContent=!1,T(e),i?this.token(t,e):null
e.prevLineHasContent=e.thisLineHasContent,e.thisLineHasContent=!0,e.taskList=!1,e.code=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,e.f=e.block
var n=t.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length,r=4*Math.floor((n-e.indentation)/4)
r>4&&(r=4)
var a=e.indentation+r
if(e.indentationDiff=a-e.indentation,e.indentation=a,n>0)return null}return e.f(t,e)},innerMode:function(t){return t.block==y?{state:t.htmlState,mode:r}:t.localState?{state:t.localState,mode:t.localMode}:{state:t,mode:P}},blankLine:T,getType:N,fold:"markdown"}
return P},"xml"),t.defineMIME("text/x-markdown","markdown")})
