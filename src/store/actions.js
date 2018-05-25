import {
  GET_CHAT_LEST
} from './mutation-types'

export default {
  // 模拟数据请求
  getChatList ({commit, state}) {
    let list = require('../mock/chat')
    commit(GET_CHAT_LEST, list)
  }
}
