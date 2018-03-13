<template>
  <div class="content-block">
    <div class="clearfix block-header">
      <h1 class="title fl">{{title}}</h1>
      <div class="operations">
        <slot name="rightHeader"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['title']
  };
</script>

<style lang="scss" scoped>
  .content-block {
    box-shadow: 10px 10px 10px #ccc;
    background: #e1edeb;
    padding: 20px;
    margin-bottom: 40px;
  }

  .block-header {
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .operations {
    align-self: stretch;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  h1.title{
    font-size: 30px;
    margin-bottom: 15px;
  }
</style>
