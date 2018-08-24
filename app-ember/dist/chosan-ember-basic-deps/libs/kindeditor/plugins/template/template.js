KindEditor.plugin("template",function(e){var a=this,l="template",i=(a.lang(l+"."),a.pluginsPath+l+"/html/")
function t(a){return i+a+"?ver="+encodeURIComponent(e.DEBUG?e.TIME:e.VERSION)}a.clickToolbar(l,function(){var i=a.lang(l+"."),c=['<div style="padding:10px 20px;">','<div class="ke-header">','<div class="ke-left">',i.selectTemplate+" <select>"]
e.each(i.fileList,function(e,a){c.push('<option value="'+e+'">'+a+"</option>")}),html=[c.join(""),"</select></div>",'<div class="ke-right">','<input type="checkbox" id="keReplaceFlag" name="replaceFlag" value="1" /> <label for="keReplaceFlag">'+i.replaceContent+"</label>","</div>",'<div class="ke-clearfix"></div>',"</div>",'<iframe class="ke-textarea" frameborder="0" style="width:458px;height:260px;background-color:#FFF;"></iframe>',"</div>"].join("")
var n=a.createDialog({name:l,width:500,title:a.lang(l),body:html,yesBtn:{name:a.lang("yes"),click:function(l){var i=e.iframeDoc(d)
a[o[0].checked?"html":"insertHtml"](i.body.innerHTML).hideDialog().focus()}}}),r=e("select",n.div),o=e('[name="replaceFlag"]',n.div),d=e("iframe",n.div)
o[0].checked=!0,d.attr("src",t(r.val())),r.change(function(){d.attr("src",t(this.value))})})})
