KindEditor.plugin("autoheight",function(e){var t,i=this
i.autoHeightMode&&(i.isCreated?r():i.afterCreate(r))
function o(){var o=i.edit,r=o.doc.body
o.iframe.height(t),i.resize(null,Math.max((e.IE?r.scrollHeight:r.offsetHeight)+76,t))}function r(){var r,a
t=e.removeUnit(i.height),i.edit.afterChange(o),r=i.edit,a=r.doc.body,r.iframe[0].scroll="no",a.style.overflowY="hidden",o()}})
