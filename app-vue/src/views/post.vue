<template>
  <div class="container-fluid">
    <div class="col-sm-10 col-sm-offset-1">
      <content-block class="page-main" :title="title">
        <router-link v-if="isLogged" slot="rightHeader" :to="{path: '/write', query: { id: this.$route.params.id }}" class="self-flex-start"><i class="iconfont icon-edit"></i></router-link>
        <article v-html="content">
        </article>
      </content-block>
      <content-block class="comments">

      </content-block>
    </div>
  </div>
</template>

<script>
  import {
    load,
    check,
    getJson
  } from "@/libs/util";
  import contentBlock from "@/components/content-block";

  // var MarkdownIt = require("markdown-it");
  import { markdown } from 'markdown';

  export default {
    name: "post",
    data: function() {
      return {
        title: "",
        content: "",
        isLogged: ""
      };
    },
    created() {
      this.getPost();
      this.getPermission();
    },
    components: {
      contentBlock
    },
    methods: {
      async getPost() {
        let r = await getJson(`/post?id=${this.$route.params.id}`);
        if (r.state) {
          let data = r.data;
          this.title = data.title;
          this.content = data.content;
          if (data.type === "md") {
            this.content = markdown.toHTML(this.content);
            // this.content = new MarkdownIt().render(this.content);
          }
          load("//cdn.bootcss.com/prettify/r298/prettify.min.css");
          load("//cdn.bootcss.com/prettify/r298/prettify.min.js");
          await check(() => window.prettyPrint);
          $("article pre, article code").addClass("prettyprint linenums");
          window.prettyPrint();
        }
      },
      async getPermission() {
        let r = await getJson('/login');
        if (r.state) {
          this.isLogged = r.data.isLogged;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .page-main {
    min-height: 300px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5) !important;
  }

  .comments {
    min-height: 300px;
    // box-shadow: 10px -10px 10px rgba(0, 0, 0, 0.5)!important;
  }

  .title {
    flex: 1;
  }

  .post-header {
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
  }

  .operations {
    align-self: flex-start;
    &>i {
      cursor: pointer;
    }
  }

  $xs-screen: 768px;
  article {
    margin: 10px 10px 30px 60px;
    overflow-wrap: break-word;
    overflow: hidden;
    line-height: 1.8;
    @media screen and (max-width: $xs-screen) {
      margin-left: 0;
    }
  }
</style>

<style lang="scss">
  article {
    img {
      max-width: 100%;
    }
    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6{
      line-height: 2;
    }
    .linenums{
      padding-left: 40px;
    }
    hr{ // 重新覆盖 ivew 对 bootstrap 的 markdown 样式的影响
      margin: 20px 0;
      border-top: 5px solid #eee;
    }
  }
</style>


