<template>
  <div class="container-fluid">
    <div class="col-sm-offset-1 col-sm-6">
      <content-block title="推荐文章">
        <slot name="rightHeader">
        </slot>
        <div>
          <ul v-if="recommends.length">
            <li class="post-item"></li>
          </ul>
          <span v-else class="f22 sorry">暂时还没有推荐文章</span>
        </div>
      </content-block>
      <content-block title="最新文章">
        <span slot="rightHeader" class="self-flex-end">共{{posts.length}}条</span>
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
      <!-- right -->
    </div>
  </div>
</template>

<script>
  import { getJson } from '@/libs/util';
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
      let cate = this.$route.query.cate;
      if (cate) {
        this.getCate(cate);
      } else {
        this.getPosts();
      }
    },
    watch: {
      "$route.query.cate"(curVal) {
        curVal ? this.getCate(curVal) : this.getPosts();
      } 
    },
    methods: {
      async getPosts() {
        let r = await getJson("/posts")
        if (r.state) {
          this.posts = r.data;
        }
      },
      async getCate(cate) {
        let r = await getJson("/catePosts", { cate });
        if (r.state) {
          this.posts = r.data;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .sorry {
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
