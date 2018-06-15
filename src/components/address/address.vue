<template>
    <div>
        <div class="address">
            <wx-search></wx-search>
            <div class="weui-cells">
                <router-link to="/address/newfriends" tag="div" class="weui-cell">
                    <div class="weui-cell__hd">
                        <span class="iconfont icon-newfriends"></span>
                    </div>
                    <div class="weui-cell__bd">
                        <p>新的朋友</p>
                    </div>
                </router-link>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <span class="iconfont icon-group"></span>
                    </div>
                    <div class="weui-cell__bd">
                        <p>群聊</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <span class="iconfont icon-bq"></span>
                    </div>
                    <div class="weui-cell__bd">
                        <p>标签</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        <span class="iconfont icon-gzh"></span>
                    </div>
                    <div class="weui-cell__bd">
                        <p>公众号</p>
                    </div>
                </div>
            </div>
            <div class="address-list" v-for="(item, index) in addressList" :key="index">
                <p class="letter" v-text="index"></p>
                <div class="weui-cells">
                    <div class="weui-cell" v-for="(value, index) in item" :key="index">
                        <div class="weui-cell__hd">
                            <span class="iconfont icon-newfriends"></span>
                        </div>
                        <div class="weui-cell__bd">
                            <p>{{value.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="letter-list">
                <p v-for="(item, index) in letterList" :key="index">{{item}}</p>
            </div>
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
import {mapGetters} from 'vuex'
import WxSearch from '../common/search'
export default {
  data () {
    return {
    }
  },
  components: {
    WxSearch
  },
  computed: {
    // 获取字母列表和分组后的通讯录
    ...mapGetters([
      'letterList',
      'addressList'
    ])
  },
  mounted () {
    console.log(this.letterList)
    console.log(this.addressList)
  }
}
</script>
<style lang="scss">
.address{
    overflow: auto;
    height: 100%;
    .weui-cells{
        margin-top: 0;
        .weui-cell__hd{
            height: 36px;
            width: 36px;
            overflow: hidden;
            margin-right: 10px;
            .iconfont{
                font-size: 36px;
                line-height: 1;
            }
        }
    }
    .address-list{
        .letter{
            padding-left: 15px;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            color: #888;
        }
    }
    .letter-list{
        position: fixed;
        right: 0;
    }
}
</style>
