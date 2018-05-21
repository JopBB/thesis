<style>
  h1{
    margin: 0 10px;
  }
  .row{
    margin-top:20px;
    place-content:center;
  }
  .btn-floating{
    background-color: #008BA2;
  }
  .btn-floating:active, .btn-floating:focus{
    outline:none;
  }
</style>

<template>
  <div>
    <warnings></warnings>
    <div class="row">
      <button @click="previousDay()" class="btn-floating"><i class="material-icons">chevron_left</i></button>
      <h1>{{currentDateState.currentDateString()}}</h1>
      <button @click="nextDay()" class="btn-floating nextDayButton"> <i class="material-icons">chevron_right</i></button>
    </div>
  </div>
</template>

<script>
  import currentDateState from '~/src/currentDateState.js';
  import members from '~/src/members.js';
  import Task from '~/src/Task.js';
  import ReviewTask from '~/src/ReviewTask.js';
  import warnings from '~/src/warnings.vue';
  import Warning from '~/src/Warning.js';
  export default{
    components:{
      warnings
    },
    data(){
      return{
        currentDateState:currentDateState,
        members: members.members,
        Warning: Warning
      }
    },
    methods:{
      previousDay(){
        currentDateState.previousDay();
      },
      nextDay(){
        currentDateState.nextDay();
        this.checkForWarning();
        this.duplicateSlackedTasks();
        //FOR TESTING PURPOSES!
          this.reviewAllReviews();
        //END
        setTimeout(function(){
          $('.timeLineModal').modal();
        }, 300);
        
      },
      reviewAllReviews(){
        var membersList = members.members
        for(var i=1; i<membersList.length; i++){
          for(var j=0; j<membersList[i].reviewTasks.length;j++){
            membersList[i].reviewTasks[j].setDone();
          }
        }
        for(var q=0; q<membersList[0].tasks.length;q++){
          if(membersList[0].tasks[q].uploaded===true){
            membersList[0].tasks[q].review="good"
          }
        }
      },
      checkForWarning(){
        var membersList = members.members
        for(var i=0; i<membersList.length; i++){
          if(membersList[i].amountOfSlackingDone()>0 && membersList[i].warnings[0] === undefined){

            if(i===0){
              $('#warning1').modal('open');
            }
            membersList[i].warnings.push(new Warning(1, membersList[i].name, currentDateState.currentDate))
            return;
          }

          if(membersList[i].amountOfSlackingDone()>2 && membersList[i].warnings[1] === undefined){
            if(i===0){
              $('#warning2').modal('open');
            }
            if(i!==0 && !members.participantIsSlacker){
              $('#'+membersList[i].name).modal('open');
            }
            membersList[i].warnings.push(new Warning(2, membersList[i].name, currentDateState.currentDate))
            return;
          }

          if(membersList[i].amountOfSlackingDone()>3 && membersList[i].warnings[2] === undefined){
            if(i===0){
              $('#warning3').modal('open');
            }
            if(i!==0 && !members.participantIsSlacker){
              $('#'+membersList[i].name+'2').modal('open');
            }
            membersList[i].warnings.push(new Warning(3, membersList[i].name, currentDateState.currentDate))
            return;
          }
          
          
        }
      },
      duplicateSlackedTasks(){
        var membersList = members.members;
        for(var i=0; i<membersList.length;i++){
          for(var j=0; j<membersList[i].tasks.length; j++){
            var oldTask = membersList[i].tasks[j];
            var newDeadline = this.setNewDate(oldTask.deadline, oldTask.minDaysNeeded)
            if(oldTask.isPastDeadline() && !oldTask.uploaded ){
              if(!oldTask.oldTask){
                oldTask.oldTask=true;
                if(oldTask.version===1){
                  var newTask = new Task(newDeadline, oldTask.label + ', - retry after task not completed', false, oldTask.minDaysNeeded, 2)
                  membersList[i].tasks.push(newTask)
                  // this.createNewReviewTask(newTask)
                }
                if(oldTask.version===2){
                  var newTask = new Task(newDeadline, oldTask.label + ' for 2 times', false, oldTask.minDaysNeeded, 3)
                  membersList[i].tasks.push(newTask)
                  // this.createNewReviewTask(newTask)
                }

              }
            }
          }
        }
      },
      setNewDate(date, extraTime){
        var result = new Date(date);
        result.setDate(result.getDate() + extraTime);
        return result;
      },
        createNewReviewTask(task){
          var membersList = members.members;
          var name;
          for(var i=0;i<membersList.length;i++){
            for(var j=0;j<membersList[i].tasks.length;j++){
              if(membersList[i].tasks[j].label===task.label){
                name=membersList[i].name
              }
            }
          }
          var reviewDate = this.setNewDate(task.deadline, 2);
          var taskMemberIndex;
          var reviewName="Review \'" + task.label + "\' by " + name;
          var newReview = new ReviewTask(reviewDate, reviewName)
          var reviewMemberIndex = this.getMemberIndexWithLeastTasks(name)
        console.log(membersList[reviewMemberIndex].name)
        membersList[reviewMemberIndex].reviewTasks.push(newReview) 
        },
        getMemberIndexWithLeastTasks(name){
          var membersList = members.members;
        var sorted = membersList.slice(0).sort(function(a,b){
            return (a.tasks.length+a.reviewTasks.length) > (b.tasks.length+b.reviewTasks.length)
        });

          if(sorted[0].name===name){
            return members.members.indexOf(sorted[1])
          }else{
            return members.members.indexOf(sorted[0])
          }
        }
    }
  }
</script>

