<template>
	<div>
		Hello {{params.name}}
	</div>
</template>

<script>
 	import members from '~/src/members.js';
	export default{
		data(){
			return{
				params:this.$route.params,
				members:members.members
			}
		}
	}
</script>