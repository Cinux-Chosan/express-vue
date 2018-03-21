import Controller from '@ember/controller';
// import { inject as service } from '@ember/service';
import { service, on } from 'app-ember/utils/decorators';

export default Controller.extend({
  @service checkLogin: '',
  // login: service(),
  @on('init')
  async initController() {
    this.get('login');
  }
});