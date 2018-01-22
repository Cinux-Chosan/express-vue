<template>
  <div class="container-fluid">
    <div class="col-sm-offset-1 col-sm-6">
      <h1>推荐文章</h1>
      <div>
        推荐
      </div>
      <h1>
        最新文章
      </h1>
      <div>
        <ul>
          <li class="post-item" v-for="item in posts" :key="item._id">
            {{item.title}} {{item.content}} {{item.data}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-sm-4 ">
      right
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
      }
    },
    created() {
      this.getPosts()
    },
    methods: {
      getPosts() {
        this.axios.get('/api/posts').then(r => {
          this.posts = r.data.data;
        })
      }
    }
  }
</script>

<style lang="scss">
  .post-item{
    &::before{
      content: '《';
    }
    &::after{
      content: '》';
    }
  }
</style>
