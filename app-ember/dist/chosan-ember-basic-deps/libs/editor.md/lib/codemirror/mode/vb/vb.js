(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("vb",function(e,n){var t="error"
function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var i=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),o=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),a=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),c=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),u=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),d=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),l=r(["and","or","not","xor","in"]),f=r(["as","dim","break","continue","optional","then","until","goto","byval","byref","new","handles","property","return","const","private","protected","friend","public","shared","static","true","false"]),m=r(["integer","string","double","decimal","boolean","short","char","float","single"]),h='"',s=r(["class","module","sub","enum","select","while","if","function","get","set","property","try"]),p=r(["else","elseif","case","catch"]),b=r(["next","loop"]),k=r(["end"]),x=r(["do"]),g=null
function v(e,n){n.currentIndent++}function w(e,n){n.currentIndent--}function y(e,r){if(e.eatSpace())return null
var g,I
if("'"===e.peek())return e.skipToEnd(),"comment"
if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var E=!1
if(e.match(/^\d*\.\d+F?/i)?E=!0:e.match(/^\d+\.\d*F?/)?E=!0:e.match(/^\.\d+F?/)&&(E=!0),E)return e.eat(/J/i),"number"
var L=!1
if(e.match(/^&H[0-9a-f]+/i)?L=!0:e.match(/^&O[0-7]+/i)?L=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),L=!0):e.match(/^0(?![\dx])/i)&&(L=!0),L)return e.eat(/L/i),"number"}return e.match(h)?(r.tokenize=(g=e.current(),I=1==g.length,function(e,r){for(;!e.eol();){if(e.eatWhile(/[^'"]/),e.match(g))return r.tokenize=y,"string"
e.eat(/['"]/)}if(I){if(n.singleLineStringErrors)return t
r.tokenize=y}return"string"}),r.tokenize(e,r)):e.match(u)||e.match(c)?null:e.match(a)||e.match(i)||e.match(l)?"operator":e.match(o)?null:e.match(x)?(v(0,r),r.doInCurrentLine=!0,"keyword"):e.match(s)?(r.doInCurrentLine?r.doInCurrentLine=!1:v(0,r),"keyword"):e.match(p)?"keyword":e.match(k)?(w(0,r),w(0,r),"keyword"):e.match(b)?(w(0,r),"keyword"):e.match(m)?"keyword":e.match(f)?"keyword":e.match(d)?"variable":(e.next(),t)}return{electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:y,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,n){e.sol()&&(n.currentIndent+=n.nextLineIndent,n.nextLineIndent=0,n.doInCurrentLine=0)
var r=function(e,n){var r=n.tokenize(e,n),i=e.current()
if("."===i)return r=n.tokenize(e,n),i=e.current(),"variable"===r?"variable":t
var o="[({".indexOf(i)
return-1!==o&&v(0,n),"dedent"===g&&w(0,n)?t:-1!==(o="])}".indexOf(i))&&w(0,n)?t:r}(e,n)
return n.lastToken={style:r,content:e.current()},r},indent:function(n,t){var r=t.replace(/^\s+|\s+$/g,"")
return r.match(b)||r.match(k)||r.match(p)?e.indentUnit*(n.currentIndent-1):n.currentIndent<0?0:n.currentIndent*e.indentUnit}}}),e.defineMIME("text/x-vb","vb")})
