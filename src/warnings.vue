<style>
  .modal.warnings{
    bottom:auto;
    top:30%;
    height:auto;
  }
</style>

<template>
  <div>
          <div class="modal warnings" id="warning1">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>You have not completed one or more of your tasks. By not completing your tasks on time you endanger the project. However, besides having an impact on your own work, you also impact the work and experience of your teammates. Please think about them and refrain from slacking behind and dissapointing your teammates. Next time your teammates will be informed about your behavior. This message will also be emailed to you.</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">I'll work harder in the future</a>
        </div>
      </div> 

      <div class="modal warnings" id="warning2">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>You have now not completed a bunch of tasks in a row. Your teammates will now be officially informed about your behavior through this application and email. However, it is not too late. Please reconsider contributing to the project. If you continue free-riding, the lecturer will be informed about your behavior through email.</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">I will actually start working now</a>
        </div>
      </div> 

      <div class="modal warnings" id="warning3">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>You have been letting your teammates down by not completing your tasks at all. Your lecturer will now be informed and consequences may be decided on by them.</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">I will learn from this and do the right thing in future projects</a>
        </div>
      </div> 

      <div v-for="member in members" class="modal warnings" :id="member.name">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>{{member.name}} has not been completing their tasks a couple of times now and they've received a warning through email. It might be a good idea to talk to {{member.name}}, in order to get their priorities straight.<br /> The next time {{member.name}} misses a deadline the lecturer will be informed about this through email.</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">OK, good to know!</a>
        </div>
      </div>

      <div v-for="member in members" class="modal warnings" :id="member.name + '2'">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>{{member.name}} has not been completing their tasks a bunch of times now and we thought you should know that the lecturer has been contacted about this.</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">OK, good to know!</a>
        </div>
      </div>

  </div>
</template>

<script>

import members from '~/src/members.js';
  export default{
    data(){
      return{
        members:members.members
      }
    },
    mounted(){
      $('.modal').modal();  
    }
    
  }
</script>

