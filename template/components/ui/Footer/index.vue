<template>
  <footer id="footer" class="container text-center inner30">
    <hr/>
    <div v-if="$store.getters.isAuthenticated">
      <!--{{ $store.userInfo.email }}-->
      <a href="" @click="handleOnClickLogout">로그아웃</a>
    </div>
    <div v-else>
      <nuxt-link :to="{name: 'sample-authenticate'}">LOGIN</nuxt-link>
    </div>
    Visit our website for more documentation : <a href="https://nuxtjs.org" target="_blank">nuxtjs.org</a>
  </footer>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      handleOnClickLogout () {
        this.$auth.logout()
        location.href = '/'
      }
    }
  }
</script>
<style scoped lang="less" src="./footer.less"></style>
