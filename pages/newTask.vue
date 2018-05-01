<style>
  .datepicker-modal{
    max-height: 346px;
  }
</style>


<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div>
        <h1>New Task</h1>
        <div class="newTaskForm">
          <div class="input-field col m6">
            <div class="select-wrapper">
              <select>
                <option value="" disabled selected>Choose your option</option>
                <option v-for="member in members" :value=member>{{member.name}}</option>
              </select>
            </div>
          </div>

        <div class="input-field col s6">
          <input id="taskName" type="text" class="validate">
          <label for="taskName">Task Name</label>
        </div>
        
        <div class="input-field col s6">
          <input type="text" id="deadline" class="datepicker">
          <label for="deadline">Deadline</label>
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
  },
  mounted(){
    $('select').formSelect();
    $('.datepicker').datepicker();
  }
}
</script>