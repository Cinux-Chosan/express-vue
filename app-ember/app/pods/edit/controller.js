import Controller from '@ember/controller';



export default Controller.extend({
  queryParams: ['edittype'],
  edittype: '',
  editor: '',
  actions: {
    submit() {
      this.get('model').save();
    }
  }
});
