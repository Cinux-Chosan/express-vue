(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("mllike",function(e,r){var t={let:"keyword",rec:"keyword",in:"keyword",of:"keyword",and:"keyword",if:"keyword",then:"keyword",else:"keyword",for:"keyword",to:"keyword",while:"keyword",do:"keyword",done:"keyword",fun:"keyword",function:"keyword",val:"keyword",type:"keyword",mutable:"keyword",match:"keyword",with:"keyword",try:"keyword",open:"builtin",ignore:"builtin",begin:"keyword",end:"keyword"},o=r.extraWords||{}
for(var n in o)o.hasOwnProperty(n)&&(t[n]=r.extraWords[n])
function i(e,o){var n=e.next()
if('"'===n)return o.tokenize=d,o.tokenize(e,o)
if("("===n&&e.eat("*"))return o.commentLevel++,o.tokenize=l,o.tokenize(e,o)
if("~"===n)return e.eatWhile(/\w/),"variable-2"
if("`"===n)return e.eatWhile(/\w/),"quote"
if("/"===n&&r.slashComments&&e.eat("/"))return e.skipToEnd(),"comment"
if(/\d/.test(n))return e.eatWhile(/[\d]/),e.eat(".")&&e.eatWhile(/[\d]/),"number"
if(/[+\-*&%=<>!?|]/.test(n))return"operator"
e.eatWhile(/\w/)
var i=e.current()
return t[i]||"variable"}function d(e,r){for(var t,o=!1,n=!1;null!=(t=e.next());){if('"'===t&&!n){o=!0
break}n=!n&&"\\"===t}return o&&!n&&(r.tokenize=i),"string"}function l(e,r){for(var t,o;r.commentLevel>0&&null!=(o=e.next());)"("===t&&"*"===o&&r.commentLevel++,"*"===t&&")"===o&&r.commentLevel--,t=o
return r.commentLevel<=0&&(r.tokenize=i),"comment"}return{startState:function(){return{tokenize:i,commentLevel:0}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:r.slashComments?"//":null}}),e.defineMIME("text/x-ocaml",{name:"mllike",extraWords:{succ:"keyword",trace:"builtin",exit:"builtin",print_string:"builtin",print_endline:"builtin",true:"atom",false:"atom",raise:"keyword"}}),e.defineMIME("text/x-fsharp",{name:"mllike",extraWords:{abstract:"keyword",as:"keyword",assert:"keyword",base:"keyword",class:"keyword",default:"keyword",delegate:"keyword",downcast:"keyword",downto:"keyword",elif:"keyword",exception:"keyword",extern:"keyword",finally:"keyword",global:"keyword",inherit:"keyword",inline:"keyword",interface:"keyword",internal:"keyword",lazy:"keyword","let!":"keyword",member:"keyword",module:"keyword",namespace:"keyword",new:"keyword",null:"keyword",override:"keyword",private:"keyword",public:"keyword",return:"keyword","return!":"keyword",select:"keyword",static:"keyword",struct:"keyword",upcast:"keyword",use:"keyword","use!":"keyword",val:"keyword",when:"keyword",yield:"keyword","yield!":"keyword",List:"builtin",Seq:"builtin",Map:"builtin",Set:"builtin",int:"builtin",string:"builtin",raise:"builtin",failwith:"builtin",not:"builtin",true:"builtin",false:"builtin"},slashComments:!0})})
