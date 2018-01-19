<template>
  <div class="container-fluid">
    <div class="col-sm-offset-2 col-sm-8">
      <form>
        <div class="form-group">
          <label for="title">文章标题</label>
          <input type="email" class="form-control" id="title" placeholder="title" v-model="title">
        </div>
        <div class="form-group">
          <label for="content"></label>
          <textarea name="" id="content" class="form-control" cols="30" rows="10" v-model="content"></textarea>
        </div>
      </form>
      <button class="btn btn-default" @click="submit"> 提交 </button>
    </div>
  </div>
</template>

<script>
  import {
    check
  } from "@/libs/util";

  export default {
    name: "write",
    data: function() {
      return {
        title: '',
        content: '',
      };
    },
    async beforeRouteEnter(to, from, next) {
      let editorScript = document.createElement("script");
      let langScript = document.createElement("script");
      editorScript.src = "/editor/kindeditor-all-min.js";
      langScript.src = "/editor/lang/zh-CN.js";
      document.body.appendChild(editorScript);
      await check(() => window.KindEditor);
      document.body.appendChild(langScript);
      next();
    },
    created() {
      this.initEditor();
    },
    methods: {
      async initEditor() {
        await check(() => window.KindEditor);
        this.editor = window.KindEditor.create('#content');
      },
      submit() {
        let content = this.editor.html();
        let data = { ...this.$data, content};
        debugger
        this.axios.post('/api/post', {params: data}, {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }).then(r => {

        });
      }
    }
  };
</script>

<style>
  form {
    min-width: 650px;
  }

  #content {
    min-height: 400px;
  }
</style>
