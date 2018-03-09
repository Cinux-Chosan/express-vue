<template>
  <div>
    <div class="clearfix mb10" v-if="isShowOpts">
      <Button type="primary" icon="ios-color-wand-outline" class="fr" @click="createNewRoot"></Button>
    </div>
    <tree-structure :nodes="categories" :hasPermission="hasPermission" :bus="bus">
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
  import {
    getJson,
    tip
  } from '@/libs/util';

  const STATE = ['edit', 'add', 'del'];

  export default {
    name: 'cat-tree',
    created() {
      let context = this;
      this.getCategories();
      this.bus.$on('add', function() {
        context.add(...arguments);
      });
      this.bus.$on('del', function() {
        context.del(...arguments);
      });
      this.bus.$on('edit', function() {
        context.edit(...arguments);
      });
      this.bus.$on('itemClick', function() {
        context.itemClick(...arguments);
      })
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
        },
        bus: new Vue()
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
      async delCategory(node) {
        // 删除前需要确认!
        let {
          _id,
          rootId
        } = node;
        let rs = await getJson('/delCategory', {
          _id,
          rootId
        }, 'post');
        if (rs.state) {
          tip('删除成功!');
        }
      },
      async addCategory(node) {
        let rs = await getJson('/addCategory', { ...node
        }, 'post');
        if (rs.state) {
          tip('添加成功!');
        }
      },
      async updateCategory(node) {
        let {
          _id,
          name,
          rootId
        } = node;
        let rs = await getJson('/updateCategory', {
          _id,
          name,
          rootId
        }, 'post');
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
        this.submit();
      },
      itemClick(node) {
        this.$emit('itemClick', ...arguments);
      },
      closeModal() {
        this.showModal = false;
      },
      async submit(modalContext) {
        let node = this.node;
        try {
          switch (STATE[this.state]) {
            case 'edit':
              await this.updateCategory(node);
              break;
            case 'add':
              {
                let newNode = {};
                newNode.name = node.name;
                newNode.rootId = node.rootId;
                newNode.parentId = node.parent && node.parent._id;
                await this.addCategory(newNode);
              }
              break;
            case 'del':
              await this.delCategory(node);
            default:
              break;
          }
          this.showModal = false;
        } finally {
          this.loading = false;
          setTimeout(() => this.loading = true);
        }
      },
      createNewRoot() {
        this.showModal = true;
        this.state = 1;
        this.node = {}
      }
    }
  }
</script>
