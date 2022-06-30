<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/shouye" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/zhaofang" icon="search">找房</van-tabbar-item>
      <van-tabbar-item replace to="/zixun" icon="newspaper-o">咨询</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
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
</style>
