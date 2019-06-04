import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejstest-72551.firebaseio.com/data.json';
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST'){
    // POST Creates new resource and appends it to the existing array
    request.method = 'PUT';
    // PUT overrites the existing data
  }
  next(response => {
    response.json = () => { return {messages: response.body} }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
