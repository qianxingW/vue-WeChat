// 如vue中的计算属性一样，基于state数据的二次包装，常用于数据的筛选和多个数据的相关性计算
export default {
  // 首字母的集合
  letterList: state => {
    let letter = [] // 首字母的数组
    let address = state.addressList
    for (let i = 0; i < address.length; i++) {
      if (letter.indexOf(address[i].letter.toUpperCase()) === -1) {
        letter.push(address[i].letter.toUpperCase())
      }
    }
    return letter.sort()
  },
  // 通讯录进行分组
  addressList: (state, getter) => {
    let addressList = {} // 分组后的通讯录
    let address = state.addressList // 所有通讯录
    let letterList = getter.letterList // 首字母列表
    // 循环字母列表
    for (let i = 0; i < letterList.length; i++) {
      let letterN = getter.letterList[i] // 取首字母
      addressList[letterN] = [] // 对象形式储存
      // 循环通讯录
      for (let k = 0; k < address.length; k++) {
        // 如果通讯录中的letter等于当前的字母 储存起来
        if (address[k].letter.toUpperCase() === letterN) {
          addressList[letterN].push(address[k])
        }
      }
    }
    return addressList
  }
}
