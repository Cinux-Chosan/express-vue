import Controller from '@ember/controller';

let POSTTYPE = ['markdown', 'markdown', 'html'];

export default Controller.extend({
  queryParams: [{
    post_type: {
      scope: 'controller'
    }
  }],
  post_type: '',
  editor: '',
  editormdUpload: '/upload/editormdUpload',
  kindEditorUpload: '/upload/kindEditorUpload',
  actions: {
    submit() {
      let { model, post_type, editor } = this.getProperties(['model', 'post_type', 'editor']);
      model.set('postType', model.postType || POSTTYPE[+post_type]);
      model.set('content', editor.getContent());
      this.get('model').save();
    },
    pickCategory(category) {
      this.set('model.cateName', category.name);
      this.set('model.cateNodes', category.cateNodes);
    }
  }
});
