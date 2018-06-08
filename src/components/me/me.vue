<template>
    <div class="me">
        <div class="weui-cells me-info">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <img src="https://qianxingw.github.io/img/me.jpg" alt="">
                </div>
                <div class="weui-cell__bd">
                    <p>佩奇</p>
                    <p>微信号：wx-pq</p>
                </div>
                <div class="weui-cell__ft">
                    <span class="iconfont icon-ecode"></span>
                </div>
            </div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-photo"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>相册</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-shake"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>收藏</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-money"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>钱包</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-card"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>卡包</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-emoji"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>表情</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
        </div>
        <div class="weui-cells">
            <div class="weui-cell weui-cell_access">
                <div class="weui-cell__hd">
                    <span class="iconfont icon-setting"></span>
                </div>
                <div class="weui-cell__bd">
                    <p>设置</p>
                </div>
                <div class="weui-cell__ft"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
.me{
    .me-info{
        .weui-cell__hd{
            margin-right: 5px;
            border-radius: 5px;
            overflow: hidden;
            border:1px solid #ccc;
            img{
                width: 60px;
                height: 60px;
                display: block;
            }
        }
        .iconfont{
            font-size: 25px;
            margin-right: 5px;
        }
    }
    .iconfont{
        font-size: 20px;
        margin-right: 5px;
    }
}
</style>
