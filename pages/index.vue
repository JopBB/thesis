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

    <div class="card-panel teal lighten-2">test test blah blah</div>

  </div>
  
</template>




<script>
import swal from 'sweetalert2';
export default {
  head: {
    title: 'Home page',
    script: [
       { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.js' },
       { src: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js'}

    ],
    link: [
       { rel:'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css'}
    ]
  },
  methods:{

  	switchCarLocation(){
  		$(".locationPointer").draggable();
  		this.placeCarLocation = !this.placeCarLocation;
  		if(this.placeDangerLocation){
  			this.placeDangerLocation = false;
  		}
  	},
    anotherFunctionName(){
      if(jQuery){
        console.log('yeahyeahyeah')
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