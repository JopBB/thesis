<style>

  .image-upload > .submitTheEvidence{
    visibility:hidden;
    width:0;
    height:0
  }
  .invis{
    visibility:hidden;
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
</style>


<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <a v-for="date in sortedTaskDates" class="btn-floating btn-large waves-effect waves-light red">
        {{date.deadline}}
      </a>
      <ul class="collection">
        <li class="collection-item" v-for="task in tasks">
          {{task.label}}
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
  },
  computed:{
    sortedTaskDates(){
      var membersList = members.members;
      var lookup = {};
      var result = [];
      for (var i = 0; i < membersList.length; i++){
        for (var task, j = 0; task = membersList[i].tasks[j++];) {
          var deadline = task.deadline;
          if (!(deadline in lookup)) {
            lookup[deadline] = 1;
            result.push({"deadline":deadline, "tasks":[task]});
          }
          else{
            var found = result.find(function(element) {
              return element.deadline===deadline;
            });
            found.tasks.push(task);
          }
        } 
      }
      result.sort(function (a, b) {
        return a.deadline.localeCompare(b.deadline);
      });
      return result;
    }
  }
}
</script>