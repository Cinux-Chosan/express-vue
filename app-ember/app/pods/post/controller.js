import Controller from '@ember/controller';
import { service, on } from 'app-ember/utils/decorators';

export default Controller.extend({
  @service checkLogin: '',
  @on('init')
  async initController() {
    this.get('login');
  }
});