<template>
    <div class="chat-list">
        <wx-seach></wx-seach>
        <ul>
            <li v-for="(item, index) in chatList" :key="index">
                <v-touch class="weui-cell chat-info"
                :class="{'current' : currentIndex === index}"
                v-on:tap="chat_tap(index)"
                v-on:swipeleft="chat_swipeleft(index)">
                    <div class="chat-left">
                        <img src="../../assets/logo.png" style="width: 50px;display: block">
                        <!-- 未读/消息未屏蔽 -->
                        <span class="weui-badge" v-show="!item.chatStatus.isMsgRead && !item.chatStatus.isMsgDis">{{item.MsgCount}}</span>
                        <!-- 未读/消息屏蔽 -->
                        <span class="weui-badge weui-badge_dot" v-show="!item.chatStatus.isMsgRead && item.chatStatus.isMsgDis"></span>
                    </div>
                    <div class="weui-cell__bd">
                        <!-- 发送时间 -->
                        <p class="time right">{{item.Msg[0].Time}}</p>
                        <!-- 发送人 -->
                        <p>{{item.name}}</p>
                        <!-- 消息免打扰 铃铛 -->
                        <p class="right iconfont icon-msgdis" v-show="item.chatStatus.isMsgDis"></p>
                        <!-- 消息内容 -->
                        <p style="font-size: 13px;color: #888888;">
                            <!-- 群组 显示发送人名字 -->
                            <span v-show="item.type === 'group'">{{item.Msg[0].senduser}}: </span>
                            {{item.Msg[0].text}}
                        </p>
                    </div>
                </v-touch>
                <v-touch class="chat-right">
                    <div class="chat-read" v-if="item.chatStatus.isMsgRead">标记未读</div>
                    <div class="chat-read" v-else>标记已读</div>
                    <div class="chat-del">删除</div>
                </v-touch>
            </li>
        </ul>
        <transition name="move">
		    <router-view></router-view>
		</transition>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import WxSeach from '../common/seach'
export default {
  data () {
    return {
      isSwiper: false, // 是否左划
      currentIndex: -1 // 处于左划index
    }
  },
  components: {
    WxSeach
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
    ]),
    // 点击 先判断是否为左划状态
    chat_tap (index) {
      if (index >= 0 && !this.isSwiper) {
        alert(index)
        this.$router.push('./chatdetail')
      } else {
        this.currentIndex = -1
        this.isSwiper = false // 状态改为非左划
      }
    },
    // 向左滑动
    chat_swipeleft (index) {
      // 未处于左划状态
      if (!this.isSwiper) {
        this.isSwiper = true // 状态改为左划
        this.currentIndex = index
      } else {
        this.isSwiper = false // 状态改为非左划
      }
    }
  }
}
</script>
<style lang="scss">
.chat-list{
    overflow: auto;
    height: 100%;
    li{
        position: relative;
        .chat-info{
            z-index: 2;
            background-color: #ffffff;
            transition: .2s all linear;
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
            .weui-cell__bd{
                .time{
                    color: #B2B2B2;
                    font-size: 14px;
                }
                .icon-msgdis{
                    color: #b8b8b8;
                    font-size: 14px;
                }
            }
        }
        .current{
            transform: translate3d(-156px, 0, 0);
        }
        .chat-right{
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            display: flex;
            div{
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #c7c7cc;
                color: #ffffff;
                font-size: 18px;
                padding: 0 12px;
            }
            .chat-del{
                background-color: #ff3b30;
            }
        }
    }
}
</style>
