KindEditor.plugin("pagebreak",function(e){var a=this,t=e.undef(a.pagebreakHtml,'<hr style="page-break-after: always;" class="ke-pagebreak" />')
a.clickToolbar("pagebreak",function(){var r=a.cmd,i=r.range
a.focus()
var n="br"==a.newlineTag||e.WEBKIT?"":'<span id="__kindeditor_tail_tag__"></span>'
if(a.insertHtml(t+n),""!==n){var d=e("#__kindeditor_tail_tag__",a.edit.doc)
i.selectNodeContents(d[0]),d.removeAttr("id"),r.select()}})})
