<template>
    <div class="sub-router dialogue-finfo">
        <bk-header :headData="headData"></bk-header>
        群聊
    </div>
</template>
<script>
import bkHeader from '../common/bk-header'
export default {
  data () {
    return {
      headData: {
        backText: '返回',
        curText: '聊天信息',
        groupNum: '100'
      }
    }
  },
  components: {
    bkHeader
  }
}
</script>

<style lang="scss">
.dialogue-finfo{
    z-index: 20;
}
</style>
