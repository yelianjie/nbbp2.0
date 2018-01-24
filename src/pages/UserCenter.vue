<template>
  <div class="container" style="background-color:#121420;">
    <div class="user-top">
      <div class="user-box1 flex flex-align-center">
        <div class="flex-1 avatar flex flex-align-center"><img src="../assets/logo.png"/></div>
        <div class="edit-user flex flex-align-center">
          <span class=""><router-link :to="{path: '/'}">编辑资料</router-link></span>
          <span class=""><svg-icon icon-class="share"/></span>
        </div>
      </div>
      <div class="user-box2">
        <p class="white">鲜花</p>
        <div class="flex u2">
          <span class="level level-1">V1</span>
          <span class="f12 point">234积分</span>
        </div>
        <div class="rpxline" style="background-color: #645bc4;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@iconBg: #21313a;
@marginBottom: 0.2rem;
.user-top {
  padding: 0.2rem 0.4rem;
  .user-box1 {
    margin-bottom: @marginBottom;
  }
  .avatar {
    img {
      display: block;
      width: 1.7rem;
      height: 1.7rem;
      border: 0.1rem solid @iconBg;
      border-radius: 50%;
    }
  }
  .edit-user {
    span {
      padding: 0.15rem 0.25rem;
      background-color: @iconBg;
      border-radius: 2px;
      a {
        color: #fff;
        font-size: 14px;
      }
      &:last-child {
        color: #fdd907;
        margin-left: 10px;
      }
    }
  }
  .user-box2 {
    .u2 {
      margin: 0.15rem 0;
    }
    .point {
      color: #61667a;
      margin-left: 4px;
    }
  }
}

</style>
