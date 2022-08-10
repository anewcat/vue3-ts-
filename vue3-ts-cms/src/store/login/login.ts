// 通过ts的方式创建vuex模块
import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootState } from '../types'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  // Module必须传入泛型类型（两个值），S（模块中state类型）和R（根模块中state类型）
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      // console.log('执行accountLoginAction')
      // 实现登录逻辑
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction')
    }
  }
}
export default loginModule
