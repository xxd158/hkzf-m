<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="$router.back()" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写用户名' },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: '用户名至少4-16位的字母数字或下划线',
          },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^\d{6}$/, message: '密码必须是6位数字' },
        ]"
      />
      <div style="margin: 16px">
        <van-button square block type="primary" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      // console.log('submit', values)
      try {
        const reslogin = await login(values)
        // console.log(reslogin)
        this.$store.commit('setToken', reslogin.data.body)
        this.$router.push({ name: 'my' })
      } catch (error) {
        console.log('登录失败', error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/.van-field__control {
  padding: 10px 0;
  height: 60px;
  border-bottom: 1px solid #ddd;
}
</style>
