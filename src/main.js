// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import firebase from 'firebase'
import firebase from "firebase/app"

Vue.config.productionTip = false

// Your web app's Firebase configuration
const config = {
  apiKey: 'AIzaSyA_XJ36cxRi8KbIhzd-cHCVFC7oSamlEms',
  authDomain: 'job-hunting-243016.firebaseapp.com',
  databaseURL: 'https://job-hunting-243016.firebaseio.com',
  projectId: 'job-hunting-243016',
  storageBucket: 'job-hunting-243016.appspot.com',
  messagingSenderId: '498589799790',
  appId: '1:498589799790:web:82482ab98c1b5c47'
}
console.log(process.env)
// Initialize Firebase
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
