/**
 * Sign Up Model
 * Deokin 2019.01.25
 * */
export default class SignUp {
  constructor ({verification = {email: '', mobile: ''}, email = '', password = '', fullname = '', mobile = '', birth = '', termsAgree: {policy = false, privacy = false, smsRcv = false, emailRcv = false} = {}, socialId: {facebookId = '', facebookName = '', kakaoTalkId = '', kakaoTalkName = '', naverId = '', naverName = ''} = {}} = {}) {
    this.email = email
    this.password = password
    this.fullname = fullname
    this.mobile = mobile
    this.birth = 0
    this.termsAgree = {policy, privacy, smsRcv, emailRcv}
    this.socialId = {facebookId, facebookName, kakaoTalkId, kakaoTalkName, naverId, naverName}
    this.verification = verification
  }
}
