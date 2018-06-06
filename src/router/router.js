const WeChat = r => require.ensure([], () => r(require('../components/wechat/wechat')), 'WeChat')
const ChatDialogue = r => require.ensure([], () => r(require('../components/wechat/dialogue')), 'ChatDialogue')

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
      path: '/dialogue',
      component: ChatDialogue
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
