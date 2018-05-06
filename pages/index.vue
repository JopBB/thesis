<style>
  body{
    overflow-x: hidden;
  }
  .image-upload > .submitTheEvidence, .invis{
    visibility:hidden;
    width:0;
    height:0
  }
  #iconSubmit{
    color:black;
    border: 1px solid black;
    border-radius:5px;
  }
  #iconSubmit:hover{
    background-color:#AAAAAA;
  }
  .blackColor{
    color:black;
  }
  .btn-floating{

  }
  .timeline{
    height:60vh;
    position: relative;
    top:20px;
  }
  .flexed{
    display: flex;
    justify-content: space-between;
  }
  #warning1{
    height:260px;
  }
  #warning2,#warning3{
    height:220px;
  }
  .header, .modal-action{
    color:#D9534F
  }
  .finalDeadline{
    border:5px solid black !important;
  }
  .timelineBlackline{
    width:100%;
    height:1px;
    background:black;
  }
  .timelineButton{
    top:-27px;
    font-size: 9pt;
  }
  .lastSpan{
    top:-4px;
    position: relative;
  }
  .modal{
    height:415px;
  }
  .container.fullWidth{
    max-width: 100%;  
  }
  .flexedWarnings{
    display: flex;
  }
  .warningButton{
    margin-right:5px;
  }
  .timelineWarnings{
    height:200px;
  }
  .btn-floating.btn-large.urgency1{
    background-color: green;
  }
  .btn-floating.btn-large.urgency2{
    background-color: orange;
  }
  .btn-floating.btn-large.urgency3{
    background-color: red;
  }
</style>


<template>
  <div>
    <navbar></navbar>
    <currentDate></currentDate>
    <div class="container fullWidth">

      <h3>Warnings</h3>
      <div class="timeline timelineWarnings flexed">
        <div class="timelineBlackline flexedWarnings">
          <button v-for="warning in sortedWarnings"  class="btn-floating btn-large orange timelineButton warningButton" >
            <span> {{warning.owner.substring(0,2)}}</span>
          </button>
        </div>     
      </div> 

      <h3>Milestones</h3>
      <div class="timeline flexed">
        <div class="timelineBlackline flexed">
          <button v-for="date in sortedTaskDates" :class="[{finalDeadline:date.last},{urgency1: date.highestUrgency===1},{urgency2: date.highestUrgency===2},{urgency3: date.highestUrgency===3}]" class="btn-floating btn-large modal-trigger timelineButton" :data-target="date.deadline">
            <span :class={lastSpan:date.last}> {{date.deadline}}</span>
          </button>
        </div>     
      </div>
      <timelineModals></timelineModals>
    </div>
  </div>
  
</template>




<script>
import swal from 'sweetalert2';
import members from '~/src/members.js';
import navbar from '~/src/navbar.vue';
import currentDate from '~/src/currentDate.vue';
import timelineModals from '~/src/timelineModals.vue';

export default {
  components:{
    navbar,
    currentDate,
    timelineModals
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
      members: members.members,
      firstMember: members.members[0].tasks
    }
  },
  computed:{
    sortedTaskDates(){
      var membersList = members.members;
      var lookup = {};
      var result = [];
      for (var i = 0; i < membersList.length; i++){
        var highestUrgency=0;
        for (var j = 0; j < membersList[i].tasks.length;j++) {
          var task = membersList[i].tasks[j];
          var highestUrgency = membersList[i].tasks[j].version > highestUrgency ? membersList[i].tasks[j].version : highestUrgency;
          var deadline = task.deadline;
          if (!(deadline in lookup)) {
            lookup[deadline] = 1;
            result.push({"deadline":deadline, "last":false, "highestUrgency":highestUrgency});
          }
        } 
      }
      result.sort(function (a, b) {
        var newADate = new Date(a.deadline)
        var newBDate = new Date(b.deadline)
        return newADate-newBDate;
      });
      result[result.length-1].last=true;
      return result;
    },
    sortedWarnings(){
      var membersList = members.members;
      var result=[];
      for(var i=0;i<membersList.length;i++){
        for(var j=0; j<membersList[i].warnings.length;j++){
          result.push(membersList[i].warnings[j]);
        }
      }
      result.sort(function(a,b){
        var newADate = new Date(a.date)
        var newBDate = new Date(b.date)
        return newADate-newBDate;
      });
      return result;
    }
  }
}
</script>