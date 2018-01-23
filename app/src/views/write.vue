<template>
  <div class="container-fluid">
    <div class="col-sm-offset-2 col-sm-8">
      <form>
        <div class="form-group clearfix">
          <bs-dropdown txt="选择编辑器" class="fr">
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{path: 'write', query: { md: 1}}"> markdown </router-link>
              </li>
              <li role="separator" class="divider"></li>
              <li>
                <router-link :to="{path: 'write', query: { md: ''}}"> kindEditor </router-link>
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
          <mavon-editor ref="mavonEditor" v-if="this.$route.query.md"></mavon-editor>
          <kind-editor @editorCreated="kindEditorCreated" v-else></kind-editor>
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
  
  export default {
    name: "write",
    data: function() {
      return {
        title: "",
        content: "",
        post_id: ""
      };
    },
    components: {
      mavonEditor,
      kindEditor,
      bsDropdown
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
          content = this.editor.html();
          return {
            content,
            type: "html"
          };
        }
      }
    },
    methods: {
      submit() {
        let editorContent = this.editorContent;
        let data = { ...this.$data,
          ...editorContent
        };
        let context = this;
        this.axios.post("/api/post", data).then(r => {
          context.$data.post_id = r.data.data.id;
        });
      },
      kindEditorCreated(editor) {
        this.editor = editor;
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
