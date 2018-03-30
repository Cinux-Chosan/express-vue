export function initialize(application) {
  application.inject('controller', 'loginService', 'service:check-login');
  application.inject('route', 'loginService', 'service:check-login');
  application.inject('component', 'loginService', 'service:check-login');
  application.inject('component:tree-view', 'categoriesController', 'controller:categories');
}

export default {
  initialize
};
