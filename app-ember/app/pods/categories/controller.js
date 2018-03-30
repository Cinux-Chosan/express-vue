import Controller from '@ember/controller';
import $ from 'jquery';
import { getJson, tip } from 'app-ember/utils';

export default Controller.extend({
  isShowingModal: false,
  getRootId(node) {
    return $(`#${this.get('_uid')}`).find(`[data-id='${node._id}']`).closest('[data-depth=1]').data('id');
  },
  getParentId(node) {
    return $(`#${this.get('_uid')}`).find(`[data-id='${node._id}']`).closest('[data-depth]').data('id');
  },
  actions: {
    toggleModal() {
      this.toggleProperty('isShowingModal')
    },
    openModal() {
      this.set('isShowingModal', true);
    },

    edit(node = {}, status) {
      this.send('openModal');
      this.set('node', node);
      this.set('status', status);
      switch (status) {
        case 'del':
        case 'update':
          this.set('tmpNode', node);
          break;
        case 'add':
          this.set('tmpNode', {});
          break;
        default:
          break;
      }
    },

    async modalOk() {
      let { node, status, tmpNode } = this.getProperties(['node', 'status', 'tmpNode']);
      let { name } = tmpNode;
      let rootId = this.getRootId(node);
      let { _id } = node;
      let opResult;
      switch (status) {
        case 'add':
          {
            let parentId = this.getParentId(node);
            opResult = await getJson('api/addCategory', { rootId, name, parentId }, 'post');
          }
          break;
        case 'del':
          opResult = await getJson('api/delCategory', { rootId, _id }, 'post');
          break;
        case 'update':
          opResult = await getJson('api/updateCategory', { rootId, _id, name }, 'post');
          break;
        default:
          break;
      }
      if (opResult.meta.state) {
        this.set('isShowingModal', false);
        tip(`${this.get('status')}成功!!`);
      }
    },
    modalCancel() {}
  }
});
