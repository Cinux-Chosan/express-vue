(function(){var t=function(t){var e=jQuery,i="html-entities-dialog",o=[],n=[]
t.fn.htmlEntitiesDialog=function(){var a,l=this.cm,d=this.lang,s=this.settings,r=s.pluginPath+i+"/",c=this.editor,h=(l.getCursor(),l.getSelection(),this.classPrefix),g=h+"dialog-"+i,f=d.dialog.htmlEntities,u=['<div class="'+h+'html-entities-box" style="width: 760px;height: 334px;margin-bottom: 8px;overflow: hidden;overflow-y: auto;">','<div class="'+h+'grid-table">',"</div>","</div>"].join("\r\n")
l.focus(),c.find("."+g).length>0?(a=c.find("."+g),o=[],a.find("a").removeClass("selected"),this.dialogShowMask(a),this.dialogLockScreen(),a.show()):a=this.createDialog({name:g,title:f.title,width:800,height:475,mask:s.dialogShowMask,drag:s.dialogDraggable,content:u,lockScreen:s.dialogLockScreen,maskStyle:{opacity:s.dialogMaskOpacity,backgroundColor:s.dialogMaskBgColor},buttons:{enter:[d.buttons.enter,function(){return l.replaceSelection(o.join(" ")),this.hide().lockScreen(!1).hideMask(),!1}],cancel:[d.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),!1}]}})
var m=a.find("."+h+"grid-table"),v=function(){if(!(n.length<1)){var i=Math.ceil(n.length/20)
m.html("")
for(var l=0;l<i;l++){for(var d='<div class="'+h+'grid-table-row">',s=0;s<20;s++){var r=n[20*l+s]
if(void 0!==r){var c=r.name.replace("&amp;","&")
d+='<a href="javascript:;" value="'+r.name+'" title="'+c+'" class="'+h+'html-entity-btn">'+c+"</a>"}}d+="</div>",m.append(d)}a.find("."+h+"html-entity-btn").bind(t.mouseOrTouch("click","touchend"),function(){e(this).toggleClass("selected"),e(this).hasClass("selected")&&o.push(e(this).attr("value"))})}}
n.length<1?("function"==typeof a.loading&&a.loading(!0),e.getJSON(r+i.replace("-dialog","")+".json",function(t){"function"==typeof a.loading&&a.loading(!1),n=t,v()})):v()}}
"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=t:"function"==typeof define?define.amd?define(["editormd"],function(e){t(e)}):define(function(e){var i=e("./../../editormd")
t(i)}):t(window.editormd)})()
