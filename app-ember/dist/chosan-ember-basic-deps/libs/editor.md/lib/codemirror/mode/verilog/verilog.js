(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("verilog",function(t,n){var r=t.indentUnit,i=n.statementIndentUnit||r,a=n.dontAlignCalls,o=n.noIndentKeywords||[],l=n.multiLineStrings,s=n.hooks||{}
function c(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0
return t}var u,d,v=c("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),f=/[\+\-\*\/!~&|^%=?:]/,p=/[\[\]{}()]/,m=/\d[0-9_]*/,C=/\d*\s*'s?d\s*\d[0-9_]*/i,x=/\d*\s*'s?b\s*[xz01][xz01_]*/i,h=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,w=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,g=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,k=/^((\w+)|[)}\]])/,y=/[)}\]]/,b=c("case checker class clocking config function generate interface module packageprimitive program property specify sequence table task"),_={}
for(var F in b)_[F]="end"+F
for(var z in _.begin="end",_.casex="endcase",_.casez="endcase",_.do="while",_.fork="join;join_any;join_none",_.covergroup="endgroup",o){F=o[z]
_[F]&&(_[F]=void 0)}var P=c("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while")
function S(e,t){var n,r,i=e.peek()
if(s[i]&&0!=(n=s[i](e,t)))return n
if(s.tokenBase&&0!=(n=s.tokenBase(e,t)))return n
if(/[,;:\.]/.test(i))return u=e.next(),null
if(p.test(i))return u=e.next(),"bracket"
if("`"==i)return e.next(),e.eatWhile(/[\w\$_]/)?"def":null
if("$"==i)return e.next(),e.eatWhile(/[\w\$_]/)?"meta":null
if("#"==i)return e.next(),e.eatWhile(/[\d_.]/),"def"
if('"'==i)return e.next(),t.tokenize=(r=i,function(e,t){for(var n,i=!1,a=!1;null!=(n=e.next());){if(n==r&&!i){a=!0
break}i=!i&&"\\"==n}return(a||!i&&!l)&&(t.tokenize=S),"string"}),t.tokenize(e,t)
if("/"==i){if(e.next(),e.eat("*"))return t.tokenize=q,q(e,t)
if(e.eat("/"))return e.skipToEnd(),"comment"
e.backUp(1)}if(e.match(g)||e.match(C)||e.match(x)||e.match(h)||e.match(w)||e.match(m)||e.match(g))return"number"
if(e.eatWhile(f))return"meta"
if(e.eatWhile(/[\w\$_]/)){var a=e.current()
return v[a]?(_[a]&&(u="newblock"),P[a]&&(u="newstatement"),d=a,"keyword"):"variable"}return e.next(),null}function q(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=S
break}r="*"==n}return"comment"}function A(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function j(e,t,n){var r=new A(e.indented,t,n,null,e.context)
return e.context=r}function I(e){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}function M(e,t){if(e==t)return!0
var n=t.split(";")
for(var r in n)if(e==n[r])return!0
return!1}return{electricInput:function(){var e=[]
for(var t in _)if(_[t]){var n=_[t].split(";")
for(var r in n)e.push(n[r])}return new RegExp("[{}()\\[\\]]|("+e.join("|")+")$")}(),startState:function(e){var t={tokenize:null,context:new A((e||0)-r,0,"top",!1),indented:0,startOfLine:!0}
return s.startState&&s.startState(t),t},token:function(e,t){var n=t.context
if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0),s.token&&s.token(e,t),e.eatSpace())return null
u=null,d=null
var r=(t.tokenize||S)(e,t)
if("comment"==r||"meta"==r||"variable"==r)return r
if(null==n.align&&(n.align=!0),u==n.type)I(t)
else if(";"==u&&"statement"==n.type||n.type&&M(d,n.type))for(n=I(t);n&&"statement"==n.type;)n=I(t)
else if("{"==u)j(t,e.column(),"}")
else if("["==u)j(t,e.column(),"]")
else if("("==u)j(t,e.column(),")")
else if(n&&"endcase"==n.type&&":"==u)j(t,e.column(),"statement")
else if("newstatement"==u)j(t,e.column(),"statement")
else if("newblock"==u)if("function"!=d||!n||"statement"!=n.type&&"endgroup"!=n.type)if("task"==d&&n&&"statement"==n.type);else{var i=_[d]
j(t,e.column(),i)}else;return t.startOfLine=!1,r},indent:function(t,n){if(t.tokenize!=S&&null!=t.tokenize)return e.Pass
if(s.indent){var o=s.indent(t)
if(o>=0)return o}var l=t.context,c=n&&n.charAt(0)
"statement"==l.type&&"}"==c&&(l=l.prev)
var u=!1,d=n.match(k)
return d&&(u=M(d[0],l.type)),"statement"==l.type?l.indented+("{"==c?0:i):y.test(l.type)&&l.align&&!a?l.column+(u?0:1):")"!=l.type||u?l.indented+(u?0:r):l.indented+i},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-verilog",{name:"verilog"}),e.defineMIME("text/x-systemverilog",{name:"verilog"})
var t={">":"property","->":"property","-":"hr","|":"link","?$":"qualifier","?*":"qualifier","@-":"variable-3","@":"variable-3","?":"qualifier"}
function n(e,n){var r,i=0,a=e.indentation()
switch(n.svxCurCtlFlowChar){case"\\":a=0
break
case"|":case"M":if("@"==n.svxPrevPrevCtlFlowChar){i=-2
break}t[n.svxPrevCtlFlowChar]&&(i=1)
break
case"@":"S"==n.svxPrevCtlFlowChar&&(i=-1),"|"==n.svxPrevCtlFlowChar&&(i=1)
break
case"S":"@"==n.svxPrevCtlFlowChar&&(i=1),t[n.svxPrevCtlFlowChar]&&(i=1)}return(r=a+2*i)>=0?r:a}e.defineMIME("text/x-svx",{name:"verilog",hooks:{"\\":function(e,t){var r=0,i=!1,a=e.string
return e.sol()&&/\\SV/.test(e.string)&&(a=/\\SVX_version/.test(e.string)?"\\SVX_version":e.string,e.skipToEnd(),"\\SV"==a&&t.vxCodeActive&&(t.vxCodeActive=!1),(/\\SVX/.test(a)&&!t.vxCodeActive||"\\SVX_version"==a&&t.vxCodeActive)&&(t.vxCodeActive=!0),i="keyword",t.svxCurCtlFlowChar=t.svxPrevPrevCtlFlowChar=t.svxPrevCtlFlowChar="",1==t.vxCodeActive&&(t.svxCurCtlFlowChar="\\",r=n(e,t)),t.vxIndentRq=r),i},tokenBase:function(e,r){var i=0,a=!1,o=/[\[\]=:]/,l={"**":"variable-2","*":"variable-2",$$:"variable",$:"variable","^^":"attribute","^":"attribute"},s=e.peek(),c=r.svxCurCtlFlowChar
return 1==r.vxCodeActive&&(/[\[\]{}\(\);\:]/.test(s)?(a="meta",e.next()):"/"==s?(e.next(),e.eat("/")?(e.skipToEnd(),a="comment",r.svxCurCtlFlowChar="S"):e.backUp(1)):"@"==s?(a=t[s],r.svxCurCtlFlowChar="@",e.next(),e.eatWhile(/[\w\$_]/)):e.match(/\b[mM]4+/,!0)?(e.skipTo("("),a="def",r.svxCurCtlFlowChar="M"):"!"==s&&e.sol()?(a="comment",e.next()):o.test(s)?(e.eatWhile(o),a="operator"):"#"==s?(r.svxCurCtlFlowChar=""==r.svxCurCtlFlowChar?s:r.svxCurCtlFlowChar,e.next(),e.eatWhile(/[+-]\d/),a="tag"):l.propertyIsEnumerable(s)?(a=l[s],r.svxCurCtlFlowChar=""==r.svxCurCtlFlowChar?"S":r.svxCurCtlFlowChar,e.next(),e.match(/[a-zA-Z_0-9]+/)):(a=t[s]||!1)&&(r.svxCurCtlFlowChar=""==r.svxCurCtlFlowChar?s:r.svxCurCtlFlowChar,e.next(),e.match(/[a-zA-Z_0-9]+/)),r.svxCurCtlFlowChar!=c&&(i=n(e,r),r.vxIndentRq=i)),a},token:function(e,t){1==t.vxCodeActive&&e.sol()&&""!=t.svxCurCtlFlowChar&&(t.svxPrevPrevCtlFlowChar=t.svxPrevCtlFlowChar,t.svxPrevCtlFlowChar=t.svxCurCtlFlowChar,t.svxCurCtlFlowChar="")},indent:function(e){return 1==e.vxCodeActive?e.vxIndentRq:-1},startState:function(e){e.svxCurCtlFlowChar="",e.svxPrevCtlFlowChar="",e.svxPrevPrevCtlFlowChar="",e.vxCodeActive=!0,e.vxIndentRq=0}}})})
