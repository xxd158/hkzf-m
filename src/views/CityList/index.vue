<template>
  <div class="city-list-container">
    <van-nav-bar
      title="城市列表"
      left-arrow
      @click-left="$router.back()"
      :fixed="true"
    />
    <div class="box"></div>
    <van-index-bar :sticky-offset-top="45" :index-list="cityIndex">
      <van-index-anchor :index="cityIndex[0]">{{
        "当前城市"
      }}</van-index-anchor>
      <van-cell :title="$store.state.currentCity" />
      <div v-for="(item, index) in cityIndex" :key="index">
        <van-index-anchor :index="item" v-if="item !== '#'">{{
          item === "热" ? "热门城市" : item
        }}</van-index-anchor>
        <van-cell
          :title="item1"
          v-for="(item1, index1) in cityList[item.toLowerCase()]"
          :key="index1"
          @click="currentCityFn(item1)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCitylist, getHotCitylist } from '@/api/shouye.js'

export default {
  created () {
    this.getCitylist()
  },
  data () {
    return {
      cityIndex: [],
      cityList: {},
      hotCityList: [],
      currentCity: ''
    }
  },
  methods: {
    async getCitylist () {
      try {
        const resCitylist = await getCitylist(1)
        console.log(resCitylist)
        const cityList = resCitylist.data.body
        const List = {}
        cityList.forEach(obj => {
          // console.log(obj.pinyin[0])
          if (List[obj.pinyin[0]]) {
            List[obj.pinyin[0]].push(obj.label)
          } else {
            List[obj.pinyin[0]] = [obj.label]
          }
        })
        console.log(List)
        this.cityList = List
        this.cityIndex = Object.keys(List).sort().map(item => item.toUpperCase())
        this.getHotCitylist()
      } catch (error) {
        console.log(error)
      }
    },
    async getHotCitylist () {
      try {
        const resHotCitylist = await getHotCitylist()
        console.log(resHotCitylist.data.body)
        const hotList = []
        resHotCitylist.data.body.forEach(obj => {
          hotList.push(obj.label)
        })
        // console.log(hotList)
        this.cityIndex.unshift('#', '热')
        this.cityList['热'] = hotList
      } catch (error) {
        console.log(error)
      }
    },
    currentCityFn (item) {
      // this.currentCity = item
      this.$store.commit('setcurrentCity', item)
      this.$router.back()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
// .city-list-container {
//   // margin-top: 45px;
// }
.box {
  height: 45px;
}
.van-nav-bar {
  z-index: 999;
  /deep/.van-nav-bar__content {
    height: 45px;
  }
}
</style>
