<template>
  <div id="app">
    <div id="wx-app">
      <!-- 顶部显示 -->
      <header id="wx-header">
        <wx-header></wx-header>
      </header>
      <!-- 顶部搜索 '微信'.'通讯录' 显示-->
      <wx-seach></wx-seach>
      <!-- 底部切换 '微信','通讯录','发现','我' -->
      <footer id="wx-footer">
        <wx-footer></wx-footer>
      </footer>
      <router-view/>
    </div>
  </div>
</template>

<script>
import WxHeader from './components/common/wx-header'
import WxSeach from './components/common/seach'
import WxFooter from './components/common/wx-footer'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    WxHeader,
    WxSeach,
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
}
#wx-header{
  width: 100%;
  height: 1.73913rem;
  position: relative;
  background: linear-gradient(180deg,#303036,#3c3b40);
}
#wx-footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  &:not(:first-child)::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    top: 0;
    left: 0;
    background: #b7b7b7;
  }
}
</style>
