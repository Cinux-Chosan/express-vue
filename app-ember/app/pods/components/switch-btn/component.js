import Component from '@ember/component';
import { computed } from 'app-ember/utils';

export default Component.extend({
  localClassNameBindings: ['open'],
  attributeBindings: ['style'],
  open: true,
  fontSize: 12,
  @computed('fontSize')
  get style() {
    return `font-size:${this.get('fontSize')}px`;
  },
  click() {
    this.toggleProperty('open');
  }
});
