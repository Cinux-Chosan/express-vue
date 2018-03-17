import DS from 'ember-data';
import { computed } from '@ember/object';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

export default DS.JSONAPIAdapter.extend({
    namespace: 'api',
    host: computed(() => location.hostname.includes('localhost') ? '//localhost:3000' : '/'),

    buildURL(modelName, id, snapshot, requestType = '') {
        if (requestType.toLowerCase().includes('record')) {
            inflector.uncountable(modelName);
        }
        return this._super(...arguments);
    }
});
