import {GET_USERINFO, RECORD_USERINFO} from './mutation-types'
import {setStore, getStore, setStoreLocal, getStoreLocal} from '@/utils/storage'

export default {
  [GET_USERINFO] (state) {
    if (!state.userInfo && getStore('userInfo')) {
      state.userInfo = JSON.parse(getStore('userInfo'))
    }
  },
  // 写入用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    setStore('userInfo', info)
  },
  
}
