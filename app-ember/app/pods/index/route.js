import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    let store = this.get('store');
    return RSVP.hash({
      posts: store.findAll('post')
    });
  }
});
