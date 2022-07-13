<template>
  <div class="home-container">
    <div class="navBar-container">
      <van-nav-bar class="navBar" left-text="返回" @click-left="onClickLeft">
        <template #left>
          北京&nbsp;<van-icon name="arrow-down" size="12" color="#7f7f80" />
        </template>
        <template #title>
          <van-button type="default" icon="search">请输入小区或地址</van-button>
        </template>
      </van-nav-bar>
      <van-icon class="mapicon" name="location-o" size="25" />
    </div>

    <div class="swip-container">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="@/assets/1.png" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/assets/2.png" alt="" /></van-swipe-item>
        <van-swipe-item><img src="@/assets/3.png" alt="" /></van-swipe-item>
      </van-swipe>
    </div>

    <van-grid :border="false">
      <van-grid-item icon="wap-home-o" text="整租" />
      <van-grid-item icon="friends-o" text="合租" />
      <van-grid-item icon="location-o" text="地图找房" />
      <van-grid-item icon="hotel-o" text="去出租" />
    </van-grid>

    <div class="group">
      <van-cell-group>
        <van-cell title="租房小组" value="更多" />
      </van-cell-group>
      <van-grid direction="horizontal" :column-num="2" :gutter="10">
        <van-grid-item>
          <template #text>
            <div class="img">
              图片
              <img src="" alt="" />
            </div>
            <div>
              <p>家住回龙观</p>
              <p>归属的感觉</p>
            </div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #text>
            <div class="img">
              图片
              <img src="" alt="" />
            </div>
            <div>
              <p>宜居四五环</p>
              <p>大都市生活</p>
            </div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #text>
            <div class="img">
              图片
              <img src="" alt="" />
            </div>
            <div>
              <p>喧嚣三里屯</p>
              <p>繁华的背后</p>
            </div>
          </template>
        </van-grid-item>
        <van-grid-item>
          <template #text>
            <div class="img">
              图片
              <img src="" alt="" />
            </div>
            <div>
              <p>比邻十号线</p>
              <p>地铁心连心</p>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push({ name: 'CityList' })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.home-container {
  .navBar-container {
    z-index: 1;
    position: fixed;
    top: 25px;
    padding: 0 20px;
    width: 375px;
    height: 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .mapicon {
      width: 25px;
      color: #fff;
    }
    .navBar {
      background-color: #fff;
      flex: 1;
      margin-right: 5px;

      /deep/ .van-nav-bar__content {
        height: 34px;
        .van-nav-bar__left {
          width: 50px;
          padding: 0 0 0 5px;
        }
        .van-nav-bar__title {
          // max-width:unset;
          width: 100%;
          height: 34px;
          .van-button--normal {
            padding-left: 0;
            width: 100%;
            height: 34px;
            border: none;
            color: #9c9fa1;
            .van-button__content {
              height: 20px;
              border-left: 1px solid #9c9fa1;
            }
            .van-button__icon {
              color: #9c9fa1;
            }
          }
        }
      }
    }
  }
  .swip-container {
    height: 212px;
    .my-swipe .van-swipe-item {
      // color: #fff;
      // font-size: 20px;
      line-height: 150px;
      text-align: center;
      // background-color: #39a9ed;
    }
  }
  .van-grid {
    height: 122px;
    .van-grid-item {
      /deep/ .van-grid-item__icon {
        font-size: 40px;
        border-radius: 50%;
        color: green;
      }
      /deep/.van-grid-item__text {
        font-size: 14px;
        margin-top: 12px;
      }
    }
  }
  .group {
    background-color: #f6f5f6;
    height: 187px;
    .van-cell-group {
      .van-cell {
        height: 47px;

        background-color: #f6f5f6;

        .van-cell__title {
          font-size: 15px;
          font-weight: 600;
        }
      }
    }
    .van-grid {
      .van-grid-item {
        height: 60px;
        /deep/.van-grid-item__content {
          padding: unset;
          border-radius: 5px;
          font-size: 14px;
          .img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
