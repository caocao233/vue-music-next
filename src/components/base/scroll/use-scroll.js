import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom' // 自动监听高度
import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(ObserveDOM)

// 在 unMounted 钩子中拿到对应的 DOM
export default function useScroll(wrapperRef, options) {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })
}
