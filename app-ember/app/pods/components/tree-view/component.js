import Component from '@ember/component';
import { on, observes } from 'app-ember/utils';

export default Component.extend({
  model: '',
  depth: 1,
  hideChildren: true,
  hasPermission: false,
  @on('didInsertElement')
  @observes('depth')
  styleChanged() {
    let depth = this.get('depth');
    this.$('> div:first-child').css({
      textIndent: depth + 'em'
    });
  }
});
