(function(){var e=function(e){var t=jQuery,o={"zh-cn":{toolbar:{"goto-line":"跳转到行"},dialog:{"goto-line":{title:"跳转到行",label:"请输入行号",error:"错误："}}},"zh-tw":{toolbar:{"goto-line":"跳轉到行"},dialog:{"goto-line":{title:"跳轉到行",label:"請輸入行號",error:"錯誤："}}},en:{toolbar:{"goto-line":"Goto line"},dialog:{"goto-line":{title:"Goto line",label:"Enter a line number, range ",error:"Error: "}}}}
e.fn.gotoLineDialog=function(){var e,i=this,n=this.cm,l=this.editor,a=this.settings,r=(a.pluginPath,this.classPrefix+"goto-line-dialog")
t.extend(!0,this.lang,o[this.lang.name]),this.setToolbar()
var d=this.lang,s=d.dialog["goto-line"],g=n.lineCount()
if(s.error+=s.label+" 1-"+g,l.find("."+r).length<1){var c=['<div class="editormd-form" style="padding: 10px 0;">','<p style="margin: 0;">'+s.label+" 1-"+g+'&nbsp;&nbsp;&nbsp;<input type="number" class="number-input" style="width: 60px;" value="1" max="'+g+'" min="1" data-line-number /></p>',"</div>"].join("\n")
e=this.createDialog({name:r,title:s.title,width:400,height:180,mask:a.dialogShowMask,drag:a.dialogDraggable,content:c,lockScreen:a.dialogLockScreen,maskStyle:{opacity:a.dialogMaskOpacity,backgroundColor:a.dialogMaskBgColor},buttons:{enter:[d.buttons.enter,function(){var e=parseInt(this.find("[data-line-number]").val())
return e<1||e>g?(alert(s.error),!1):(i.gotoLine(e),this.hide().lockScreen(!1).hideMask(),!1)}],cancel:[d.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),!1}]}})}e=l.find("."+r),this.dialogShowMask(e),this.dialogLockScreen(),e.show()}}
"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=e:"function"==typeof define?define.amd?define(["editormd"],function(t){e(t)}):define(function(t){var o=t("./../../editormd")
e(o)}):e(window.editormd)})()
