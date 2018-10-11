<template>
  <div id="app">
   <!-- 同步更改测试 -->
    <div id="wx-app">
      <!-- 顶部显示 第二次测试撤回 版本测试 分支测试 two分支测试-->
      <header id="wx-header" :class="{'header-hide':seachStatus}">
        <wx-header></wx-header>
      </header>
      <!-- 主题内容 第三次测试撤回 新分支测试-->
      <section id="wx-content" :class="{'content-change':seachStatus}">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </section>
      <!-- 底部切换 '微信','通讯录','发现','我' 第四次测试撤回 还是测试-->
      <footer id="wx-footer">
        <wx-footer></wx-footer>
      </footer>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import WxHeader from './components/common/wx-header'
import WxFooter from './components/common/wx-footer'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'seachStatus'
    ])
  },
  components: {
    WxHeader,
    WxFooter
  }
}
</script>

<style lang='scss'>
/* 公共样式 */
@import 'assets/css/common.css';

/* 需要的动画 */
@import 'assets/css/lib/iconfont.css';

/* 需要的动画 */
@import 'assets/css/lib/animate.css';

/* weui  微信官方设计 */
@import 'assets/css/lib/weui.css';
#wx-app{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#wx-header{
  width: 100%;
  height: 45px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg,#303036,#3c3b40);
  transition: all 0.2s linear;
}
// 顶部消失动画
.header-hide{
  margin-top: -45px;
}
#wx-content{
  padding-top: 45px;
  padding-bottom: 58px;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  background: #f1f0f6;
  height: calc(100% - 103px);
  transition: padding-top 0.2s linear;
}
#wx-app .content-change{
  padding-top: 0;
  padding-bottom: 58px;
  height: 100%;
}
#wx-footer{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  z-index: 3;
  &:not(:first-child)::before{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #C0BFC4;
    color: #C0BFC4;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}
</style>
