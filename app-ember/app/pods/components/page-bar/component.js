import Component from '@ember/component';
import { on, computed, alias } from 'app-ember/utils';

const { ceil } = Math;

export default Component.extend({
  pageData: '',
  @alias('pageData.total') total : '',
  @alias('pageData.limit') limit : '',
  @alias('pageData.page') page : '',
  maxShow: 8,
  @on('init')
  compInit() {
    this.set('pageData', this.get('pageData') || {});
  },
  @computed('totle', 'limit', 'page')
  get items() {
    let { page, total, limit, maxShow } = this.getProperties(['page', 'total', 'limit', 'maxShow']);
    let length = ceil(total / limit);

    let items = [page];
    let tmpMaxShow = maxShow;
    let count = 1;
    do {
      let twice = tmpMaxShow % 2;
      if (++count === 2) {
        tmpMaxShow--;
        count = 0;
      }
      if (twice) {
        items.pushObject(page + maxShow - tmpMaxShow);
      } else {
        items.unshiftObject(page - maxShow + tmpMaxShow);
      }
      
    } while (tmpMaxShow);

    if (length - 8 > page) {
      items.pushObjects(['...', length - 2, length - 1]);
    }
    if (page - 8 > 1) {
      items.unshiftObjects([1, 2, '...']);
    }

    return items;
  }
});
