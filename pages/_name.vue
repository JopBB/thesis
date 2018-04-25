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
  .taskCheck{
  	margin:0 10px;
  }
  .taskDone{
  	background-color: #C5FFCB !important;
  }
  .taskNotDone{
  	background-color: #FFC5C5 !important;
  }
  .taskUploaded{
  	background-color: #FFEBC5 !important;
  }
  .niceBlue{
  	background-color: #008BA2;
  }
  .collection .collection-item{
  	margin-bottom:8px;
  	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  	border-bottom:none;
  }
  .collection.with-header .collection-header{
  	border:1px solid #eee;
  }
  .collection.with-header{
  	border:none;
  }
  .textUp{
    top:-6px;
    position: relative;
  }
</style>
<template>
	<div>
		<navbar></navbar>
		<div class="container">
			<ul v-for="" class="collection with-header">
		      <li class="collection-header"><h4>{{params.name}}</h4></li>
		      <li v-for="task in memberTasks" v-bind:class="[{ taskDone: task.done() }, { taskUploaded: task.uploaded && !task.reviewed}, { taskNotDone : !task.uploaded}]" class="collection-item">
		        <strong>{{task.deadline}} </strong> - {{task.label}}
		        <div class="secondary-content taskCheck">
		        	<label>
	       				<input v-bind:checked="task.uploaded" type="checkbox" class="filled-in" disabled="disabled" />
	   					<span>Uploaded</span>
	      			</label>
		        </div>
		        <div class="secondary-content taskCheck">
		        	<label>
	       				<input v-model="task.reviewed" v-bind:disabled="!task.canBeReviewed" type="checkbox" class="filled-in" />
	   					<span v-if="!task.canBeReviewed && !task.isMine" ref="reviewedBox" data-position="top" data-tooltip="Download the document first before checking the reviewed-box!" >Reviewed</span>
	   					<span v-if="!task.canBeReviewed && task.isMine" ref="reviewedBox" data-position="top" data-tooltip="You cannot review your own tasks" >Reviewed</span>
	   					<span v-if="task.canBeReviewed" >Reviewed</span>
	      			</label>
		        </div>
	        		<div v-if="task.isMine" style="text-align: right">
			          <div @click="task.switchCanBeUploaded()" class="file-field input-field">
			            <div class="btn niceBlue">
			              <span class="textUp">File</span>
			              <input type="file">
			            </div>
			            <div class="file-path-wrapper">
			              <input class="file-path validate" type="text">
			            </div>
			          </div>
			          <button v-bind:disabled="!task.canBeUploaded" style="float:none;" @click="task.switchUploaded()" class="btn niceBlue" type="submit" name="action">Submit
			            <i class="material-icons right">send</i>
			          </button>
			      	</div>
			      	<div v-if="!task.isMine && task.uploaded" class="secondary-content">
			      		<a href="sample-1.jpg" download><i @click="task.switchCanBeReviewed()" class="material-icons blackIcon">file_download</i></a>
			      	</div>
		        
		      </li>
		    </ul>
		</div>
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
		    title: 'LiftOff',
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
		mounted(){
	      $(this.$refs.reviewedBox).tooltip();
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