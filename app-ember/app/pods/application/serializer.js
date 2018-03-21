import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: '_id',
    serialize(snapshot, options) {
        debugger
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if (payload.state) {
            return this._super(store, primaryModelClass, payload.data, id, requestType)
        } else {
            // 报错
            return this._super(store, primaryModelClass, [], id, requestType)
        }
    }
});
