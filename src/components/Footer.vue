<template>
  <div class="footer">
    首页的底部
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    watch: {
      '$route': 'listenRoute'
    },
    created () {
      this.listenRoute()
    },
    methods: {
      // 跳转
      toShopping () {
        this.$router.push('/shopping')
      },
      // 监听route
      listenRoute () {
        this.path = this.$route.path
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../assets/style/theme';
  @import '../assets/style/mixin';

  
</style>

