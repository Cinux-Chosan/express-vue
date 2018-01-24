<template>
  <div>
    <textarea name="" id="content" class="form-control" cols="30" rows="10"></textarea>
  </div>
</template>


<script>
  import { check } from "@/libs/util";

  export default {
    async beforeCreate() {
      let editorScript = document.createElement("script");
      let langScript = document.createElement("script");
      editorScript.src = "/editor/kindeditor-all-min.js";
      langScript.src = "/editor/lang/zh-CN.js";
      document.body.appendChild(editorScript);
      await check(() => window.KindEditor);
      document.body.appendChild(langScript);
    },
    props: ['value'],
    data: function() {
      return {}
    },
    created() {
      this.initEditor();
    },
    methods: {
      async initEditor() {
        await check(() => window.KindEditor);
        this.editor = window.KindEditor.create('#content', {width: '100%'});
        this.$emit('editorCreated', this.editor);
        await check(() => this.editor);
        this.editor.html(this.value);
      }
    }
  }
</script>

<style>

</style>
