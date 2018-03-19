import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Component from '@ember/component';
import Controller from '@ember/controller';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

Component.reopen({
  localClassNames: 'root'
})

Controller.reopen({
  localClassNames: 'root'
})