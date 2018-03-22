import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    edittype: {
      replace: true
    }
  },
  model(params) {
    let post_id = params.edit_id;
    if (post_id != '_') {
      return this.get('store').queryRecord('post', { id: post_id });
    } else {
      // this.get('store').push({ data: { id: '1' } });
    }
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('edittype', '');
    }
  }
});
