import Controller from '@ember/controller';



export default Controller.extend({
  queryParams: [{
    edittype: {
      scope: 'controller'
    }
  }],
  edittype: '',
  editor: '',
  actions: {
    submit() {
      this.get('model').save();
    }
  }
});
