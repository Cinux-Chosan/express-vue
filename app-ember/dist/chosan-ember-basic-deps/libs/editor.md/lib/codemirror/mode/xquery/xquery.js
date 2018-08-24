(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("xquery",function(){var e=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("keyword a"),n=e("keyword b"),r=e("keyword c"),a=e("operator"),i={type:"atom",style:"atom"},o={type:"axis_specifier",style:"qualifier"},c={if:t,switch:t,while:t,for:t,else:n,then:n,try:n,finally:n,catch:n,element:r,attribute:r,let:r,implements:r,import:r,module:r,namespace:r,return:r,super:r,this:r,throws:r,where:r,private:r,",":{type:"punctuation",style:null},null:i,"fn:false()":i,"fn:true()":i},u=["after","ancestor","ancestor-or-self","and","as","ascending","assert","attribute","before","by","case","cast","child","comment","declare","default","define","descendant","descendant-or-self","descending","document","document-node","element","else","eq","every","except","external","following","following-sibling","follows","for","function","if","import","in","instance","intersect","item","let","module","namespace","node","node","of","only","or","order","parent","precedes","preceding","preceding-sibling","processing-instruction","ref","return","returns","satisfies","schema","schema-element","self","some","sortby","stable","text","then","to","treat","typeswitch","union","variable","version","where","xquery","empty-sequence"],s=0,f=u.length;s<f;s++)c[u[s]]=e(u[s])
var l=["xs:string","xs:float","xs:decimal","xs:double","xs:integer","xs:boolean","xs:date","xs:dateTime","xs:time","xs:duration","xs:dayTimeDuration","xs:time","xs:yearMonthDuration","numeric","xs:hexBinary","xs:base64Binary","xs:anyURI","xs:QName","xs:byte","xs:boolean","xs:anyURI","xf:yearMonthDuration"]
for(s=0,f=l.length;s<f;s++)c[l[s]]=i
var m=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"]
for(s=0,f=m.length;s<f;s++)c[m[s]]=a
var d=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"]
for(s=0,f=d.length;s<f;s++)c[d[s]]=o
return c}()
function t(e,t,n){return e,n,t}function n(e,t,n){return t.tokenize=n,n(e,t)}function r(m,y){var h=m.next(),x=!1,b=function(e){return'"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1)}(m)
if("<"==h){if(m.match("!--",!0))return n(m,y,u)
if(m.match("![CDATA",!1))return y.tokenize=s,t("tag","tag")
if(m.match("?",!1))return n(m,y,f)
var k=m.eat("/")
m.eatSpace()
for(var v,z="";v=m.eat(/[^\s\u00a0=<>\"\'\/?]/);)z+=v
return n(m,y,function(e,n){return function(a,i){return a.eatSpace(),n&&a.eat(">")?(g(i),i.tokenize=r,t("tag","tag")):(a.eat("/")||p(i,{type:"tag",name:e,tokenize:r}),a.eat(">")?(i.tokenize=r,t("tag","tag")):(i.tokenize=c,t("tag","tag")))}}(z,k))}if("{"==h)return p(y,{type:"codeblock"}),t("",null)
if("}"==h)return g(y),t("",null)
if(l(y))return">"==h?t("tag","tag"):"/"==h&&m.eat(">")?(g(y),t("tag","tag")):t("word","variable")
if(/\d/.test(h))return m.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),t("number","atom")
if("("===h&&m.eat(":"))return p(y,{type:"comment"}),n(m,y,a)
if(b||'"'!==h&&"'"!==h){if("$"===h)return n(m,y,o)
if(":"===h&&m.eat("="))return t("operator","keyword")
if("("===h)return p(y,{type:"paren"}),t("",null)
if(")"===h)return g(y),t("",null)
if("["===h)return p(y,{type:"bracket"}),t("",null)
if("]"===h)return g(y),t("",null)
var w=e.propertyIsEnumerable(h)&&e[h]
if(b&&'"'===h)for(;'"'!==m.next(););if(b&&"'"===h)for(;"'"!==m.next(););w||m.eatWhile(/[\w\$_-]/)
var q=m.eat(":")
!m.eat(":")&&q&&m.eatWhile(/[\w\$_-]/),m.match(/^[ \t]*\(/,!1)&&(x=!0)
var _=m.current()
return w=e.propertyIsEnumerable(_)&&e[_],x&&!w&&(w={type:"function_call",style:"variable def"}),function(e){return d(e,"xmlconstructor")}(y)?(g(y),t("word","variable",_)):("element"!=_&&"attribute"!=_&&"axis_specifier"!=w.type||p(y,{type:"xmlconstructor"}),w?t(w.type,w.style,_):t("word","variable",_))}return n(m,y,i(h))}function a(e,n){for(var r,a=!1,i=!1,o=0;r=e.next();){if(")"==r&&a){if(!(o>0)){g(n)
break}o--}else":"==r&&i&&o++
a=":"==r,i="("==r}return t("comment","comment")}function i(e,n){return function(a,o){var c
if(function(e){return d(e,"string")}(o)&&a.current()==e)return g(o),n&&(o.tokenize=n),t("string","string")
if(p(o,{type:"string",name:e,tokenize:i(e,n)}),a.match("{",!1)&&m(o))return o.tokenize=r,t("string","string")
for(;c=a.next();){if(c==e){g(o),n&&(o.tokenize=n)
break}if(a.match("{",!1)&&m(o))return o.tokenize=r,t("string","string")}return t("string","string")}}function o(e,n){var a=/[\w\$_-]/
if(e.eat('"')){for(;'"'!==e.next(););e.eat(":")}else e.eatWhile(a),e.match(":=",!1)||e.eat(":")
return e.eatWhile(a),n.tokenize=r,t("variable","variable")}function c(e,a){var o=e.next()
return"/"==o&&e.eat(">")?(m(a)&&g(a),l(a)&&g(a),t("tag","tag")):">"==o?(m(a)&&g(a),t("tag","tag")):"="==o?t("",null):'"'==o||"'"==o?n(e,a,i(o,c)):(m(a)||p(a,{type:"attribute",tokenize:c}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(g(a),a.tokenize=r),t("attribute","attribute"))}function u(e,n){for(var a;a=e.next();)if("-"==a&&e.match("->",!0))return n.tokenize=r,t("comment","comment")}function s(e,n){for(var a;a=e.next();)if("]"==a&&e.match("]",!0))return n.tokenize=r,t("comment","comment")}function f(e,n){for(var a;a=e.next();)if("?"==a&&e.match(">",!0))return n.tokenize=r,t("comment","comment meta")}function l(e){return d(e,"tag")}function m(e){return d(e,"attribute")}function d(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function p(e,t){e.stack.push(t)}function g(e){e.stack.pop()
var t=e.stack.length&&e.stack[e.stack.length-1].tokenize
e.tokenize=t||r}return{startState:function(){return{tokenize:r,cc:[],stack:[]}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"(:",blockCommentEnd:":)"}}),e.defineMIME("application/xquery","xquery")})
