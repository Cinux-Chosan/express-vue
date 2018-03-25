import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: '_id',
    serialize() {
        return this._super(...arguments);
    },
    normalize() {
        return this._super(...arguments);
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        return this._super(...arguments);
    }
});
