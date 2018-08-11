const addresss = [{
  id: '0',
  letter: 'P', // 首字母
  name: '佩奇',
  nickname: '小佩奇', // 昵称
  sex: '0', // 性别 0 男 1 女
  remarkname: '小佩奇', // 备注
  wx_id: 'wx_pq', // 微信号
  qq: '000000',
  area: ['中国', '北京', '北京'], // 地区
  headerUrl: 'https://qianxingw.github.io/img/pq.jpg'
}, {
  id: '1',
  letter: 'Q', // 首字母
  name: '乔治',
  nickname: '小乔治', // 昵称
  sex: '0', // 性别 0 男 1 女
  remarkname: '小乔治', // 备注
  wx_id: 'wx_qz', // 微信号
  qq: '000001',
  area: ['中国', '北京', '北京'], // 地区
  type: 'friend',
  headerUrl: 'https://qianxingw.github.io/img/qz.jpg'
}, {
  id: '1',
  letter: 'D', // 首字母
  name: '丹妮',
  nickname: '小丹妮', // 昵称
  sex: '1', // 性别 0 男 1 女
  remarkname: '小丹妮', // 备注
  wx_id: 'wx_dn', // 微信号
  qq: '000001',
  area: ['中国', '北京', '北京'], // 地区
  type: 'friend',
  headerUrl: 'https://qianxingw.github.io/img/dn.jpg'
}, {
  id: '1',
  letter: 'S', // 首字母
  name: '苏西',
  nickname: '小苏西', // 昵称
  sex: '1', // 性别 0 男 1 女
  remarkname: '小苏西', // 备注
  wx_id: 'wx_sx', // 微信号
  qq: '000001',
  area: ['中国', '北京', '北京'], // 地区
  type: 'friend',
  headerUrl: 'https://qianxingw.github.io/img/dn.jpg'
}]

const address = {
  addresss
}
address.getFriendInfo = (wxid) => {
  alert(1)
}
export default address
