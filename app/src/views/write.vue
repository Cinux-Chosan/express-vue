<template>
  <div class="container-fluid">
    <div class="col-sm-offset-2 col-sm-8">
      <form>
        <div class="form-group">
          <label for="title">文章标题</label>
          <input type="email" class="form-control" id="title" placeholder="title">
        </div>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data: function() {
      return {
        msg: '这里是首页',
        posts: []
      };
    },
    created() {
      this.getPosts();
    },
    methods: {
      getPosts() {
        this.axios.get('/api/posts').then(r => {
          this.posts = r.data.data;
        });
      }
    }
  };
</script>

<style>

</style>
