(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){"use strict"
e.registerGlobalHelper("fold","comment",function(e){return e.blockCommentStart&&e.blockCommentEnd},function(t,n){var o=t.getModeAt(n),r=o.blockCommentStart,i=o.blockCommentEnd
if(r&&i){for(var f,l=n.line,c=t.getLine(l),m=n.ch,a=0;;){var d=m<=0?-1:c.lastIndexOf(r,m-1)
if(-1!=d){if(1==a&&d<n.ch)return
if(/comment/.test(t.getTokenTypeAt(e.Pos(l,d+1)))){f=d+r.length
break}m=d-1}else{if(1==a)return
a=1,m=c.length}}var u,b,s=1,g=t.lastLine()
e:for(var h=l;h<=g;++h)for(var k=t.getLine(h),v=h==l?f:0;;){var p=k.indexOf(r,v),C=k.indexOf(i,v)
if(p<0&&(p=k.length),C<0&&(C=k.length),(v=Math.min(p,C))==k.length)break
if(v==p)++s
else if(!--s){u=h,b=v
break e}++v}if(null!=u&&(l!=u||b!=f))return{from:e.Pos(l,f),to:e.Pos(u,b)}}})})
