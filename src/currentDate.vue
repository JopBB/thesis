<style>
  .row{
    place-content:center;
  }
  h1{
    margin: 0 10px;
  }
  .row{
    margin-top:2px;
  }
  .btn-floating{
    background-color: #008BA2;
  }
  .btn-floating:active, .btn-floating:focus{
    outline:none;
  }
</style>

<template>
  <div>
    <div class="row">
      <button @click="previousWeek()" class="btn-floating"><i class="material-icons">chevron_left</i></button>
      <h1>{{currentDateState.currentDateString()}}</h1>
      <button @click="nextWeek()" class="btn-floating"> <i class="material-icons">chevron_right</i></button>
    </div>
    <button class="btn" @click="testfunction()">test</button>
  </div>
</template>

<script>
  import currentDateState from '~/src/currentDateState.js';
  import members from '~/src/members.js';
  export default{
    data(){
      return{
        currentDateState:currentDateState,
        members: members.members
      }
    },
    methods:{
      previousWeek(){
        currentDateState.previousWeek();
        this.checkForWarning();
      },
      nextWeek(){
        currentDateState.nextWeek();
        this.checkForWarning();
      },
      checkForWarning(){
        var membersList = members.members;
        console.log('blablabla')
        if(membersList[0].amountOfSlackingDone()>0){
          console.log('jjajajjajaj')
          $('#warning1').modal('open');  
        }
      }
    }
  }
</script>

