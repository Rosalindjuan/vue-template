<template>
  <!-- 首页等页面的公共部分 -->
  <div class="index">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '@/components/Header'
import VFooter from '@/components/Footer'
export default {
  name: 'home',
  data () {
    return {}
  },
  components: {
    VHeader,
    VFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
