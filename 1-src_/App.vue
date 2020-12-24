<template>
  <div>
      <Header></Header>
      <router-view></router-view> 
      <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import { reqCategoryList } from './api'
export default {
  name: '',
  components:{
      Header,
      Footer
  },
  mounted() {
    /* reqCgetategoryList().then(result => {
      console.log('result', result)
    }) */
    //分发请求获取分类列表的异步action
    this.$store.dispatch('getCategoryList')
  },
}
</script>

<style scoped lang='less'>

</style>
