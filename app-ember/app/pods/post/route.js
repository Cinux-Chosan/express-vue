import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.get('store').queryRecord('post', { id: params.post_id });
    }
});
