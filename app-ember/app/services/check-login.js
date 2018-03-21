import Service from '@ember/service';
import { on, service } from 'app-ember/utils/decorators';


export default Service.extend({
    @service store : '',
    @on('init')
    async serviceInit() {
        let info = await this.checkLogin();
        debugger
    },
    checkLogin() {
        return this.get('store').queryRecord('login', { id: '5a622da94b5bcb3714cc231a' });
    }
});

