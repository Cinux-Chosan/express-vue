KindEditor.plugin("link",function(e){var l=this
l.plugin.link={edit:function(){var i=l.lang("link."),t='<div style="padding:20px;"><div class="ke-dialog-row"><label for="keUrl" style="width:60px;">'+i.url+'</label><input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:260px;" /></div><div class="ke-dialog-row""><label for="keType" style="width:60px;">'+i.linkType+'</label><select id="keType" name="type"></select></div></div>',n=l.createDialog({name:"link",width:450,title:l.lang("link"),body:t,yesBtn:{name:l.lang("yes"),click:function(i){var t=e.trim(a.val())
if("http://"==t||e.invalidUrl(t))return alert(l.lang("invalidUrl")),void a[0].focus()
l.exec("createlink",t,d.val()).hideDialog().focus()}}}).div,a=e('input[name="url"]',n),d=e('select[name="type"]',n)
a.val("http://"),d[0].options[0]=new Option(i.newWindow,"_blank"),d[0].options[1]=new Option(i.selfWindow,""),l.cmd.selection()
var c=l.plugin.getSelectedLink()
c&&(l.cmd.range.selectNode(c[0]),l.cmd.select(),a.val(c.attr("data-ke-src")),d.val(c.attr("target"))),a[0].focus(),a[0].select()},delete:function(){l.exec("unlink",null)}},l.clickToolbar("link",l.plugin.link.edit)})
