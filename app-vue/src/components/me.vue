<template>
  <div class="me">
    <img src="images/me.jpg" class="avatar" alt="作者">
    <div class="me-info">
      <form class="form-horizontal mt30">
        <div class="form-group">
          <label class="control-label">Name</label>
          <div class="inline-block">
            <p class="form-control-static">Chosan</p>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label">Email</label>
          <div class="inline-block">
            <p class="form-control-static">179817004@qq.com</p>
          </div>
        </div>
         <div class="form-group">
          <label class="control-label">Github</label>
          <div class="inline-block">
            <p class="form-control-static"><a href="//github.com/Cinux-Chosan" target="_blank">github.com/Cinux-Chosan</a></p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  .me {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    color: #fff;
    .avatar {
      width: 40%;
      border-radius: 50%;
    }
    .me-info {
      flex: 1;
    }
    .form-group{
      margin-bottom: 0;
      border-bottom: 1px solid green;
    }
    label{
      &::after{
        content: ' ' ':';
        font-size: 1.5em;
        font-weight: bold;
      }
    }
    .form-control-static{
      padding-left: 5px;
      margin-left: 5px;
      // border-left: 1px solid #fff;
    }
  }
</style>
