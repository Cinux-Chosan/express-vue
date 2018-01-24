<template>
  <div id="editor-md">
    <mavon-editor style="height: 100%" v-model="value"></mavon-editor>
  </div>
</template>

<script>
  import 'mavon-editor/dist/css/index.css'

  var mavonEditor = require('mavon-editor')
  export default {
    name: 'editor-md',
    props: ['value'],
    data: () => {
      return {}
    },
    computed: {
      content() {
        return this.value;
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
