<template>
  <section class="container text-center">
    <h1 class="outer30-bottom">Vue Lodash</h1>
    <br/>
    <p>Code Example</p>
    <div>
      <pre>

        Vue._.random(20)
        this._.random(20)
      </pre>
    </div>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        tempData: 0
      }
    },
    mounted () {
      this.tempData = this._.random(20)
    }
  }
</script>