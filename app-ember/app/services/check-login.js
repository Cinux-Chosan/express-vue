import Service from '@ember/service';
import { getJson, tip } from 'app-ember/utils';


export default Service.extend({
  isShowingModal: '',
  userName: '',
  userPwd: '',
  isLogged: false,
  async login() {
    let { userName: name, userPwd: pwd } = this.getProperties(['userName', 'userPwd']);
    let result = await getJson('api/login', { name, pwd }, 'post');
    if (result.meta.state) {
      tip('登陆成功!');
      this.set('isShowingModal', '');
      this.set('isLogged', true);
      this.set('userName', '');
      this.set('userPwd', '');
    }
  },
  actions: {
    onOk() {
        this.login();
    },
    onCancel() {
        this.set('isShowingModal', '');
    }
  }

});
