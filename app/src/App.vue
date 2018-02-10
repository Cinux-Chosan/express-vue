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
  }

  .sorry{
    color: rgb(172, 108, 108);
    &::before{
      content: 'sorry，'
    }
  }

  .waiting{
    color: rgb(228, 170, 170);
    &::before{
      content: 'waiting，'
    }
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
    @media screen and (max-width: 768px){
      &.with-sidebar{
        margin-left: 0;
      }
    }
  }
</style>


<style>

  .h100p {
    height: 100%;
  }

  .fr {
    float: right;
  }

  .fl {
    float: left;
  }

  .f20{
    font-size: 20px;
  }

  .f22{
    font-size: 22px;
  }

  .f24{
    font-size: 24px;
  }

  .f26{
    font-size: 26px;
  }

  .f32{
    font-size: 32px;
  }

  .f34{
    font-size: 34px;
  }

  .f36{
    font-size: 36px;
  }

  .f40{
    font-size: 40px;
  }

  .fb{
    font-weight: bolder;
  }

  .mt30{
    margin-top: 30px;
  }

  .ml10{
    margin-left: 10px;
  }

  .mb0{
    margin-bottom: 0 !important;
  }

  .bg-fff{
    background: #fff;
  }
  .bg-000{
    background: #000;
  }
  .inline{
    display: inline;
  }
  .block{
    display: block;
  }
  .inline-block{
    display: inline-block;
  }

  .self-flex-start{
    align-self: flex-start;
  }

  .self-flex-end{
    align-self: flex-end;
  }

  .pointer{
    cursor: pointer;
  }
</style>
