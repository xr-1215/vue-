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
import ListContainer from '../Home/ListContainer'
import TodayRecomment from '../Home/TodayRecomment'
import Rank from '../Home/Rank'
import Like from '../Home/Like'
import Floor from '../Home/Floor'
import Brand from '../Home/Brand'

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
