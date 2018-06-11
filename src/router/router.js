const WeChat = r => require.ensure([], () => r(require('../components/wechat/wechat')), 'WeChat')
const ChatDialogue = r => require.ensure([], () => r(require('../components/wechat/dialogue')), 'ChatDialogue')
const DialogueFInfo = r => require.ensure([], () => r(require('../components/wechat/dialogueFInfo')), 'DialogueFInfo')
const DialogueGInfo = r => require.ensure([], () => r(require('../components/wechat/dialogueGInfo')), 'DialogueGInfo')

const Address = r => require.ensure([], () => r(require('../components/address/address')), 'Address')
const Find = r => require.ensure([], () => r(require('../components/find/find')), 'Find')
const Me = r => require.ensure([], () => r(require('../components/me/me')), 'Me')
export default [
  {
    // 微信
    path: '/',
    name: 'WeChat',
    component: WeChat,
    children: [{
      // 聊天窗口
      path: '/dialogue',
      component: ChatDialogue,
      children: [{
        // 个人聊天 详情
        path: 'dialogueFInfo',
        component: DialogueFInfo
      }, {
        // 群组聊天 详情
        path: 'dialogueGInfo',
        component: DialogueGInfo
      }]
    }]
  },
  // 通讯录
  {
    path: '/address',
    name: 'Address',
    component: Address
  },
  // 发现
  {
    path: '/find',
    name: 'Find',
    component: Find
  },
  // 我
  {
    path: '/me',
    name: 'Me',
    component: Me
  }
]
