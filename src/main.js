import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');
// require('onsenui/js/onsenui.js');

import App  from './AppTabs.vue';
import AppTabs from './AppTabs.vue';

Vue.component('app', App);

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template: '<app></app>',
  data() {
    return {
      pageStack: [AppTabs]
    }
  }
});
