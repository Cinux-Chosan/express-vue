<template>
  <div class="container-fluid">
    <div class="col-sm-10 col-sm-offset-1">
      <content-block class="page-main" :title="title">
          <router-link slot="rightHeader" :to="{path: '/write', query: { id: this.$route.params.id }}" class="self-flex-start"><i class="iconfont icon-edit"></i></router-link>
        <article v-html="content">
        </article>
      </content-block>
      <content-block class="comments" >

      </content-block>
    </div>
  </div>
</template>

<script>
  import {
    load,
    check
  } from "@/libs/util";
  import contentBlock from "@/components/content-block";

  var MarkdownIt = require("markdown-it");

  export default {
    name: "post",
    data: function() {
      return {
        title: "",
        content: ""
      };
    },
    created() {
      this.getPost();
    },
    components: {
      contentBlock
    },
    methods: {
      async getPost() {
        let r = await this.axios.get(`/post?id=${this.$route.params.id}`);
        if (r.data.state) {
          let data = r.data.data;
          this.title = data.title;
          this.content = data.content;
          if (data.type === "md") {
            this.content = new MarkdownIt().render(this.content);
          }
          load("//cdn.bootcss.com/prettify/r298/prettify.min.css");
          load("//cdn.bootcss.com/prettify/r298/prettify.min.js");
          await check(() => window.prettyPrint);
          $("article pre").addClass("prettyprint linenums");
          window.prettyPrint();
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

  article {
    margin: 10px 10px 30px 60px;
  }
</style>

