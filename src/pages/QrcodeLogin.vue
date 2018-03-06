<template>
  <div id="main">
      <div id="pc">
          <img src="../assets/pc.png">
          <p>电脑端登录确认</p>
      </div>
      <div id="buttons-group">
          <button class="confirm-btn btn" @click="login">登录</button>
      </div>
  </div>
</template>

<script>
import { validWinLogin } from '@/api/'
export default {
  data () {
    return {
    }
  },
  methods: {
    login () {
      alert('1')
      alert(this.$route.query.id)
      validWinLogin({id: this.$route.query.id}).then((res) => {
        this.$router.replace({path: '/MyBars'})
      }).catch((error) => {
        alert(error)
      })
    }
  }
}
</script>

<style lang="less" scoped>
#main {
  background-color: #f3f2f7;
  position: relative;
  height: 100%;
}

#pc {
  position: absolute;
  top: 10%;
  left: 50%;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
  text-align: center;
}

#pc img {
  max-width: 100%;
}

#pc p {
  margin-top: 6px;
  font-size: 18px;
}

#buttons-group {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
}

.btn {
  border: 0;
  display: block;
  margin: 0 auto 20px;
  background: transparent;
  padding: 4px 80px;
  font-size: 16px;
}

.confirm-btn {
  border: 1px solid #63c355;
  color: #63c355;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.cancel-btn {
  color: #818085;
}

#qcrode-tip {
  position: absolute;
  top: 50%;
  left: 0;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  width: 100%;
  text-align: center;
  color: #ff3737;
}
</style>
