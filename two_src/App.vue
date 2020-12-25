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
  /* async mounted() {
    const result = await reqCategoryList();
    console.log(result);
  }, */
  mounted() {
      this.$store.dispatch('getCategoryList')
  },
}
</script>

<style scoped lang='less'>

</style>
