<template>
  <section class="container text-center">
    <h1 class="outer30-bottom">Test Page</h1>
  </section>
</template>

<script>
  // import APILocalizationService from '~/service/api/setting/APILocalizationService'
  import APIUserService from '~/service/api/account/APIUserService'
  // import SignUp from '~/models/account/SignUp'

  // const locale = new APILocalizationService()
  const user = new APIUserService()

  export default {
    data () {
      return {}
    },
    mounted () {
      console.debug(user)
      // locale.getLanguage().then((resp) => {
      // console.debug(resp)
      // })
      // user.validEmail({email: 'bowom90@aartkorea.com'}).then((resp) => {
      // console.debug(resp)
      // })
      //
      //      let signUp = new SignUp({
      //        email: 'bowom900@aartkorea.com',
      //        password: '1234',
      //        fullname: 'deokin',
      //        mobile: '01086064041',
      //        termsAgree: {
      //          policy: true,
      //          privacy: true,
      //          smsRcv: true,
      //          emailRcv: true
      //        },
      //        verification: {
      //          email: false,
      //          mobile: true
      //        }
      //      })
      //      console.debug('model', signUp)
      //      user.signUp(signUp).then((resp) => {
      //        console.debug(resp)
      //      })

      //      user.login({email: 'bowom90@aartkorea.com', password: '1234'}).then((resp) => {
      //        console.debug(resp)
      //      })
      //      user.me().then((resp) => {
      //        console.debug(resp)
      //      })
    }
  }
</script>
