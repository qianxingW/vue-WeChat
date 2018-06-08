<template>
    <div class="wx-head">
        <div class="wx-back" @click="$router.back()">
            <span class="iconfont icon-back"></span>
            {{headData.backText}}
        </div>
        <div class="wx-other">
            <router-link :to="{path:'/dialogue/dialogueFInfo',query: { msgid: headData.msgid}}" v-show="headData.otherIcon === 'friend'" tag="span" class="iconfont icon-mes"></router-link>
            <router-link :to="{path:'/dialogue/dialogueGInfo',query: { msgid: headData.msgid}}" v-show="headData.otherIcon === 'group'" tag="span" class="iconfont icon-groups"></router-link>
        </div>
        <div class="wx-name">
            <span>{{headData.curText}}</span>
            <span v-show="headData.groupNum > 0">({{headData.groupNum}})</span>
            <span class="iconfont icon-msgdis" v-show="headData.isMsgDis"></span>
        </div>
    </div>
</template>
<script>
export default {
  props: [
    'headData'
  ],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.wx-head{
    position: relative;
    height: 45px;
    padding: 0 15px 0 10px;
    background: #1b1b1b;
    line-height: 45px;
    color: #fff;
    .wx-back{
        max-width: 85px;
        float: left;
        .iconfont{
            font-size: 20px;
            float: left;
        }
    }
    .wx-name{
        padding: 0 8px;
        overflow: hidden;
        font-size: 18px;
        justify-content: center;
        text-align: center;
    }
    .wx-other{
        height: 100%;
        max-width: 75px;
        min-width: 50px;
        width: auto;
        float: right;
        text-align: right;
        .iconfont{
            font-size: 24px;
        }
    }
}
</style>
