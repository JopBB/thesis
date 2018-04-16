<style>
	body{
	}

	#buttonUnit{
    width:200px;
    height:200px;
  }

  .blueBorder{
    border: 5px solid green;
  }

  .redBorder{
    border:6px solid red;
  }
</style>


<template>
  <div>
  	<div id="maps">
  		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1219.27017132169!2d4.946073531792972!3d52.32434288906796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snl!4v1520784073588" width="600" height="450" frameborder="0" style="border:0"></iframe>
  	</div>

    <div id="buttonUnit" class="blueBorder" @click="anotherFunctionName()">

    </div>

  </div>
  
</template>




<script>
import swal from 'sweetalert2';
export default {
  head: {
    title: 'Home page',
    script: [
       { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
       { src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.js'}

    ],
    link: [
       { rel:'stylesheet', href: '//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"'}
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
      console.log('blablabla');
      $("#buttonUnit").addClass("redBorder");
      $("#buttonUnit").removeClass("blueBorder");
    }
  }
}
</script>