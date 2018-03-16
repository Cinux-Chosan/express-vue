<template>
  <div id="editor-md">
    <mavon-editor style="height: 100%" v-model="content"></mavon-editor>
  </div>
</template>

<script>
  import 'mavon-editor/dist/css/index.css'

  var mavonEditor = require('mavon-editor')
  export default {
    name: 'editor-md',
    props: ['value'],
    data: () => {
      return {
        strContent: ''
      }
    },
    computed: {
      content:  {
        get() {
          return this.strContent || this.value;
        },
        set(value) { this.strContent = value; }
      }
    },
    components: {
      'mavon-editor': mavonEditor.mavonEditor
    }
  }
</script>

<style>
  #editor-md {
    margin: auto;
    width: 100%;
    height: 580px;
  }
</style>
