import Controller from '@ember/controller';

export default Controller.extend({
  withSidebar: true,
  actions: {
    toggleSidebar(withSidebar) {
      this.set('withSidebar', withSidebar);
    }
  }
});
