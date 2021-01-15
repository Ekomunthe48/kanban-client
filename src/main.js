import Vue from 'vue';
import App from './App.vue';
import GoogleAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId: '572646782885-u84m0a18e7ntsqjd54q76nrrllqnad2u.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.use(GoogleAuth, gauthOption)
new Vue({
  render: h => h(App),
}).$mount('#app');
