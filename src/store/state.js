import { PLAY_MODE, FAVORITE_KEY } from '@/assets/js/constant'
import { load } from '@/assets/js/array-store' // 从本地获取数据

const state = {
  sequenceList: [], // 顺序列表
  playlist: [], // 正在播放的列表
  playing: false,
  playMode: PLAY_MODE.sequence,
  currentIndex: 0,
  fullScreen: false,
  favoriteList: load(FAVORITE_KEY) // 收藏列表
}

export default state
