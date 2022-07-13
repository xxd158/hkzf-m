<template>
  <div>
     <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />
    <van-index-bar>
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      ...
    </van-index-bar>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  /deep/.van-nav-bar__content {
    height: 45px;
  }
}
</style>
