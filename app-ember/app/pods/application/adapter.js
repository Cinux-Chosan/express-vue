import DS from 'ember-data';
import RSVP from 'rsvp';
import { run } from '@ember/runloop';
import $ from 'jquery';
import { computed } from '@ember/object';

// import Inflector from 'ember-inflector';

// const { inflector } = Inflector;

export default DS.Adapter.extend({
  namespace: 'api',
  host: computed(() => location.hostname.match(/(localhost|172|192)/) ? `//${location.hostname}:3000/` : '/'),
  findRecord(store, type, id, snapshot) {
    return new RSVP.Promise(function (resolve, reject) {
      $.getJSON(`/${type.modelName}/${id}`).then(function (data) {
        resolve(data);
      }, function (jqXHR) {
        reject(jqXHR);
      });
    });
  },
  queryRecord(store, type, query) {
    return new RSVP.Promise((resolve, reject) => {
      $.getJSON(`${this.get('host')}api/${type.modelName}`, query).then(function(data) {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  },
  findAll(store, type, sinceToken) {
    let query = { since: sinceToken };
    let host = this.get('host');
    return new RSVP.Promise(function(resolve, reject) {
      $.getJSON(`${host}api/${type.modelName}s`, query).then(function(data) {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  },
  updateRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true });
    let id = snapshot.id;

    return new RSVP.Promise(function(resolve, reject) {
      $.ajax({
        type: 'PUT',
        url: `/${type.modelName}/${id}`,
        dataType: 'json',
        data: data
      }).then(function(data) {
        run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        run(null, reject, jqXHR);
      });
    });
  }
  // buildURL(modelName, id, snapshot, requestType = '') {
  //     if (requestType.toLowerCase().includes('record')) { // 像 findRecord 这样查找单条记录的方法，就阻止 REST 将它转换成复数， 只是个人习惯
  //         inflector.uncountable(modelName);
  //     }
  //     inflector.disableCache();
  //     return this._super(...arguments);
  // }
});
