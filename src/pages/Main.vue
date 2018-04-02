<template>
  <div class="container" v-if="show">
    <onlines :peoples="onlinePeople" :payBus="payBus" @onHBChoseCustom="customHBChose" @onShowCard="showCard" v-model="onlineVisible" ref="onlines"></onlines>
    <div class="main flex flex-v">
      <div class="flex boardcast flex-align-center" v-if="notice">
        <img src="../assets/boardcast-icon.png" class="boardcast-icon">
        <div class="boardcast-scroller flex-1 flex flex-align-center">
          <MarqueeTips class="f15" :content="notice" :speed="15"></MarqueeTips>
          <!--<div class="scroller-wrap f14">
            我是一个粉刷匠，粉刷本领强粉刷本领强粉刷本领强粉刷本领强刷本领强粉刷本领强刷本领强粉刷本领强
            <marquee direction="left" befavior="scroll" scrollamount="4">我是一个粉刷匠，粉刷本领强粉刷本领强粉刷本领强粉刷本领强</marquee>
          </div>-->
        </div>
      </div>
    <div class="main-header flex flex-align-center pr">
      <div class="flex main-header-left flex-align-center">
        <div class="main-header-avatar">
          <template v-if="userInfo.grade_title && userInfo.grade_title != '平民'">
            <router-link :to="{path: '/UserCenter'}"><span class="level-icon-avatar" :style="{'background-image': 'url('+$options.filters.filterLevel(userInfo.grade_title, 'avatarIcon')+')'}"></span></router-link>
            <img :src="userInfo.headimgurl | prefixImageUrl" class="circle">
          </template>
          <template v-else>
            <router-link :to="{path: '/UserCenter'}"><img :src="userInfo.headimgurl | prefixImageUrl" class="circle"></router-link>
          </template>
        </div>
        <div class="main-header-me tc " style="margin-left: 0.3rem;">
          <router-link :to="{path: '/UserCenter'}">
          <p class="fff-bp f16" style="line-height:1;margin-bottom:2px;">我的</p>
          <!-- <p class="flex" style="height:16px;"><span class="level" :class="'level-' + userInfo.mc_level_id"  v-if="userInfo.grade_title">{{userInfo.grade_title}}</span></p> -->
          </router-link>
        </div>
      </div>
      <div class="flex-1 main-header-right">
        <div class="online-persons pr" v-for="(v, i) in onlinePeople" :key="i" @click="showCard(v)">
          <img :src="v.headimgurl | prefixImageUrl" class="circle person-avatar"/>
          <div class="send-gift-tip" v-if="i < 3">
            <img src="../assets/send-icon.png"/>
          </div>
        </div>
      </div>
      <div class="fff-bp more f13 flex flex-align-center" @click="onlineVisible = true"><span>更多</span><svg-icon  @click.native="onlineVisible = true" icon-class="arrow-right"/></div>

      <!-- 红包插入 -->
      <div class="hb-queen-container"  :class="{'in': hbState.hbScale}">
        <transition name="hb-slide">
        <div class="hb-model pr" @click="openHBModel(hbQueens[0])" v-if="hbQueens.length > 0" ref="hbModel">
          <div class="hb-count f15 circle">
            <template v-if="hbQueens[0].hb.show_time != 0 && hbQueens[0].hb.status == 0">
              {{hbQueens[0].hb.show_time}}<span class="f12">s</span>
            </template>
            <template v-if="hbQueens[0].hb.status == 1 && hbQueens[0].hb.show_time == 0">
              <span class="f16">抢</span>
            </template>
          </div>
          <div class="hb-info fff-bp f14 tc">
            <p class="hb-sender line1">{{hbQueens[0].initiator_nickname}}的红包</p>
            <p class="hb-msg">{{hbQueens[0].hb.content}}</p>
          </div>
        </div>
        </transition>
      </div>
    </div>
    <div class="flex-1 main-content" ref="scrollWrapper">
      <infinite-loading @infinite="infiniteHandler" direction="top" :distance="1" ref="infiniteLoading"  style="margin-bottom: 25px;">
        <div class="typing-indicator" slot="spinner">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span slot="no-more" class="f13">再往上拉就没有了~</span>
      </infinite-loading>
      <template v-for="(v, i) in chatlist">
        <div v-if="v.showTime" :key="v.create_time" class="tc" style="margin: -20px auto 20px;"><div class="fff-bp time-show f13">{{v.showTime}}</div></div>
        <msg :key="v.id" :index="i" :data="v" @onDelete="deleteMsg" @onLike="like" v-if="v.msg_type == 0 && v.img == ''" @onAvatar="showCard" @onShare="share" @onBp="bp" @onDs="ds"></msg>
        <msg-img :key="v.id" :index="i" :data="v" @onDelete="deleteMsg" @onPreviewImage="previewImage" @onLike="like" v-if="v.content != '' && v.msg_type == 0 && v.img != ''" @onAvatar="showCard" @onShare="share" @onBp="bp" @onDs="ds"></msg-img>
        <msg-only-img :key="v.id" :index="i" :data="v" @onDelete="deleteMsg" @onPreviewImage="previewImage" @onLike="like" v-if="v.content == '' && v.msg_type == 0" @onAvatar="showCard" @onShare="share" @onBp="bp" @onDs="ds"></msg-only-img>
        <bp-msg :key="v.id" :index="i" :data="v" @onDelete="deleteMsg" @onPreviewImage="previewImage" @onLike="like" v-if="v.msg_type == 2" @onAvatar="showCard" @onShare="share" @onBp="bp" @onDs="ds"></bp-msg>
        <ds-msg :key="v.id" :index="i" :data="v" @onDelete="deleteMsg" @onLike="like" v-if="v.msg_type == 1" @onAvatar="showCard" @onShare="share" @onBp="bp" @onDs="ds"></ds-msg>
        <msg-hong-bao :key="v.id" v-if="v.msg_type == 3" :data="v" @onHBClick="openHBModel" @onDelete="deleteMsg" @onLike="like"></msg-hong-bao>
      </template>
      
    </div>
    <footer-main :scorllEnd="scrollToEnd"></footer-main>
  </div>
  <div id="fixed-bgds-btns">
    <div class="f-btn" @click="screenForAll"><img src="../assets/bp-btn.png"/></div>
    <div class="f-btn" @click="rewardForAll"><img src="../assets/ds-btn.png"/></div>
    <div class="f-btn" @click="hbForAll"><img src="../assets/hb-btn.png"/></div>
  </div>
  <bp-window v-model="bpWindowVisible" ref="bpWindow" @onWxPay="wxPay" :times="barDataInfo.time" :screens="barDataInfo.screen" @onBuy="buyDialogVisible = true"></bp-window>
  <ds-window v-model="dsWindowVisible" ref="dsWindow" @onWxPay="wxPay" :gifts="barDataInfo.gift" @onBuy="buyDialogVisible = true"></ds-window>
  <x-dialog v-model="userDialogVisible" :dialog-style="{'max-width': '100%', width: '100%', 'background-color': 'transparent'}">
    <div class="user-box">
      <div class="user-info">
        <div class="pr">
          <template v-if="currentUserInfo.grade_title != '平民'">
            <span class="level-icon-id" :style="{'background-image': 'url('+$options.filters.filterLevel(currentUserInfo.grade_title, 'avatarIcon')+')'}"></span>
            <img :src="currentUserInfo.initiator_headimgurl | prefixImageUrl" class="avatar" style="border: 0;"/>
          </template>
          <template v-else>
            <img :src="currentUserInfo.initiator_headimgurl | prefixImageUrl" class="avatar"/>
          </template>
        </div>
        <!--<img src="../assets/logo.png" class="avatar"/>-->
        <p class="uname f18 fff-bp">{{currentUserInfo.initiator_nickname}}</p>
        <div class="msg-item-top flex flex-pack-center">
          <span class="sex sex-male" v-if="currentUserInfo.sex == 1"><svg-icon icon-class="male"/></span>
          <span class="sex sex-female" v-if="currentUserInfo.sex == 2"><svg-icon icon-class="female"/></span>
          <span class="level" style="background-color: #625bc3;">{{currentUserInfo.city}}</span>
          <span class="level" :class="'level-' + currentUserInfo.mc_level_id"  v-if="currentUserInfo.grade_title != '平民'">{{currentUserInfo.grade_title}}</span>
        </div>
        <p class="sign f14" v-if="currentUserInfo.autograph">签名：{{currentUserInfo.autograph}}</p>
        <p class="sign f14" v-else>签名：暂无</p>
        <div class="user-dialog-bottom flex" style="width:100%;">
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center" @click="ds">
            <img src="../assets/gift-b-icon.png"/>
            <span>为TA送礼</span>
          </div>
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center" @click="bp">
            <img src="../assets/ba-b-icon.png"/>
            <span>为TA霸屏</span>
          </div>
          <div class="u-d flex flex-1 flex-v flex-pack-center flex-align-center" @click="like(currentUserInfo)">
            <img src="../assets/like-b-icon.png"/>
            <span>为TA点赞</span>
          </div>
        </div>
      </div>
    </div>
    <div @click="userDialogVisible = false">
      <svg-icon icon-class="close" className="close-u-dialog-btn"/>
    </div>
  </x-dialog>
  <!-- 红包输入信息 -->
  <x-dialog v-model="hbWindowVisible" @on-hide="hbWindowClose" :mask-z-index="498" :dialog-style="{'z-index': '499', 'padding-top': '0.8rem', 'max-width': '100%', width: '100%', 'background-color': 'transparent', 'text-align': 'left'}">
    <div class="hb-send-window pr">
      <img :src="userInfo.headimgurl | prefixImageUrl" class="circle hb-u-avatar"/>
      <h3 class="hb-send-user pr line1 fff-bp">金主 {{userInfo.nickname}}</h3>
      <p class="hb-text-tip f13">大于等于50元将在大屏幕上显示</p>
      <div class="hb-input-box flex flex-align-center" style="margin-bottom: 0.2rem;">
        <div class="hb-input-icon"></div>
        <div class="hb-input-label">总金额</div>
        <div class="hb-input-wrap flex-1">
          <input type="number" pattern="[0-9]*" class="hb-input f16 tr" @input="validZero" v-model="hongbao.money"/>
        </div>
        <div class="hb-input-label-unit">元</div>
      </div>
      <p class="hb-text-tip f13">
        <template v-if="hongbao.pay_type == 0">
          当前为现金红包，切换为<a style="color:#ffed2e;margin:0 4px;" @click.prevent="hongbao.pay_type = 1">牛角红包</a>
        </template>
        <template v-if="hongbao.pay_type == 1">
          当前为牛角红包，切换为<a style="color:#ffed2e;margin:0 4px;" @click.prevent="hongbao.pay_type = 0">现金红包</a>
        </template>
      </p>  
      <div class="hb-input-box flex flex-align-center">
        <div class="hb-input-label">个数</div>
        <div class="hb-input-wrap flex-1">
          <input type="number" pattern="[0-9]*" class="hb-input f16 tr" v-model="hongbao.amount" @input="validCount"/>
        </div>
        <div class="hb-input-label-unit">个</div>
      </div>
      <!-- <div class="hb-input-box flex flex-align-center">
        <input type="text" readonly placeholder="谁可以抢" class="hb-input"/>
        <div class="hb-arrow"><svg-icon icon-class="arrow-down"/></div>
      </div> -->
      <div class="hb-input-box flex flex-align-center">
        <input type="text" placeholder="留言" class="hb-input" maxlength="15" v-model="hongbao.content"/>
        <div class="hb-hid">
          <popup-picker :data="hongbaoMes" v-model="hongbao.message" @on-change="hbMesChange" :popup-style="{'z-index': 5003}">
            <template slot="title" slot-scope="props"><!-- use scope="props" when vue < 2.5.0 -->
              <div class="hb-arrow">
              <svg-icon icon-class="arrow-down"/>
              </div>
            </template>
          </popup-picker>
        </div>
      </div>
      <p class="hb-text-tip f13">谁可以抢？</p>
      <div class="flex hb-for">
        <label for="hb_all" class="f13" @click="hbForWhoChose(0)" :class="{'active' : hongbao.type == 0}">全场</label>
        <label for="hb_male" class="f13" @click="hbForWhoChose(2)" :class="{'active' : hongbao.type == 2}">男士</label>
        <label for="hb_female" class="f13" @click="hbForWhoChose(1)" :class="{'active' : hongbao.type == 1}">女士</label>
        <label for="hb_custom" class="f13" style="width:1.6rem;" @click="hbForWhoChose(3)" :class="{'active' : hongbao.type == 3}">
        <template v-if="hongbao.selected.length > 0">
          已选&nbsp;({{hongbao.selected.length}})
        </template>
        <template v-else>
          自定义
        </template>
        </label>
      </div>
      <x-button id="hb-put-btn" @click.native="packet">发红包</x-button>
    </div>
    <div @click="hbWindowVisible = false">
      <svg-icon icon-class="close" className="close-u-dialog-btn"/>
    </div>
  </x-dialog>
  <!-- 红包开 -->
  <x-dialog v-model="hbOpenVisible" @on-hide="onHBHide" :dialog-style="{'padding-top': '0.8rem', 'max-width': '100%', width: '100%', 'background-color': 'transparent', 'text-align': 'left'}">
    <div class="hb-open-window borderbox pr" :class="{'back': hbState.openHb}" v-if="!hbState.hbDetail">
      <div class="hb-open-front tc">
        <img :src="hbCurInfo.initiator_headimgurl | prefixImageUrl" class="circle hb-open-avatar"/>
        <p class="f14">金主</p>
        <p class="line1 f14">{{hbCurInfo.initiator_nickname}}的{{hongbaoMsg.hb_pay_type[hbCurInfo.hb.pay_type]}}红包</p>
        <p class="f12" v-if="hbCurInfo.hb.type != 0">
          <span class="vip-for" :class="{'for-male': hbCurInfo.hb.type == 2, 'for-female':  hbCurInfo.hb.type == 1}">{{hongbaoMsg.hb_type[hbCurInfo.hb.type]}}</span>
        </p>
        <p class="msg f16">{{hbCurInfo.hb.content}}~</p>
        <a class="hb-open-btn" @click.prevent="openHbAction"></a>
      </div>
      <div class="hb-open-back tc">
        <template v-if="hbRobInfo.type != 2">
        <h3 class="hb-open-success">
          <template v-if="hbRobInfo.type == 0">恭喜你抢到红包！</template>
          <template v-if="hbRobInfo.type == 1">恭喜你抢到经验值！</template>
        </h3>
          <div class="hb-open-info">
            <div class="flex flex-pack-center f14">
              <div style="margin-right: 4px;">金主</div><div>{{hbCurInfo.initiator_nickname}}</div>
            </div>
            <div class="f14">{{hbCurInfo.hb.content}}</div>
            <div class="hb-result">
              <template v-if="hbRobInfo.type == 0">
                <div class="flex flex-pack-center flex-align-center">
                  <img src="../assets/hb-rmb.png" class="hb-result-icon" v-if="hbCurInfo.hb.pay_type == 0"/>
                  <img src="../assets/hb-coin.png" class="hb-result-icon" v-if="hbCurInfo.hb.pay_type == 1"/>
                  <div class="result-get">{{hbRobInfo.money}}</div>
                </div>
                <p class="f14" style="margin: 0;">已存入我的账户，可提现</p>
              </template>
              <template v-if="hbRobInfo.type == 1">
                <div class="flex flex-pack-center flex-align-center">
                  <p class="result-get">+{{hbRobInfo.money}}<span class="f14" style="margin-left: 4px;">经验值</span></p>
                </div>
                <p class="f14" style="margin: 0;">经验值可用于贵族等级的升级</p>
              </template>
            </div>
          </div>
        </template>
        <template v-if="hbRobInfo.type == 2">
          <div class="hb-open-info">
            <div class="flex flex-pack-center f14">
              <div style="margin-right: 4px;">金主</div><div>{{hbCurInfo.initiator_nickname}}</div>
            </div>
            <div class="f14">{{hbCurInfo.hb.content}}</div>
            <h3 class="hb-open-noresult">手慢了，红包没有了</h3>
          </div>
        </template>
        <a class="check-hb-detail f13" @click.prevent="openHbDetail(0)">查看领取详情</a>
      </div>
    </div>
    <div class="hb-open-window borderbox pr back" v-fixscroll="'.hb-get-results'" v-if="hbState.hbDetail">
      <div class="hb-open-back hb-open-back-result tc">
        <div class="flex flex-v" style="height:100%;">
          <img :src="userInfo.headimgurl | prefixImageUrl" class="circle hb-open-avatar"/>
          <p class="f14">金主</p>
          <p class="line1 f14">{{hbCurInfo.initiator_nickname}}的{{hongbaoMsg.hb_pay_type[hbCurInfo.hb.pay_type]}}红包</p>
          <div class="flex flex-pack-center flex-align-center">
            <img src="../assets/hb-rmb.png" class="hb-result-icon middle" v-if="hbCurInfo.hb.pay_type == 0"/>
            <img src="../assets/hb-coin.png" class="hb-result-icon middle" v-if="hbCurInfo.hb.pay_type == 1"/>
            <div class="result-get middle">{{tmpRob.amount.money}}</div>
          </div>
          <p class="f14" style="text-align: left;">红包领取记录  <span class="f12" style="margin-left: 4px;">已领取 {{tmpRob.amount.yq_amount}}/{{tmpRob.amount.total}}</span></p>
          <div class="hb-get-results flex-1 overscroll" style="text-align: left;">
            <ul>
              <li class="flex flex-align-center" v-for="(v, i) in tmpRob.list" :key="i">
                <img v-lazy="$options.filters.prefixImageUrl(v.headimgurl)" class="circle db hb-get-avatar"/>
                <p class="f14 flex-1 line1">{{v.nickname}}</p>
                <div class="flex flex-pack-center flex-align-center">
                  <img src="../assets/hb-rmb.png" class="hb-result-icon small" v-if="hbCurInfo.hb.pay_type == 0"/>
                  <img src="../assets/hb-rmb.png" class="hb-result-icon small" v-if="hbCurInfo.hb.pay_type == 1"/>
                  <div class="result-get small">{{v.money}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div @click="hbOpenVisible = false">
      <svg-icon icon-class="close" className="close-u-dialog-btn"/>
    </div>
  </x-dialog>

  <x-dialog v-model="shareMaskVisible" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '100%', 'background-color': 'transparent'}">
    <div class="fullscreen"  @click="shareMaskVisible = false">
      <img src="../assets/share.png" style="max-width: 100%;float:right;width: 4.2rem;margin: 0.2rem 0.2rem 0 0;"/>
    </div>
  </x-dialog>
  <x-dialog v-model="concernVisible" :dialog-style="{'max-width': '100%', width: '100%', 'background-color': 'transparent'}">
    <div class="qrcode-box">
      <div class="qrcode-info flex flex-v flex-align-center">
        <img v-if="ticket" :src="'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=' + ticket" class="qrcode"/>
        <p class="f14">请长按二维码</p>
        <p class="f14">关注牛霸霸屏官方公众号</p>
        <p class="f14">即可加入{{barDataInfo.ht_msg.name}}聊天室</p>
      </div>
    </div>
  </x-dialog>
  <bp-dialog :title="'确认支付'" v-model="buyDialogVisible" @onConfirm="confirmBuy" :cancelAutoClose="buyDialogInfo.cancelAutoClose" :onCancel="buyDialogInfo.onCancel" :cancelText="buyDialogInfo.cancelText" :cancelColor="buyDialogInfo.cancelColor" :confirmText="buyDialogInfo.confirmText">
    <div class="">
      <div style="font-size: 26px;margin-bottom: 8px;">{{buyDialogInfo.price}}<svg-icon icon-class="coin" style="width:0.32rem;fill: #fdc635;margin-left:2px;vertical-align: bottom;"/></div>
      <template v-if="true">
      <p style="color: #88878f;"><svg-icon icon-class="tip" style="margin-top:-2px;margin-right:2px;" />当前余额可用：<svg-icon icon-class="coin"  style="margin-top:-2px;margin-right:2px;"/>{{userInfo.balance}}</p>
      <p class="f12" v-if="barManagerInfo.isManager && payBus == 1" style="color:#b187e4;margin-top:6px;">今日剩余免费霸屏、打赏{{barManagerInfo.game_count}}次</p>
      <p class="f13" v-if="buyDialogInfo.isCharge" style="color:#8bc5ec;margin-top:6px;">余额不足，请充值</p>
      </template>
      <template v-else>
        <p class="f13">选择购买充值即可成为牛霸会员贵族</p>
        <p class="f13">全平台永久享受贵族特权</p>
      </template>
    </div>
  </bp-dialog>
  <bp-dialog :title="'充值购买成功'" v-model="buySuccessDialogVisible" @onConfirm="buySuccessDialogVisible = false" :confirmText="'好的'" :one="true">
    <div class="">
      <div class="" style="font-size: 20px;margin-bottom: 8px;">
      <p class="f14" style="color:#7b7b7b;margin-top:6px;">充值成功+{{chargeData.chargeMoney}}牛角</p>
      <p class="f14" style="color:#7b7b7b;margin-top:6px;" v-if="buyDialogInfo.extraInfo">{{buyDialogInfo.extraInfo.title}}购买成功-{{buyDialogInfo.price}}牛角</p>
      <p class="f14" style="color: #88878f;margin-top:6px;"><svg-icon icon-class="tip" style="margin-top:-2px;margin-right:2px;" />当前余额可用：<svg-icon icon-class="coin"  style="margin-top:-2px;margin-right:2px;"/>{{userInfo.balance}}</p>
      </div>
    </div>
  </bp-dialog>
  <bp-dialog :title="'提示'" v-model="deleteDialogVisible" @onConfirm="confirmDelete">
    <div class="">
      <div class="" style="font-size: 20px;margin-bottom: 8px;">
      <p class="f16" style="color:#7b7b7b;margin-top:6px;">确定删除该消息吗</p></div>
    </div>
  </bp-dialog>
  <template v-if="adVisible">
    <transition name="fade-out">
      <div class="adbg fullscreen" v-if="barDataInfo.advert" :style="{'background-image': 'url('+barDataInfo.advert.phone.url+')'}"></div>
    </transition>
  </template>
  <div v-transfer-dom>
    <popup v-model="chargeVisible" @on-show="chargeShow">
      <div class="charge-container white" v-fixscroll="'.charge-price-list'">
        <svg-icon icon-class="close" @click.native="chargeVisible = false"/>
        <p class="tc f18">充值购买</p>
        <p class="f12" style="margin-top:0.2rem;">当前余额：{{userInfo.balance}}</p>
        <p class="f12" style="margin-top:0.1rem;margin-bottom:0.4rem;">1元=1牛角，经验值可用来升级贵族身份和获取特权</p>
        <charge :exps="exps" @onSelect="wxPayCharge" :selectItem="false"></charge>
      </div>
    </popup>
  </div>
