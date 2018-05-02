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
    <warnings></warnings>
    <div class="row">
      <button @click="previousWeek()" class="btn-floating"><i class="material-icons">chevron_left</i></button>
      <h1>{{currentDateState.currentDateString()}}</h1>
      <button @click="nextWeek()" class="btn-floating"> <i class="material-icons">chevron_right</i></button>
    </div>
  </div>
</template>

<script>
  import currentDateState from '~/src/currentDateState.js';
  import members from '~/src/members.js';
  import warnings from '~/src/warnings.vue';
  export default{
    components:{
      warnings
    },
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
        if(membersList[0].amountOfSlackingDone()>2){
          $('#warning3').modal('open');  
          return;
        }
        if(membersList[0].amountOfSlackingDone()>1){
          $('#warning2').modal('open');
          return;  
        }
        if(membersList[0].amountOfSlackingDone()>0){
          $('#warning1').modal('open');
          return;  
        }
      }
    }
  }
</script>

