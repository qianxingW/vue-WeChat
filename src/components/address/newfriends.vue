<template>
    <div class="sub-router newfriend">
        <bk-header :headData="headData"></bk-header>
        <!-- 搜索组件基本上一样 所以没有修改 -->
        <wx-search></wx-search>
        <div class="weui-cells">
            <div class="weui-cell">
                <dl class="addbar">
                    <dt><span class="iconfont icon-phone"></span></dt>
                    <dd>添加手机联系人</dd>
                </dl>
            </div>
        </div>
        <p class="new-time">近三天</p>
        <div class="weui-cells new-list">
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <p>路飞</p>
                    <p class="con">请求添加你为朋友</p>
                </div>
                <div class="weui-cell_ft">
                    已添加
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <p>露娜</p>
                    <p class="con">请求添加你为朋友</p>
                </div>
                <div class="weui-cell_ft">
                    已过期
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <p>苏西</p>
                    <p class="con">请求添加你为朋友</p>
                </div>
                <div class="weui-cell_ft">
                    已拒绝
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <div class="weui-cell__bd">
                    <p>苏西</p>
                    <p class="con">请求添加你为朋友</p>
                </div>
                <div class="weui-cell_ft">
                    <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">
                        接受
                    </a>
                </div>
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
import bkHeader from '../common/bk-header'
import WxSearch from '../common/search'
export default {
  data () {
    return {
      headData: {
        backText: '通讯录',
        curText: '新的朋友',
        otherIcon: 'addfriend'
      }
    }
  },
  components: {
    bkHeader,
    WxSearch
  }
}
</script>
<style lang="scss">
.newfriend{
  .addbar{
      margin: 0 auto;
      text-align: center;
      .iconfont{
          font-size: 35px;
      }
      dd{
        font-size: 14px;
        color: #929292;
      }
  }
  .new-time{
    padding-left: 15px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #888;
  }
  .new-list{
      margin-top: 0;
      .weui-cell__hd{
          margin-right: 10px;
          img{
            width: 40px;
            height: 40px;
        }
      }
      .weui-cell__bd{
          .con{
              font-size: 13px;
              color: #888;
          }
      }
      .weui-cell_ft{
          text-align: right;
          color: #999;
      }
  }
}
</style>
