(function(o){"object"==typeof exports&&"object"==typeof module?o(require("../../lib/codemirror"),require("./foldcode")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./foldcode"],o):o(CodeMirror)})(function(o){"use strict"
o.defineOption("foldGutter",!1,function(t,e,r){r&&r!=o.Init&&(t.clearGutter(t.state.foldGutter.options.gutter),t.state.foldGutter=null,t.off("gutterClick",i),t.off("change",f),t.off("viewportChange",d),t.off("fold",a),t.off("unfold",a),t.off("swapDoc",n)),e&&(t.state.foldGutter=new function(o){this.options=o,this.from=this.to=0}(function(o){!0===o&&(o={})
null==o.gutter&&(o.gutter="CodeMirror-foldgutter")
null==o.indicatorOpen&&(o.indicatorOpen="CodeMirror-foldgutter-open")
null==o.indicatorFolded&&(o.indicatorFolded="CodeMirror-foldgutter-folded")
return o}(e)),n(t),t.on("gutterClick",i),t.on("change",f),t.on("viewportChange",d),t.on("fold",a),t.on("unfold",a),t.on("swapDoc",n))})
var t=o.Pos
function e(o){if("string"==typeof o){var t=document.createElement("div")
return t.className=o+" CodeMirror-guttermarker-subtle",t}return o.cloneNode(!0)}function r(o,r,n){var i=o.state.foldGutter.options,f=r,d=o.foldOption(i,"minFoldSize"),a=o.foldOption(i,"rangeFinder")
o.eachLine(r,n,function(r){var n=null
if(function(o,e){for(var r=o.findMarksAt(t(e)),n=0;n<r.length;++n)if(r[n].__isFold&&r[n].find().from.line==e)return!0}(o,f))n=e(i.indicatorFolded)
else{var u=t(f,0),l=a&&a(o,u)
l&&l.to.line-l.from.line>=d&&(n=e(i.indicatorOpen))}o.setGutterMarker(r,i.gutter,n),++f})}function n(o){var t=o.getViewport(),e=o.state.foldGutter
e&&(o.operation(function(){r(o,t.from,t.to)}),e.from=t.from,e.to=t.to)}function i(o,e,r){var n=o.state.foldGutter
if(n){var i=n.options
r==i.gutter&&o.foldCode(t(e,0),i.rangeFinder)}}function f(o){var t=o.state.foldGutter
if(t){var e=t.options
t.from=t.to=0,clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout(function(){n(o)},e.foldOnChangeTimeSpan||600)}}function d(o){var t=o.state.foldGutter
if(t){var e=t.options
clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout(function(){var e=o.getViewport()
t.from==t.to||e.from-t.to>20||t.from-e.to>20?n(o):o.operation(function(){e.from<t.from&&(r(o,e.from,t.from),t.from=e.from),e.to>t.to&&(r(o,t.to,e.to),t.to=e.to)})},e.updateViewportTimeSpan||400)}}function a(o,t){var e=o.state.foldGutter
if(e){var n=t.line
n>=e.from&&n<e.to&&r(o,n,n+1)}}})
