KindEditor.plugin("fixtoolbar",function(o){function i(){var i=o(".ke-toolbar"),s=i.pos().y
o(window).bind("scroll",function(){"fixed"==i.css("position")?document.body.scrollTop-s<0&&(i.css("position","static"),i.css("top","auto")):i.pos().y-document.body.scrollTop<0&&(i.css("position","fixed"),i.css("top",0))})}this.fixToolBar&&(this.isCreated?i():this.afterCreate(i))})
