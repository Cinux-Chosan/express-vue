import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  model: '',
  depth: 1,
  hideChildren: false,
  hasPermission: false,
  actions: {
    itemClicked(category) {
      let root = this.$();
      let el = root.find(`[data-id='${category._id}']`);
      let treeRoot = root.find('[date-depth=1]');
      let parents = el.parentsUntil(treeRoot.parent()).filter('[data-depth]');
      [].unshift.call(parents, el.get(0));
      let cateNodes = parents.map((i, el) => $(el).data('id'));
      cateNodes = [].slice.call(cateNodes).join('-');
      category.cateNodes = cateNodes;
      this.get('itemClicked') && this.get('itemClicked')(...arguments);
    }
  }
});
