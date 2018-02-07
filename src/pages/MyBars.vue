<template>
  <div class="container min-h bg1">
    <div data-v-7de79557="" class="middle tc white bg2" style="padding: 0.36rem 0;margin-bottom:0.1rem;">
      <p data-v-7de79557="" class="f14">当前累计未提现收益</p>
      <p data-v-7de79557="" class="benefit-account">325</p>
      <p data-v-7de79557="" class="f16">累计总收益：10000 元</p>
    </div>
    <div class="bars">
      <swipeout>
        <swipeout-item :sensitivity="15" transition-mode="reveal" :auto-close-on-button-click="false" v-for="(v, i) in barList" :key="i">
          <div slot="right-menu">
            <swipeout-button @click.native="onDeleteBar(i, v.id)" type="primary" background-color="#D23934">删除</swipeout-button>
          </div>
          <div slot="content" class="vux-1px-t flex flex-align-center bg2" style="padding: 0.2rem 0.25rem;" @click="goToBar(v.id)">
            <img :src="v.logo | prefixImageUrl" style="width: 1rem;height: 1rem;margin-right: 0.4rem;"/>
            <div class="flex-1 flex flex-v">
              <p class="white f16">{{v.name}}</p>
              <p class="f14" style="color: #ddd;">注册时间：{{v.add_time}}</p>
            </div>
          </div>
        </swipeout-item>
      </swipeout>
    </div>
    <bp-dialog :title="'提示'" v-model="confirmVisible" @onConfirm="confirmDelete">
      <p class="f16">确认删除该酒吧吗？</p>
      <p class="f14" style="color:#a09e9e;">确认后将无法查看收益及提现</p>
      <p class="f12" style="color:red;">该操作无法恢复</p>
  </bp-dialog>
  </div>
</template>

<script>
import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
import { getBars, deleteBar } from '@/api/'
import BpDialog from '../components/bpDialog'
export default {
  data () {
    return {
      confirmVisible: false,
      barList: [],
      deleteInfo: null
    }
  },
  beforeRouteEnter (to, from, next) {
    document.title = '我的酒吧'
    next()
  },
  created () {
    getBars().then((res) => {
      this.barList = res.result.hotelList
    })
  },
  methods: {
    confirmDelete () {
      deleteBar({ht_id: this.deleteInfo.id}).then((res) => {
        this.barList.splice(this.deleteInfo.index, 1)
        this.confirmVisible = false
      })
    },
    onDeleteBar (index, id) {
      this.confirmVisible = true
      this.deleteInfo = {
        index: index,
        id: id
      }
    },
    goToBar (barId) {
      this.$router.push({
        path: `/BusinessCenter/${barId}`
      })
    }
  },
  components: {
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    BpDialog
  }
}
</script>

<style scoped>
</style>
