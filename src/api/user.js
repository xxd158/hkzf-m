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
