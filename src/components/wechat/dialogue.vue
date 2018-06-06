<template>
    <div class="sub-router chat-detail">
      <bk-header :backText="backText" :curText="curText" :otherIcon="otherIconL"></bk-header>
      <div class="dialogue-box">
        <section class="dialogue clear">
          <div class="row clear" v-for="(item, index) in msgInfo" :key="index">
            <img src="../../assets/img/pq.jpg" class="header">
            <p class="text">{{item.text}}</p>
          </div>
        </section>
        <footer class="sendwrapper">

        </footer>
      </div>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import bkHeader from '../common/bk-header'
export default {
  data () {
    return {
      backText: '微信',
      curText: '佩奇',
      otherIconL: 'icon-mes'
    }
  },
  components: {
    bkHeader
  },
  computed: {
    ...mapState([
      'chatList'
    ]),
    // 根据wx_id来查找当前聊天内容
    msgInfo () {
      for (var i in this.chatList) {
        if (this.chatList[i].wx_id === this.$route.query.wx_id) {
          return this.chatList[i].Msg
        }
      }
    }
  },
  created () {
    console.log(this.$route.query)
    console.log(this.chatList)
  },
  mounted () {
    // 获取聊天列表
    this.getChatList()
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
