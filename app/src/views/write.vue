<template>
  <div class="container-fluid">
    <div class="col-sm-offset-2 col-sm-8">
      <form>
        <div class="form-group">
          <label for="title">文章标题</label>
          <input type="email" class="form-control" id="title" placeholder="title">
        </div>
        <div class="form-group">
          <label for="content"></label>
          <textarea name="" id="content" class="form-control" cols="30" rows="10"></textarea></div>
      </form>
    </div>
  </div>
</template>

<script>
import { check } from '@/libs/util';

export default {
  name: 'write',
  data: function() {
    return {
      msg: '这里是首页',
      posts: []
    };
  },
  async beforeRouteEnter(to, from, next) {
    let editorScript = document.createElement('script');
    let langScript = document.createElement('script');
    editorScript.src = '/editor/kindeditor-all-min.js';
    langScript.src = '/editor/lang/zh-CN.js';
    document.body.appendChild(editorScript);
    await check(() => window.KindEditor)
    document.body.appendChild(langScript);
    next();
  },
  created() {
    this.getPosts();
    this.initEditor();
  },
  methods: {
    getPosts() {
      this.axios.get('/api/posts').then(r => {
        this.posts = r.data.data;
      });
    },
    async initEditor() {
      await check(() => window.KindEditor);
      this.editor = window.KindEditor.create('#content');
    }
  }
};
</script>

<style>
form{
  min-width: 650px;
}
#content {
  min-height: 400px;
}

</style>
