<style>
  .datepicker-modal{
    max-height: 346px;
  }
</style>


<template>
  <div>
    <navbar></navbar>
    <currentDate></currentDate>
    <div class="container">
      <div>
        <h1>New Task</h1>
        <div class="newTaskForm">
          <div class="input-field col m6">
            <div class="select-wrapper">
              <select v-model="taskMember">
                <option value="" disabled selected>Group member</option>
                <option v-for="member in members" :value=member>{{member.name}}</option>
              </select>
            </div>
          </div>

          <div class="input-field col s6">
            <input v-model="taskName" id="taskName" type="text">
            <label for="taskName">Task Name</label>
          </div>
          
          <div class="input-field col s6">
            <input type="text" id="deadline" class="datepicker">
            <label for="deadline">Deadline</label>
          </div>

          <div class="input-field col col-6 s6">
            <input v-model="minDaysNeeded" id="minDaysNeeded" type="number">
            <label for="minDaysNeeded">Amount of days needed to complete (estimation)</label>
          </div>

          <!-- <div class="col col-6">
            <label for="uploaded">
              <input type="checkbox" v-model="uploaded" id="uploaded">
              <span>uploaded for debugging</span>
            </label>
          </div> -->

          <button class="btn" type="submit" @click="addTask()">Add Task
            <i class="material-icons right">send</i>
          </button>

         

        </div>
      </div>
    </div>
  </div>
  
</template>




<script>
import swal from 'sweetalert2';
import members from '~/src/members.js';
import navbar from '~/src/navbar.vue';
import Task from '~/src/Task.js';
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
      taskMember:"",
      taskName:"",
      taskDeadline:"",
      minDaysNeeded:"",
      uploaded:false

    }
  },
  methods:{
    addTask(){
      console.log(this.minDaysNeeded)
      if(this.taskMember==="" || this.taskName==="" || $('.datepicker').val()==="" || this.minDaysNeeded===""){
        swal('Please fill in all the fields', '', 'warning')
        return;
      }
      this.taskDeadline=$('.datepicker').val()
      for(var i=0; i<this.members.length;i++){
        if(this.members[i]===this.taskMember){
          this.members[i].tasks.push(new Task(new Date(this.taskDeadline),this.taskName, this.uploaded, this.minDaysNeeded, 1));
          swal('New task was added to ' + this.taskMember.name + '\'s list!', '','success')
        }
      }
    }
  },
  mounted(){
    $('select').formSelect();
    $('.datepicker').datepicker();

  }
}
</script>