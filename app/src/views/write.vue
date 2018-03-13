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
        <bs-dropdown :txt="cateName || '选择分类'" class="fl cate-picker-dropdown">
            <li>
              <categories-tree @itemClick="pickCategory"></categories-tree>
            </li>
          <!-- <li v-else> <a>暂时还没有分类</a> </li> -->
          <!-- <li role="separator" class="divider"></li> -->
          <!-- <li @click="addCategory" class="pointer"><a>添加分类</a></li> -->
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
  import categoriesTree from '@/components/categories-tree';
  import { tip, getJson } from "@/libs/util";

  export default {
    name: "write",
    data: function() {
      return {
        title: "",
        content: "",
        post_id: "",
        type: "",
        categories: [],
        cateNodes: '',
        cateName: ''
      };
    },
    components: {
      mavonEditor,
      kindEditor,
      bsDropdown,
      categoriesTree
    },
    created() {
      if (this.$route.query.id) {
        this.getPost(this.$route.query.id);
      }
      // this.getCategories();
    },
    computed: {
      editorContent() {
        let content = "";
        if (this.$route.query.md) {
          content = this.$refs.mavonEditor.content;
          debugger
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
        let r = await getJson(`/post?id=${id}`);
        if (r.state) {
          let data = r.data;
          this.title = data.title;
          this.content = data.content;
          this.post_id = id;
          this.$route.query.md = data.type === 'md' ? 1 : '';
        }
      },
      async getCategories() {
        let r = await getJson('/categories');
        if (r.state) {
          this.categories = r.data;
        }
      },
      submit() {
        let editorContent = this.editorContent;
        let data = { ...this.$data, ...editorContent };
        let context = this;
        getJson("/post", data, 'post').then(r => {
          context.$data.post_id = r.data.id;
          if (r.state) {
            tip('保存成功!');
          }
        });
      },
      addCategory() {

      },
      kindEditorCreated(editor) {
        this.kindEditor = editor;
      },
      pickCategory(node) {
        this.cateNodes = node.allParents;
        this.cateName = node.name;
        $('.cate-picker-dropdown').removeClass('open');
      }
    }
  };
</script>

<style>
  #content {
    min-height: 400px;
  }
</style>
