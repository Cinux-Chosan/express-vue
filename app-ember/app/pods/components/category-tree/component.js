import Component from '@ember/component';
import { on, alias, getJson } from 'app-ember/utils';

export default Component.extend({
  @alias('model.data') categories: '',
  @on('init')
  domInit() {
    this.getCategories();
  },
  async getCategories() {
    let model = await getJson('api/categories');
    this.set('model', model);
  }
});
