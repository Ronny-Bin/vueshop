import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false




new Vue({
  render: h => h(App),
}).$mount('#app')

// // axios({
// //   url:'http://httpbin.org/cache/2001'
// // }).then(res=>{
// //   console.log(res)
// // })
// axios.defaults.baseURL = 'http://123.207.32.32:8000/api/hy';
//
// // 为给定 ID 的 user 创建请求
// axios.get('/home/multidata',{
//   params: {
//    // ID: 12345
//   }})
//     .then(response=> {
//       console.log(response);
//     })
//     .catch(error=> {
//       console.log(error);
//     });

// axios.post('/response-headers', {
//   "freeform": "20001"
// }).then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//创建实例

// var instance = axios.create({
//   baseURL: 'http://httpbin.org',
//  // timeout: 1000,
//   //headers: {'X-Custom-Header': 'foobar'}
// });
//
// instance.post('/response-headers', {
//   "freeform": "20001"
// }).then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });