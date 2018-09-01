(function(o){"object"==typeof exports&&"object"==typeof module?o(require("../../lib/codemirror"),require("./foldcode")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","./foldcode"],o):o(CodeMirror)})(function(o){"use strict"
o.defineOption("foldGutter",!1,function(t,r,n){n&&n!=o.Init&&(t.clearGutter(t.state.foldGutter.options.gutter),t.state.foldGutter=null,t.off("gutterClick",f),t.off("change",d),t.off("viewportChange",a),t.off("fold",u),t.off("unfold",u),t.off("swapDoc",i)),r&&(t.state.foldGutter=new e(function(o){!0===o&&(o={})
null==o.gutter&&(o.gutter="CodeMirror-foldgutter")
null==o.indicatorOpen&&(o.indicatorOpen="CodeMirror-foldgutter-open")
null==o.indicatorFolded&&(o.indicatorFolded="CodeMirror-foldgutter-folded")
return o}(r)),i(t),t.on("gutterClick",f),t.on("change",d),t.on("viewportChange",a),t.on("fold",u),t.on("unfold",u),t.on("swapDoc",i))})
var t=o.Pos
function e(o){this.options=o,this.from=this.to=0}function r(o){if("string"==typeof o){var t=document.createElement("div")
return t.className=o+" CodeMirror-guttermarker-subtle",t}return o.cloneNode(!0)}function n(o,e,n){var i=o.state.foldGutter.options,f=e,d=o.foldOption(i,"minFoldSize"),a=o.foldOption(i,"rangeFinder")
o.eachLine(e,n,function(e){var n=null
if(function(o,e){for(var r=o.findMarksAt(t(e)),n=0;n<r.length;++n)if(r[n].__isFold&&r[n].find().from.line==e)return!0}(o,f))n=r(i.indicatorFolded)
else{var u=t(f,0),l=a&&a(o,u)
l&&l.to.line-l.from.line>=d&&(n=r(i.indicatorOpen))}o.setGutterMarker(e,i.gutter,n),++f})}function i(o){var t=o.getViewport(),e=o.state.foldGutter
e&&(o.operation(function(){n(o,t.from,t.to)}),e.from=t.from,e.to=t.to)}function f(o,e,r){var n=o.state.foldGutter
if(n){var i=n.options
r==i.gutter&&o.foldCode(t(e,0),i.rangeFinder)}}function d(o){var t=o.state.foldGutter
if(t){var e=t.options
t.from=t.to=0,clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout(function(){i(o)},e.foldOnChangeTimeSpan||600)}}function a(o){var t=o.state.foldGutter
if(t){var e=t.options
clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout(function(){var e=o.getViewport()
t.from==t.to||e.from-t.to>20||t.from-e.to>20?i(o):o.operation(function(){e.from<t.from&&(n(o,e.from,t.from),t.from=e.from),e.to>t.to&&(n(o,t.to,e.to),t.to=e.to)})},e.updateViewportTimeSpan||400)}}function u(o,t){var e=o.state.foldGutter
if(e){var r=t.line
r>=e.from&&r<e.to&&n(o,r,r+1)}}})
