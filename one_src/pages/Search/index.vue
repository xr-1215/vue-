<template>
  <div>
    <!-- <h2>keyword:{{$route.params.keyword}}</h2>
    <h2>keyword2:{{$route.query.keyword2}}</h2> -->
    <h2>keyword:{{keyword}}</h2>
    <h2>keyword2:{{keyword2}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword','keyword2']
}
</script>

<style scoped lang='less'>

</style>
