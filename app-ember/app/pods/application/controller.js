import Controller from '@ember/controller';
import $ from 'jquery';
import { run } from '@ember/runloop';
import { observes } from 'app-ember/utils/decorators';

export default Controller.extend({
  withSidebar: true,
  @observes('withSidebar')
  withSidebarChanged() {
    $('.common-sidebar').one('transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd', () => {
      run(() => {
        $(window).resize();  // 触发 editor.md 的自动适应布局
      })
    })
  },
  actions: {
    toggleSidebar(withSidebar) {
      this.set('withSidebar', withSidebar);
    }
  }
});
