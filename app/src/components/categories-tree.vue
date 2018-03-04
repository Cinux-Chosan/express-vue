<template>
  <div>
    <tree-structure :nodes="categories" :hasPermission="hasPermission" @add="add">
    </tree-structure>
  </div>
</template>

<script>
import treeStructure from '@/components/tree-structure';
import { getJson } from '@/libs/util';

export default {
  name: 'cat-tree',
  created() {
    this.getCategories();
  },
  props: ['isShowOpts'],
  data: () => {
    return {
      categories: [],
      hasPermission: false
    }
  },
  components: {
    treeStructure
  },
  methods: {
    async getCategories() {
      let rs = await getJson('/categories');
      if (rs.state) {
        this.categories = rs.data.categories;
        this.hasPermission = this.isShowOpts === false ? false : rs.data.hasEditPermission;
      }
    },
    add(node) {
      debugger
    }
  }
}
</script>
