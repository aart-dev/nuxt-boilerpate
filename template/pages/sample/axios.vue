<template>
  <section class="container text-center">
    <h1 class="outer30-bottom">Http Request with axios</h1>

    <p v-for="item in sample1">{{ item.name }}</p>
    <p v-for="item in sample2">{{ item.name }}</p>
  </section>
</template>

<script>
  import AxiosService from '~/service/utils/http/AxiosService'
  import LocalizationService from '~/service/api/setting/localizationService'

  const http = new AxiosService()
  const locale = new LocalizationService({language: 'kor'})

  export default {
    async asyncData () {
      // Service
      let {data: data1} = await locale.requestGet('/api/v1/setting/language')
      // Custom Request
      let {data: data2} = await http.requestGet('/api/v1/setting/language')
      return {
        sample1: data1,
        sample2: data2
      }
    }
  }
</script>