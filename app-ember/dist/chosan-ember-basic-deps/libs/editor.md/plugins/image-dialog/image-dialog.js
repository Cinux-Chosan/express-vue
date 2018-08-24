(function(){var factory=function(exports){var pluginName="image-dialog"
exports.fn.imageDialog=function(){var _this=this,cm=this.cm,lang=this.lang,editor=this.editor,settings=this.settings,cursor=cm.getCursor(),selection=cm.getSelection(),imageLang=lang.dialog.image,classPrefix=this.classPrefix,iframeName=classPrefix+"image-iframe",dialogName=classPrefix+pluginName,dialog
cm.focus()
var loading=function(a){dialog.find("."+classPrefix+"dialog-mask")[a?"show":"hide"]()}
if(editor.find("."+dialogName).length<1){var guid=(new Date).getTime(),action=settings.imageUploadURL+(settings.imageUploadURL.indexOf("?")>=0?"&":"?")+"guid="+guid
settings.crossDomainUpload&&(action+="&callback="+settings.uploadCallbackURL+"&dialog_id=editormd-image-dialog-"+guid)
var dialogContent=(settings.imageUpload?'<form action="'+action+'" target="'+iframeName+'" method="post" enctype="multipart/form-data" class="'+classPrefix+'form">':'<div class="'+classPrefix+'form">')+(settings.imageUpload?'<iframe name="'+iframeName+'" id="'+iframeName+'" guid="'+guid+'"></iframe>':"")+"<label>"+imageLang.url+'</label><input type="text" data-url />'+(settings.imageUpload?'<div class="'+classPrefix+'file-input"><input type="file" name="'+classPrefix+'image-file" accept="image/*" /><input type="submit" value="'+imageLang.uploadButton+'" /></div>':"")+"<br/><label>"+imageLang.alt+'</label><input type="text" value="'+selection+'" data-alt /><br/><label>'+imageLang.link+'</label><input type="text" value="http://" data-link /><br/>'+(settings.imageUpload?"</form>":"</div>")
if(dialog=this.createDialog({title:imageLang.title,width:settings.imageUpload?465:380,height:254,name:dialogName,content:dialogContent,mask:settings.dialogShowMask,drag:settings.dialogDraggable,lockScreen:settings.dialogLockScreen,maskStyle:{opacity:settings.dialogMaskOpacity,backgroundColor:settings.dialogMaskBgColor},buttons:{enter:[lang.buttons.enter,function(){var a=this.find("[data-url]").val(),e=this.find("[data-alt]").val(),i=this.find("[data-link]").val()
if(""===a)return alert(imageLang.imageURLEmpty),!1
var t=""!==e?' "'+e+'"':""
return""===i||"http://"===i?cm.replaceSelection("!["+e+"]("+a+t+")"):cm.replaceSelection("[!["+e+"]("+a+t+")]("+i+t+")"),""===e&&cm.setCursor(cursor.line,cursor.ch+2),this.hide().lockScreen(!1).hideMask(),!1}],cancel:[lang.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),!1}]}}),dialog.attr("id",classPrefix+"image-dialog-"+guid),!settings.imageUpload)return
var fileInput=dialog.find('[name="'+classPrefix+'image-file"]')
fileInput.bind("change",function(){var fileName=fileInput.val(),isImage=new RegExp("(\\.("+settings.imageFormats.join("|")+"))$")
if(""===fileName)return alert(imageLang.uploadFileEmpty),!1
if(!isImage.test(fileName))return alert(imageLang.formatNotAllowed+settings.imageFormats.join(", ")),!1
loading(!0)
var submitHandler=function(){var uploadIframe=document.getElementById(iframeName)
uploadIframe.onload=function(){loading(!1)
var body=(uploadIframe.contentWindow?uploadIframe.contentWindow:uploadIframe.contentDocument).document.body,json=body.innerText?body.innerText:body.textContent?body.textContent:null
return json=void 0!==JSON.parse?JSON.parse(json):eval("("+json+")"),settings.crossDomainUpload||(1===json.success?dialog.find("[data-url]").val(json.url):alert(json.message)),!1}}
dialog.find('[type="submit"]').bind("click",submitHandler).trigger("click")})}dialog=editor.find("."+dialogName),dialog.find('[type="text"]').val(""),dialog.find('[type="file"]').val(""),dialog.find("[data-link]").val("http://"),this.dialogShowMask(dialog),this.dialogLockScreen(),dialog.show()}}
factory(window.editormd)})()
