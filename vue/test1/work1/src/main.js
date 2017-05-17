// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

const history = {};
var r =router.app.$route;
if (!history[r.name]) {
	history[r.name] = {times:1,stopTime:[],startTime:new Date().getTime()};
}
console.log(history);
router.beforeEach((to, from, next) => {
	console.log(to);
	console.log(from);

	//to处理
	if (!history[to.name]) {
		history[to.name] = {times:0,stopTime:[]};
	}
	history[to.name].times += 1;
	history[to.name].startTime = new Date().getTime();

	//from处理
	history[from.name].endTime = new Date().getTime();
	history[from.name].stopTime.push(history[from.name].endTime - history[from.name].startTime);

	console.log(history);
	next();
})