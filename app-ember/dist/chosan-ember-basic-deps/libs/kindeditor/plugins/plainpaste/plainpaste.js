KindEditor.plugin("plainpaste",function(e){var a=this,t="plainpaste"
a.clickToolbar(t,function(){var i='<div style="padding:10px 20px;"><div style="margin-bottom:10px;">'+a.lang(t+".").comment+'</div><textarea class="ke-textarea" style="width:408px;height:260px;"></textarea></div>',n=a.createDialog({name:t,width:450,title:a.lang(t),body:i,yesBtn:{name:a.lang("yes"),click:function(t){var i=l.val()
i=(i=e.escape(i)).replace(/ {2}/g," &nbsp;"),i="p"==a.newlineTag?i.replace(/^/,"<p>").replace(/$/,"</p>").replace(/\n/g,"</p><p>"):i.replace(/\n/g,"<br />$&"),a.insertHtml(i).hideDialog().focus()}}}),l=e("textarea",n.div)
l[0].focus()})})
