<style>
  .urgency1{
    background-color:#C5FFCB;
  }
  .urgency2{
    background-color: #FFEBC5;
  }
  .urgency3{
    background-color: #FFC5C5;
  }
</style>

<template>
  <div>
    <div v-for="date in sortedTaskDates" class="modal timeLineModal" :id="date.deadline">
      <div class="modal-header" :class="[{urgency1: date.highestUrgency===1},{urgency2: date.highestUrgency===2},{urgency3: date.highestUrgency===3}]">
        <h4>{{date.deadline}}</h4>-{{percentageDone(date)}}% of tasks done <h5><span :class="{invis:!date.last}">: Final deadline</span></h5> 
        <h6>
          <span v-if="date.highestUrgency===1"></span>
          <span v-if="date.highestUrgency===2">!: There are urgent tasks due today!</span>
          <span v-if="date.highestUrgency===3">!!: There are very urgent tasks due today!</span>
          <span v-if="date.highestUrgency===4">!!!: There are very urgent tasks due today!!!</span>
        </h6>
      </div>
      <div v-for="member in members" class="modal-content flexed">
        <div>
          <b>{{member.name}}</b>   - {{percentageDonePerMember(date, member)}}
          <nuxt-link style="float:right" :to="{path: member.name}"><i class="material-icons blackIcon">search</i></nuxt-link>
        </div>
        <div class="progress">
          <div class="determinate" :style="{width:percentageDonePerMember(date, member)}"></div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script >

import members from '~/src/members.js';
  export default{
    data(){
      return{
        members:members.members
      }
    },
    mounted(){
      $('.timeLineModal').modal();
    },
    computed:{
      
    sortedTaskDates(){
      var membersList = members.members;
      var lookup = {};
      var result = [];
      var urgencies = {};

      for (var i = 0; i < membersList.length; i++){
        for (var j = 0; j < membersList[i].tasks.length;j++) {
          var task = membersList[i].tasks[j];
          
          var deadline = task.deadline;
          if(!(deadline in urgencies)){
            urgencies[deadline] = task.version;
          }else{
            if(urgencies[deadline]<task.version){
              urgencies[deadline] = task.version
            }
          }

          if (!(deadline in lookup)) {
            lookup[deadline] = 1;
            result.push({"deadline":deadline, "last":false, "highestUrgency":0});
          }
        } 
      }
      for(var i=0; i<result.length;i++){
        var deadline=result[i].deadline;
        result[i].highestUrgency=urgencies[deadline];
      }
      result.sort(function (a, b) {
        var newADate = new Date(a.deadline)
        var newBDate = new Date(b.deadline)
        return newADate-newBDate;
      });
      result[result.length-1].last=true;
      return result;
    }
    },
    methods:{
      percentageDonePerMember(date, member){
        var dateTasks = member.tasks.filter(task => task.deadline===date.deadline);
        var doneDateTasks = dateTasks.filter(task => task.done()===true)
        return dateTasks.length!==0 ? (doneDateTasks.length/dateTasks.length)*100 + "%" : "No tasks for this deadline";
      },
      percentageDone(date){
        var membersList = members.members;
        var totalAmountDone=0;
        var totalAmount=0;
        for(var i=0; i<membersList.length;i++){
          var dateTasks = membersList[i].tasks.filter(task => task.deadline===date.deadline);
          var doneDateTasks = dateTasks.filter(task => task.done()===true)
          totalAmount+=dateTasks.length;
          totalAmountDone+=doneDateTasks.length
        }
        return (totalAmountDone/totalAmount)*100;
      }
    }
  }
</script>