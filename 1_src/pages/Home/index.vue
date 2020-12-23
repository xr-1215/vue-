<template>
  <div>
      <TypeNav></TypeNav>
      <ListContainer></ListContainer>
      <TodayRecomment></TodayRecomment>
      <Rank></Rank>
      <Like></Like>
      <Floor></Floor>
      <Floor></Floor>
      <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/components/ListContainer'
import TodayRecomment from '@/pages/Home/components/TodayRecomment'
import Rank from '@/pages/Home/components/Rank'
import Like from '@/pages/Home/components/Like'
import Floor from '@/pages/Home/components/Floor'
import Brand from '@/pages/Home/components/Brand'

export default {
  name: 'Home',
  components:{
    ListContainer,
    TodayRecomment,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style scoped lang='less'>

</style>
