(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("smarty",function(e){var t={rightDelimiter:"}",leftDelimiter:"{",smartyVersion:2}
e.hasOwnProperty("leftDelimiter")&&(t.leftDelimiter=e.leftDelimiter),e.hasOwnProperty("rightDelimiter")&&(t.rightDelimiter=e.rightDelimiter),e.hasOwnProperty("smartyVersion")&&3===e.smartyVersion&&(t.smartyVersion=3)
var r,i=["debug","extends","function","include","literal"],n={operatorChars:/[+\-*&%=<>!?]/,validIdentifier:/[a-zA-Z0-9_]/,stringChar:/['"]/},a=function(e,t){return r=t,e},o=function(e,t,r){return t.tokenize=r,r(e,t)},l={tokenizer:function(e,i){if(e.match(t.leftDelimiter,!0)){if(e.eat("*"))return o(e,i,l.inBlock("comment","*"+t.rightDelimiter))
i.depth++
var n=e.eol(),a=/\s/.test(e.peek())
return 3===t.smartyVersion&&"{"===t.leftDelimiter&&(n||a)?(i.depth--,null):(i.tokenize=l.smarty,r="startTag","tag")}return e.next(),null},smarty:function(e,o){if(e.match(t.rightDelimiter,!0))return 3===t.smartyVersion?(o.depth--,o.depth<=0&&(o.tokenize=l.tokenizer)):o.tokenize=l.tokenizer,a("tag",null)
if(e.match(t.leftDelimiter,!0))return o.depth++,a("tag","startTag")
var f=e.next()
if("$"==f)return e.eatWhile(n.validIdentifier),a("variable-2","variable")
if("|"==f)return a("operator","pipe")
if("."==f)return a("operator","property")
if(n.stringChar.test(f))return o.tokenize=l.inAttribute(f),a("string","string")
if(n.operatorChars.test(f))return e.eatWhile(n.operatorChars),a("operator","operator")
if("["==f||"]"==f)return a("bracket","bracket")
if("("==f||")"==f)return a("bracket","operator")
if(/\d/.test(f))return e.eatWhile(/\d/),a("number","number")
if("variable"==o.last){if("@"==f)return e.eatWhile(n.validIdentifier),a("property","property")
if("|"==f)return e.eatWhile(n.validIdentifier),a("qualifier","modifier")}else{if("pipe"==o.last)return e.eatWhile(n.validIdentifier),a("qualifier","modifier")
if("whitespace"==o.last)return e.eatWhile(n.validIdentifier),a("attribute","modifier")}if("property"==o.last)return e.eatWhile(n.validIdentifier),a("property",null)
if(/\s/.test(f))return r="whitespace",null
var u=""
"/"!=f&&(u+=f)
for(var s=null;s=e.eat(n.validIdentifier);)u+=s
for(var d=0,m=i.length;d<m;d++)if(i[d]==u)return a("keyword","keyword")
return/\s/.test(f)?null:a("tag","tag")},inAttribute:function(e){return function(t,r){for(var i=null,n=null;!t.eol();){if(n=t.peek(),t.next()==e&&"\\"!==i){r.tokenize=l.smarty
break}i=n}return"string"}},inBlock:function(e,t){return function(r,i){for(;!r.eol();){if(r.match(t)){i.tokenize=l.tokenizer
break}r.next()}return e}}}
return{startState:function(){return{tokenize:l.tokenizer,mode:"smarty",last:null,depth:0}},token:function(e,t){var i=t.tokenize(e,t)
return t.last=r,i},electricChars:""}}),e.defineMIME("text/x-smarty","smarty")})
