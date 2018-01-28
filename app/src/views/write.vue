<template>
  <div class="container-fluid">
    <div class="col-sm-offset-2 col-sm-8">
      <form>
        <div class="form-group clearfix">
          <bs-dropdown txt="选择编辑器" class="fr">
            <li>
              <router-link :to="{path: 'write', query: { md: 1, id: $route.query.id}}"> markdown </router-link>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <router-link :to="{path: 'write', query: { md: '', id: $route.query.id}}"> kindEditor </router-link>
            </li>
          </bs-dropdown>
        </div>
        <div class="form-group">
          <label for="title">文章标题</label>
          <input type="email" class="form-control" id="title" placeholder="title" v-model="title">
        </div>
        <div class="form-group">
          <label for="content"></label>
          <mavon-editor ref="mavonEditor" v-if="this.$route.query.md" :value="content"></mavon-editor>
          <kind-editor @editorCreated="kindEditorCreated" :value="content" v-else></kind-editor>
        </div>
      </form>
      <div class="form-group">
        <bs-dropdown txt="选择编辑器" class="fl">
          <template v-if="categories && categories.length">
              <li v-for="cate in categories" :key="cate.id">
                <a href="" ></a>
              </li>
          </template>
          <li v-else> <a>暂时还没有分类</a> </li>
          <li role="separator" class="divider"></li>
          <li @click="addCategory" class="pointer"><a>添加分类</a></li>
        </bs-dropdown>
        <button class="btn btn-default fr" @click="submit"> 提交 </button>
      </div>
    </div>
  </div>
</template>

<script>
  import mavonEditor from "@/components/editor-md";
  import kindEditor from "@/components/kindeditor";
  import bsDropdown from "@/components/bs-dropdown";
  import {
    tip
  } from "@/libs/util";

  export default {
    name: "write",
    data: function() {
      return {
        title: "",
        content: "",
        post_id: "",
        type: "",
        categories: []
      };
    },
    components: {
      mavonEditor,
      kindEditor,
      bsDropdown
    },
    created() {
      if (this.$route.query.id) {
        this.getPost(this.$route.query.id);
      }
      this.getCategories();
    },
    computed: {
      editorContent() {
        let content = "";
        if (this.$route.query.md) {
          content = this.$refs.mavonEditor.content;
          return {
            content,
            type: "md"
          };
        } else {
          content = this.kindEditor.html();
          return {
            content,
            type: "html"
          };
        }
      }
    },
    methods: {
      async getPost(id) {
        let r = await this.axios.get(`/post?id=${id}`);
        if (r.data.state) {
          let data = r.data.data;
          this.title = data.title;
          this.content = data.content;
          this.post_id = id;
          this.$route.query.md = data.type === 'md' ? 1 : '';
        }
      },
      async getCategories() {
        let r = await this.axios.get('/post');
        if (r.state) {
          this.data = r.data.data;
        }
      },
      submit() {
        let editorContent = this.editorContent;
        let data = { ...this.$data, ...editorContent };
        let context = this;
        this.axios.post("/post", data).then(r => {
          context.$data.post_id = r.data.data.id;
          if (r.data.state) {
            tip('保存成功!');
          }
        });
      },
      addCategory() {

      },
      kindEditorCreated(editor) {
        this.kindEditor = editor;
      }
    }
  };
</script>

<style>
  form {
    /* min-width: 650px; */
  }

  #content {
    min-height: 400px;
  }
</style>
