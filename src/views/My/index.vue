<template>
  <div>
    <!-- 登录后 -->
    <div class="my-title in" v-if="logintoken && logintoken.token">
      <img src="@/assets/useravatar.png" alt="" />
      <div class="my-info">
        <div class="avatar">
          <div class="img imgin"><img src="@/assets/avatar.png" alt="" /></div>
          <p class="myname">{{ userInfo.nickname }}</p>
          <van-button class="inbtn" round type="primary" @click="logout"
            >退出</van-button
          >
          <p class="personinfo">编辑个人资料<van-icon name="play" /></p>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div class="my-title out" v-else>
      <img src="@/assets/loginbg.png" alt="" />
      <div class="my-info">
        <div class="avatar">
          <div class="img"><img src="@/assets/avatar.png" alt="" /></div>
          <p class="myname">游客</p>
          <van-button
            round
            type="primary"
            @click="$router.push({ path: '/login' })"
            >去登录</van-button
          >
        </div>
      </div>
    </div>

    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="underway-o" text="看房记录" />
      <van-grid-item icon="idcard" text="成为房主" />
      <van-grid-item icon="manager-o" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>

    <div class="my-join">
      <img src="@/assets/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'My',
  async created () {
    // eslint-disable-next-line no-undef
    if (this.logintoken && this.logintoken.token) {
      try {
        const resuse = await getUserInfo()
        // console.log(resuse.data.body)
        this.userInfo = resuse.data.body
        // console.log(this.userInfo)
      } catch (error) {
        console.log('获取用户信息失败', error)
      }
    }
  },
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    async logout () {
      try {
        await this.$dialog.confirm({
          title: '提示',
          message: '是否确定退出?'
        })
        // this.$router.push({ path: '/login' })
        this.$store.commit('setToken', {})
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {
    ...mapState(['logintoken'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-title {
  position: relative;
  min-height: 300px;
  .my-info {
    box-shadow: 0 0 10px 3px #ddd;
    position: absolute;
    left: 7.5%;
    bottom: 0;
    width: 85%;
    height: 55%;
    background-color: #fff;
    .avatar {
      transform: translateY(-40px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 90%;
      .imgin {
        margin-bottom: 20px;
      }
      .van-button--normal {
        padding: unset;
        width: 54px;
        height: 20px;
        margin-top: 10px;
        line-height: 20px;
      }
      .img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 5px solid #f5f5f5;
        box-shadow: 0 2px 2px #bdbdbd;
        padding: 0px;
        img {
          margin-bottom: 0;
        }
      }
      .myname {
        font-size: 13px;
      }
      /deep/ .van-button__text {
        font-size: 13px;
      }
      .personinfo {
        font-size: 12px;
        color: #999;
        margin-top: 50px;
      }
    }
  }
}
.out {
  img {
    margin-bottom: 0px;
  }
}
.van-grid-item__icon {
  font-size: 20px;
}
.my-join {
  text-align: center;
  img {
    width: 92%;
  }
}
</style>
