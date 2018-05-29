import {
  TOOGGLE_MENU_STATUS,
  TOOGGLE_SEACH_STATUS,
  GET_CHAT_LEST
} from './mutation-types.js'

export default {
  // 微信首页下拉菜单显示、隐藏
  [TOOGGLE_MENU_STATUS] (state) {
    state.menuStatus = !state.menuStatus
  },
  // 微信搜索显示、隐藏
  [TOOGGLE_SEACH_STATUS] (state) {
    state.seachStatus = !state.seachStatus
  },
  // 获取聊天列表
  [GET_CHAT_LEST] (state, list) {
    state.chatList = list
  }
}