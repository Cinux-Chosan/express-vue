(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
var r=["Dangerous comment"],n=[["Expected '{'","Statement body should be inside '{ }' braces."]],i=["Missing semicolon","Extra comma","Missing property name","Unmatched "," and instead saw"," is not defined","Unclosed string","Stopping, unable to continue"]
function t(e){return o(e,n,"warning",!0),o(e,i,"error"),function(e){for(var n=e.description,i=0;i<r.length;i++)if(-1!==n.indexOf(r[i]))return!0
return!1}(e)?null:e}function o(e,r,n,i){var t,o,a,c,s
t=e.description
for(var f=0;f<r.length;f++)a="string"==typeof(o=r[f])?o:o[0],c="string"==typeof o?null:o[1],s=-1!==t.indexOf(a),(i||s)&&(e.severity=n),s&&c&&(e.description=c)}e.registerHelper("lint","javascript",function(r,n){if(!window.JSHINT)return[]
JSHINT(r,n)
var i=JSHINT.data().errors,o=[]
return i&&function(r,n){for(var i=0;i<r.length;i++){var o=r[i]
if(o){var a,c
if(a=[],o.evidence){var s=a[o.line]
if(!s){var f=o.evidence
s=[],Array.prototype.forEach.call(f,function(e,r){"\t"===e&&s.push(r+1)}),a[o.line]=s}if(s.length>0){var d=o.character
s.forEach(function(e){d>e&&(d-=1)}),o.character=d}}var u=o.character-1,l=u+1
o.evidence&&(c=o.evidence.substring(u).search(/.\b/))>-1&&(l+=c),o.description=o.reason,o.start=o.character,o.end=l,(o=t(o))&&n.push({message:o.description,severity:o.severity,from:e.Pos(o.line-1,u),to:e.Pos(o.line-1,l)})}}}(i,o),o})})
