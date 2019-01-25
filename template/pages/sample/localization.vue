<template>
  <section class="container text-center">
    <h1 class="outer30-bottom">Localization</h1>

    <select @change="handleChangeLang($event)">
      <option v-for="item in langList" :value="item.code" :selected="$store.state.language == item.code">
        {{item.name}} | {{item.code}}
      </option>
    </select>

    <hr/>
    <p>::: Result :::</p>
    <p>$i18n : {{$i18n.locale}}</p>
    <p>$store : {{$store.state.language}}</p>
    <h3 v-html="$t('TEST_TEXT')" :lang="$i18n.locale"></h3>

  </section>
</template>

<script>
  import Cookies from 'js-cookie'
  import LocalizationService from '~/service/api/setting/localizationService'

  const locale = new LocalizationService()

  export default {
    async asyncData () {
      let {data} = await locale.requestGet('/api/v1/setting/language')
      return {
        langList: data
      }
    },
    methods: {
      handleChangeLang (e) {
        Cookies.set(process.env.LANGUAGE_COOKIE_NAME, e.target.value)
        location.reload()
      }
    }
  }
</script>