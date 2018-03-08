<template>
  <div>
  <ul class="tree-structure list-group" v-if="nodes && nodes.length">
    <li class="tree-strucure__item list-group-item" v-for="node in nodes" :key="node._id" :data-level="level" :data-id="node._id" @click.stop="itemClick(node, $event)">
      <ul class="tree-structure__operations">
        <li @click="edit(node, $event)" v-if="hasPermission"><i class="iconfont icon-bianji"></i></li>
        <li @click="add(node, $event)" v-if="hasPermission"><i class="iconfont icon-add"></i></li>
        <li @click="del(node, $event)" v-if="hasPermission"><i class="iconfont icon-minus"></i> </li>
        <li @click.stop="toggleFold(node)" v-if="node.children && node.children.length" :class="node.fold ? 'fold': ''"><i class="iconfont icon-circle-down"></i></li>
      </ul>
      <span class="badge">{{node.num}}</span>
      <span class="tree-node-name" :style="'text-indent:' + level + 'em'">{{node.name}}</span>
      <tree-structure v-show="!node.fold" :nodes="node.children" :hasPermission="hasPermission" :level="level+1"  :bus="bus"></tree-structure>
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
    },
    bus: {}
  },
  data: function() {
    return {
      children: this.items
    };
  },

  methods: {
    getId(node, event, level = 1, propName = 'rootId'){
      let $this = $(event.target);
      node[propName] = $this.closest(`li[data-level${ level===false ? "" : "=" + level}]`).data('id');
    },
    getRootId(node, event) {
      this.getId(...arguments);
    },
    getParentId(node, event, level = false, propName = 'parentId') {
      this.getId(node, event, level, propName);
    },
    itemClick(node, event) {
      if (node.children && node.children.length) {
        return this.toggleFold(node);
      }
      $('.list-group-item').removeClass('item-active');
      $(event.target).closest('li.list-group-item').addClass('item-active');
      this.getRootId(...arguments);
      this.bus.$emit('itemClick', ...arguments);
    },
    edit(node, event) {
      this.getRootId(...arguments);
      this.bus.$emit('edit', node);
    },
    add(node, event) {
      let child = {};
      child.parent = node;
      this.getRootId(child, event);
      this.getParentId(child, event);
      this.bus.$emit('add', child);
      // Vue.set(node, 'fold', false);
      // Vue.set(node, 'children', node.children || []);
      // node.children.push({ name: "名称", fold: true, children: [] });
    },
    del(node, event) {
      this.nodes.splice(this.nodes.indexOf(node), 1);
      this.getRootId(...arguments);
      this.bus.$emit("del", ...arguments);
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
  .tree-node-name{
    display: inline-block;
    min-height: 30px;
  }
  .list-group-item{
    padding: 0;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    line-height: 28px;
    &:hover{
      // background-color: #ccc;
    }
    &.item-active{
      background-color: #aaa;
    }
  }
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
