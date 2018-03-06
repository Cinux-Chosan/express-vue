<template>
  <div>
    <tree-structure :nodes="categories" :hasPermission="hasPermission" @edit="edit" @add="add" @del="del">
    </tree-structure>
    <modal :title="'编辑分类'" :showModal="showModal" @cacel="closeModal" @ok="submit" :loading="loading">
      <Form :model="node">
        <FormItem label="分类名">
          <Input v-model="node.name" placeholder="输入分类名..."> </Input>
        </FormItem>
      </Form>
    </modal>
  </div>
</template>

<script>
  import treeStructure from '@/components/tree-structure';
  import Modal from '@/components/modal';
  import { getJson, tip } from '@/libs/util';

  const STATE = [ 'edit', 'add', 'del' ];

  export default {
    name: 'cat-tree',
    created() {
      this.getCategories();
    },
    props: ['isShowOpts'],
    data: () => {
      return {
        categories: [],
        hasPermission: false,
        showModal: false,
        state: 0,
        loading: true,
        node: {
          name: ''
        }
      }
    },
    components: {
      treeStructure,
      Modal
    },
    methods: {
      async getCategories() {
        let rs = await getJson('/categories');
        if (rs.state) {
          this.categories = rs.data.categories;
          this.hasPermission = this.isShowOpts === false ? false : rs.data.hasEditPermission;
        }
      },
      async delCategory(id) {
        // 删除前需要确认!
        let rs = await getJson('/delCate', { id }, 'post');
        if (rs.state) {
          tip('删除成功!');
        }
      },
      async addCategory(node) {
        let rs = await getJson('/addCate', { ...node }, 'post');
        if (rs.state) {
          tip('添加成功!');
        }
      },
      async updateCategory(node) {
        let id = node._id;
        let name = node.name;
        let rs = await getJson('/updateCategory', { id, name }, 'post');
        if (rs.state) {
          tip('更新成功!');
        }
      },
      edit(node) {
        this.node = node;
        this.state = 0;
        this.showModal = true;
      },
      add(node) {
        this.node = node;
        this.state = 1;
        this.showModal = true;
      },
      del(node) {
        this.node = node;
        this.state = 2;
      },
      closeModal() {
        this.showModal = false;
      },
      async submit(modalContext) {
        let node = this.node;
        try{
          switch(STATE[this.state]) {
          case 'edit':
            await this.updateCategory(node);
            break;
          case 'add':
            {
              let newNode = {};
              newNode.name = node.name;
              newNode.parentId = node.parent._id;
              await this.addCategory(newNode);
            }
            break;
          case 'del':
            await this.delCategory(node._id);
          default: break;
          }
          this.showModal = false;
        } finally {
          this.loading = false;
          setTimeout(() => this.loading = true);
        }
      }
    }
  }
</script>
