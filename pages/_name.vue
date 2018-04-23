<style>

  .image-upload > .submitTheEvidence{
    visibility:hidden;
    width:0;
    height:0
  }
  .invis{
    visibility:hidden;
  }
  .blackIcon{
    color:black;
    border: 1px solid black;
    border-radius:5px;
  }
  .blackIcon:hover{
    background-color:#AAAAAA;
  }
  .blackColor{
    color:black;
  }
</style>
<template>
	<div class="container">
		<navbar></navbar>
		<ul v-for="" class="collection with-header">
	      <li class="collection-header"><h4>{{params.name}}</h4></li>
	      <li v-for="task in memberTasks" v-bind:class="[{ teal: task.uploaded && task.reviewed }, { yellow: task.uploaded && !task.reviewed}]" class="collection-item red lighten 2">
	        <div>{{task.deadline}} - {{task.label}}
        		<div v-if="task.isMine">
		          <div class="file-field input-field">
		            <div class="btn">
		              <span>File</span>
		              <input type="file">
		            </div>
		            <div class="file-path-wrapper">
		              <input class="file-path validate" type="text">
		            </div>
		          </div>
		          <button style="float:none;" @click="task.switchUploaded()" class="btn" type="submit" name="action">Submit
		            <i class="material-icons right">send</i>
		          </button>
		          <div class="image-upload secondary-content">
		            <i v-bind:class="{invis : !task.uploaded}" class="material-icons blackColor">check</i>
		          </div>
		      	</div>
		      	<div v-if="!task.isMine && task.uploaded" class="secondary-content">
		      		<a href="sample-1.jpg" download><i @click="task.switchReviewed()" class="material-icons blackIcon">file_download</i></a>
		      	</div>
	        </div>
	      </li>
	    </ul>
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