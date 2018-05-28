<template>
    <div class="chat-list">
        <ul>
            <li class="weui-cell" v-for="(item, index) in chatList" :key="index">
                <div class="chat-left">
                    <img src="../../assets/logo.png" style="width: 50px;display: block">
                    <span class="weui-badge" v-if="item.chatStatus.isMsgDis">8</span>
                    <span class="weui-badge weui-badge_dot" v-else></span>
                </div>
                <div class="weui-cell__bd">
                    <p>{{item.name}}</p>
                    <p style="font-size: 13px;color: #888888;">{{item.Msg[0].text}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'chatList'
    ])
  },
  mounted () {
    // 获取聊天列表
    this.getChatList()
    console.log(this.chatList)
  },
  methods: {
    ...mapActions([
      'getChatList'
    ])
  }
}
</script>
<style lang="scss">
.chat-list{
    .chat-left{
        position: relative;
        margin-right: 10px;
        .weui-badge{
            position: absolute;
            top: -5px;
            right: -5px;
        }
        .weui-badge_dot{
            top: -3px;
            right: -3px;
        }
    }
}
</style>
