import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('wallets', { path: '/:wallet_id' }, function() {
    this.route('overview');
    this.route('accounts', { path: '/:account_id' }, function() {
    });
  });
});

export default Router;
