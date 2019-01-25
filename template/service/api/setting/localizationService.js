/**
 * Localization Service
 * Deokin 2019.01.24
 * */
import AxiosService from '~/service/utils/http/AxiosService'

export default class LocalizationService extends AxiosService {
  getLanguage () {
    return this.requestGet('/api/v1/setting/language').then(function (resp) {
      return resp.data
    })
  }

  getCountries () {
    return this.requestGet('/api/v1/countries').then(function (resp) {
      return resp.data
    })
  }
}
