/**
 * Abstract Http Request
 *
 * Deokin 2019.1.24(완료)
 * */
import HttpErrorHandleService from './HttpErrorHandleService'

export default class AbstractHttpRequest extends HttpErrorHandleService {
  constructor ({accessToken = '', language = 'ko-KR', baseUrl = process.env.API_SERVER_ADDRESS} = {}) {
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
