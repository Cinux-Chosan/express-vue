(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.defineMode("sass",function(e){var t=new RegExp("^"+["true","false","null","auto"].join("|")),r=new RegExp("^"+["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not",";","\\{","\\}",":"].join("|")),n=/^::?[a-zA-Z_][\w\-]*/
function o(e,t){var r=e.peek()
return")"===r?(e.next(),t.tokenizer=s,"operator"):"("===r?(e.next(),e.eatSpace(),"operator"):"'"===r||'"'===r?(t.tokenizer=a(e.next()),"string"):(t.tokenizer=a(")",!1),"string")}function i(e,t){return function(r,n){return r.sol()&&r.indentation()<=e?(n.tokenizer=s,s(r,n)):(t&&r.skipTo("*/")?(r.next(),r.next(),n.tokenizer=s):r.skipToEnd(),"comment")}}function a(e,t){return null==t&&(t=!0),function r(n,o){var i=n.next(),a=n.peek(),f=n.string.charAt(n.pos-2)
return"\\"!==i&&a===e||i===e&&"\\"!==f?(i!==e&&t&&n.next(),o.tokenizer=s,"string"):"#"===i&&"{"===a?(o.tokenizer=u(r),n.next(),"operator"):"string"}}function u(e){return function(t,r){return"}"===t.peek()?(t.next(),r.tokenizer=e,"operator"):s(t,r)}}function f(t){if(0==t.indentCount){t.indentCount++
var r=t.scopes[0].offset+e.indentUnit
t.scopes.unshift({offset:r})}}function c(e){1!=e.scopes.length&&e.scopes.shift()}function s(e,p){var m=e.peek()
if(e.match("/*"))return p.tokenizer=i(e.indentation(),!0),p.tokenizer(e,p)
if(e.match("//"))return p.tokenizer=i(e.indentation(),!1),p.tokenizer(e,p)
if(e.match("#{"))return p.tokenizer=u(s),"operator"
if('"'===m||"'"===m)return e.next(),p.tokenizer=a(m),"string"
if(p.cursorHalf){if("#"===m&&(e.next(),e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)))return e.peek()||(p.cursorHalf=0),"number"
if(e.match(/^-?[0-9\.]+/))return e.peek()||(p.cursorHalf=0),"number"
if(e.match(/^(px|em|in)\b/))return e.peek()||(p.cursorHalf=0),"unit"
if(e.match(t))return e.peek()||(p.cursorHalf=0),"keyword"
if(e.match(/^url/)&&"("===e.peek())return p.tokenizer=o,e.peek()||(p.cursorHalf=0),"atom"
if("$"===m)return e.next(),e.eatWhile(/[\w-]/),e.peek()||(p.cursorHalf=0),"variable-3"
if("!"===m)return e.next(),e.peek()||(p.cursorHalf=0),e.match(/^[\w]+/)?"keyword":"operator"
if(e.match(r))return e.peek()||(p.cursorHalf=0),"operator"
if(e.eatWhile(/[\w-]/))return e.peek()||(p.cursorHalf=0),"attribute"
if(!e.peek())return p.cursorHalf=0,null}else{if("."===m){if(e.next(),e.match(/^[\w-]+/))return f(p),"atom"
if("#"===e.peek())return f(p),"atom"}if("#"===m){if(e.next(),e.match(/^[\w-]+/))return f(p),"atom"
if("#"===e.peek())return f(p),"atom"}if("$"===m)return e.next(),e.eatWhile(/[\w-]/),"variable-2"
if(e.match(/^-?[0-9\.]+/))return"number"
if(e.match(/^(px|em|in)\b/))return"unit"
if(e.match(t))return"keyword"
if(e.match(/^url/)&&"("===e.peek())return p.tokenizer=o,"atom"
if("="===m&&e.match(/^=[\w-]+/))return f(p),"meta"
if("+"===m&&e.match(/^\+[\w-]+/))return"variable-3"
if("@"===m&&e.match(/@extend/)&&(e.match(/\s*[\w]/)||c(p)),e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))return f(p),"meta"
if("@"===m)return e.next(),e.eatWhile(/[\w-]/),"meta"
if(e.eatWhile(/[\w-]/))return e.match(/ *: *[\w-\+\$#!\("']/,!1)?"propery":e.match(/ *:/,!1)?(f(p),p.cursorHalf=1,"atom"):e.match(/ *,/,!1)?"atom":(f(p),"atom")
if(":"===m)return e.match(n)?"keyword":(e.next(),p.cursorHalf=1,"operator")}return e.match(r)?"operator":(e.next(),null)}return{startState:function(){return{tokenizer:s,scopes:[{offset:0,type:"sass"}],indentCount:0,cursorHalf:0,definedVars:[],definedMixins:[]}},token:function(t,r){var n=function(t,r){t.sol()&&(r.indentCount=0)
var n=r.tokenizer(t,r),o=t.current()
if("@return"!==o&&"}"!==o||c(r),null!==n){for(var i=t.pos-o.length+e.indentUnit*r.indentCount,a=[],u=0;u<r.scopes.length;u++){var f=r.scopes[u]
f.offset<=i&&a.push(f)}r.scopes=a}return n}(t,r)
return r.lastToken={style:n,content:t.current()},n},indent:function(e){return e.scopes[0].offset}}}),e.defineMIME("text/x-sass","sass")})
