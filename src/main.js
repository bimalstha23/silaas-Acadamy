import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueScrollTo from 'vue-scrollto'
import { firestorePlugin } from 'vuefire'


// import VueRouter from 'vue-router';
Vue.config.productionTip = false
Vue.use(firestorePlugin)
Vue.use(VueScrollTo);

// Vue.use(VueRouter);
new Vue({
  vuetify,
  // router:router,
  render: h => h(App)
}).$mount('#app')
