<template>
	<div class="container">
		<navbar></navbar>

		Hello {{params.name}}
		<div v-for="task in memberTasks">{{task.label}}</div>
	</div>
</template>

<script>
 	import members from '~/src/members.js';
 	import navbar from '~/src/navbar.vue';
	export default{
		components:{
		  navbar
		},
		head: {
		    title: 'Tasks',
		    script: [
		       { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js' },
		       { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js'}

		    ],
		    link: [
		       { rel:'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css'},
		       { rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
		    ]
		},
		data(){
			return{
				params:this.$route.params,
				members:members.members
			}
		},
		computed:{
			memberTasks: function(){
				var membersList = members.members;
				for (var i = 0; i < membersList.length; i++){
					if(membersList[i].name===this.$route.params.name){
						return membersList[i].tasks;
					}
				}
			}
		}
	}
</script>