var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        message: '页面加载于 ' + new Date()
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        tudos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
})

var app5 = new Vue({
    el: '#app5',
    data: {
        message: 'Hello Vue'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        }
    }
})

var app6 = new Vue({
    el: '#app6',
    data: {
        message: 'Hello'
    }
})

/*------------------------*/
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo}}</li>'
})
var app7 = new Vue({
    el: '#app7',
    data: {
        Lists: [1, 2, 3]
    }
})
/*------------------------*/

var app8 = new Vue({
    el: '#app8',
    data: {
        message: 'csk'
    },
    filters: {
        capitalize: function(value) {
            if (!value) return;
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
})

var app9 = new Vue({
	el:'#app9',
	data:{
		message:'Hello'
	},
	computed:{
		reversedMessage:function(){
			return this.message.split('').reverse().join('');
		}
	}
})

var app10 = new Vue({
	el:'#app10',
	data:{
		numbers:[1,2,3,4,5]
	},
	computed:{
		evenNumbers:function(){
			return this.numbers.filter(function(number){
				return number%2 ===0;
			})
		}
	},
	methods:{
		doThis:function(){
			alert(1);
		}
	}
})

var counter=1
Vue.component('simple-counter',{
	template:'<button v-on:click="counter += 1">{{counter}}</button>',
	data:function(){
		return {counter: counter++};
	}
})
new Vue({
	el:'#example1'
})


Vue.component('button-counter',{
	template:'<button v-on:click="increment">{{ counter }}</button>',
	data:function(){
		return{
			counter:0
		}
	},
	methods:{
		increment:function(){
			this.counter++;
			this.$emit('increment');
		}
	}
})	
var example2= new Vue({
	el:'#example2',
	data:{
		total:0
	},
	methods:{
		increment1:function(){
			this.total++;
		},
		increment2:function(){
			this.total  += 2; 
		}
	}
})

var app11= new Vue({
	el:'#app11',
	data:{
		isactive:true,
		a1:'u1',
		a2:'u2',
	}
})

Vue.component('my-component',{
	template:'<div>\
			  <h2>我是子组件的标题</h2>\
			  <slot>\
			    只有在没有要分发的内容时才会显示。\
			  </slot>\
			</div>'
})
var app12= new Vue({
	el:'#app12',

})

Vue.component('child',{
	template:'<div class="child">\
			  <div>子组件</div>\
			  <slot text="hello from child"></slot>\
			</div>'
})
var app13= new Vue({
	el:'#app13',
})

Vue.component('test',{
	props:['title'],
	template:'<p>{{title}}<slot></slot></p>',
})
var app14= new Vue({
	el:'#app14',
})

var home={
	template:'<p>Welcome home!</p>'
}
var app15= new Vue({
	el:'#app15',
	data:{
		currentView: home,		
	},
	components:{
		component1:{
			template:'<p>模板2</p>'
		}
	}
})

var app16= new Vue({
	el:'#app16',
	data:{
		show:true
	}
})

var app17= new Vue({
	el:'#app17',
	data:{
		show:true
	}
})

