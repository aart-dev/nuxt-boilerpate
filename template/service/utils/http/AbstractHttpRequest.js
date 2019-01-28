/**
 * Abstract Http Request
 *
 * Deokin 2019.1.24(완료)
 * */
import Cookies from 'js-cookie'
import HttpErrorHandleService from './HttpErrorHandleService'

const acToken = Cookies.get(process.env.ACCESS_TOKEN_NAME)

export default class AbstractHttpRequest extends HttpErrorHandleService {
  constructor ({accessToken = acToken, language = 'ko-KR', baseUrl = process.env.API_SERVER_ADDRESS} = {}) {
    super()
    this.baseUrl = baseUrl
    this.language = language
    this.accessToken = accessToken
  }

  // Request Get
  requestGet () {
    throw new Error('requestGet() must be implement.')
  }

  // Request Post
  requestPost () {
    throw new Error('requestPost() must be implement.')
  }

  // Request Put
  requestPut () {
    throw new Error('requestPut() must be implement.')
  }

  // Request Patch
  requestPatch () {
    throw new Error('requestPatch() must be implement.')
  }

  // Request Delete
  requestDelete () {
    throw new Error('requestDelete() must be implement.')
  }
}