</div>
</template>

<script>
import { getBarAllInfo, isSubscribe, getNewestMsg, getMaxMsg, getBarNotice, addBpDsMsg, getOnlines, favoriteDo, deleteMsg, getCharges, rechargePay, wxPay, createHb, unFinishHbList, robHb, robHbMemberList } from '@/api/'
import { XDialog, TransferDom, Popup, PopupPicker, XButton } from 'vux'
import MarqueeTips from 'vue-marquee-tips'
import BpDialog from '../components/bpDialog'
// import InfiniteLoading from 'vue-infinite-loading'
import InfiniteLoading from '../components/InfiniteLoading'
import FooterMain from '../components/Main/Footer'
import Msg from '../components/Main/Msg'
import MsgImg from '../components/Main/MsgImg'
import MsgOnlyImg from '../components/Main/Img'
import BpMsg from '../components/Main/BpMsg'
import DsMsg from '../components/Main/DsMsg'
import MsgHongBao from '../components/Main/MsgHongBao'
import BpWindow from '../components/Main/BpWindow'
import DsWindow from '../components/Main/DsWindow'
import Onlines from '../components/Main/Onlines'
import Charge from '../components/Charge'
import { mapGetters, mapActions } from 'vuex'
import '@/vendor/tween'
import '@/vendor/animation'
import ScrollFix from '@/vendor/ScrollFix'
import moment from 'moment'
import LazyLoad from 'vanilla-lazyload'
import { accAdd } from '@/utils/utils'
import intersectionBy from 'lodash/intersectionBy'
import differenceBy from 'lodash/differenceBy'
// type 0 msg type 1 msgImg type 2 Img tpye 3 bp type 4 ds
export default {
  directives: {
    TransferDom
  },
  data () {
    return {
      notice: '',
      show: false,
      chatlist: [],
      list: [],
      onlinePeople: [],
      bpWindowVisible: false,
      dsWindowVisible: false,
      hbWindowVisible: false,
      hbOpenVisible: false,
      userDialogVisible: false,
      shareMaskVisible: false,
      buyDialogVisible: false,
      concernVisible: false,
      onlineVisible: false,
      deleteDialogVisible: false,
      buySuccessDialogVisible: false,
      deleteInfo: {},
      height: 0,
      noMore: false,
      barDataInfo: {},
      adVisible: false,
      newsTimer: null,
      noticeTimer: null,
      onlineTimer: null,
      hbListTimer: null,
      ticket: '',
      requestParams: {
        ht_id: this.$route.params.id,
        min_id: 0
      },
      requestNewParams: {
        ht_id: this.$route.params.id,
        id: 0
      },
      firstLoading: true,
      scrollFix: null,
      lockHeight: false,
      lazyload: null,
      chargeVisible: false,
      exps: [],
      chargeData: {},
      hongbao: {
        ht_id: this.$route.params.id,
        message: ['有钱任性，大家快抢啊！'],
        content: '',
        pay_type: 0, // 0 现金 1 牛角,
        money: 50,
        amount: 10,
        selected: [],
        auth_uid_str: '',
        type: 0 // 0 全场 2 男士 1 女士 3 自定义
      },
      hongbaoMsg: {
        hb_pay_type: {
          0: '现金',
          1: '牛角'
        },
        hb_type: {
          0: '全场',
          1: '女士专享',
          2: '男士专享',
          3: '专属红包'
        }
      },
      hongbaoMes: [['有钱任性，大家快抢啊！', '红包驾到，手慢无！']],
      hbState: {
        hbDetail: false, // 显示详情
        openHb: false, // 翻转
        out: false, // 是否已抢完
        hbScale: false // 是否缩小
      },
      hbQueens: [],
      queenFirst: true,
      tmpRob: {
        list: [],
        amount: {}
      },
      payBus: 1 // 1 购买霸屏礼物 2 发红包
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteLeave (to, from, next) {
    clearTimeout(this.newsTimer)
    clearTimeout(this.noticeTimer)
    clearTimeout(this.onlineTimer)
    clearTimeout(this.hbListTimer)
    this.newsTimer = null
    this.noticeTimer = null
    this.onlineTimer = null
    this.hbListTimer = null
    if (this.scrollFix) {
      this.scrollFix.destory()
    }
    if (to.name !== 'Charge') {
      this.ChangeBuyDialogInfo({})
    }
    next()
  },
  beforeDestroy () {
    this.lazyload && this.lazyload.destroy()
  },
  created () {
    moment.locale('zh-cn', {
      meridiem: function (hour, minute, isLowercase) {
        if (hour < 9) {
          return '早上'
        } else if (hour < 11 && minute < 30) {
          return '上午'
        } else if (hour < 13 && minute < 30) {
          return '中午'
        } else if (hour < 18) {
          return '下午'
        } else {
          return '晚上'
        }
      }
    })
    if (Object.keys(this.userInfo).length === 0) {
      this.getUserInfo()
    }
    getBarAllInfo({ht_id: this.$route.params.id}).then((res) => {
      document.title = res.result.ht_msg.name
      // prefixImageUrl
      // 设置是否酒吧的管理员，免费霸屏次数 和是否是酒吧的吧主
      let post = {isManager: false, game_count: 0}
      if (res.result.userinfo.isHMM > 0) {
        post = {
          isManager: true,
          game_count: res.result.userinfo.game_count
        }
      }
      if (res.result.userinfo.isMer > 0) {
        post.isHost = true
      }
      this.$store.commit('user/SET_BAR_MANAGER', post)
      res.result.advert && (res.result.advert.phone.url = this.$options.filters.prefixImageUrl(res.result.advert.phone.url))
      // 排序时间
      res.result.time.sort((a, b) => a.time - b.time)
      this.barDataInfo = res.result
      var adFlag = JSON.parse(sessionStorage.getItem('adFlag'))
      if (!adFlag || !adFlag[this.$route.params.id]) {
        var adFlagCopy = {}
        if (adFlag) {
          adFlagCopy = adFlag
        }
        adFlagCopy[this.$route.params.id] = 1
        sessionStorage.setItem('adFlag', JSON.stringify(adFlagCopy))
        this.adVisible = true
        var img = new Image()
        img.onload = () => {
          this.show = true
          this.$nextTick(() => {
            this.scrollFix = new ScrollFix(this.$refs.scrollWrapper)
          })
          setTimeout(() => {
            this.adVisible = false
            /* setTimeout(() => {
              // 如果是充值跳回来的，显示之前勾选的选项
              this.initIsSelected()
            }, 1000) */
          }, 1000)
        }
        img.onerror = () => {
          this.show = true
          this.adVisible = false
        }
        img.src = res.result.advert.phone.url
      } else {
        this.$nextTick(() => {
          this.show = true
          this.$nextTick(() => {
            this.scrollFix = new ScrollFix(this.$refs.scrollWrapper)
            /* setTimeout(() => {
              // 如果是充值跳回来的，显示之前勾选的选项
              this.initIsSelected()
            }, 1000) */
          })
        })
      }
    })
    isSubscribe({ht_id: this.$route.params.id, type: 1, url: window.location.hash.substring(1)}).then((res) => {
      if (res.result === '已关注') {
        this.concernVisible = false
      } else {
        this.ticket = res.result
        this.concernVisible = true
      }
    }).catch(() => {
    })
    this.loopGetNotice(0)
    this.loopOnlines(0)
    this.loopHbList(0)
  },
  mounted () {
    this.$nextTick(() => {
      this.lazyload = new LazyLoad({
        elements_selector: '.lazy-bp-img'
      })
    })
  },
  watch: {
    height: function (newVal, oldVal) {
      if (this.lockHeight) {
        this.lockHeight = false
        return false
      }
      var diff = newVal - oldVal
      this.$refs.scrollWrapper.scrollTop = diff
    },
    bpWindowVisible: function (newVal, oldVal) {
      if (newVal && this.lazyload) {
        setTimeout(() => {
          this.lazyload.update()
        }, 150)
      }
    },
    dsWindowVisible: function (newVal, oldVal) {
      if (newVal && this.lazyload) {
        setTimeout(() => {
          this.lazyload.update()
        }, 150)
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'getUserInfo'
    ]),
    ...mapActions('app', {
      ChangeBuyDialogInfo: 'ChangeBuyDialogInfo'
    }),
    setTimecountHB () {
      if (this.$refs.hbModel && !this.$refs.hbModel.classList.contains('swing')) {
        setTimeout(() => {
          this.$refs.hbModel.classList.add('swing')
        }, 1000)
      }
      if (this.hbQueens.length === 0) {
        return false
      }
      // 判断第一个是否超过1分钟 超过变小
      var nA = moment()
      var lB = moment(this.hbQueens[0].hb.create_time)
      var chazhi = Number(nA.diff(lB, 'seconds'))
      if (this.hbState.hbScale === false && chazhi >= 60) {
        this.hbState.hbScale = true
        this.hbQueens[0].hb.show_time = 0
        console.log('chaoguo 60')
      } else if (this.hbState.hbScale === true && chazhi < 60) {
        this.hbState.hbScale = false
      }
      var filters = this.hbQueens.filter(v => !v.hasOwnProperty('timer') && ~~(v.hb.status) === 0)
      if (filters.length === 0) {
        return false
      }
      filters.forEach((v) => {
        v.timer = setInterval(() => {
          if (v.hb.show_time - 1 > 0) {
            v.hb.show_time -= 1
          } else {
            v.hb.show_time -= 1
            v.hb.status = 1
            clearInterval(v.timer)
          }
          console.log(v.hb.show_time)
        }, 1000)
      })
      // 如果1分钟未抢完收起红包
      this.scaleHBtimer = setTimeout(() => {
        this.hbState.hbScale = true
      }, 60 * 1000)
    },
    initIsSelected () {
      var buyInfo = localStorage.getItem('buyDialogInfo')
      var currentUserInfo = localStorage.getItem('currentUserInfo')
      if (!buyInfo) {
        return false
      }
      if (currentUserInfo) {
        this.$store.commit('main/SET_CURRENT_USER_INFO', JSON.parse(currentUserInfo))
        localStorage.removeItem('currentUserInfo')
      }
      this.ChangeBuyDialogInfo(JSON.parse(buyInfo))
      localStorage.removeItem('buyDialogInfo')
      if (this.buyDialogInfo.hasOwnProperty('postParams')) {
        if (this.buyDialogInfo.postParams.type === 2) {
          this.bpWindowVisible = true
          this.$refs.bpWindow.initSelected(this.buyDialogInfo.postParams)
        } else if (this.buyDialogInfo.postParams.type === 1) {
          this.dsWindowVisible = true
          this.$refs.dsWindow.initSelected(this.buyDialogInfo.postParams)
        }
      }
    },
    loopHbList (time) {
      this.hbListTimer = setTimeout(() => {
        unFinishHbList({ht_id: this.$route.params.id}).then((res) => {
          if (Array.isArray(res.result)) {
            // 并集
            let intersection = intersectionBy(this.hbQueens, res.result, 'id')
            // 已经抢完的集合 进行定时器清理
            let difference1 = differenceBy(this.hbQueens, intersection, 'id')
            // 差集
            let difference2 = differenceBy(res.result, intersection, 'id')
            // 清理定时器
            if (!this.queenFirst) {
              difference1.forEach(v => {
                v.timer && clearInterval(v.timer)
              })
            }
            this.queenFirst = false
            var hbQueens = [...intersection, ...difference2]
            this.hbQueens = hbQueens
            // 如果没有队列了 记得清除scaleHBtimer
            this.$nextTick(() => {
              this.setTimecountHB()
            })
          }
        }).finally(() => {
          if (!this.hbListTimer) {
            return false
          }
          clearTimeout(this.hbListTimer)
          this.loopHbList(1000)
        })
      }, time)
    },
    loopOnlines (time) {
      this.onlineTimer = setTimeout(() => {
        getOnlines({ht_id: this.$route.params.id}).then((res) => {
          Array.isArray(res.result) && (this.onlinePeople = res.result)
        }).finally(() => {
          if (!this.onlineTimer) {
            return false
          }
          clearTimeout(this.onlineTimer)
          this.loopOnlines(1000 * 10)
        })
      }, time)
    },
    loopGetNotice (time) {
      this.noticeTimer = setTimeout(() => {
        getBarNotice({ht_id: this.$route.params.id}).then((res) => {
          this.notice = res.result ? res.result.content : ''
        }).finally(() => {
          if (!this.noticeTimer) {
            return false
          }
          clearTimeout(this.noticeTimer)
          this.loopGetNotice(1000 * 60 * 5)
        })
      }, time)
    },
    loopGetNewMsg () {
      this.newsTimer = setTimeout(() => {
        getMaxMsg(this.requestNewParams).then((res) => {
          if (Array.isArray(res.result) && res.result.length > 0) {
            var chatLength = this.chatlist.length
            var lastChatTime
            var nowD
            var tmpChatList = Object.assign([], this.chatlist)
            var lastResultIndex = 0
            tmpChatList.sort((a, b) => b.id - a.id)
            res.result.forEach((v, i) => {
              if (chatLength > 0) {
                var lastIndex = tmpChatList.findIndex(v => v.showTime)
                if (lastIndex !== undefined && lastIndex > -1) {
                  nowD = moment(v.create_time).format('X')
                  lastChatTime = moment(tmpChatList[lastIndex].create_time).format('X')
                  if (nowD - lastChatTime > 5 * 60) {
                    v.showTime = this.calTime(v.create_time)
                  }
                }
              } else if (i === 0) {
                // 之前没有数据 并且第一个数据
                v.showTime = this.calTime(v.create_time)
              } else {
                // 除了第一个数据
                nowD = moment(v.create_time).format('X')
                lastChatTime = moment(res.result[lastResultIndex].create_time).format('X')
                if (nowD - lastChatTime > 5 * 60) {
                  v.showTime = this.calTime(v.create_time)
                  lastResultIndex = i
                }
              }
            })
            this.chatlist = this.chatlist.concat(res.result)
            this.$nextTick(() => {
              // 如果消息里有当前用户发的，滚动到底部
              var flag = false
              for (var i in res.result) {
                if (this.userInfo && (Number(res.result[i].initiator_mc_id) === Number(this.userInfo.id))) {
                  flag = true
                  break
                }
              }
              flag && this.scrollToEnd()
              this.lockHeight = true
              this.height = this.$refs.scrollWrapper.scrollHeight
            })
            res.result.sort((a, b) => b.id - a.id)
            this.requestNewParams.id = res.result[0].id
          }
        }).finally(() => {
          if (!this.noticeTimer) {
            return false
          }
          clearTimeout(this.noticeTimer)
          this.loopGetNewMsg()
        })
      }, 1000)
    },
    scrollToEnd (isAnimate) {
      var content = this.$refs.scrollWrapper
      if (isAnimate) {
        Math.animation(content.scrollTop, content.scrollHeight - content.offsetHeight, function (value) {
          content.scrollTop = value
        }, 'Linear', 400)
      } else {
        content.scrollTop = content.scrollHeight - content.offsetHeight
      }
    },
    infiniteHandler ($state) {
      /* this.lockHeight = true
      this.height = this.$refs.scrollWrapper ? this.$refs.scrollWrapper.scrollHeight : 0 */
      let params = Object.assign({}, this.requestParams)
      getNewestMsg(params).then((res) => {
        if (!Array.isArray(res.result)) {
          return false
        }
        var resLength = res.result.length
        if (resLength > 0) {
          this.requestParams.min_id = res.result[resLength - 1].id
        }
        res.result.sort((a, b) => a.id - b.id)
        var lastShowTimeIndex = 0
        res.result.forEach((v, i) => {
          if (i === 0) {
            v.showTime = this.calTime(v.create_time)
            lastShowTimeIndex = i
          } else {
            var nowD = moment(v.create_time).format('X')
            var lastTimeShowD = moment(res.result[lastShowTimeIndex].create_time).format('X')
            if (nowD - lastTimeShowD > 60 * 5) {
              v.showTime = this.calTime(v.create_time)
              lastShowTimeIndex = i
            }
          }
        })
        /* res.result.map((v) => {
          v.levelIcon = this.Levels[v.grade_title] ? this.Levels[v.grade_title] : null
        }) */
        this.chatlist = res.result.concat(this.chatlist)
        this.$nextTick(() => {
          this.height = this.$refs.scrollWrapper.scrollHeight
          var chatLength = this.chatlist.length
          this.requestNewParams.id = chatLength > 0 ? this.chatlist[chatLength - 1].id : 0
          if (this.firstLoading) {
            this.loopGetNewMsg()
            this.firstLoading = false
            this.scrollToEnd()
          }
          if (res.result.length < 10) {
            $state.complete()
          } else {
            $state.loaded()
          }
        })
      })
    },
    showCard (info) {
      if (info) {
        info.initiator_headimgurl = info.headimgurl
        info.initiator_nickname = info.nickname
        info.initiator_mc_id = info.id
        this.$store.commit('main/SET_CURRENT_USER_INFO', info)
      }
      this.userDialogVisible = true
    },
    deleteMsg (data) {
      this.deleteDialogVisible = true
      this.deleteInfo = data
    },
    confirmDelete () {
      deleteMsg({msg_id: this.deleteInfo.id}).then((res) => {
        var find = this.chatlist.findIndex((v) => v.id === this.deleteInfo.id)
        if (find !== -1) {
          this.lockHeight = true
          this.chatlist.splice(find, 1)
          this.$nextTick(() => {
            this.height = this.$refs.scrollWrapper.scrollHeight
          })
          this.deleteDialogVisible = false
        }
      })
    },
    like (data) {
      console.log(data)
      console.log(this.currentUserInfo)
      favoriteDo({mc_id: data.initiator_mc_id, msg_id: data.id}).then((res) => {
        data.fabulous_count = ~~(data.fabulous_count) + 1
      })
    },
    share (data) {
      this.shareMaskVisible = true
      var title = ''
      var who = data.sendee_nickname ? data.sendee_nickname : '全场观众'
      if (~~(data.msg_type) === 2) {
        title = data.initiator_nickname + '重金' + data.title + data.odr_show_time + '秒，一起来围观互动！'
      } else if (~~(data.msg_type) === 1) {
        title = data.initiator_nickname + '送' + data.title + '给' + who + '，一起来玩！'
      }
      let shareParams = {
        title: title,
        desc: data.content,
        link: window.location.href,
        imgUrl: this.$options.filters.prefixImageUrl(data.initiator_headimgurl) // 分享图标
      }
      this.$wechat.onMenuShareTimeline({
        ...shareParams,
        success: function () {},
        cancel: function () {}
      })
      this.$wechat.onMenuShareAppMessage({
        ...shareParams,
        success: function () {},
        cancel: function () {}
      })
    },
    bp () {
      this.onlineVisible = false
      this.userDialogVisible = false
      this.bpWindowVisible = true
    },
    ds () {
      this.onlineVisible = false
      this.userDialogVisible = false
      this.dsWindowVisible = true
    },
    previewImage (pics) {
      this.$wechat.previewImage(pics)
    },
    chargeShow () {
      if (this.exps.length > 0) {
        return false
      }
      getCharges().then((res) => {
        this.exps = res.result.exp
      })
    },
    wxPay (cb) {
      var _self = this
      // cb && cb() 关闭弹框
      // console.log('直接微信支付')
      wxPay(this.buyDialogInfo.postParams).then((res) => {
        console.log('成功', res)
        window.WeixinJSBridge && window.WeixinJSBridge.invoke('getBrandWCPayRequest', res.result, function (res) {
          switch (res.err_msg) {
            case 'get_brand_wcpay_request:cancel':
              // alert('用户取消支付！')
              break
            case 'get_brand_wcpay_request:fail':
              _self.$vux.toast.show({
                text: '支付失败！（' + res.err_desc + '）',
                width: '10em'
              })
              break
            case 'get_brand_wcpay_request:ok':
              _self.buyDialogVisible = false
              _self.bpWindowVisible = false
              _self.dsWindowVisible = false
              break
            default:
              alert(JSON.stringify(res))
              break
          }
        })
      }).catch(error => {
        console.log(error)
      })
    },
    wxPayCharge (index) {
      var _self = this
      this.chargeFlag = true // 标记充值下面弹起 充完去判断去修改buyDialogInfo.isCharge 还是不够就显示toast 够了直接执行confirmBuy
      this.chargeData.chargeMoney = this.exps[index].money
      var payType = this.payBus === 1 ? 2 : 3
      rechargePay({eid: this.exps[index].id, money: this.exps[index].money, pay_type: payType}).then((res) => {
        window.WeixinJSBridge && window.WeixinJSBridge.invoke('getBrandWCPayRequest', res.result, function (res) {
          switch (res.err_msg) {
            case 'get_brand_wcpay_request:cancel':
              // alert('用户取消支付！')
              break
            case 'get_brand_wcpay_request:fail':
              _self.$vux.toast.show({
                text: '支付失败！（' + res.err_desc + '）',
                width: '10em'
              })
              break
            case 'get_brand_wcpay_request:ok':
              // 成功要设置该用户是否充过值为true
              _self.$store.commit('user/SET_IS_RECHARGE', true)
              var afterChargeBalance = accAdd(_self.userInfo.balance, _self.exps[index].money)
              // 比较购买的余额是否大于要支付的订单的价格
              if (afterChargeBalance >= ~~(_self.buyDialogInfo.price)) {
                // 修改isCharge
                _self.$store.commit('app/SET_IS_CHARGE', false)
                if (_self.payBus === 1) {
                  // 购买霸屏礼物
                  _self.confirmBuy()
                } else if (_self.payBus === 2) {
                  // 发红包
                  createHb(_self.hongbao).then((res) => {
                    if (_self.chargeFlag) {
                      // 确定是要充值过程的 显示提示充值后的dialog
                      _self.buyDialogVisible = false
                      _self.chargeVisible = false
                      _self.buySuccessDialogVisible = true
                      _self.chargeFlag = false
                    }
                  })
                }
              } else {
                // 显示toast提示不够
                _self.$vux.toast.show({
                  text: '充值后的余额仍然不够，请继续充值',
                  width: '15em',
                  time: 2500
                })
              }
              break
            default:
              alert(JSON.stringify(res))
              break
          }
        })
      })
    },
    confirmBuy () {
      if (this.buyDialogInfo.isCharge) {
        // 需要充值跳转充值页
        // 在当前页购买
        /* localStorage.setItem('buyDialogInfo', JSON.stringify(this.buyDialogInfo))
        localStorage.setItem('currentUserInfo', JSON.stringify(this.currentUserInfo))
        localStorage.setItem('payBack', '1')
        this.$router.push('/Charge') */
        this.buyDialogVisible = false
        this.chargeVisible = true
        // window.location.href = window.location.origin + window.location.pathname + '#/Charge'
      } else {
        // 直接购买
        // 判断是红包还是购买霸屏打赏
        if (this.payBus === 1) {
          addBpDsMsg(this.buyDialogInfo.postParams).then((res) => {
            this.$store.commit('user/SET_USER_INFO_BALANCE', res.result.balance)
            this.buyDialogVisible = false
            this.bpWindowVisible = false
            this.dsWindowVisible = false
            this.chargeVisible = false
            if (this.chargeFlag) {
              // 确定是要充值过程的 显示提示充值后的dialog
              this.buySuccessDialogVisible = true
              this.chargeFlag = false
            }
            if (this.buyDialogInfo.postParams.type === 2) {
              this.$refs.bpWindow.reset()
            } else if (this.buyDialogInfo.postParams.type === 1) {
              this.$refs.dsWindow.reset()
            }
            // game_count - 1
            if (this.barManagerInfo.isManager) {
              var nextCount = Number(this.barManagerInfo.game_count) === 0 ? 0 : Number(this.barManagerInfo.game_count) - 1
              this.$store.commit('user/SET_BAR_MANAGER', {isManager: true, game_count: nextCount})
            }
          })
        } else if (this.payBus === 2) {
          createHb(this.hongbao).then((res) => {
            this.$store.commit('user/SET_USER_INFO_BALANCE', res.result.balance)
            this.$vux.toast.show({
              text: '红包已生成',
              width: '10em'
            })
            this.buyDialogVisible = false
            this.hbWindowVisible = false
          })
        }
      }
      /* setTimeout(() => {
        this.buyDialogVisible = false
      }, 3000) */
    },
    screenForAll () {
      this.$store.commit('main/SET_CURRENT_USER_INFO', {})
      this.bpWindowVisible = true
    },
    rewardForAll () {
      this.$store.commit('main/SET_CURRENT_USER_INFO', {})
      this.dsWindowVisible = true
    },
    hbWindowClose () {
      // 重置为普通态
      this.payBus = 1
      // 重置红包信息
      this.hongbao = {
        ht_id: this.$route.params.id,
        message: ['有钱任性，大家快抢啊！'],
        content: '',
        pay_type: 0, // 0 现金 1 牛角,
        money: 50,
        amount: 10,
        selected: [],
        auth_uid_str: '',
        type: 0 // 0 全场 2 男士 1 女士 3 自定义
      }
      this.$refs.onlines.resetHBInfo()
    },
    customHBChose (data) {
      var arr = []
      Object.keys(data).forEach(v => {
        arr.push(data[v])
      })
      this.hongbao.auth_uid_str = arr.join(',')
    },
    hbForWhoChose (v) {
      this.hongbao.type = v
      if (v === 4) {
        this.payBus = 2
        this.onlineVisible = true
      }
    },
    hbForAll () {
      this.hbWindowVisible = true
    },
    openHBModel (data) {
      this.$store.commit('app/SET_HB_CUR_INFO', data)
      // 如果正在倒计时 不能点击
      if (~~(data.hb.status) === 0 && ~~(data.hb.show_time) >= 0) {
        return false
      }
      // 如果已经抢过 直接显示详情
      if (data.hb.is_lq > 0) {
        this.openHbDetail(data.hb.id, () => {
          this.hbState.openHb = true
          this.hbOpenVisible = true
        })
        return false
      } else {
        this.hbOpenVisible = true
      }
    },
    hbMesChange (v) {
      this.hongbao.content = v.join('')
    },
    openHbAction () {
      // 请求服务器判断是否已抢完 抢完之前显示已抢完状态
      robHb({ht_id: this.$route.params.id, hb_id: this.hbCurInfo.hb.id}).then((res) => {
        console.log(res)
        // 抢到红包后更新余额
        if (res.result.balance) {
          this.$store.commit('user/SET_USER_INFO_BALANCE', res.result.balance)
        }
        var type = ~~(res.result.type)
        this.$store.commit('app/SET_HB_ROB_INFO', {type: type, money: type === 1 ? res.result.data : res.result.data.money})
        this.hbState.openHb = true
        // 设置chatList里的红包状态为已领取
        var findHbMsg = this.chatlist.find(v => v.hb && ~~(v.hb.id) === ~~(this.hbCurInfo.hb.id))
        if (findHbMsg) {
          findHbMsg.hb.is_lq = 1
        }
      })
    },
    openHbDetail (hbid, cb) {
      // 查询红包领取记录
      hbid = hbid !== 0 ? hbid : this.hbCurInfo.hb.id
      robHbMemberList({ht_id: this.$route.params.id, hb_id: hbid}).then((res) => {
        this.tmpRob = res.result
        this.hbState.hbDetail = true
        cb && cb()
      })
    },
    onHBHide () {
      setTimeout(() => {
        this.hbState.hbDetail = false
        this.hbState.openHb = false
      }, 300)
    },
    packet () {
      var _self = this
      // 验证表格是否为空和为整数
      /* if (!Number.isInteger(this.hongbao.money)) {
        this.$vux.toast.show({
          text: '金额必须为整数'
        })
        return false
      }
      if (!Number.isInteger(this.hongbao.amount)) {
        this.$vux.toast.show({
          text: '人数必须为整数'
        })
        return false
      } */
      /* createHb(this.hongbao).then((res) => {

      }) */
      if (this.hongbao.pay_type === 0) {
        // 调起微信支付 现金红包
        createHb(this.hongbao).then((res) => {
          window.WeixinJSBridge && window.WeixinJSBridge.invoke('getBrandWCPayRequest', res.result, function (res) {
            switch (res.err_msg) {
              case 'get_brand_wcpay_request:cancel':
                // alert('用户取消支付！')
                break
              case 'get_brand_wcpay_request:fail':
                _self.$vux.toast.show({
                  text: '支付失败！（' + res.err_desc + '）',
                  width: '10em'
                })
                break
              case 'get_brand_wcpay_request:ok':
                // 支付成功关闭红包
                _self.hbOpenVisible = false
                break
              default:
                alert(JSON.stringify(res))
                break
            }
          })
        })
      } else {
        // 余额红包
        this.payBus = 2
        // commit buyDialogInfo
        let isCharge = Number(this.hongbao.money) > Number(this.userInfo.balance)
        var params = {
          extraInfo: {title: '塞红包'},
          price: this.hongbao.money,
          isCharge: isCharge,
          confirmText: isCharge ? '充值购买' : '确定'
        }
        this.ChangeBuyDialogInfo(params)
        this.buyDialogVisible = true
      }
      /* // 发红包
      if (this.hongbao.pay_type === 1) {
        // 调起微信支付 现金红包
      } else {
        // 余额红包
        // 判断余额够不够
        if (this.userInfo.balance >= this.hongbao.money) {
          // 足够直接支付
        } else {
          // 不够调起充值列表
          this.chargeVisible = true
        }
      } */
    },
    validZero () {
      if (/^0/.test(event.target.value)) {
        this.hongbao.money = ''
      }
    },
    validCount () {
      if (/^0/.test(event.target.value)) {
        this.hongbao.amount = ''
      } else {
        if (~~(event.target.value > 100)) {
          this.hongbao.amount = 100
        }
      }
    },
    calTime (time) {
      var a = moment(time)
      var b = moment()
      var t = time
      var betweenDay = Number(b.diff(a, 'days'))
      if (betweenDay === 1) {
        t = '昨天' + time.substring(11, 16)
      } else if (betweenDay === 0) {
        if (b.get('date') - a.get('date') === 1) {
          t = '昨天' + time.substring(11, 16)
        } else {
          t = time.substring(11, 16)
        }
      } else {
        t = moment(t).format('YYYY年M月DD日 Ah时mm分')
      }
      return t
    }
  },
  computed: {
    ...mapGetters('app', {
      buyDialogInfo: 'buyDialogInfo',
      hbCurInfo: 'hbCurInfo',
      hbRobInfo: 'hbRobInfo'
    }),
    ...mapGetters('user', {
      userInfo: 'userInfo',
      barManagerInfo: 'barManagerInfo'
    }),
    ...mapGetters('main', {
      currentUserInfo: 'currentUserInfo'
    })
  },
  components: {
    MarqueeTips,
    FooterMain,
    BpDialog,
    Msg,
    MsgImg,
    MsgOnlyImg,
    MsgHongBao,
    BpMsg,
    DsMsg,
    BpWindow,
    DsWindow,
    Onlines,
    XDialog,
    InfiniteLoading,
    Popup,
    Charge,
    PopupPicker,
    XButton
  }
}
</script>

<style lang="less" scoped>
@import '../styles/main.less';
@import '../styles/hongbao.less';
.adbg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 9999999;
}
.level-icon-avatar {
  display: block;
  position: absolute;
  /* left: -0.4rem;
  top: -0.3rem;
  width: 1.6rem;
  height: 1.42rem; */
  left: -0.6rem;
  top: -0.46rem;
  width: 2.1rem;
  height: 1.86rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
  transform: scale(0.85);
}
.container {
  color: #fff;
  overflow: hidden;
  height: 100%;
}
.main {
  height: 100%;
  background: @bgColor;
}
.main-header {
  padding: 0.1rem 0;
  .main-header-left {
    margin-left: 0.32rem;
    padding-right: 0.3rem;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.2);
    position: relative;
  }
  .main-header-avatar {
    img {
      width: 0.9rem;
      height: 0.9rem;
      display: block;
    }
  }
  .main-header-right {
    overflow-y: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-left: 0.8rem;
    font-size: 0;
    white-space: nowrap;
    padding: 2px 0;
    text-align: right;
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
      box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
      background-color: #e8e8e8;
    }

    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
      background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #000000;
      border: 0px solid #555555;
    }
  }
  .person-avatar {
    display: block;
    width: 0.72rem;
    height: 0.72rem;
  }
  .online-persons {
    margin-right: 0.2rem;
    width: 0.72rem;
    height: 0.72rem;
    display: inline-block;
    &:last-child {
      margin-right: 0;
    }
    .send-gift-tip {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .more {
    padding: 0 10px; 
  }
}
.boardcast {
  margin: 0.2rem 0;
}
.boardcast-icon {
  width: 0.4rem;
  height: 0.36rem;
  display: block;
  margin-left: 0.24rem;
  margin-right: 0.2rem;
}
.boardcast-scroller {
  width: 3.68rem;
  height: 0.4rem;
  overflow: hidden;
}
.scroller-wrap {
  width: 100%;
  height: 100%;
  line-height: 0.4rem;
  transform: translate3d(100%, 0, 0);
  animation: scrollNotice 15s linear 0s infinite;
}
@keyframes scrollNotice {
  to {
    transform: translate3d(-100%, 0, 0);
  }
}
.main-content {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 1rem;
}

#fixed-bgds-btns {
  position: absolute;
  bottom: 1.4rem;
  right: 0;
  img {
    width: 1.34rem;
  }
}

