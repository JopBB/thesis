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
      <button @click="currentDateState.previousWeek()" class="btn-floating"><i class="material-icons">chevron_left</i></button>
      <h1>{{currentDateState.currentDateString()}}</h1>
      <button @click="currentDateState.nextWeek()" class="btn-floating"> <i class="material-icons">chevron_right</i></button>
    </div>
  </div>
</template>

<script>
  import currentDateState from '~/src/currentDateState.js';
  export default{
    data(){
      return{
        currentDateState:currentDateState
      }
    }
  }
</script>

