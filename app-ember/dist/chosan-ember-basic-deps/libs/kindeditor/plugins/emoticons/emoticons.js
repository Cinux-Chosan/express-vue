KindEditor.plugin("emoticons",function(e){var i=this,n=i.emoticonsPath||i.pluginsPath+"emoticons/images/",o=void 0===i.allowPreviewEmoticons||i.allowPreviewEmoticons,s=1
i.clickToolbar("emoticons",function(){var a,t,c=5,r=9,l=0,p=c*r,u=Math.ceil(135/p),d=Math.floor(r/2),f=e('<div class="ke-plugin-emoticons"></div>'),v=[]
function m(o,s,c){a?o.mouseover(function(){s>d?(a.css("left",0),a.css("right","")):(a.css("left",""),a.css("right",0)),t.attr("src",n+c+".gif"),e(this).addClass("ke-on")}):o.mouseover(function(){e(this).addClass("ke-on")}),o.mouseout(function(){e(this).removeClass("ke-on")}),o.click(function(e){i.insertHtml('<img src="'+n+c+'.gif" border="0" alt="" />').hideMenu().focus(),e.stop()})}function g(i,o){var s=document.createElement("table")
o.append(s),a&&(e(s).mouseover(function(){a.show("block")}),e(s).mouseout(function(){a.hide()}),v.push(e(s))),s.className="ke-table",s.cellPadding=0,s.cellSpacing=0,s.border=0
for(var t=(i-1)*p+l,u=0;u<c;u++)for(var d=s.insertRow(u),f=0;f<r;f++){var g=e(d.insertCell(f))
g.addClass("ke-cell"),m(g,f,t)
var h=e('<span class="ke-img"></span>').css("background-position","-"+24*t+"px 0px").css("background-image","url("+n+"static.gif)")
g.append(h),v.push(g),t++}return s}i.createMenu({name:"emoticons",beforeRemove:function(){b()}}).div.append(f),o&&(a=e('<div class="ke-preview"></div>').css("right",0),t=e('<img class="ke-preview-img" src="'+n+l+'.gif" />'),f.append(a),a.append(t))
var h,k=g(s,f)
function b(){e.each(v,function(){this.unbind()})}function w(e,i){e.click(function(e){b(),k.parentNode.removeChild(k),h.remove(),k=g(i,f),C(i),s=i,e.stop()})}function C(i){h=e('<div class="ke-page"></div>'),f.append(h)
for(var n=1;n<=u;n++){if(i!==n){var o=e('<a href="javascript:;">['+n+"]</a>")
w(o,n),h.append(o),v.push(o)}else h.append(e("@["+n+"]"))
h.append(e("@&nbsp;"))}}C(s)})})
