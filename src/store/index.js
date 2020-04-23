import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const config = {
  // 定义状态
  state: {
    count: 1,
    isLogin: false,
    usname: '',
    upwd: ''
  },

  // getters
  getters: {
    // isLogin:(state) =>{
    //     return state.isLogin;
    // },
    // 等同上面的写法
    // isLogin: state => state.isLogin
  },

  // 修改state里面的变量
  mutations: {
    isLogin (state) {
      state.isLogin = true
    }
  },

  // action行为
  actions: {

  },

  // module
  modules: {

  }
}
export default new Vuex.Store(config)
