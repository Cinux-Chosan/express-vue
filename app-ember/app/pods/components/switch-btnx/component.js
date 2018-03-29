import Component from '@ember/component';

export default Component.extend({
  localClassNameBindings: ['open'],
  open: true,
  click() {
    this.toggleProperty('open');
  }
});
