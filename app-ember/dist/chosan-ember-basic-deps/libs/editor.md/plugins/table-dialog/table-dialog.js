(function(){var e=function(e){var a=jQuery,l={"zh-cn":{toolbar:{table:"表格"},dialog:{table:{title:"添加表格",cellsLabel:"单元格数",alignLabel:"对齐方式",rows:"行数",cols:"列数",aligns:["默认","左对齐","居中对齐","右对齐"]}}},"zh-tw":{toolbar:{table:"添加表格"},dialog:{table:{title:"添加表格",cellsLabel:"單元格數",alignLabel:"對齊方式",rows:"行數",cols:"列數",aligns:["默認","左對齊","居中對齊","右對齊"]}}},en:{toolbar:{table:"Tables"},dialog:{table:{title:"Tables",cellsLabel:"Cells",alignLabel:"Align",rows:"Rows",cols:"Cols",aligns:["Default","Left align","Center align","Right align"]}}}}
e.fn.tableDialog=function(){var e,t=this.cm,i=this.editor,n=this.settings,o=(n.path,this.classPrefix+"table-dialog")
a.extend(!0,this.lang,l[this.lang.name]),this.setToolbar()
var s=this.lang,r=s.dialog.table,d=['<div class="editormd-form" style="padding: 13px 0;">',"<label>"+r.cellsLabel+"</label>",r.rows+' <input type="number" value="3" class="number-input" style="width:40px;" max="100" min="2" data-rows />&nbsp;&nbsp;',r.cols+' <input type="number" value="2" class="number-input" style="width:40px;" max="100" min="1" data-cols /><br/>',"<label>"+r.alignLabel+"</label>",'<div class="fa-btns"></div>',"</div>"].join("\n")
i.find("."+o).length>0?(e=i.find("."+o),this.dialogShowMask(e),this.dialogLockScreen(),e.show()):e=this.createDialog({name:o,title:r.title,width:360,height:226,mask:n.dialogShowMask,drag:n.dialogDraggable,content:d,lockScreen:n.dialogLockScreen,maskStyle:{opacity:n.dialogMaskOpacity,backgroundColor:n.dialogMaskBgColor},buttons:{enter:[s.buttons.enter,function(){var e=parseInt(this.find("[data-rows]").val()),a=parseInt(this.find("[data-cols]").val()),l=this.find('[name="table-align"]:checked').val(),i="",n="------------",o={_default:n,left:":"+n,center:":"+n+":",right:n+":"}
if(e>1&&a>0)for(var s=0,r=e;s<r;s++){for(var d=[],c=[],g=0,b=a;g<b;g++)1===s&&c.push(o[l]),d.push(" ")
1===s&&(i+="| "+c.join(" | ")+" |\n"),i+="| "+d.join(1===a?"":" | ")+" |\n"}return t.replaceSelection(i),this.hide().lockScreen(!1).hideMask(),!1}],cancel:[s.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),!1}]}})
var c=e.find(".fa-btns")
if(""===c.html())for(var g=["align-justify","align-left","align-center","align-right"],b=r.aligns,f=["_default","left","center","right"],h=0,u=g.length;h<u;h++){var p=0===h?' checked="checked"':"",m='<a href="javascript:;"><label for="editormd-table-dialog-radio'+h+'" title="'+b[h]+'">'
m+='<input type="radio" name="table-align" id="editormd-table-dialog-radio'+h+'" value="'+f[h]+'"'+p+" />&nbsp;",m+='<i class="fa fa-'+g[h]+'"></i>',m+="</label></a>",c.append(m)}}}
"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=e:"function"==typeof define?define.amd?define(["editormd"],function(a){e(a)}):define(function(a){var l=a("./../../editormd")
e(l)}):e(window.editormd)})()