.user-info {
  width: 5.4rem;
  background: #4c446b url('../assets/card-bg.png') no-repeat top;
  background-size: contain;
  border-radius: 15px;
  margin: 0 auto;
  .avatar {
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    margin: 0.6rem 0 0.4rem;
  }
  .level-icon-id + .avatar {
    width: 1.4rem;
    height: 1.4rem;
    border: 0;
    margin: 0.8rem 0 0.7rem;
  }
  .uname {
    margin-bottom: 0.2rem;
  }
  .msg-name {
    color: #161a25;
  }
  .sign {
    color: #9b97a8;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
}
.time-show {
  display: inline-block;
  line-height: 1;
  padding: 6px 10px;
  background-color: rgba(0,0,0,.25);
  border-radius: 50px;
}
.user-dialog-bottom {
  background-color: #60557d;
  border-radius: 0 0 15px 15px;
  padding: 0.25rem 0;
  img {
    width: 0.42rem;
    height: 0.42rem;
  }
  .u-d {
    * {
      display: block;
    }
    span {
      font-size: 13px;
      color: #fff;
      margin-top: 4px;
    }
  }
}
.close-u-dialog-btn.svg-icon {
  width: 0.7rem;
  height: 0.7rem;
  box-sizing: content-box;
  display: block;
  margin: 0.5rem auto;
}
.charge-container {
  padding: 0.3rem 0.6rem;
  background-color: #fff;
  .svg-icon {
    width: 0.54rem;
    height: 0.54rem;
    position: absolute;
    right: 0.4rem;
    top: 0.25rem;
    z-index: 1;
  }
}
.qrcode-info {
  width: 4.75rem;
  padding: 0.6rem 0;
  background: #fff url('../assets/qrcode-bg.png') no-repeat top;
  background-size: contain;
  border-radius: 15px;
  margin: 0 auto;
  .qrcode {
    width: 2.2rem;
    height: 2.2rem;
    margin-bottom: 0.8rem;
  }
  p {
    line-height: 0.4rem;
    color: #3d404f;
    padding: 0 10px;
    word-break: break-all;
  }
}
.typing-indicator {
  background-color: rgba(157, 157, 157, 0.2);
  will-change: transform;
  width: auto;
  border-radius: 50px;
  padding: 0.2rem;
  display: table;
  margin: 5px auto;
  position: relative;
  margin-bottom: 30px;
}

.typing-indicator span {
  height: 0.2rem;
  width: 0.2rem;
  float: left;
  margin: 0 1px;
  background-color: #9E9EA1;
  display: block;
  border-radius: 50%;
  opacity: 0.4;
}
.typing-indicator span:nth-of-type(1) {
  -webkit-animation: 1s blink infinite 0.3333s;
          animation: 1s blink infinite 0.3333s;
}
.typing-indicator span:nth-of-type(2) {
  -webkit-animation: 1s blink infinite 0.6666s;
          animation: 1s blink infinite 0.6666s;
}
.typing-indicator span:nth-of-type(3) {
  -webkit-animation: 1s blink infinite 0.9999s;
          animation: 1s blink infinite 0.9999s;
}

@-webkit-keyframes blink {
  50% {
    opacity: 1;
  }
}

@keyframes blink {
  50% {
    opacity: 1;
  }
}


.level-icon-id {
  position: absolute;
  width: 3.39rem;
  height: 3rem;
  left: 50%;
  top: 0;
  transform: translate3d(-50%, 0, 0);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  /* &.level1 {
    background-image: url(../assets/level/level-1.png);
  }
  &.level2 {
    background-image: url(../assets/level/level-2.png);
  }
  &.level3 {
    background-image: url(../assets/level/level-3.png);
  }
  &.level4 {
    background-image: url(../assets/level/level-4.png);
  }
  &.level5 {
    background-image: url(../assets/level/level-5.png);
  }
  &.level6 {
    background-image: url(../assets/level/level-6.png);
  }
  &.level7 {
    background-image: url(../assets/level/level-7.png);
  }
  &.level8 {
    background-image: url(../assets/level/level-8.png);
  } */
}
@media screen and (min-width: 320px) and (max-width: 374px) {
  /* .nickname {
    font-size: 13px;
  } */
  .main-header-me .f16 {
    font-size: 14px;
  }
}
.fade-out-leave-to {
  opacity: 0;
  transform: scale(1.2);
}
.fade-out-leave-active, .fade-out-enter-active {
  transition: all 1s;
}
</style>
