(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("jinja2",function(){var e=["and","as","block","endblock","by","cycle","debug","else","elif","extends","filter","endfilter","firstof","for","endfor","if","endif","ifchanged","endifchanged","ifequal","endifequal","ifnotequal","endifnotequal","in","include","load","not","now","or","parsed","regroup","reversed","spaceless","endspaceless","ssi","templatetag","openblock","closeblock","openvariable","closevariable","openbrace","closebrace","opencomment","closecomment","widthratio","url","with","endwith","get_current_language","trans","endtrans","noop","blocktrans","endblocktrans","get_available_languages","get_current_language_bidi","plural"],n=/^[+\-*&%=<>!?|~^]/,t=/^[:\[\(\{]/,r=["true","false"],i=/^(\d[+\-\*\/])?\d+(\.\d+)?/
function o(o,a){var c=o.peek()
if(a.incomment)return o.skipTo("#}")?(o.eatWhile(/\#|}/),a.incomment=!1):o.skipToEnd(),"comment"
if(a.intag){if(a.operator){if(a.operator=!1,o.match(r))return"atom"
if(o.match(i))return"number"}if(a.sign){if(a.sign=!1,o.match(r))return"atom"
if(o.match(i))return"number"}if(a.instring)return c==a.instring&&(a.instring=!1),o.next(),"string"
if("'"==c||'"'==c)return a.instring=c,o.next(),"string"
if(o.match(a.intag+"}")||o.eat("-")&&o.match(a.intag+"}"))return a.intag=!1,"tag"
if(o.match(n))return a.operator=!0,"operator"
if(o.match(t))a.sign=!0
else if(o.eat(" ")||o.sol()){if(o.match(e))return"keyword"
if(o.match(r))return"atom"
if(o.match(i))return"number"
o.sol()&&o.next()}else o.next()
return"variable"}if(o.eat("{")){if(c=o.eat("#"))return a.incomment=!0,o.skipTo("#}")?(o.eatWhile(/\#|}/),a.incomment=!1):o.skipToEnd(),"comment"
if(c=o.eat(/\{|%/))return a.intag=c,"{"==c&&(a.intag="}"),o.eat("-"),"tag"}o.next()}return e=new RegExp("(("+e.join(")|(")+"))\\b"),r=new RegExp("(("+r.join(")|(")+"))\\b"),{startState:function(){return{tokenize:o}},token:function(e,n){return n.tokenize(e,n)}}})})