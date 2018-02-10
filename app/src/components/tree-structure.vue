<template>
  <ul class="tree-structure list-group" v-if="nodes.length">
    <li class="tree-strucure__item list-group-item" v-for="node in nodes" :key="node._id">
      <ul class="tree-structure__operations">
        <li @click="add(node)" v-if="hasPermission">添加</li>
        <li @click="del(node)" v-if="hasPermission">删除</li>
        <li @click="toggleFold(node)" :class="node.fold ? 'fold': ''"><i class="iconfont icon-circle-down"></i></li>
      </ul>
      <span class="badge">{{node.num}}</span>
      <span :contenteditable="hasPermission">{{node.name}}</span>
      <tree-structure v-show="!node.fold" :nodes="node.children" :hasPermission="hasPermission"></tree-structure>
    </li>
  </ul>
</template>

<script>
export default {
  name: "tree-structure",
  props: ["nodes", "hasPermission"],
  data: function() {
    return {
      children: this.items
    };
  },
  methods: {
    add(node) {
      // this.$emit('add', ...arguments);
      node.fold = false;
      node.children = node.children || [];
      node.children.push({ name: "名称", fold: true, children: [] });
    },
    del(node) {
      this.nodes.splice(this.nodes.indexOf(node), 1);
      this.$emit("del", ...arguments);
    },
    toggleFold(node) {
      Vue.set(node, 'fold', !node.fold);  //  由于根节点可能没有 fold 属性, 直接设置该属性不会更新 dom, 故需要使用 Vue.set
    }
  }
};
</script>

<style scoped lang="scss">
.tree-structure {
  margin-bottom: 0;
  &__item {
  }
  &__operations {
    float: right;
    list-style: none;
    li {
      float: left;
      cursor: pointer;
      &:hover {
        color: red;
      }
      & + li {
        &::before {
          content: "|";
          color: initial;
        }
      }
    }
    .icon-circle-down {
      display: inline-block;
      transition: all 0.2s;
    }
    .fold {
      .icon-circle-down {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
