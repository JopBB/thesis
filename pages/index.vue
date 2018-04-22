<style>
	body{
	}

	#buttonUnit{
    width:200px;
    height:200px;
    border-radius: 5px;
  }

  .blueBorder{
    border: 5px solid green;
  }

  .redBorder{
    border:6px solid red;
  }

  .image-upload > input {
 /*   visibility:hidden;
    width:0;
    height:0*/
  }
  .invis{
    display:none;
  }
</style>


<template>
  <div class="container">
  	<div class="card">
      <div class="card-content">
        <span class="card-title">Sample Project</span>
      </div>
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab"><a href="#test4">Test 1</a></li>
          <li class="tab"><a class="active" href="#test5">Test 2</a></li>
          <li class="tab"><a href="#test6">Test 3</a></li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <div id="test4">Test 1</div>
        <div id="test5">Test 2</div>
        <div id="test6">Test 3</div>
      </div>
    </div>

    <div id="buttonUnit" class="blueBorder" @click="anotherFunctionName()">

    </div>

    <div v-for="member of members" class="card-panel purple lighten-2">
      {{member.name}}
    
      <div v-for="task of member.tasks" v-bind:class="{teal : task.done}" class="card-panel red lighten-2">
        {{task.deadline}} - {{task.label}}
        <label>
          <input v-bind:disabled="!task.uploaded" @click="task.switchDone()" type="checkbox" class="filled-in" />
          <span></span>
        </label>
        <div class="image-upload">
          <input id="file-input" type="file" />
          <input @click="task.switchUploaded()" type="submit">
        </div>
        <i v-bind:class="{invis : !task.uploaded}" class="material-icons">check</i>
      </div>
    </div>
  </div>
  
</template>




<script>
import swal from 'sweetalert2';
import Task from '~/src/Task.js';
import Person from '~/src/Person.js';
import members from '~/src/members.js';
export default {
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
      tasks: [new Task("5 maart","code tikken"), new Task("6 maart", "paper schrijven")],
      members: members.members
    }
  },
  methods:{
    anotherFunctionName(){
      if(jQuery){
        console.log(members[0])
      }
      $("#buttonUnit").addClass("redBorder");
      $("#buttonUnit").removeClass("blueBorder");
    }
  }
}

if (process.browser) {
  window.onNuxtReady((app) => {
      $('.tabs').tabs();
  });
  $("input[type=file]").on('change',function(){
    $('#success').removeClass("invis");
  });
}
</script>