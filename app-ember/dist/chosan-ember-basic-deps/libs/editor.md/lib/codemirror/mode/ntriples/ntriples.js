(function(_){"object"==typeof exports&&"object"==typeof module?_(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],_):_(CodeMirror)})(function(_){"use strict"
_.defineMode("ntriples",function(){var _={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12}
function e(e,I){var R,n=e.location
R=n==_.PRE_SUBJECT&&"<"==I?_.WRITING_SUB_URI:n==_.PRE_SUBJECT&&"_"==I?_.WRITING_BNODE_URI:n==_.PRE_PRED&&"<"==I?_.WRITING_PRED_URI:n==_.PRE_OBJ&&"<"==I?_.WRITING_OBJ_URI:n==_.PRE_OBJ&&"_"==I?_.WRITING_OBJ_BNODE:n==_.PRE_OBJ&&'"'==I?_.WRITING_OBJ_LITERAL:n==_.WRITING_SUB_URI&&">"==I?_.PRE_PRED:n==_.WRITING_BNODE_URI&&" "==I?_.PRE_PRED:n==_.WRITING_PRED_URI&&">"==I?_.PRE_OBJ:n==_.WRITING_OBJ_URI&&">"==I?_.POST_OBJ:n==_.WRITING_OBJ_BNODE&&" "==I?_.POST_OBJ:n==_.WRITING_OBJ_LITERAL&&'"'==I?_.POST_OBJ:n==_.WRITING_LIT_LANG&&" "==I?_.POST_OBJ:n==_.WRITING_LIT_TYPE&&">"==I?_.POST_OBJ:n==_.WRITING_OBJ_LITERAL&&"@"==I?_.WRITING_LIT_LANG:n==_.WRITING_OBJ_LITERAL&&"^"==I?_.WRITING_LIT_TYPE:" "!=I||n!=_.PRE_SUBJECT&&n!=_.PRE_PRED&&n!=_.PRE_OBJ&&n!=_.POST_OBJ?n==_.POST_OBJ&&"."==I?_.PRE_SUBJECT:_.ERROR:n,e.location=R}return{startState:function(){return{location:_.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(_,I){var R=_.next()
if("<"==R){e(I,R)
var n=""
return _.eatWhile(function(_){return"#"!=_&&">"!=_&&(n+=_,!0)}),I.uris.push(n),_.match("#",!1)?"variable":(_.next(),e(I,">"),"variable")}if("#"==R){var t=""
return _.eatWhile(function(_){return">"!=_&&" "!=_&&(t+=_,!0)}),I.anchors.push(t),"variable-2"}if(">"==R)return e(I,">"),"variable"
if("_"==R){e(I,R)
var r=""
return _.eatWhile(function(_){return" "!=_&&(r+=_,!0)}),I.bnodes.push(r),_.next(),e(I," "),"builtin"}if('"'==R)return e(I,R),_.eatWhile(function(_){return'"'!=_}),_.next(),"@"!=_.peek()&&"^"!=_.peek()&&e(I,'"'),"string"
if("@"==R){e(I,"@")
var i=""
return _.eatWhile(function(_){return" "!=_&&(i+=_,!0)}),I.langs.push(i),_.next(),e(I," "),"string-2"}if("^"==R){_.next(),e(I,"^")
var T=""
return _.eatWhile(function(_){return">"!=_&&(T+=_,!0)}),I.types.push(T),_.next(),e(I,">"),"variable"}" "==R&&e(I,R),"."==R&&e(I,R)}}}),_.defineMIME("text/n-triples","ntriples")})