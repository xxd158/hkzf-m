import request from '@/utils/request'
/**
 * 获取轮播图
 */
export const getSwipe = () => {
  return request({
    url: '/home/swiper'
  })
}
/**
 * 获取城市列表
 */
export const getCitylist = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}
/**
 * 获取热门城市
 */
export const getHotCitylist = () => {
  return request({
    url: 'area/hot'
  })
}
