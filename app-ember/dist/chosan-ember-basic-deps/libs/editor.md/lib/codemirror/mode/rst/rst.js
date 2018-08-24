(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../python/python"),require("../stex/stex"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../python/python","../stex/stex","../../addon/mode/overlay"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("rst",function(t,a){var c=/^\*\*[^\*\s](?:[^\*]*[^\*\s])?\*\*/,n=/^\*[^\*\s](?:[^\*]*[^\*\s])?\*/,r=/^``[^`\s](?:[^`]*[^`\s])``/,m=/^(?:[\d]+(?:[\.,]\d+)*)/,o=/^(?:\s\+[\d]+(?:[\.,]\d+)*)/,s=/^(?:\s\-[\d]+(?:[\.,]\d+)*)/,h=new RegExp("^[Hh][Tt][Tt][Pp][Ss]?://(?:[\\d\\w.-]+)\\.(?:\\w{2,6})(?:/[\\d\\w\\#\\%\\&\\-\\.\\,\\/\\:\\=\\?\\~]+)*"),l={token:function(e){if(e.match(c)&&e.match(/\W+|$/,!1))return"strong"
if(e.match(n)&&e.match(/\W+|$/,!1))return"em"
if(e.match(r)&&e.match(/\W+|$/,!1))return"string-2"
if(e.match(m))return"number"
if(e.match(o))return"positive"
if(e.match(s))return"negative"
if(e.match(h))return"link"
for(;!(null==e.next()||e.match(c,!1)||e.match(n,!1)||e.match(r,!1)||e.match(m,!1)||e.match(o,!1)||e.match(s,!1)||e.match(h,!1)););return null}},i=e.getMode(t,a.backdrop||"rst-base")
return e.overlayMode(i,l,!0)},"python","stex"),e.defineMode("rst-base",function(t){function a(e){var t=Array.prototype.slice.call(arguments,1)
return e.replace(/{(\d+)}/g,function(e,a){return void 0!==t[a]?t[a]:e})}var c=e.getMode(t,"python"),n=e.getMode(t,"stex"),r="(?:\\s*|\\W|$)",m=new RegExp(a("^{0}",r)),o="(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)",s=new RegExp(a("^{0}",o)),h=a("(?:{0}|`{1}`)",o,"(?:[^\\W\\d_](?:[\\w\\s!\"#$%&'()\\*\\+,\\-\\./:;<=>\\?]*[^\\W_])?)"),l="(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)",i="(?:[^\\`]+)",p=new RegExp(a("^{0}",i)),d=new RegExp("^([!'#$%&\"()*+,-./:;<=>?@\\[\\\\\\]^_`{|}~])\\1{3,}\\s*$"),u=new RegExp(a("^\\.\\.{0}","\\s+")),x=new RegExp(a("^_{0}:{1}|^__:{1}",h,r)),f=new RegExp(a("^{0}::{1}",h,r)),k=new RegExp(a("^\\|{0}\\|{1}{2}::{3}",l,"\\s+",h,r)),w=new RegExp(a("^\\[(?:\\d+|#{0}?|\\*)]{1}",h,r)),b=new RegExp(a("^\\[{0}\\]{1}",h,r)),g=new RegExp(a("^\\|{0}\\|",l)),E=new RegExp(a("^\\[(?:\\d+|#{0}?|\\*)]_",h)),R=new RegExp(a("^\\[{0}\\]_",h)),y=new RegExp(a("^{0}__?",h)),_=new RegExp(a("^`{0}`_",i)),v=new RegExp(a("^:{0}:`{1}`{2}",o,i,r)),$=new RegExp(a("^`{1}`:{0}:{2}",o,i,r)),S=new RegExp(a("^:{0}:{1}",o,r)),M=new RegExp(a("^{0}",h)),W=new RegExp(a("^::{0}",r)),q=new RegExp(a("^\\|{0}\\|",l)),T=new RegExp(a("^{0}","\\s+")),j=new RegExp(a("^{0}",h)),I=new RegExp(a("^::{0}",r)),A=new RegExp("^_"),C=new RegExp(a("^{0}|_",h)),H=new RegExp(a("^:{0}",r)),P=new RegExp("^::\\s*$"),z=new RegExp("^\\s+(?:>>>|In \\[\\d+\\]:)\\s")
function B(t,a){var r=null
if(t.sol()&&t.match(z,!1))N(a,K,{mode:c,local:e.startState(c)})
else if(t.sol()&&t.match(u))N(a,D),r="meta"
else if(t.sol()&&t.match(d))N(a,B),r="header"
else if(Q(a)==v||t.match(v,!1))switch(O(a)){case 0:N(a,B,L(v,1)),t.match(/^:/),r="meta"
break
case 1:N(a,B,L(v,2)),t.match(s),r="keyword",t.current().match(/^(?:math|latex)/)&&(a.tmp_stex=!0)
break
case 2:N(a,B,L(v,3)),t.match(/^:`/),r="meta"
break
case 3:if(a.tmp_stex&&(a.tmp_stex=void 0,a.tmp={mode:n,local:e.startState(n)}),a.tmp){if("`"==t.peek()){N(a,B,L(v,4)),a.tmp=void 0
break}r=a.tmp.mode.token(t,a.tmp.local)
break}N(a,B,L(v,4)),t.match(p),r="string"
break
case 4:N(a,B,L(v,5)),t.match(/^`/),r="meta"
break
case 5:N(a,B,L(v,6)),t.match(m)
break
default:N(a,B)}else if(Q(a)==$||t.match($,!1))switch(O(a)){case 0:N(a,B,L($,1)),t.match(/^`/),r="meta"
break
case 1:N(a,B,L($,2)),t.match(p),r="string"
break
case 2:N(a,B,L($,3)),t.match(/^`:/),r="meta"
break
case 3:N(a,B,L($,4)),t.match(s),r="keyword"
break
case 4:N(a,B,L($,5)),t.match(/^:/),r="meta"
break
case 5:N(a,B,L($,6)),t.match(m)
break
default:N(a,B)}else if(Q(a)==S||t.match(S,!1))switch(O(a)){case 0:N(a,B,L(S,1)),t.match(/^:/),r="meta"
break
case 1:N(a,B,L(S,2)),t.match(s),r="keyword"
break
case 2:N(a,B,L(S,3)),t.match(/^:/),r="meta"
break
case 3:N(a,B,L(S,4)),t.match(m)
break
default:N(a,B)}else if(Q(a)==g||t.match(g,!1))switch(O(a)){case 0:N(a,B,L(g,1)),t.match(q),r="variable-2"
break
case 1:N(a,B,L(g,2)),t.match(/^_?_?/)&&(r="link")
break
default:N(a,B)}else if(t.match(E))N(a,B),r="quote"
else if(t.match(R))N(a,B),r="quote"
else if(t.match(y))N(a,B),t.peek()&&!t.peek().match(/^\W$/)||(r="link")
else if(Q(a)==_||t.match(_,!1))switch(O(a)){case 0:!t.peek()||t.peek().match(/^\W$/)?N(a,B,L(_,1)):t.match(_)
break
case 1:N(a,B,L(_,2)),t.match(/^`/),r="link"
break
case 2:N(a,B,L(_,3)),t.match(p)
break
case 3:N(a,B,L(_,4)),t.match(/^`_/),r="link"
break
default:N(a,B)}else t.match(P)?N(a,G):t.next()&&N(a,B)
return r}function D(t,a){var r=null
if(Q(a)==k||t.match(k,!1))switch(O(a)){case 0:N(a,D,L(k,1)),t.match(q),r="variable-2"
break
case 1:N(a,D,L(k,2)),t.match(T)
break
case 2:N(a,D,L(k,3)),t.match(j),r="keyword"
break
case 3:N(a,D,L(k,4)),t.match(I),r="meta"
break
default:N(a,B)}else if(Q(a)==f||t.match(f,!1))switch(O(a)){case 0:N(a,D,L(f,1)),t.match(M),r="keyword",t.current().match(/^(?:math|latex)/)?a.tmp_stex=!0:t.current().match(/^python/)&&(a.tmp_py=!0)
break
case 1:N(a,D,L(f,2)),t.match(W),r="meta",(t.match(/^latex\s*$/)||a.tmp_stex)&&(a.tmp_stex=void 0,N(a,K,{mode:n,local:e.startState(n)}))
break
case 2:N(a,D,L(f,3)),(t.match(/^python\s*$/)||a.tmp_py)&&(a.tmp_py=void 0,N(a,K,{mode:c,local:e.startState(c)}))
break
default:N(a,B)}else if(Q(a)==x||t.match(x,!1))switch(O(a)){case 0:N(a,D,L(x,1)),t.match(A),t.match(C),r="link"
break
case 1:N(a,D,L(x,2)),t.match(H),r="meta"
break
default:N(a,B)}else t.match(w)?(N(a,B),r="quote"):t.match(b)?(N(a,B),r="quote"):(t.eatSpace(),t.eol()?N(a,B):(t.skipToEnd(),N(a,F),r="comment"))
return r}function F(e,t){return J(e,t,"comment")}function G(e,t){return J(e,t,"meta")}function J(e,t,a){return e.eol()||e.eatSpace()?(e.skipToEnd(),a):(N(t,B),null)}function K(e,t){return t.ctx.mode&&t.ctx.local?e.sol()?(e.eatSpace()||N(t,B),null):t.ctx.mode.token(e,t.ctx.local):(N(t,B),null)}function L(e,t,a,c){return{phase:e,stage:t,mode:a,local:c}}function N(e,t,a){e.tok=t,e.ctx=a||{}}function O(e){return e.ctx.stage||0}function Q(e){return e.ctx.phase}return{startState:function(){return{tok:B,ctx:L(void 0,0)}},copyState:function(t){var a=t.ctx,c=t.tmp
return a.local&&(a={mode:a.mode,local:e.copyState(a.mode,a.local)}),c&&(c={mode:c.mode,local:e.copyState(c.mode,c.local)}),{tok:t.tok,ctx:a,tmp:c}},innerMode:function(e){return e.tmp?{state:e.tmp.local,mode:e.tmp.mode}:e.ctx.mode?{state:e.ctx.local,mode:e.ctx.mode}:null},token:function(e,t){return t.tok(e,t)}}},"python","stex"),e.defineMIME("text/x-rst","rst")})
