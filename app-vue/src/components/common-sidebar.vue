<template>
  <section class="sidebar">
    <div class="sidebar-mask" v-show="showSidebar" @click="toggle"></div>
    <div :class="[showSidebar ? 'show' : '', 'sidebar-main']">
      <div class="sidebar-main__content">
        <ul class='nav'>
          <li>
            <router-link to="/" class="bg-fff">首页</router-link>
          </li>
          <li v-for="nav in navs" :key="nav._id">
          </li>
        </ul>
        <categories-tree class="mt5" :isShowOpts="false" @itemClick="itemClick"></categories-tree>
        <me :class="['animated', showSidebar ? 'flipInX' : '']"></me>
      </div>
      <span class="toggle-sidebar" @click="toggle"><i class="iconfont icon-zuoyoujiantou"></i></span>
    </div>
  </section>
</template>

<script>
  import categoriesTree from "@/components/categories-tree";
  import me from '@/components/me';
  export default {
    name: 'common-sidebar',
    data: function() {
      return {
        navs: [],
        showSidebar: true
      };
    },
    components: {
      categoriesTree,
      me
    },
    computed: {},
    methods: {
      toggle(event) {
        this.showSidebar = !this.showSidebar;
        this.$emit('toggle', this.showSidebar);
      },
      itemClick() {
        this.$emit('itemClick', ...arguments);
      }
    }
  }
</script>

<style lang="scss" scoped>
  $xs-screen: 768px;
  @media screen and (max-width: $xs-screen) {
    .sidebar-mask {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: #000;
      opacity: .6;
    }
  }

  .sidebar {
    z-index: 1;
  }

  .sidebar-main {
    $width: 250px;
    width: $width;
    left: 0;
    height: 100%;
    box-shadow: 10px 0 10px rgba(0, 0, 0, .3);
    background: #000;
    transition: all .2s;
    position: fixed;
    bottom: 0;
    top: 0;
    left: -$width;
    // transform: translateX(-100%);
    &.show {
      left: 0;
      // transform: translateX(0);
    }
    &__content {
      overflow: auto;
      height: 100%;
    }
    .toggle-sidebar {
      $width: 40px;
      position: absolute;
      transition: all .2s;
      top: 0;
      bottom: 0;
      margin: auto;
      content: '';
      width: $width;
      height: $width;
      right: -$width/2;
      border-radius: 50%;
      border: 2px solid #fff;
      background: #ccc;
      color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, .3);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: rotate(0);
      &:hover {
        transform: rotate(180deg) scale(1.5);
      }
    }
  }

  .nav {
    margin-top: 30px;
    background: blanchedalmond;
    font-size: 20px;
    li {
      text-align: center;
      transition: all .2s;
      &:hover {
        font-size: 1.2em;
      }
    }
  }
</style>

