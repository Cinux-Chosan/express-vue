(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("go",function(e){var t,n=e.indentUnit,r={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0},i={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},o=/[+\-*&^%:=<>!|\/]/
function a(e,n){var u,l=e.next()
if('"'==l||"'"==l||"`"==l)return n.tokenize=(u=l,function(e,t){for(var n,r=!1,i=!1;null!=(n=e.next());){if(n==u&&!r){i=!0
break}r=!r&&"\\"==n}return(i||!r&&"`"!=u)&&(t.tokenize=a),"string"}),n.tokenize(e,n)
if(/[\d\.]/.test(l))return"."==l?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==l?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number"
if(/[\[\]{}\(\),;\:\.]/.test(l))return t=l,null
if("/"==l){if(e.eat("*"))return n.tokenize=c,c(e,n)
if(e.eat("/"))return e.skipToEnd(),"comment"}if(o.test(l))return e.eatWhile(o),"operator"
e.eatWhile(/[\w\$_\xa1-\uffff]/)
var f=e.current()
return r.propertyIsEnumerable(f)?("case"!=f&&"default"!=f||(t="case"),"keyword"):i.propertyIsEnumerable(f)?"atom":"variable"}function c(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=a
break}r="*"==n}return"comment"}function u(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function l(e,t,n){return e.context=new u(e.indented,t,n,null,e.context)}function f(e){if(e.context.prev){var t=e.context.type
return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}}return{startState:function(e){return{tokenize:null,context:new u((e||0)-n,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var r=n.context
if(e.sol()&&(null==r.align&&(r.align=!1),n.indented=e.indentation(),n.startOfLine=!0,"case"==r.type&&(r.type="}")),e.eatSpace())return null
t=null
var i=(n.tokenize||a)(e,n)
return"comment"==i?i:(null==r.align&&(r.align=!0),"{"==t?l(n,e.column(),"}"):"["==t?l(n,e.column(),"]"):"("==t?l(n,e.column(),")"):"case"==t?r.type="case":"}"==t&&"}"==r.type?r=f(n):t==r.type&&f(n),n.startOfLine=!1,i)},indent:function(e,t){if(e.tokenize!=a&&null!=e.tokenize)return 0
var r=e.context,i=t&&t.charAt(0)
if("case"==r.type&&/^(?:case|default)\b/.test(t))return e.context.type="}",r.indented
var o=i==r.type
return r.align?r.column+(o?0:1):r.indented+(o?0:n)},electricChars:"{}):",fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-go","go")})
