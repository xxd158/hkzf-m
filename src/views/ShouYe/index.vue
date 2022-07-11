<template>
  <div>
    <van-nav-bar title="标题" left-text="返回">
      <template #left>
        北京&nbsp;<van-icon name="arrow-down" size="12" color='#7f7f80'/>
      </template>
      <template #right>
        <van-icon class="mapicon" name="location-o" size="28" />
      </template>
    </van-nav-bar>
    <div class="swip-container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
      </van-swipe>
    </div>
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
    padding: 0 10px;
    height: 34px;
  }
}

.swip-container {
  height: 212px;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 212px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
