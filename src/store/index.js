import vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

vue.use(Vuex)

const state = {
  menuStatus: false, // 控制微信首页下拉菜单的显示true、隐藏false
  seachStatus: false, // 控制微信搜索框的显示true、隐藏false
  chatList: '' // 消息列表
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
