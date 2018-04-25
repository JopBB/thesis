<style>

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
</style>


<template>
  <div>
    <navbar></navbar>
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

      <button class="modal-trigger btn-flat" data-target="warning1">Warning1</button>

      <button class="modal-trigger btn-flat" data-target="warning2">Warning2</button>


      <button class="modal-trigger btn-flat" data-target="warning3">Warning3</button>

      <div class="modal warnings" id="warning1">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>You have not completed one or more of your tasks. By not completing your tasks on time you endanger the project. However, besides having an impact on your own work, you also impact the work and experience of your teammates. Please think about them and refrain from slacking behind and dissapointing your teammates. Next time your teammates will be informed about your behavior.</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">I'll work harder in the future</a>
        </div>
      </div> 

      <div class="modal warnings" id="warning2">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>You have now not completed a bunch of tasks in a row. Your teammates will now be officially informed about your behavior. However, it is not too late. Please reconsider contributing to the project. Next tim your lecturer will be informed.</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">I will actually start working now</a>
        </div>
      </div> 

      <div class="modal warnings" id="warning3">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>You have been letting your teammates down by not completing your tasks at all. The lecturer will now be informed and consequences may be decided on by them. </p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">I will do the right thing from now on</a>
        </div>
      </div> 

    </div>
  </div>
  
</template>




<script>
import swal from 'sweetalert2';
import members from '~/src/members.js';
import navbar from '~/src/navbar.vue';
export default {
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
      members: members.members
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
        a = a.deadline.split('/').reverse().join('');
        b = b.deadline.split('/').reverse().join('');
        return a - b;
      });
      result[result.length-1].last=true;
      return result;
    }
  },
  mounted(){
    $('.modal').modal();
  }
}
</script>