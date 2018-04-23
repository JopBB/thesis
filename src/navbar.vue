<style>
  a:hover{
    text-decoration: none;
    color:inherit;
  }
  nav{
    background-color: #008BA2;
  }
  nav .nav-title{
    padding-left:1%;
  }
</style>

<template>
  <div>
    <ul id="dropdown1" class="dropdown-content">
      <li v-for="member in members"><a :href="'tasks/' + member.name">{{member.name}}</a></li>
    </ul>
    <nav class="nav-extended">
      <div class="nav-content">
        <span class="nav-title">Some sort of project</span>
      </div>
      <div class="nav-wrapper">
        <ul class="">
          <li><a href="#!">Timeline</a></li>
          <li><a href="#!">Information</a></li>
          <!-- Dropdown Trigger -->
          <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Tasks<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import members from '~/src/members.js';
  export default{
    data(){
      return{
        members: members.members
      }
    }
  }
  if (process.browser) {
  window.onNuxtReady((app) => {
      $(".dropdown-trigger").dropdown();
  });
}
</script>

