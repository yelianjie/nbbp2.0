<template>
  <div class="bar-list">
      <ul>
        <li class="bar-item flex" v-for="(v,i) in barsList" :key="i" @click="pageToBarInfo">
          <div class="bar-img">
            <img src="../../assets/logo.png" alt="">
          </div>
          <div class="bar-info flex flex-1 flex-v flex-pack-center">
            <h2 class="bar-name">{{v.name}}</h2>
            <div class="bar-address">{{v.address}}</div>
          </div>
          <div class="bar-distance flex flex-v flex-pack-center">
            <span>{{v.distance}}米</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>

export default {
  props: ['barsList'],
  components: {

  },
  data () {
    return {
    }
  },
  methods: {
    pageToBarInfo () {
      this.$router.push({path: '/AgentBarInfo'})
    }
  }
}
</script>

<style lang="less" scoped>
.bar-item {
  padding: 0.2rem;
}
.bar-img {
  width: 1rem;
  margin-right: 0.2rem;
  img {
    width: 1rem;
    height: 1rem;
  }
}
.bar-name {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.bar-address {
  font-size: 12px;
  line-height: 1.5;
  color: #ccc;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.bar-distance {
  margin-left: 0.1rem;
  span {
    font-size: 14px;
  }
}
</style>
