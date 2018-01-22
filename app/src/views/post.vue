<template>
  <div class="container-fluid">
    <div class="col-sm-10 col-sm-offset-1 page-main">
      <h1>{{title}}</h1>
      <article v-html="content">
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post',
  data: function() {
    return {
      title: '',
      content: ''
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      let r = await this.axios.get(`/api/post?id=${this.$route.params.id}`);
      if (r.data.state) {
        this.title = r.data.data.title;
        this.content = r.data.data.content;
      }
    }
  }
};
</script>

<style lang="scss">
.page-main {
  min-height: 300px;
  background: #e1edeb;
  margin-top: 25px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}
article {
  margin: 10px;
  margin-left: 60px;
}
</style>
