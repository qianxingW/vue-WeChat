<template>
    <div class="wx-header">
      <!-- 当前页面名 -->
      <div class="header-name">
        <span>微信</span><i class="wx-msg-count">(1)</i>
      </div>
      <!-- 右侧按钮 -->
      <div class="header-other">
        <!-- 微信页面的添加 包括'发起群聊','添加朋友','扫一扫','收付款' -->
        <span class="iconfont icon-plus" @click="TOOGGLE_MENU_STATUS"></span>
        <!-- 微信页面下拉菜单 -->
        <ul class="dropdown-menu" :class="menuStatus ? 'menu-open' : 'menu-close'">
          <li>
            <span class="iconfont icon-wechat"></span>
            <div>发起群聊</div>
          </li>
          <li>
            <span class="iconfont icon-addfriend"></span>
            <div>添加朋友</div>
          </li>
          <li>
            <span class="iconfont icon-sys"></span>
            <div>扫一扫</div>
          </li>
          <li>
            <span class="iconfont icon-sfk"></span>
            <div>收付款</div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    // 下拉菜单状态管理
    ...mapState([
      'menuStatus'
    ])
  },
  methods: {
    ...mapMutations([
      'TOOGGLE_MENU_STATUS'
    ])
  }
}
</script>
<style lang="scss">
.wx-header{
  position: relative;
  height: 100%;
  padding: 0 15px 0 10px;
  background: #1b1b1b;
  line-height: 45px;
  color: #fff;
  .header-name{
    margin: 0 auto;
    font-size: 18px;
    text-align: center;
    .wx-msg-count{
      font-style: normal;
    }
  }
  .header-other{
    position: absolute;
    top: 0;
    right: 10px;
    >.iconfont{
      font-size: 22px;
      width: 40px;
      text-align: center;
      display: inline-block;
    }
    .dropdown-menu{
      position: absolute;
      z-index: 3;
      width: 103px;
      font-size: 16px;
      right: 0;
      top: 54px;
      text-align: left;
      border-radius: 2px;
      background-color: #49484b;
      padding: 0 15px;
      -webkit-transform-origin: 90% 0%;
      transform-origin: 90% 0%;
      li {
        position: relative;
        height: 40px;
        line-height: 40px;
        &:not(:last-child)::after {
          content: "";
          width: 200%;
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          background-color: #5b5b5d;
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
          -webkit-transform-origin: 0 100%;
          transform-origin: 0 100%;
        }
      }
      &::before {
        width: 0;
        height: 0;
        position: absolute;
        top: -7px;
        right: 15px;
        content: "";
        border-width: 0 6px 8px;
        border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #49484b rgba(0, 0, 0, 0);
        border-style: solid;
      }
      .iconfont {
        float: left;
        font-size: 16px;
        margin-right: 15px;
    }
    }
    .menu-open{
      -webkit-transition: initial;
      transition: initial;
      opacity: 1;
    }
    .menu-close{
      opacity: 0;
      -webkit-transition: .2s opacity ease, .6s transform ease;
      transition: .2s opacity ease, .6s transform ease;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
}
</style>
