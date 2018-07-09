/*
el:
data:
template:
beforeCreate:
created:
beforeMount:
mounted:
beforeUpdate:
updated:
beforeDestroy:
destroyed:
*/

const vm=new Vue({
	el:'#app',
	data:{
		num:1,
	},
	template:'<div id="app"><h1>{{num}}</h1></div>'
	beforeCreate:function(){
		console.log('beforeCreate');
	},
	created:function(){
		console.log('created');
	},
	beforeMount:function(){
		console.log('beforeMount');
	},
	mounted:function(){
		console.log('mounted');
	},
	beforeUpdate:function(){
		console.log('beforeUpdate');
	},
	updated:function(){
		console.log('updated');
	},
	beforeDestroy:function(){
		console.log('beforeDestroy');
	},
	destroyed:function(){
		console.log('destroyed');
	},
});

vm.num=3;