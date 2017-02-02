'use strict';

require('babel-polyfill');

var _vue = require('vue/dist/vue.js');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _App = require('./components/App.vue');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home.vue');

var _Home2 = _interopRequireDefault(_Home);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _hammerjs = require('hammerjs');

var _hammerjs2 = _interopRequireDefault(_hammerjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// State Management with Vuex

// Main App Container
// index.js
_vue2.default.use(_vueRouter2.default);
// Import HTTP Library

_vue2.default.prototype.$http = _axios2.default;
_vue2.default.prototype.$touch = _hammerjs2.default;

var router = new _vueRouter2.default({
  mode: 'history',
  base: '~',
  // Routes go here.
  routes: [{ path: '/', component: _Home2.default }]
});

new _vue2.default({
  el: '#app',
  store: _store2.default,
  router: router,
  render: function render(h) {
    return h(_App2.default);
  }
});
//# sourceMappingURL=entry.js.map
