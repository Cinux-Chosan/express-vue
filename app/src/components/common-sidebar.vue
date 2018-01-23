<template>
  <section class="sidebar">
    <div :class="[showSidebar ? 'show' : '', 'sidebar-main']">
      <span class="toggle-sidebar" @click="toggle"><i class="iconfont icon-zuoyoujiantou"></i></span>
      <ul class='nav'>
        <li v-for="nav in navs" :key="nav._id">

        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'common-sidebar',
    data: function() {
      return {
        navs: [],
        showSidebar: true
      };
    },
    computed: {},
    methods: {
      toggle() {
        this.showSidebar = !this.showSidebar;
        this.$emit('toggle', this.showSidebar);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    z-index: 1;
  }

  .sidebar-main {
    width: 250px;
    left: 0;
    height: 100%;
    box-shadow: 10px 0 10px rgba(0, 0, 0, .3);
    background: #000;
    transition: all .2s;
    position: fixed;
    bottom: 0;
    top: 0;
    transform: translateX(-100%);
    &.show {
      transform: translateX(0);
    }
    .toggle-sidebar {
      position: absolute;
      transition: all .2s;
      top: 0;
      bottom: 0;
      margin: auto;
      content: '';
      width: 40px;
      height: 40px;
      left: 100%;
      border-radius: 50%;
      border: 2px solid #fff;
      background: #ccc;
      color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, .3);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateX(-50%) rotate(0);
      &:hover {
        transform: translateX(-50%) rotate(180deg) scale(1.5);
      }
    }
  }

  .nav {
    margin-top: 30px;
    background: blanchedalmond;
    li {}
  }
</style>

