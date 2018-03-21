import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let post_id = params.edit_id;
    if (post_id != '_') {
      return this.get('store').queryRecord('post', { id: post_id });
    } else {
      // this.get('store').push({ data: { id: '1' } });
    }
  }
});
