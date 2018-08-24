KindEditor.plugin("image",function(e){var t=this,a="image",i=e.undef(t.allowImageUpload,!0),l=e.undef(t.allowImageRemote,!0),n=e.undef(t.formatUploadUrl,!0),o=e.undef(t.allowFileManager,!1),d=e.undef(t.uploadJson,t.basePath+"php/upload_json.php"),r=e.undef(t.imageTabIndex,0),g=t.pluginsPath+"image/images/",s=e.undef(t.extraFileUploadParams,{}),u=e.undef(t.filePostName,"imgFile"),c=e.undef(t.fillDescAfterUploadImage,!1),m=t.lang("image.")
t.plugin.imageDialog=function(i){i.imageUrl,e.undef(i.imageWidth,""),e.undef(i.imageHeight,""),e.undef(i.imageTitle,""),e.undef(i.imageAlign,"")
var l=e.undef(i.showRemote,!0),r=e.undef(i.showLocal,!0),h=e.undef(i.tabIndex,0),p=i.clickFn,f="kindeditor_upload_iframe_"+(new Date).getTime(),v=[]
for(var b in s)v.push('<input type="hidden" name="'+b+'" value="'+s[b]+'" />')
var k,w=['<div style="padding:20px;">','<div class="tabs"></div>','<div class="tab1" style="display:none;">','<div class="ke-dialog-row">','<label for="remoteUrl" style="width:60px;">'+m.remoteUrl+"</label>",'<input type="text" id="remoteUrl" class="ke-input-text" name="url" value="" style="width:200px;" /> &nbsp;','<span class="ke-button-common ke-button-outer">','<input type="button" class="ke-button-common ke-button" name="viewServer" value="'+m.viewServer+'" />',"</span>","</div>",'<div class="ke-dialog-row">','<label for="remoteWidth" style="width:60px;">'+m.size+"</label>",m.width+' <input type="text" id="remoteWidth" class="ke-input-text ke-input-number" name="width" value="" maxlength="4" /> ',m.height+' <input type="text" class="ke-input-text ke-input-number" name="height" value="" maxlength="4" /> ','<img class="ke-refresh-btn" src="'+g+'refresh.png" width="16" height="16" alt="" style="cursor:pointer;" title="'+m.resetSize+'" />',"</div>",'<div class="ke-dialog-row">','<label style="width:60px;">'+m.align+"</label>",'<input type="radio" name="align" class="ke-inline-block" value="" checked="checked" /> <img name="defaultImg" src="'+g+'align_top.gif" width="23" height="25" alt="" />',' <input type="radio" name="align" class="ke-inline-block" value="left" /> <img name="leftImg" src="'+g+'align_left.gif" width="23" height="25" alt="" />',' <input type="radio" name="align" class="ke-inline-block" value="right" /> <img name="rightImg" src="'+g+'align_right.gif" width="23" height="25" alt="" />',"</div>",'<div class="ke-dialog-row">','<label for="remoteTitle" style="width:60px;">'+m.imgTitle+"</label>",'<input type="text" id="remoteTitle" class="ke-input-text" name="title" value="" style="width:200px;" />',"</div>","</div>",'<div class="tab2" style="display:none;">','<iframe name="'+f+'" style="display:none;"></iframe>','<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="'+f+'" action="'+e.addParam(d,"dir=image")+'">','<div class="ke-dialog-row">',v.join(""),'<label style="width:60px;">'+m.localUrl+"</label>",'<input type="text" name="localUrl" class="ke-input-text" tabindex="-1" style="width:200px;" readonly="true" /> &nbsp;','<input type="button" class="ke-upload-button" value="'+m.upload+'" />',"</div>","</form>","</div>","</div>"].join(""),y=r||o?450:400,x=r&&l?300:250,U=t.createDialog({name:a,width:y,height:x,title:t.lang(a),body:w,yesBtn:{name:t.lang("yes"),click:function(a){if(!U.isLoading){if(r&&l&&k&&1===k.selectedIndex||!l)return""==B.fileBox.val()?void alert(t.lang("pleaseSelectFile")):(U.showLoading(t.lang("uploadLoading")),B.submit(),void S.val(""))
var i=e.trim(T.val()),n=F.val(),o=L.val(),d=_.val(),g=""
return P.each(function(){if(this.checked)return g=this.value,!1}),"http://"==i||e.invalidUrl(i)?(alert(t.lang("invalidUrl")),void T[0].focus()):/^\d*$/.test(n)?/^\d*$/.test(o)?void p.call(t,i,d,n,o,0,g):(alert(t.lang("invalidHeight")),void L[0].focus()):(alert(t.lang("invalidWidth")),void F[0].focus())}}},beforeRemove:function(){D.unbind(),F.unbind(),L.unbind(),W.unbind()}}),I=U.div,T=e('[name="url"]',I),S=e('[name="localUrl"]',I),D=e('[name="viewServer"]',I),F=e('.tab1 [name="width"]',I),L=e('.tab1 [name="height"]',I),W=e(".ke-refresh-btn",I),_=e('.tab1 [name="title"]',I),P=e('.tab1 [name="align"]',I)
l&&r?((k=e.tabs({src:e(".tabs",I),afterSelect:function(e){}})).add({title:m.remoteImage,panel:e(".tab1",I)}),k.add({title:m.localImage,panel:e(".tab2",I)}),k.select(h)):l?e(".tab1",I).show():r&&e(".tab2",I).show()
var B=e.uploadbutton({button:e(".ke-upload-button",I)[0],fieldName:u,form:e(".ke-form",I),target:f,width:60,afterUpload:function(i){if(U.hideLoading(),0===i.error){var l=i.url
n&&(l=e.formatUrl(l,"absolute")),t.afterUpload&&t.afterUpload.call(t,l,i,a),c?(e(".ke-dialog-row #remoteUrl",I).val(l),e(".ke-tabs-li",I)[0].click(),e(".ke-refresh-btn",I).click()):p.call(t,l,i.title,i.width,i.height,i.border,i.align)}else alert(i.message)},afterError:function(e){U.hideLoading(),t.errorDialog(e)}})
B.fileBox.change(function(e){S.val(B.fileBox.val())}),o?D.click(function(a){t.loadPlugin("filemanager",function(){t.plugin.filemanagerDialog({viewType:"VIEW",dirName:"image",clickFn:function(a,i){t.dialogs.length>1&&(e('[name="url"]',I).val(a),t.afterSelectFile&&t.afterSelectFile.call(t,a),t.hideDialog())}})})}):D.hide()
var A=0,H=0
function R(e,t){F.val(e),L.val(t),A=e,H=t}return W.click(function(t){var a=e('<img src="'+T.val()+'" />',document).css({position:"absolute",visibility:"hidden",top:0,left:"-1000px"})
a.bind("load",function(){R(a.width(),a.height()),a.remove()}),e(document.body).append(a)}),F.change(function(e){A>0&&L.val(Math.round(H/A*parseInt(this.value,10)))}),L.change(function(e){H>0&&F.val(Math.round(A/H*parseInt(this.value,10)))}),T.val(i.imageUrl),R(i.imageWidth,i.imageHeight),_.val(i.imageTitle),P.each(function(){if(this.value===i.imageAlign)return this.checked=!0,!1}),l&&0===h&&(T[0].focus(),T[0].select()),U},t.plugin.image={edit:function(){var e=t.plugin.getSelectedImage()
t.plugin.imageDialog({imageUrl:e?e.attr("data-ke-src"):"http://",imageWidth:e?e.width():"",imageHeight:e?e.height():"",imageTitle:e?e.attr("title"):"",imageAlign:e?e.attr("align"):"",showRemote:l,showLocal:i,tabIndex:e?0:r,clickFn:function(a,i,l,n,o,d){e?(e.attr("src",a),e.attr("data-ke-src",a),e.attr("width",l),e.attr("height",n),e.attr("title",i),e.attr("align",d),e.attr("alt",i)):t.exec("insertimage",a,i,l,n,o,d),setTimeout(function(){t.hideDialog().focus()},0)}})},delete:function(){var e=t.plugin.getSelectedImage()
"a"==e.parent().name&&(e=e.parent()),e.remove(),t.addBookmark()}},t.clickToolbar(a,t.plugin.image.edit)})