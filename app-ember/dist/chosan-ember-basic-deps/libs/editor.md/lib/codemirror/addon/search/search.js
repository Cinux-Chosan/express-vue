(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror"),require("./searchcursor"),require("../dialog/dialog")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./searchcursor","../dialog/dialog"],e):e(CodeMirror)})(function(e){"use strict"
function o(e){return e.state.search||(e.state.search=new function(){this.posFrom=this.posTo=this.query=null,this.overlay=null})}function r(e){return"string"==typeof e&&e==e.toLowerCase()}function n(e,o,n){return e.getSearchCursor(o,n,r(o))}function t(e,o,r,n,t){e.openDialog?e.openDialog(o,t,{value:n}):t(prompt(r,n))}function i(e){var o=e.match(/^\/(.*)\/([a-z]*)$/)
if(o)try{e=new RegExp(o[1],-1==o[2].indexOf("i")?"":"i")}catch(e){}return("string"==typeof e?""==e:e.test(""))&&(e=/x^/),e}var a='Search: <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">(Use /re/ syntax for regexp search)</span>'
function c(e,n){var c=o(e)
if(c.query)return s(e,n)
t(e,a,"Search for:",e.getSelection(),function(o){e.operation(function(){o&&!c.query&&(c.query=i(o),e.removeOverlay(c.overlay,r(c.query)),c.overlay=function(e,o){return"string"==typeof e?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),o?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(o){e.lastIndex=o.pos
var r=e.exec(o.string)
if(r&&r.index==o.pos)return o.pos+=r[0].length,"searching"
r?o.pos=r.index:o.skipToEnd()}}}(c.query,r(c.query)),e.addOverlay(c.overlay),e.showMatchesOnScrollbar&&(c.annotate&&(c.annotate.clear(),c.annotate=null),c.annotate=e.showMatchesOnScrollbar(c.query,r(c.query))),c.posFrom=c.posTo=e.getCursor(),s(e,n))})})}function s(r,t){r.operation(function(){var i=o(r),a=n(r,i.query,t?i.posFrom:i.posTo);(a.find(t)||(a=n(r,i.query,t?e.Pos(r.lastLine()):e.Pos(r.firstLine(),0))).find(t))&&(r.setSelection(a.from(),a.to()),r.scrollIntoView({from:a.from(),to:a.to()}),i.posFrom=a.from(),i.posTo=a.to())})}function l(e){e.operation(function(){var r=o(e)
r.query&&(r.query=null,e.removeOverlay(r.overlay),r.annotate&&(r.annotate.clear(),r.annotate=null))})}var u='Replace: <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">(Use /re/ syntax for regexp search)</span>',f='With: <input type="text" style="width: 10em" class="CodeMirror-search-field"/>',p="Replace? <button>Yes</button> <button>No</button> <button>Stop</button>"
function d(e,o){e.getOption("readOnly")||t(e,u,"Replace:",e.getSelection(),function(r){r&&(r=i(r),t(e,f,"Replace with:","",function(t){if(o)e.operation(function(){for(var o=n(e,r);o.findNext();)if("string"!=typeof r){var i=e.getRange(o.from(),o.to()).match(r)
o.replace(t.replace(/\$(\d)/g,function(e,o){return i[o]}))}else o.replace(t)})
else{l(e)
var i=n(e,r,e.getCursor()),a=function(){var o,t=i.from()
!(o=i.findNext())&&(i=n(e,r),!(o=i.findNext())||t&&i.from().line==t.line&&i.from().ch==t.ch)||(e.setSelection(i.from(),i.to()),e.scrollIntoView({from:i.from(),to:i.to()}),function(e,o,r,n){e.openConfirm?e.openConfirm(o,n):confirm(r)&&n[0]()}(e,p,"Replace?",[function(){c(o)},a]))},c=function(e){i.replace("string"==typeof r?t:t.replace(/\$(\d)/g,function(o,r){return e[r]})),a()}
a()}}))})}e.commands.find=function(e){l(e),c(e)},e.commands.findNext=c,e.commands.findPrev=function(e){c(e,!0)},e.commands.clearSearch=l,e.commands.replace=d,e.commands.replaceAll=function(e){d(e,!0)}})