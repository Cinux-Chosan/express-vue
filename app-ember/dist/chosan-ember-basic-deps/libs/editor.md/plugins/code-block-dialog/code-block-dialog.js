(function(){var e=function(e){var t,o=e.codeLanguages={asp:["ASP","vbscript"],actionscript:["ActionScript(3.0)/Flash/Flex","clike"],bash:["Bash/Bat","shell"],css:["CSS","css"],c:["C","clike"],cpp:["C++","clike"],csharp:["C#","clike"],coffeescript:["CoffeeScript","coffeescript"],d:["D","d"],dart:["Dart","dart"],delphi:["Delphi/Pascal","pascal"],erlang:["Erlang","erlang"],go:["Golang","go"],groovy:["Groovy","groovy"],html:["HTML","text/html"],java:["Java","clike"],json:["JSON","text/json"],javascript:["Javascript","javascript"],lua:["Lua","lua"],less:["LESS","css"],markdown:["Markdown","gfm"],"objective-c":["Objective-C","clike"],php:["PHP","php"],perl:["Perl","perl"],python:["Python","python"],r:["R","r"],rst:["reStructedText","rst"],ruby:["Ruby","ruby"],sql:["SQL","sql"],sass:["SASS/SCSS","sass"],shell:["Shell","shell"],scala:["Scala","clike"],swift:["Swift","clike"],vb:["VB/VBScript","vb"],xml:["XML","text/xml"],yaml:["YAML","yaml"]}
e.fn.codeBlockDialog=function(){var i,a=this.cm,l=this.lang,r=this.editor,n=this.settings,c=a.getCursor(),s=a.getSelection(),d=this.classPrefix,h=d+"code-block-dialog",f=l.dialog.codeBlock
if(a.focus(),r.find("."+h).length>0)(i=r.find("."+h)).find("option:first").attr("selected","selected"),i.find("textarea").val(s),this.dialogShowMask(i),this.dialogLockScreen(),i.show()
else{var p='<div class="'+d+'code-toolbar">'+f.selectLabel+'<select><option selected="selected" value="">'+f.selectDefaultText+'</option></select></div><textarea placeholder="coding now...." style="display:none;">'+s+"</textarea>"
i=this.createDialog({name:h,title:f.title,width:780,height:565,mask:n.dialogShowMask,drag:n.dialogDraggable,content:p,lockScreen:n.dialogLockScreen,maskStyle:{opacity:n.dialogMaskOpacity,backgroundColor:n.dialogMaskBgColor},buttons:{enter:[l.buttons.enter,function(){var e=this.find("textarea").val(),t=this.find("select").val()
return""===t?(alert(l.dialog.codeBlock.unselectedLanguageAlert),!1):""===e?(alert(l.dialog.codeBlock.codeEmptyAlert),!1):(t="other"===t?"":t,a.replaceSelection(["```"+t,e,"```"].join("\n")),""===t&&a.setCursor(c.line,c.ch+3),this.hide().lockScreen(!1).hideMask(),!1)}],cancel:[l.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),!1}]}})}var g=i.find("select")
if(1===g.find("option").length){for(var u in o){var S=o[u]
g.append('<option value="'+u+'" mode="'+S[1]+'">'+S[0]+"</option>")}g.append('<option value="other">'+f.otherLanguage+"</option>")}var v=g.find("option:selected").attr("mode"),m={mode:v||"text/html",theme:n.theme,tabSize:4,autofocus:!0,autoCloseTags:!0,indentUnit:4,lineNumbers:!0,lineWrapping:!0,extraKeys:{"Ctrl-Q":function(e){e.foldCode(e.getCursor())}},foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],matchBrackets:!0,indentWithTabs:!0,styleActiveLine:!0,styleSelectedText:!0,autoCloseBrackets:!0,showTrailingSpace:!0,highlightSelectionMatches:!0},k=i.find("textarea")
i.find(".CodeMirror")
i.find(".CodeMirror").length<1?(t=e.$CodeMirror.fromTextArea(k[0],m),i.find(".CodeMirror").css({float:"none",margin:"8px 0",border:"1px solid #ddd",fontSize:n.fontSize,width:"100%",height:"390px"}),t.on("change",function(e){k.val(e.getValue())})):t.setValue(a.getSelection()),g.change(function(){var e=$(this).find("option:selected").attr("mode")
t.setOption("mode",e)})}}
"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=e:"function"==typeof define?define.amd?define(["editormd"],function(t){e(t)}):define(function(t){var o=t("./../../editormd")
e(o)}):e(window.editormd)})()