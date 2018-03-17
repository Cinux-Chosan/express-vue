import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        this.get('store').findAll('post')
        return this.get('store').queryRecord('post', {
                id: '5a622da94b5bcb3714cc231a'
        });
    }
});
