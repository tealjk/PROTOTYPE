/*
* Routes: Authenticated
* Routes that are only visible to authenticated users.
*/

Router.route('index', {
  path: '/',
  template: 'index'
});


Router.route('tacos', {
    path: '/tacos',
    template: 'tacos'
});







Router.route('apiKey', {
  path: '/api-key',
  template: 'apiKey'
});
