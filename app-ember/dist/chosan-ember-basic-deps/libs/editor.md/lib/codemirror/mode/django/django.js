(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("../htmlmixed/htmlmixed"),require("../../addon/mode/overlay")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../htmlmixed/htmlmixed","../../addon/mode/overlay"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("django:inner",function(){var e=["block","endblock","for","endfor","in","true","false","loop","none","self","super","if","endif","as","not","and","else","import","with","endwith","without","context","ifequal","endifequal","ifnotequal","endifnotequal","extends","include","load","length","comment","endcomment","empty"]
function n(t,o){t.eatWhile(/[^\{]/)
var i=t.next()
if("{"==i&&(i=t.eat(/\{|%|#/)))return o.tokenize=function(t){"{"==t&&(t="}")
return function(o,i){var r=o.next()
return r==t&&o.eat("}")?(i.tokenize=n,"tag"):o.match(e)?"keyword":"#"==t?"comment":"string"}}(i),"tag"}return e=new RegExp("^(("+e.join(")|(")+"))\\b"),{startState:function(){return{tokenize:n}},token:function(e,n){return n.tokenize(e,n)}}}),e.defineMode("django",function(n){var t=e.getMode(n,"text/html"),o=e.getMode(n,"django:inner")
return e.overlayMode(t,o)}),e.defineMIME("text/x-django","django")})