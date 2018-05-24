<template>
    <section class="wx-footer">
        <!-- exact 精确匹配 只要在此路径下也会添加类名-->
        <router-link to="/" tag="section" exact>
            <div class="iconfont icon-wechat">
                <span class="weui-badge wx-msg-count">1</span>
            </div>
            <span class="wx-n">微信</span>
        </router-link>
         <router-link to="/home1" tag="section">
            <div class="iconfont icon-address">
            </div>
            <span class="wx-n">通讯录</span>
        </router-link>
         <router-link to="/home2" tag="section">
            <div class="iconfont icon-find">
                <i class="weui-badge weui-badge_dot wx-find-count"></i>
            </div>
            <span class="wx-n">发现</span>
        </router-link>
         <router-link to="/home4" tag="section">
            <div class="iconfont icon-me">
            </div>
            <span class="wx-n">我</span>
        </router-link>
    </section>
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
.wx-footer{
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #fff;
    font-size: 0.46rem;
    height: 1.623rem;
    padding-top: 0.309rem;
    section{
        text-align: center;
        user-select: none;// 文本不能被选择
        -webkit-box-flex: 1;
        flex-grow: 1;
        line-height: 1;
        div{
            width: 1.08rem;
            height: 1.08rem;
            font-size: 1.08rem;
            margin: 0 auto;
            position: relative;
            color: #797979;
            margin-bottom: 0.07rem;
        }
        .wx-n{
            color: #929292;
            -webkit-transform-origin: 50% 0;
            transform-origin: 50% 0;
            -webkit-transform: scale(.9);
            transform: scale(.9);
        }
        .wx-msg-count{
            position: absolute;
            top: -0.1rem;
            right: -0.3rem;
        }
        .wx-find-count{
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    // 选中
    // 可在 路由 linkActiveClass 设置
    .router-link-active div,
    .router-link-active .wx-n{
        color: #0bb908;
    }
}
</style>
