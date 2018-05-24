import vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

vue.use(Vuex)

const state = {
  menuStatus: false // 控制微信首页下拉菜单的显示true、隐藏false
}

export default new Vuex.Store({
  state,
  mutations
})
