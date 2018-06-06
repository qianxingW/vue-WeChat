module.exports = [
  {
    id: '0',
    name: '佩奇',
    nickname: '小佩奇', // 昵称
    sex: '0', // 性别 0 男 1 女
    remarkname: '小佩奇', // 备注
    wx_id: 'wx_pq', // 微信号
    qq: '000000',
    area: ['中国', '北京', '北京'], // 地区
    type: 'friend',
    MsgCount: 1,
    Msg: [{
      headerUrl: 'https://localhost:8080/vue-wechat/assets/logo.png',
      senduser: '佩奇',
      text: '不要问我从哪里来',
      Time: '16:26'
    }],
    chatStatus: {
      isMsgRead: false, // 标记已读
      isMsgDis: true // 消息免打扰
    }
  },
  {
    id: '1',
    name: '乔治',
    nickname: '小乔治', // 昵称
    sex: '0', // 性别 0 男 1 女
    remarkname: '小乔治', // 备注
    wx_id: 'wx_qz', // 微信号
    qq: '000001',
    area: ['中国', '北京', '北京'], // 地区
    type: 'friend',
    MsgCount: 1,
    Msg: [{
      headerUrl: '../../assets/img/qz.jpg',
      senduser: '乔治',
      text: '11',
      Time: '10:26'
    }],
    chatStatus: {
      isMsgRead: false, // 标记已读
      isMsgDis: false // 消息免打扰
    }
  },
  {
    id: '2',
    name: '小猪佩奇粉丝群',
    type: 'group',
    MsgCount: 3,
    Msg: [{
      headerUrl: '../../assets/img/qz.jpg',
      senduser: '乔治',
      text: '我是弟弟，乔治',
      Time: '09:23'
    }, {
      headerUrl: '../../assets/img/pq.jpg',
      senduser: '佩奇',
      text: '我是小猪佩奇',
      Time: '08:10'
    }, {
      headerUrl: '../../assets/img/dn.jpg',
      senduser: '丹尼',
      text: '我是小羊，丹尼',
      Time: '07:26'
    }],
    chatStatus: {
      isMsgRead: true, // 标记已读
      isMsgDis: true // 消息免打扰
    }
  }
]
