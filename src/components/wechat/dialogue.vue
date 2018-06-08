<template>
    <div class="sub-router chat-detail">
      <bk-header :headData="headData"></bk-header>
      <div class="dialogue-box">
        <section class="dialogue clear">
          <div class="row clear" v-for="(item, index) in msgInfo.Msg" :key="index">
            <img :src="item.headerUrl" class="header">
            <p class="text">{{item.text}}</p>
          </div>
        </section>
        <footer class="sendwrapper">

        </footer>
      </div>
      <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight">
        <router-view></router-view>
      </transition>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import bkHeader from '../common/bk-header'
export default {
  data () {
    return {
      headData: {
        msgid: this.$route.query.msgid,
        backText: '微信',
        curText: '',
        otherIcon: '',
        groupNum: '',
        isMsgDis: ''
      }
    }
  },
  components: {
    bkHeader
  },
  computed: {
    ...mapState([
      'chatList'
    ]),
    // 根据msgid来查找当前聊天内容
    msgInfo () {
      for (var i in this.chatList) {
        if (this.chatList[i].msgid === this.$route.query.msgid) {
          return this.chatList[i]
        }
      }
    }
  },
  created () {
    // 获取聊天列表
    this.getChatList()
    // 头部name
    this.headData.curText = this.msgInfo.name
    // 其他图标
    this.headData.otherIcon = this.msgInfo.type
    // 是群聊的显示人数
    this.headData.groupNum = this.msgInfo.type === 'group' ? this.msgInfo.personNum : '0'
    // 消息免打扰
    this.headData.isMsgDis = this.msgInfo.chatStatus.isMsgDis
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'getChatList'
    ])
  }
}
</script>
<style lang="scss">
.dialogue-box{
  height: calc(100% - 45px);
  background-color: #efeff4;
  .dialogue{
    height: calc(96% - 50px);
    padding: 2%;
    .row{
      width: 80%;
      margin-top: 30px;
      margin-bottom: -10px;
      .header {
        width: 35px;
        float: left;
        display: block;
      }
      .text{
        float: left;
        background: #fff;
        padding: 8px;
        box-sizing: border-box;
        margin-left: 10px;
        position: relative;
        border-radius: 4px;
        max-width: 80%;
        font-size: 14px;
        &::before {
          width: 0;
          height: 0;
          position: absolute;
          left: -12px;
          top: 11px;
          content: "";
          border: 6px solid transparent;
          border-right-color: #fff;
        }
      }
    }
  }
  .sendwrapper{
    height: 50px;
  }
}
</style>
