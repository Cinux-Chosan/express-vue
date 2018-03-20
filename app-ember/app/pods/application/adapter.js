import DS from 'ember-data';
import { computed } from '@ember/object';
import Inflector from 'ember-inflector';

const { inflector } = Inflector;

export default DS.RESTAdapter.extend({
    namespace: 'api',
    host: computed(() => location.hostname.includes('localhost') ? '//localhost:3000' : '/'),

    buildURL(modelName, id, snapshot, requestType = '') {
        if (requestType.toLowerCase().includes('record')) { // 像 findRecord 这样查找单条记录的方法，就阻止 REST 将它转换成复数， 只是个人习惯
            inflector.uncountable(modelName);
        }
        inflector.disableCache();
        return this._super(...arguments);
    }
});
