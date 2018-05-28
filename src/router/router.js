const WeChat = r => require.ensure([], () => r(require('../components/wechat/wechat')), 'WeChat')
export default [
  {
    path: '/',
    name: 'WeChat',
    component: WeChat
  }
]
