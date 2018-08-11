<template>
    <div class="sub-router groupcaht">
        <bk-header :headData="headData"></bk-header>
        <!-- 搜索组件基本上一样 所以没有修改 -->
        <wx-search></wx-search>
        <div class="weui-cells group-list">
            <div class="weui-cell" v-for="(value, index) in groupList" :key="index">
                <div class="weui-cell__hd">
                    <img :src="value.gheadurl" alt="">
                </div>
                <div class="weui-cell__bd">
                    <p>{{value.gname}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
import bkHeader from '../common/bk-header'
import WxSearch from '../common/search'
export default {
  data () {
    return {
      headData: {
        backText: '通讯录',
        curText: '群聊'
      }
    }
  },
  computed: {
    ...mapState([
      'groupList'
    ])
  },
  components: {
    bkHeader,
    WxSearch
  },
  mounted () {
    this.getGroupList()
    console.log(this.groupList)
  },
  methods: {
    ...mapActions([
      'getGroupList'
    ])
  }
}
</script>
<style lang="scss">
.groupcaht{
    .group-list{
        .weui-cell__hd{
            height: 36px;
            width: 36px;
            overflow: hidden;
            margin-right: 10px;
            img{
                height: 36px;
                width: 36px;
            }
        }
    }
}
</style>
