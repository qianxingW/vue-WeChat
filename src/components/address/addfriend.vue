<template>
    <div class="sub-router addfriend">
        <bk-header :headData='headData'></bk-header>
        <div class="searchbar">
            <span class="iconfont icon-search"></span>
            <input type="text" placeholder="微信号/手机号">
        </div>
        <p>我的微信号</p>
    </div>
</template>
<script>
import bkHeader from '../common/bk-header'
export default {
  data () {
    return {
      headData: {
        backText: '通讯录',
        curText: '添加朋友'
      }
    }
  },
  components: {
    bkHeader
  }
}
</script>
<style lang="scss">
.addfriend{
    .searchbar{
        position: relative;
        height: 30px;
        padding-left: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #fff;
        border-top: 1px solid #d9d9d9;
        border-bottom: 1px solid #d9d9d9;
        margin-top: 20px;
        input{
            width: calc(100% - 30px);
            font-size: 16px;
            height: 100%;
            border: 0;
            outline: none;
            vertical-align: middle;
        }
    }
}
</style>
