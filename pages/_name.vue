<style>
	body{
		overflow: scroll;
	}
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
	background-color: #26a69a;
	margin-top:-2px;
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
	.taskCheck button{
		margin-top:-5px;
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
	.collection.with-header .collection-header, .collection.with-header .collection-item{
		border-right:1px solid #eee;
		border-left:1px solid #eee;
	}

	.collection.with-header{
		border:none;
	}
	.textUp{
	top:-6px;
	position: relative;
	}
	input[type="radio"]:not(:checked), input[type="radio"]:checked{
		opacity: 1;
		position: relative;
	}
	.collection-item.greyBackground{
		background-color: #eee;
	}
	.container{
	max-width:100%;
	}
</style>
<template>
	<div>
		<navbar></navbar>
	    <currentDate></currentDate>
		<div class="container">
			<ul v-for="" class="collection with-header">
		      <li class="collection-header"><h4>{{params.name}}: Tasks</h4></li>
		      <li v-for="task in memberTasks" v-bind:class="[{ taskDone: task.done() && task.review==='good' }, { taskUploaded: task.uploaded && !task.reviewed}, { taskNotDone : task.review==='bad'}]" class="collection-item greyBackground">
		      	<button class="btn" @click="deleteTask(task)"><li class="material-icons">delete</li></button>
		        <strong>{{task.deadline}} </strong> - {{task.label}}
		        <div class="secondary-content taskCheck">
		        	<label>
	       				<input v-bind:checked="task.uploaded" type="checkbox" class="filled-in" disabled="disabled" />
	   					<span>Uploaded</span>
	      			</label>
		        </div>
		        <div class="secondary-content taskCheck">
		        	<button v-if="task.uploaded && findWithAttr(members, 'name', params.name)!==0 " v-bind:disabled="!task.canBeReviewed" class="btn-small tooltipped" data-position="top" data-tooltip="Download the document first before checking the reviewed-box!" @click="reviewTask(task)">Review Task
			        </button>
		        </div>
	        		<div v-if="findWithAttr(members, 'name', params.name)===0" style="text-align: right">
			          <div @click="task.switchCanBeUploaded()" class="file-field input-field">
			            <div class="btn niceBlue">
			              <span class="textUp">File</span>
			              <input type="file">
			            </div>
			            <div class="file-path-wrapper">
			              <input class="file-path validate" type="text">
			            </div>
			          </div>
			          <button v-bind:disabled="!task.canBeUploaded" style="float:none;" @click="uploadFile(task)" class="btn niceBlue" type="submit" name="action">Submit
			            <i class="material-icons right">send</i>
			          </button>
			      	</div>
			      	<div v-if="findWithAttr(members, 'name', params.name)!==0 && task.uploaded" class="secondary-content">
			      		<a href="sample-1.jpg" download><i @click="task.switchCanBeReviewed()" class="material-icons blackIcon">file_download</i></a>
			      	</div>
		        
		      </li>
		      <li class="collection-header"><h4>{{params.name}}: Reviews</h4></li>
		      <li v-for="reviewTask in memberReviewTasks" v-bind:class="{taskDone:reviewTask.done}" class="collection-item greyBackground">
		      	<strong>{{reviewTask.deadline}} </strong> - {{reviewTask.label}}
		      	<div class="secondary-content taskCheck">
		        	<label>
	       				<input v-model="reviewTask.done" type="checkbox" class="filled-in" v-bind:disabled="findWithAttr(members, 'name', params.name)!==0" />
	   					<span>Done</span>
	      			</label>
		        </div>
		      </li>
		    </ul>
		</div>
	</div>
</template>

<script>
	import swal from 'sweetalert2';
 	import members from '~/src/members.js';
 	import navbar from '~/src/navbar.vue';
 	import ReviewTask from '~/src/ReviewTask.js';
 	import currentDate from '~/src/currentDate.vue';
 	import currentDateState from '~/src/currentDateState.js';
 	import Task from '~/src/Task.js';
	export default{
		components:{
		  navbar,
		  currentDate
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
				members:members.members,
				currentDateState: currentDateState,
			}
		},
		mounted(){
	      $(this.$refs.reviewedBox).tooltip();
	    }, 
	    methods:{
	    	uploadFile: function(task){
	    		task.switchUploaded();
	    		var reviewDate = this.setNewDate(task.deadline, 2);
	    		var membersList = members.members;
	    		var taskMemberIndex;
	    		var reviewName="Review \'" + task.label + "\' by " + this.$route.params.name;
	    		var newReview = new ReviewTask(reviewDate, reviewName)
	    		for (var i = 0; i < membersList.length; i++){
					if(membersList[i].name===this.$route.params.name){
						taskMemberIndex=i;
					}
					for(var j = 0; j<membersList[i].reviewTasks.length; j++){
						if(membersList[i].reviewTasks[j].label===reviewName){
							swal('This task is already uploaded!')
							return;
						}
					}
				}
				var reviewMemberIndex = this.getMemberIndexWithLeastTasks()
				console.log(membersList[reviewMemberIndex].name)
				membersList[reviewMemberIndex].reviewTasks.push(newReview) 
	    	},
	    	getMemberIndexWithLeastTasks(){
	    		var membersList = members.members;
	    		membersList.sort(function(a,b){
	    			return (a.tasks.length+a.reviewTasks.length) > (b.tasks.length+b.reviewTasks.length)
	    		});
	    		for(var i=0; i<membersList.length;i++){
	    			var totalTasks = membersList[i].tasks.length + membersList[i].reviewTasks.length 
	    			console.log(membersList[i].name + ' heeft ' + totalTasks + ' taken in totaal')
	    		}
	    		if(membersList[0].name===this.$route.params.name){
	    			return members.members.indexOf(membersList[1])
	    		}else{
	    			return members.members.indexOf(membersList[0])
	    		}
	    	},
    		getRandomWithOneExclusion(indexToExclude){
				var rand = null;  //an integer
				var lengthOfArray = members.members.length;
			    while(rand === null || rand === indexToExclude){
			       rand = Math.round(Math.random() * (lengthOfArray - 1));
			    }
				return rand;
			},
			setNewDate(date, extraTime){
				var result = new Date(date);
				result.setDate(result.getDate() + extraTime);
				return result;
			},
			findWithAttr(array, attr, value) {
			    for(var i = 0; i < array.length; i += 1) {
			        if(array[i][attr] === value) {
			            return i;
			        }
			    }
			    return -1;
			},
			async reviewTask(task){
				var that = this;
				swal.setDefaults({
				  confirmButtonText: 'Next &rarr;',
				  showCancelButton: true
				})

				var steps = [
				  {
				    title: 'Review Task',
				    text: 'How did you think this task was performed?',
				    input:'radio',
				  	inputOptions:{
				  		'good': 'Good',
				  		'bad': 'Bad'
				  	},
				  	inputValidator: (value) => {
		    			return !value && 'You need to choose something!'
		  			}
				  }
				]
		  		var result = await swal.queue(steps);
		  			swal.resetDefaults()
				  if (result.value) {

				  	task.review=result.value[0];
				  	if(task.review==="bad"){
				  		that.copyAfterBadReview(task);
				  	}
				    swal({
				      title: 'All done!',
				      text:
				        'Successfully reviewd task with a ' + result.value[0] + ' grade ',
				      confirmButtonText: 'OK.'
				    })
				  }	
		  	},
		  	copyAfterBadReview(task){
		  		var membersList = members.members;
		  		var newDeadline = this.setNewDate(task.deadline, task.minDaysNeeded);
		  		for (var i = 0; i < membersList.length; i++){
					if(membersList[i].name===this.$route.params.name){
						membersList[i].tasks.push(new Task(newDeadline, task.label + ' retry after failed attempt', false, task.minDaysNeeded))
					}
				}
		  	},
			sortedTasks(tasks){
				tasks.sort(function (a, b) {
			        var newADate = new Date(a.deadline)
			        var newBDate = new Date(b.deadline)
			        return newADate-newBDate;
		      	});	
		      	return tasks;
			},
			deleteTask(task){
				swal({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					type: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, delete it!'
				}).then((result) => {
					if (result.value) {
						var membersList = members.members;
						var tasks;
							for (var i = 0; i < membersList.length; i++){
								if(membersList[i].name===this.$route.params.name){
									tasks=membersList[i].tasks
								}
							}
						var index=tasks.indexOf(task);
						tasks.splice(index, 1);
				    	swal(
				    		'Deleted!',
				    		'Your file has been deleted.',
				    		'success'
			    		)
				  	}
				})
			}
		},
		computed:{
			memberTasks: function(){
				var membersList = members.members;
				for (var i = 0; i < membersList.length; i++){
					if(membersList[i].name===this.$route.params.name){
						return this.sortedTasks(membersList[i].tasks);
					}
				}
			},
			memberReviewTasks: function(){
				var membersList = members.members;
				for (var i = 0; i < membersList.length; i++){
					if(membersList[i].name===this.$route.params.name){
						return membersList[i].reviewTasks;
					}
				}
			}
		}
	}
</script>