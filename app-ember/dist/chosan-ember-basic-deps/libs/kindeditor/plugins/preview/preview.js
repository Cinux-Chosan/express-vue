KindEditor.plugin("preview",function(e){var i=this,a="preview"
i.clickToolbar(a,function(){i.lang(a+".")
var o=i.createDialog({name:a,width:750,title:i.lang(a),body:'<div style="padding:10px 20px;"><iframe class="ke-textarea" frameborder="0" style="width:708px;height:400px;"></iframe></div>'}),r=e("iframe",o.div),t=e.iframeDoc(r)
t.open(),t.write(i.fullHtml()),t.close(),e(t.body).css("background-color","#FFF"),r[0].contentWindow.focus()})})
