(function(){var i=function(i){var e=jQuery,t=0,o=[],a=[],l="editormd-logo",s=[l,l+"-1x",l+"-2x",l+"-3x",l+"-4x",l+"-5x",l+"-6x",l+"-7x",l+"-8x"],n={"zh-cn":{toolbar:{emoji:"Emoji 表情"},dialog:{emoji:{title:"Emoji 表情"}}},"zh-tw":{toolbar:{emoji:"Emoji 表情"},dialog:{emoji:{title:"Emoji 表情"}}},en:{toolbar:{emoji:"Emoji"},dialog:{emoji:{title:"Emoji"}}}}
i.fn.emojiDialog=function(){var r=this.cm,d=this.settings
if(d.emoji){var c=d.pluginPath+"emoji-dialog/",m=this.editor,h=(r.getCursor(),r.getSelection(),this.classPrefix)
e.extend(!0,this.lang,n[this.lang.name]),this.setToolbar()
var f,g=this.lang,j=h+"emoji-dialog",u=g.dialog.emoji,v=['<div class="'+h+'emoji-dialog-box" style="width: 760px;height: 334px;margin-bottom: 8px;overflow: hidden;">','<div class="'+h+'tab"></div>',"</div>"].join("\n")
r.focus(),m.find("."+j).length>0?(f=m.find("."+j),a=[],f.find("a").removeClass("selected"),this.dialogShowMask(f),this.dialogLockScreen(),f.show()):f=this.createDialog({name:j,title:u.title,width:800,height:475,mask:d.dialogShowMask,drag:d.dialogDraggable,content:v,lockScreen:d.dialogLockScreen,maskStyle:{opacity:d.dialogMaskOpacity,backgroundColor:d.dialogMaskBgColor},buttons:{enter:[g.buttons.enter,function(){return r.replaceSelection(a.join(" ")),this.hide().lockScreen(!1).hideMask(),!1}],cancel:[g.buttons.cancel,function(){return this.hide().lockScreen(!1).hideMask(),!1}]}})
var p=["Github emoji","Twemoji","Font awesome","Editor.md logo"],b=f.find("."+h+"tab")
if(""===b.html()){for(var w='<ul class="'+h+'tab-head">',x=0;x<4;x++){w+="<li"+(0===x?' class="active"':"")+'><a href="javascript:;">'+p[x]+"</a></li>"}w+="</ul>",b.append(w)
for(var k='<div class="'+h+'tab-container">',y=0;y<4;y++){k+='<div class="'+h+'tab-box" style="height: 260px;overflow: hidden;overflow-y: auto;'+(0===y?"":"display:none;")+'"></div>'}k+="</div>",b.append(k)}var S=b.find("."+h+"tab-box"),C=["github-emoji","twemoji","font-awesome",l],E=function(){var l=C[t],s=o[l],n=S.eq(t)
if(""===n.html()){var r=function(t,o){for(var a="editormd-logo"===o?"5":20,l=Math.ceil(t.length/a),s='<div class="'+h+'grid-table">',n=0;n<l;n++){for(var r='<div class="'+h+'grid-table-row">',d=0;d<a;d++){var c=e.trim(t[n*a+d])
if(void 0!==c&&""!==c){if("github-emoji"===o){var m="+1"===c?"plus1":c
m="moon"===(m="black_large_square"===m?"black_square":m)?"waxing_gibbous_moon":m,m=i.emoji.path+m+i.emoji.ext,r+='<a href="javascript:;" value=":'+c+':" title=":'+c+':" class="'+h+'emoji-btn">'+('<img src="'+m+'" width="24" class="emoji" title="&#58;'+c+'&#58;" alt="&#58;'+c+'&#58;" />')+"</a>"}else if("twemoji"===o){var f=i.twemoji.path+c+i.twemoji.ext
r+='<a href="javascript:;" value=":tw-'+c+':" title=":tw-'+c+':" class="'+h+'emoji-btn">'+('<img src="'+f+'" width="24" title="twemoji-'+c+'" alt="twemoji-'+c+'" class="emoji twemoji" />')+"</a>"}else"font-awesome"===o?r+='<a href="javascript:;" value=":fa-'+c+':" title=":fa-'+c+':" class="'+h+'emoji-btn">'+('<i class="fa fa-'+c+' fa-emoji" title="'+c+'"></i>')+"</a>":"editormd-logo"===o&&(r+='<a href="javascript:;" value=":'+c+':" title=":'+c+':" style="width:20%;" class="'+h+'emoji-btn">'+('<i class="'+c+'" title="Editor.md logo ('+c+')"></i>')+"</a>")}else r+='<a href="javascript:;" value=""></a>'}s+=r+="</div>"}return s+="</div>"}
if(0===t)for(var d=0,c=s.length;d<c;d++){var m=0===d?' style="margin: 0 0 10px;"':' style="margin: 10px 0;"'
n.append("<h4"+m+">"+s[d].category+"</h4>"),n.append(r(s[d].list,l))}else n.append(r(s,l))
n.find("."+h+"emoji-btn").bind(i.mouseOrTouch("click","touchend"),function(){e(this).toggleClass("selected"),e(this).hasClass("selected")&&a.push(e(this).attr("value"))})}}
o.length<1?("function"==typeof f.loading&&f.loading(!0),e.getJSON(c+"emoji.json?temp="+Math.random(),function(i){"function"==typeof f.loading&&f.loading(!1),(o=i)[l]=s,E()})):E(),b.find("li").bind(i.mouseOrTouch("click","touchend"),function(){var i=e(this)
t=i.index(),i.addClass("active").siblings().removeClass("active"),S.eq(t).show().siblings().hide(),E()})}else alert("settings.emoji == false")}}
"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=i:"function"==typeof define?define.amd?define(["editormd"],function(e){i(e)}):define(function(e){var t=e("./../../editormd")
i(t)}):i(window.editormd)})()