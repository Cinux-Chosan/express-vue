(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("coffeescript",function(e,t){var n="error"
function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var o=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,i=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,c=/^[_A-Za-z$][_A-Za-z$0-9]*/,f=/^(@|this\.)[_A-Za-z$][_A-Za-z$0-9]*/,a=r(["and","or","not","is","isnt","in","instanceof","typeof"]),p=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],s=r(p.concat(["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"]))
p=r(p)
var u=/^('{3}|\"{3}|['\"])/,l=/^(\/{3}|\/)/,d=r(["Infinity","NaN","undefined","null","true","false","on","off","yes","no"])
function m(e,t){if(e.sol()){null===t.scope.align&&(t.scope.align=!1)
var r=t.scope.offset
if(e.eatSpace()){var p=e.indentation()
return p>r&&"coffee"==t.scope.type?"indent":p<r?"dedent":null}r>0&&y(e,t)}if(e.eatSpace())return null
var m=e.peek()
if(e.match("####"))return e.skipToEnd(),"comment"
if(e.match("###"))return t.tokenize=v,t.tokenize(e,t)
if("#"===m)return e.skipToEnd(),"comment"
if(e.match(/^-?[0-9\.]/,!1)){var k=!1
if(e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(k=!0),e.match(/^-?\d+\.\d*/)&&(k=!0),e.match(/^-?\.\d+/)&&(k=!0),k)return"."==e.peek()&&e.backUp(1),"number"
var b=!1
if(e.match(/^-?0x[0-9a-f]+/i)&&(b=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(b=!0),e.match(/^-?0(?![\dx])/i)&&(b=!0),b)return"number"}if(e.match(u))return t.tokenize=h(e.current(),!1,"string"),t.tokenize(e,t)
if(e.match(l)){if("/"!=e.current()||e.match(/^.*\//,!1))return t.tokenize=h(e.current(),!0,"string-2"),t.tokenize(e,t)
e.backUp(1)}return e.match(o)||e.match(a)?"operator":e.match(i)?"punctuation":e.match(d)?"atom":e.match(s)?"keyword":e.match(c)?"variable":e.match(f)?"property":(e.next(),n)}function h(e,r,o){return function(i,c){for(;!i.eol();)if(i.eatWhile(/[^'"\/\\]/),i.eat("\\")){if(i.next(),r&&i.eol())return o}else{if(i.match(e))return c.tokenize=m,o
i.eat(/['"\/]/)}return r&&(t.singleLineStringErrors?o=n:c.tokenize=m),o}}function v(e,t){for(;!e.eol();){if(e.eatWhile(/[^#]/),e.match("###")){t.tokenize=m
break}e.eatWhile("#")}return"comment"}function k(t,n,r){r=r||"coffee"
for(var o=0,i=!1,c=null,f=n.scope;f;f=f.prev)if("coffee"===f.type||"}"==f.type){o=f.offset+e.indentUnit
break}"coffee"!==r?(i=null,c=t.column()+t.current().length):n.scope.align&&(n.scope.align=!1),n.scope={offset:o,type:r,prev:n.scope,align:i,alignOffset:c}}function y(e,t){if(t.scope.prev){if("coffee"===t.scope.type){for(var n=e.indentation(),r=!1,o=t.scope;o;o=o.prev)if(n===o.offset){r=!0
break}if(!r)return!0
for(;t.scope.prev&&t.scope.offset!==n;)t.scope=t.scope.prev
return!1}return t.scope=t.scope.prev,!1}}return{startState:function(e){return{tokenize:m,scope:{offset:e||0,type:"coffee",prev:null,align:!1},lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var r=null===t.scope.align&&t.scope
r&&e.sol()&&(r.align=!1)
var o=function(e,t){var r=t.tokenize(e,t),o=e.current()
if("."===o)return r=t.tokenize(e,t),o=e.current(),/^\.[\w$]+$/.test(o)?"variable":n
"return"===o&&(t.dedent=!0),("->"!==o&&"=>"!==o||t.lambda||e.peek())&&"indent"!==r||k(e,t)
var i="[({".indexOf(o)
if(-1!==i&&k(e,t,"])}".slice(i,i+1)),p.exec(o)&&k(e,t),"then"==o&&y(e,t),"dedent"===r&&y(e,t))return n
if(-1!==(i="])}".indexOf(o))){for(;"coffee"==t.scope.type&&t.scope.prev;)t.scope=t.scope.prev
t.scope.type==o&&(t.scope=t.scope.prev)}return t.dedent&&e.eol()&&("coffee"==t.scope.type&&t.scope.prev&&(t.scope=t.scope.prev),t.dedent=!1),r}(e,t)
return r&&o&&"comment"!=o&&(r.align=!0),t.lastToken={style:o,content:e.current()},e.eol()&&e.lambda&&(t.lambda=!1),o},indent:function(e,t){if(e.tokenize!=m)return 0
var n=e.scope,r=t&&"])}".indexOf(t.charAt(0))>-1
if(r)for(;"coffee"==n.type&&n.prev;)n=n.prev
var o=r&&n.type===t.charAt(0)
return n.align?n.alignOffset-(o?1:0):(o?n.prev:n).offset},lineComment:"#",fold:"indent"}}),e.defineMIME("text/x-coffeescript","coffeescript")})
