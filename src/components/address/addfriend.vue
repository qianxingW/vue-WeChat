<template>
    <div class="sub-router addfriend">
        <bk-header :headData='headData'></bk-header>
        <div class="searchbar">
            <span class="iconfont icon-search"></span>
            <input type="text" placeholder="微信号/手机号">
        </div>
        <p class="my-wx">
            <span>我的微信号：wqx0221</span>
            <span class="iconfont icon-cecode"></span>
        </p>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-ld"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>雷达加朋友</p>
                    <p>添加身边的朋友</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-group"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>面对面建群</p>
                    <p>与身边的朋友进入同一个群聊</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-syscolor"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>扫一扫</p>
                    <p>扫描二维码名片</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-syscolor"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>手机联系人</p>
                    <p>添加通讯录中的朋友</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-gzh"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>公众号</p>
                    <p>获得更多咨讯和服务</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
        </div>
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
    font-size: 16px;
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
    .my-wx{
        margin: 12px 0;
        text-align: center;
        line-height: 24px;
        .iconfont{
            font-size: 22px;
        }
    }
    .weui-cells{
        .weui-cell__hd .iconfont{
            font-size: 35px;
            margin-right: 20px;
            line-height: 1;
        }
        .weui-cell__bd{
            p:last-child{
                font-size: 12px;
                color: #b7b7b7;
            }
        }
    }
}
</style>
