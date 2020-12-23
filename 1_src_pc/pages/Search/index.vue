<template>
<div>
  <div>Search</div>
  <div>keyword.params:{{$route.params.keyword}}</div>
  <div>keyword.query:{{$route.query.keyword2}}</div>
  <div>props.keyword3:{{keyword3}}</div>
  <div>props.keyword4:{{keyword4}}</div>
</div>
</template>

<script>
export default {
  name: '',
  props:['keyword3','keyword4']
}
</script>

<style scoped lang="less">

</style>
