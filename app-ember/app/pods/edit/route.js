import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let post_id = params.post_id;
    if (post_id) {
      return this.queryRecord('post', { id: post_id });
    } else {
      // this.get('store').push();
    }
  }
});
