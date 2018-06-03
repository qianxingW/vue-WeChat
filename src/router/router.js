const WeChat = r => require.ensure([], () => r(require('../components/wechat/wechat')), 'WeChat')
const ChatDetail = r => require.ensure([], () => r(require('../components/wechat/chatdetail')), 'ChatDetail')

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
      path: '/chatdetail',
      component: ChatDetail
    }]
  },
  {
    path: '/address',
    name: 'Address',
    component: Address
  },
  {
    path: '/find',
    name: 'Find',
    component: Find
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  }
]
