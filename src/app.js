// Vue = require('vue/dist/vue.js');

// import Vue from 'vue'
// import Sort from './Sort.vue'

import App from './App.vue'

window.eventBus = new Vue()

new Vue({
 	components: { App },
    render: h => h(App)
}).$mount('#app')
