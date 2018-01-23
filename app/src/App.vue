<template>
  <div id="app" class="h100p">
    <!-- <common-header></common-header> -->
    <div class="app-main">
      <common-sidebar class="hidden-xs" @toggle="toggleSidebar"></common-sidebar>
      <router-view :class="['post-main', 'col-xs-12', isShowSidebar ? 'with-sidebar' : '']" />
    </div>
    <!-- <common-footer></common-footer> -->
  </div>
</template>

<script>
  import commonHeader from '@/components/common-header';
  import commonSidebar from '@/components/common-sidebar';

  export default {
    name: 'App',
    data: function() {
      return {
        isShowSidebar: true
      }
    },
    components: {
      commonHeader,
      commonSidebar
    },
    methods: {
      toggleSidebar(isShow) {
        this.isShowSidebar = isShow;
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  html,
  body {
    height: 100%;
    background: #f5f5d5;
    font-size: 12px;
  }

  h1 {
    font-size: 3em;
    padding-bottom: 10px;
  }

  .h100p {
    height: 100%;
  }

  .fr {
    float: right;
  }

  .fl {
    float: left;
  }

  // 让 prettify 所有行都显示行号
  ol.linenums {
    li {
      list-style-type: decimal;
    }
  }
</style>

<style scoped lang="scss">
  .app-main {
    display: flex;
    min-height: 100%;
    position: relative;
  }

  .post-main {
    flex: 1;
    transition: all .2s;
    margin-left: 0;
    padding-top: 25px;
    &.with-sidebar {
      margin-left: 250px;
    }
  }
</style>
