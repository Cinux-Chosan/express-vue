(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("solr",function(){var e=/[^\s\|\!\+\-\*\?\~\^\&\:\(\)\[\]\{\}\^\"\\]/,t=/[\|\!\+\-\*\?\~\^\&]/,n=/^(OR|AND|NOT|TO)$/i
function o(t){return function(o,i){for(var u=t;(t=o.peek())&&null!=t.match(e);)u+=o.next()
return i.tokenize=r,n.test(u)?"operator":function(e){return parseFloat(e,10).toString()===e}(u)?"number":":"==o.peek()?"field":"string"}}function r(n,i){var u,f,c=n.next()
return'"'==c?i.tokenize=(f=c,function(e,t){for(var n,o=!1;null!=(n=e.next())&&(n!=f||o);)o=!o&&"\\"==n
return o||(t.tokenize=r),"string"}):t.test(c)?i.tokenize=(u=c,function(e,t){var n="operator"
return"+"==u?n+=" positive":"-"==u?n+=" negative":"|"==u?e.eat(/\|/):"&"==u?e.eat(/\&/):"^"==u&&(n+=" boost"),t.tokenize=r,n}):e.test(c)&&(i.tokenize=o(c)),i.tokenize!=r?i.tokenize(n,i):null}return{startState:function(){return{tokenize:r}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)}}}),e.defineMIME("text/x-solr","solr")})
