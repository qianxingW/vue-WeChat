import {
  GET_CHAT_LEST
} from './mutation-types'

// 类似于mutation，用于提交mutation来改变状态，而不直接变更状态，可以包含任意异步操作
export default {
  // 模拟数据请求 聊天列表
  getChatList ({commit, state}) {
    let list = require('../mock/chat')
    commit(GET_CHAT_LEST, list)
  }
}
