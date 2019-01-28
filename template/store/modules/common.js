import { types } from './types'

const actions = {
  [types.actions.COMMON_GET_LANGUAGE] (context, {isTokenRequired} = {}) {
    /**
     * Argument
     *    - isTokenRequired : Boolean   > 토큰의 필요 여부
     */
    return context.dispatch('requestGet', {
      requestUrl: '/api/v1/setting/language',
      isTokenRequired: isTokenRequired
    }, {root: true})
  },
  [types.actions.COMMON_GET_COUNTRY_CODE] (context, {isTokenRequired} = {}) {
    /**
     * Argument
     *    - isTokenRequired : Boolean   > 토큰의 필요 여부
     */
    return context.dispatch('requestGet', {
      requestUrl: '/api/v1/countries',
      isTokenRequired: isTokenRequired
    }, {root: true})
  },
  [types.actions.USER_STORE_USER_INFO] (context, info) {
    // context.rootState.userInfo = info
    context.commit(types.mutations.ROOT_SET_USER_INFO, info, { root: true })
  }
}

export default {
  actions
}
