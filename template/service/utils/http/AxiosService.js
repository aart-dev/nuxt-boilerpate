/**
 * Axios Service
 * Deokin 2019.1.24
 * */
import AbstractHttpRequest from './AbstractHttpRequest'
import axios from 'axios'

export default class AxiosService extends AbstractHttpRequest {
  constructor (...args) {
    super(...args)
    // Set config defaults when creating the instance
    const _axos = axios.create({
      baseURL: this.baseUrl
    })

    // TODO 에러 처리 함수 실행
    // Request interceptor
    _axos.interceptors.request.use(function (config) {
      // Do something before request is sent
      return config
    }, function (error) {
      // TODO Do something with request error
      return Promise.reject(error)
    })

    // Response interceptor
    _axos.interceptors.response.use(function (response) {
      // Do something with response data
      return response
    }, function (error) {
      // TODO Do something with response error
      return Promise.reject(error)
    })

    this.axios = _axos
  }

  // Initialize axios config
  // set default configuration
  initConfig (config) {
    let conf = config || {
      headers: {}
    }
    conf.headers['accept-language'] = this.language
    return conf
  }

  // Request Get
  requestGet ({url, config} = {}) {
    console.debug('::: Axios Request Get :::')
    return this.axios.get(
      url, this.initConfig(config)
    ).then(resp => {
      return resp
    }).catch(err => {
      console.log('Error', err)
    })
  }

  // Request Post
  requestPost ({url, body, config} = {}) {
    console.debug('::: Axios Request Post :::')
    return this.axios.post(
      url, body, this.initConfig(config)
    ).then(resp => {
      return resp
    }).catch(err => {
      console.log('Error', err)
    })
  }

  // Request Put
  requestPut ({url, body, config} = {}) {
    console.debug('::: Axios Request Put :::')
    return this.axios.put(
      url, body, this.initConfig(config)
    ).then(resp => {
      return resp
    }).catch(err => {
      console.log('Error', err)
    })
  }

  // Request Patch
  requestPatch ({url, body, config} = {}) {
    console.debug('::: Axios Request Patch :::')
    return this.axios.patch(
      url, body, this.initConfig(config)
    ).then(resp => {
      return resp
    }).catch(err => {
      console.log('Error', err)
    })
  }

  // Request Delete
  requestDelete ({url, config} = {}) {
    console.debug('::: Axios Request Delete :::')
    return this.axios.delete(
      url, this.initConfig(config)
    ).then(resp => {
      return resp
    }).catch(err => {
      console.log('Error', err)
    })
  }
}
