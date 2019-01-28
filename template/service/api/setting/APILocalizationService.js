/**
 * API Localization Service
 * Deokin 2019.01.24
 * */
import AxiosService from '~/service/utils/http/AxiosService'

export default class APILocalizationService extends AxiosService {
  /**
   * 언어 목록
   * @return        : Object[Promise]
   * @responseData  : Array > 언어목록
   * */
  getLanguage () {
    return this.requestGet({url: '/api/v1/setting/language'})
  }

  /**
   * 국가 코드 목록
   * @return   : Object[Promise]
   * @responseData  : Array > 국가 코드 목록
   * */
  getCountries () {
    return this.requestGet({url: '/api/v1/countries'})
  }
}
