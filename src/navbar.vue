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
  .nuxt-link-exact-active{
    background-color: rgba(0,0,0,0.1);
  }
</style>

<template>
  <div>
    <ul id="dropdown1" class="dropdown-content">
      <li v-for="member in members"><nuxt-link :to="{path: member.name}">{{member.name}}</nuxt-link></li>
    </ul>
    <nav class="nav-extended">
      <div class="nav-content">
        <span class="nav-title">Some sort of project</span>
      </div>
      <div class="nav-wrapper">
        <ul class="">
          <li><nuxt-link to="/">Timeline</nuxt-link></li>
          <li><nuxt-link to="information">Information</nuxt-link></li>
          <!-- Dropdown Trigger -->
          <li><a ref="dropdown" class="dropdown-trigger" href="#!" data-target="dropdown1">Tasks<i class="material-icons right">arrow_drop_down</i></a></li>
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
    },
    mounted(){
      $(this.$refs.dropdown).dropdown();
      if($('#dropdown1 > li > .nuxt-link-exact-active').length>=1){
        $('.dropdown-trigger').addClass('nuxt-link-exact-active');
      }
    }, 
  }
</script>

