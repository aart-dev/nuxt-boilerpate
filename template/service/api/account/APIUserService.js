/**
 * API User Service
 * Deokin 2019.01.25
 * */
import AxiosService from '~/service/utils/http/AxiosService'

export default class APIUserService extends AxiosService {
  /**
   * [회원가입]
   * 탈퇴한 이메일인지, 이미 존재하는 이메일인지 체크
   * @requestData   : Object > { email: '' }
   * @responseData  : Object > { message: '', result: '' }
   * @return        : Object[Promise]
   */
  validEmail ({email = ''} = {}) {
    return this.requestPost({
      url: '/api/v1/valid-email',
      body: {
        email: email
      }
    })
  }

  /**
   * 회원 가입
   * @requestData   : Object > SignUp Model
   * @responseData  : Object > { message: '', result: '' }
   * @return        : Object[Promise]
   */
  signUp (signUpModel) {
    return this.requestPost({
      url: '/api/v1/signup',
      body: signUpModel
    })
  }

  /**
   * 로그인
   * @requestData   : Object > { email: '', password: '' }
   * @responseData  : Object > { access_token: '' }
   * @return        : Object[Promise]
   */
  login ({email = '', password = ''} = {}) {
    return this.requestPost({
      url: '/api/v1/login',
      body: {
        email: email,
        password: password
      }
    })
  }

  /**
   * 로그아웃 (로그 채킹용, 로직 없음)
   * @return        : Object[Promise]
   */
  logout () {
    return this.requestPost({
      url: '/api/v1/logout'
    })
  }

  /**
   * [마이페이지]
   * 비밀번호 일치 확인
   * @requestData   : Object > { email: '', password: '' }
   * @responseData  : Object > { message: '', result: '' }
   */
  matchPassword ({email = '', password = ''}) {
    return this.requestPost({
      url: '/api/v1/match-password',
      body: {
        email: email,
        password: password
      }
    })
  }

  /**
   * [마이페이지]
   * 바말번호 수정
   */
  changePassword () {

  }

  /**
   * [마이페이지]
   * 휴대폰번호 수정
   */
  changeMobile () {

  }

  /**
   * [마이페이지]
   * 개인정보 변경
   */
  changeUser () {

  }

  /**
   * [마이페이지]
   * SNS 계졍연결 해제
   */
  changeSns () {

  }

  /**
   * 내 정보
   * @responseData   : Object > 유저 정보.
   * @return        : Object[Promise]
   */
  me () {
    return this.requestGet({
      url: '/api/v1/me',
      config: {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    })
  }

  /**
   * 아이디 찾기
   * 문자 -> 인증번호 -> 아이디 확인 페이지
   */
  findAccountMobile () {

  }

  /**
   * 아이디 찾기 확인 및 아이디 목록
   */
  findAccountMobileConfirm () {

  }

  /**
   * 비밀번호 찾기
   * 메일 -> URL 클릭 -> 비밀번호 변경 페이지
   */
  findPwEmail () {

  }

  /**
   * 비밀번호 찾기 확인 및 변경
   */
  resetPwEmail () {

  }

  /**
   * 비밀번호 찾기
   * 문자 -> 인증번호 -> 비밀번호 변경 페이지
   */
  findPwMobile () {

  }

  /**
   * 비밀번호 찾기 인증 확인
   */
  findPwMobileConfirm () {

  }

  /**
   * 비밀번호 찾기 확인 및 변경
   */
  resetPwMobile () {

  }

  /**
   * 회원 탈퇴 하기
   */
  leave () {

  }
}
