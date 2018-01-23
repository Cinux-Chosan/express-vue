<template>
  <textarea name="" id="content" class="form-control" cols="30" rows="10" v-model="content"></textarea>
</template>


<script>
  import {
    check
  } from "@/libs/util";

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
    data: () => {
      return {
        content: ''
      }
    },
    created() {
      this.initEditor();
    },
    methods: {
      async initEditor() {
        await check(() => window.KindEditor);
        this.editor = window.KindEditor.create('#content');
        this.$emit('editorCreated', this.editor);
      }
    }
  }
</script>

<style>

</style>
