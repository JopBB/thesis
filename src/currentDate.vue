<style>
  .row{
    place-content:center;
  }
  h1{
    margin: 0 10px;
  }
  .row{
    margin-top:2px;
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
      <button @click="nextDay()" class="btn-floating"> <i class="material-icons">chevron_right</i></button>
    </div>
  </div>
</template>

<script>
  import currentDateState from '~/src/currentDateState.js';
  import members from '~/src/members.js';
  import Task from '~/src/Task.js';
  import warnings from '~/src/warnings.vue';
  export default{
    components:{
      warnings
    },
    data(){
      return{
        currentDateState:currentDateState,
        members: members.members,
        seen1:false,
        seen2:false,
        seen3:false
      }
    },
    methods:{
      previousDay(){
        currentDateState.previousDay();
        this.checkForWarning();
        this.duplicateSlackedTasks();
      },
      nextDay(){
        currentDateState.nextDay();
        this.checkForWarning();
        this.duplicateSlackedTasks();
      },
      checkForWarning(){
        var membersList = members.members;
        if(membersList[0].amountOfSlackingDone()>4 && this.seen3 === false){
          $('#warning3').modal('open');  
          this.seen3=true;
          return;
        }
        if(membersList[0].amountOfSlackingDone()>2  && this.seen2===false){
          $('#warning2').modal('open');
          this.seen2=true;
          return;  
        }
        if(membersList[0].amountOfSlackingDone()>0 && this.seen1===false){
          $('#warning1').modal('open');
          this.seen1=true;
          return;  
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
                  membersList[i].tasks.push(new Task(newDeadline, oldTask.label + ' retry after not uploaded', false, oldTask.minDaysNeeded, 2))
                }
                if(oldTask.version===2){
                  membersList[i].tasks.push(new Task(newDeadline, oldTask.label + ' 2 times', false, oldTask.minDaysNeeded, 3))
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
      }
    }
  }
</script>

