<template>
  <div class="sub-router dialogue-finfo">
    <bk-header :headData="headData"></bk-header>
    <ul class="dialogue-user">
      <li>
        <div class="pic">
          <img src="../../assets/logo.png" alt="">
        </div>
        <p>佩奇</p>
      </li>
      <li>
        <div class="picadd">
          <span class="iconfont icon-plus"></span>
        </div>
      </li>
    </ul>
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
            <p>聊天小程序</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
    </div>
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
            <p>查找聊天内容</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
    </div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">置顶聊天</div>
        <div class="weui-cell__ft">
          <input class="weui-switch" type="checkbox">
        </div>
      </div>
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">消息免打扰</div>
        <div class="weui-cell__ft">
          <input class="weui-switch" type="checkbox">
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>设置当前聊天背景</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
    </div>
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
            <p>清除聊天记录</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
    </div>
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
            <p>投诉</p>
        </div>
        <div class="weui-cell__ft">
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import bkHeader from '../common/bk-header'
export default {
  data () {
    return {
      headData: {
        backText: '返回',
        curText: '聊天详情'
      }
    }
  },
  components: {
    bkHeader
  }
}
</script>

<style lang="scss">
.dialogue-finfo {
  z-index: 20;
  .dialogue-user{
    background-color: #fff;
    position: relative;
    padding: 15px 10px 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    color: #464646;
    font-size: 14px;
    li{
      float: left;
      flex-grow: 1;
      flex-basis: 25%;
      max-width: 25%;
      padding: 5px 10px;
      text-align: center;
      .pic{
        border-radius: 6px;
        overflow: hidden;
        width: 55px;
        height: 55px;
        margin: 0 auto;
        background-size: cover;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .picadd{
        border-radius: 6px;
        width: 55px;
        height: 55px;
        margin: 0 auto;
        border: 1px solid #ccc;
        .iconfont{
          font-size: 50px;
          color: #bbb;
        }
      }
    }
  }
}
</style>
