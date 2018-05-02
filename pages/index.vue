<style>
  body{
    overflow: hidden;
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
    top:-4vh;
    font-size: 9pt;
  }
  .lastSpan{
    top:-4px;
    position: relative;
  }
  .modal{
    height:415px;
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
      <div class="timeline flexed valign-wrapper">
        <div class="timelineBlackline flexed">
          <button v-for="date in sortedTaskDates" :class={finalDeadline:date.last} class="btn-floating btn-large red modal-trigger timelineButton" :data-target="date.deadline">
            <span :class={lastSpan:date.last}> {{date.deadline}}</span>
          </button>
        </div>     
      </div>

      <div v-for="date in sortedTaskDates" class="modal" :id="date.deadline">
        <div class="modal-header">
          <h4>{{date.deadline}}<span :class="{invis:!date.last}">: Final deadline</span></h4> 
        </div>
        <div v-for="member in members" class="modal-content flexed">
          <div>
            {{member.name}} - {{percentageDone(date, member)}}
            <nuxt-link style="float:right" :to="{path: member.name}"><i class="material-icons blackIcon">zoom_in</i></nuxt-link>
          </div>
          <div class="progress">
            <div class="determinate" :style="{width:percentageDone(date, member)}"></div>
          </div>
        </div>
      </div> 
    </div>
  </div>
  
</template>




<script>
import swal from 'sweetalert2';
import members from '~/src/members.js';
import navbar from '~/src/navbar.vue';
import currentDate from '~/src/currentDate.vue';
export default {
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
      members: members.members,
      firstMember: members.members[0].tasks
    }
  },
  methods:{
    toggleTasks(date){
      if($("[id="+"'"+date.deadline+"'"+"]").hasClass("invis")){
        $("[id="+"'"+date.deadline+"'"+"]").removeClass("invis")  
      }else{
        $("[id="+"'"+date.deadline+"'"+"]").addClass("invis")  
      }      
    },
    percentageDone(date, member){
      var dateTasks = member.tasks.filter(task => task.deadline===date.deadline);
      var doneDateTasks = dateTasks.filter(task => task.done()===true)
      return dateTasks.length!==0 ? (doneDateTasks.length/dateTasks.length)*100 + "%" : "No tasks for this deadline";
    }
  },
  computed:{
    sortedTaskDates(){
      var membersList = members.members;
      var lookup = {};
      var result = [];
      for (var i = 0; i < membersList.length; i++){
        for (var j = 0; j < membersList[i].tasks.length;j++) {
          var task = membersList[i].tasks[j];
          var deadline = task.deadline;
          if (!(deadline in lookup)) {
            lookup[deadline] = 1;
            result.push({"deadline":deadline, "last":false});
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
    }
  }
}
</script>