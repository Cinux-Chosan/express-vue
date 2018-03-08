
<template>
  <div class="category">

    <categroy-tree @createNewRoot="createNewRoot" isShowOpts="true"></categroy-tree>
  </div>
</template>

<script>
import { getJson } from '@/libs/util';
import categroyTree from '@/components/categories-tree';

export default {
  name: 'category',
  data: () => {
    return {
      name: '',
      pwd: ''
    }
  },
  components: {
    categroyTree
  },
  methods: {
    async login() {
      let data = await getJson('/login', this.$data, 'post');
    },
    createNewRoot() {

    }
  }
}

</script>