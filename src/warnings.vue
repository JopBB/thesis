<style>
  .modal.warnings{
    bottom:auto;
    top:30%;
  }
</style>

<template>
  <div>
          <div class="modal warnings" id="warning1">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>You have not completed one or more of your tasks. By not completing your tasks on time you endanger the project. However, besides having an impact on your own work, you also impact the work and experience of your teammates. Please think about them and refrain from slacking behind and dissapointing your teammates. Next time your teammates will be informed about your behavior.</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">I'll work harder in the future</a>
        </div>
      </div> 

      <div class="modal warnings" id="warning2">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>You have now not completed a bunch of tasks in a row. Your teammates will now be officially informed about your behavior. However, it is not too late. Please reconsider contributing to the project. Next tim your lecturer will be informed.</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">I will actually start working now</a>
        </div>
      </div> 

      <div class="modal warnings" id="warning3">
        <div class="modal-content">
          <h3 class="header">Warning</h3>
            <p>You have been letting your teammates down by not completing your tasks at all. The lecturer will now be informed and consequences may be decided on by them. </p>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">I will do the right thing from now on</a>
        </div>
      </div> 
  </div>
</template>

<script>
  export default{
    mounted(){
      $('.modal').modal();  
    }
    
  }
</script>

