<template>
  <div class="container-fluid">
    <div class="col-sm-offset-2 col-sm-8">
      <form>
        <div class="form-group clearfix">
          <bs-dropdown txt="选择编辑器" class="fr">
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{path: 'write', query: { md: 1, id: $route.query.id}}"> markdown </router-link>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <router-link :to="{path: 'write', query: { md: '', id: $route.query.id}}"> kindEditor </router-link>
              </li>
            </ul>
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
      <button class="btn btn-default fr" @click="submit"> 提交 </button>
    </div>
  </div>
</template>

<script>
  import mavonEditor from "@/components/editor-md";
  import kindEditor from "@/components/kindeditor";
  import bsDropdown from "@/components/bs-dropdown";
  import { tip } from "@/libs/util";

  export default {
    name: "write",
    data: function() {
      return {
        title: "",
        content: "",
        post_id: "",
        type: ""
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
    },
    computed: {
      editorContent() {
        let content = "";
        if (this.$route.query.md) {
          content = this.$refs.mavonEditor.content;
          return { content, type: "md" };
        } else {
          content = this.kindEditor.html();
          return { content, type: "html" };
        }
      }
    },
    methods: {
      async getPost(id) {
        let r = await this.axios.get(`/api/post?id=${id}`);
        if (r.data.state) {
          let data = r.data.data;
          this.title = data.title;
          this.content = data.content;
          this.post_id = id;
          this.$route.query.md = data.type === 'md' ? 1 : '';
        }
      },
      submit() {
        let editorContent = this.editorContent;
        let data = { ...this.$data,
          ...editorContent
        };
        let context = this;
        this.axios.post("/api/post", data).then(r => {
          context.$data.post_id = r.data.data.id;
          if (r.data.state) {
            tip('保存成功!');
          }
        });
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
