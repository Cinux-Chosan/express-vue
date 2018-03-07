<template>
  <div>
  <ul class="tree-structure list-group" v-if="nodes && nodes.length">
    <li class="tree-strucure__item list-group-item" v-for="node in nodes" :key="node._id" :data-level="level" :data-id="node._id">
      <ul class="tree-structure__operations">
        <li @click="edit(node, $event)" v-if="hasPermission"><i class="iconfont icon-bianji"></i></li>
        <li @click="add(node, $event)" v-if="hasPermission"><i class="iconfont icon-add"></i></li>
        <li @click="del(node, $event)" v-if="hasPermission"><i class="iconfont icon-minus"></i> </li>
        <li @click="toggleFold(node)" v-if="node.children && node.children.length" :class="node.fold ? 'fold': ''"><i class="iconfont icon-circle-down"></i></li>
      </ul>
      <span class="badge">{{node.num}}</span>
      <span>{{node.name}}</span>
      <tree-structure v-show="!node.fold" :nodes="node.children" :hasPermission="hasPermission" :level="level+1"></tree-structure>
    </li>
  </ul>
  </div>

</template>

<script>

export default {
  name: "tree-structure",
  props: {
    nodes: {},
    hasPermission: {},
    level: {
      default: 1
    }
  },
  data: function() {
    return {
      children: this.items
    };
  },



  methods: {
    getRootId(node, event) {
      let $this = $(event.target);
      node.rootId = $this.closest('li[data-level="1"]').data('id');
    },
    edit(node, event) {
      this.getRootId(...arguments);
      this.$emit('edit', node);
    },
    add(node, event) {
      let child = {};
      child.parent = node;
      this.getRootId(child, event);
      this.$emit('add', child);
      // Vue.set(node, 'fold', false);
      // Vue.set(node, 'children', node.children || []);
      // node.children.push({ name: "名称", fold: true, children: [] });
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
      margin-right: 8px;
      cursor: pointer;
      &:hover {
        color: red;
      }
      & + li {
        &::before {
          // content: "|";
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
