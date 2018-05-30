import vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import address from '../mock/address'

vue.use(Vuex)

const state = {
  menuStatus: false, // 控制微信首页下拉菜单的显示true、隐藏false
  seachStatus: false, // 控制微信搜索框的显示true、隐藏false
  chatList: '', // 消息列表
  addressList: address.addresss // 通讯录列表
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
