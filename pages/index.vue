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

    <ul v-for="member in members" class="collection with-header">
      <li class="collection-header"><h4>{{member.name}}</h4></li>
      <li v-for="task in member.tasks" v-bind:class="{teal : task.uploaded}" class="collection-item">
        <div>{{task.deadline}} - {{task.label}}
          <div class="file-field input-field">
            <div class="btn">
              <span>File</span>
              <input type="file">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text">
            </div>
          </div>
          <div class="image-upload secondary-content">
            <button @click="task.switchUploaded()" class="btn waves-effect" type="submit" name="action">Submit
              <i class="material-icons right">send</i>
            </button>
            <i v-bind:class="{invis : !task.uploaded}" class="material-icons blackColor">check</i>
          </div>
        </div>
      </li>
    </ul>
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
}
</script>