<template>
  <div class="container-fluid">
    <div class="col-sm-10 col-sm-offset-1">
      <content-block class="page-main">
        <h1 class="title">{{title}}</h1>
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
    check
  } from "@/libs/util";
  import contentBlock from '@/components/content-block';
  
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
        let r = await this.axios.get(`/api/post?id=${this.$route.params.id}`);
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
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5)!important;
  }
  .comments{
    min-height: 300px;
    // box-shadow: 10px -10px 10px rgba(0, 0, 0, 0.5)!important;
  }
  .title {
    border-bottom: 1px solid #ccc;
  }
  
  article {
    margin: 10px 10px 30px 60px;
  }
</style>

