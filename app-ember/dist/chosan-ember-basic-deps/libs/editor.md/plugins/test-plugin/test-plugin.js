(function(){var e=function(e){jQuery
e.testPlugin=function(){alert("testPlugin")},e.fn.testPluginMethodA=function(){alert("testPluginMethodA")}}
"function"==typeof require&&"object"==typeof exports&&"object"==typeof module?module.exports=e:"function"==typeof define?define.amd?define(["editormd"],function(t){e(t)}):define(function(t){var n=t("./../../editormd")
e(n)}):e(window.editormd)})()
