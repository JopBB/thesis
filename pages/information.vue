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
      <div>
        <h3>Deadline: 4 June</h3>

        <h3>Members:</h3>
        <p v-for="member in members">
          {{member.name}}
        </p>

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
  }
}
</script>