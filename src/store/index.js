import { createStore, createLogger } from 'vuex' // createLogger log插件
import state from './state'
import mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state,
  mutations,
  getters,
  actions,
  strict: debug, // 开严格模式深度watch ，state的变化
  plugins: debug ? [createLogger()] : []
})
