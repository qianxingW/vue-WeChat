<template>
    <!-- seach-index 为了下拉菜单和搜索层级问题 -->
    <div class="wx-seach" :class="{'seach-index': seachStatus}">
        <div class="weui-search-bar" id="searchBar" :class="{'weui-search-bar_focusing': seachStatus}">
            <form class="weui-search-bar__form">
                <div class="weui-search-bar__box">
                    <i class="weui-icon-search"></i>
                    <input type="search" v-model="searchInput" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                    <a href="javascript:" class="weui-icon-clear" id="searchClear" @click="clearinput"></a>
                </div>
                <label @click="TOOGGLE_SEACH_STATUS" class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="TOOGGLE_SEACH_STATUS">取消</a>
        </div>
        <section :class="{'section-show': seachStatus}">
            <h3 class="weui-media-box__desc">搜索指定内容</h3>
            <ul class="w-list">
                <li class="w-item">朋友圈</li>
                <li class="w-item">文章</li>
                <li class="w-item bn">公众号</li>
                <li class="w-item">小说</li>
                <li class="w-item">音乐</li>
                <li class="w-item bn">表情</li>
            </ul>
        </section>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      searchInput: ''
    }
  },
  computed: {
    ...mapState([
      'seachStatus'
    ])
  },
  methods: {
    ...mapMutations([
      'TOOGGLE_SEACH_STATUS'
    ]),
    clearinput () {
      this.searchInput = ''
    }
  }
}
</script>
<style lang="scss">
.wx-seach{
    font-size: 16px;
    position: relative;
    section{
        display: none;
        padding-top: 30px;
        background: #eee;
        width: 100%;
        overflow: hidden;
        height: 662px;
        z-index: 3;
        position: absolute;
        h3{
            text-align: center;
            font-weight: 400;
        }
        .w-list{
            margin: 20px 0;
            .w-item{
                width: 33.33%;
                font-size: 14px;
                text-align: center;
                float: left;
                color: #09bb07;
                box-sizing: border-box;
                margin-bottom: 15px;
                border-right: 1px solid rgba(#d9d9d9, 0.9)
            }
            .bn{
                border-right: 0;
            }
        }
    }
    .section-show{
        display: block;
    }
}
.seach-index{
    z-index: 10;
}
</style>
