import request from '@/utils/request'
/**
 * 发送登录请求
 */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: 'user/login',
    data: {
      username,
      password
    }
  })
}
/**
 * 获取用户信息,携带token,封装拦截器，统一发送
 */
export const getUserInfo = () => {
  return request({

    url: 'user'

  })
}
