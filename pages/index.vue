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
</style>


<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="timeline flexed valign-wrapper">
        <button v-for="date in sortedTaskDates" class="btn-floating btn-large waves-effect waves-light red modal-trigger" :data-target="date.deadline">
        {{date.deadline}}
      </button>
      </div>

      <div v-for="date in sortedTaskDates" class="modal" :id="date.deadline">
        <div class="modal-header">
          <h4>{{date.deadline}}</h4>          
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

      <ul v-for="date in sortedTaskDates" class="invis collection with-header" :id="date.deadline">
        <li class="collection-header"><h4>{{date.deadline}}</h4></li>
        <li v-for="member in members" class="collection-item">
          {{member.name}} - {{percentageDone(date, member)}}
          <div class="progress">
            <div class="determinate" :style="{width:percentageDone(date, member)}"></div>
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
export default {
  components:{
    navbar
  },
  head: {
    title: 'Home page',
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
      var doneDateTasks = member.tasks.filter(task => task.deadline===date.deadline && task.done()===true);
      return (doneDateTasks.length/member.tasks.length)*100 + "%";
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
            result.push({"deadline":deadline, "ownerTasks":[{"task":task, "owner": membersList[i].name}]});
          }
          else{
            var found = result.find(function(element) {
              return element.deadline===deadline;
            });
            found.ownerTasks.push({"task":task, "owner":membersList[i].name});
          }
        } 
      }
      result.sort(function (a, b) {
        return a.deadline.localeCompare(b.deadline);
      });
      return result;
    }
  },
  mounted(){
    $('.modal').modal();
  }
}
</script>