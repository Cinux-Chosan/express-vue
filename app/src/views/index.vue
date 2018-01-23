<template>
  <div class="container-fluid">
    <div class="col-sm-offset-1 col-sm-6">
      <content-block>
      <h1 class="fb">推荐文章</h1>
      <div>
        <ul v-if="recommends.length">
          <li class="post-item"></li>
        </ul>
        <span v-else class="f22 sorry">暂时还没有推荐文章</span>
      </div>
      </content-block>
      <content-block>
      <h1 class="fb">
        最新文章
      </h1>
      <div>
        <ul v-if="posts.length">
          <li class="post-item" v-for="item in posts" :key="item._id">
            <router-link :to="'/post/' + item._id"><span class="post-title">{{item.title}}</span></router-link>
          </li>
        </ul>
        <span v-else class="f22 waiting">文章正在撰写中...</span>
      </div>
      </content-block>
    </div>
    <div class="col-sm-4 ">
      right
    </div>
  </div>
</template>

<script>
import contentBlock from '@/components/content-block';
export default {
  name: "index",
  data: function() {
    return {
      msg: "这里是首页",
      posts: [],
      recommends: []
    };
  },
  components: {
    contentBlock
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.axios.get("/api/posts").then(r => {
        this.posts = r.data.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>

.sorry{
  text-indent: 1em;
  display: inline-block;
}

.post-item {
  line-height: 1.8;
  .post-title {
    font-size: 1.5em;
    &::before {
      content: "《";
    }
    &::after {
      content: "》";
    }
  }
}
</style>
