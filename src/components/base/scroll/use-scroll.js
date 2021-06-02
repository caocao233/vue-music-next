import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom' // 自动监听高度
import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(ObserveDOM)

// 在 unMounted 钩子中拿到对应的 DOM
export default function useScroll(wrapperRef, options, emit) {
  const scroll = ref(null)

  onMounted(() => {
    const scrollVal = scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })

    if (options.probeType > 0) {
      scrollVal.on('scroll', (pos) => {
        emit('scroll', pos)
      })
    }
  })

  onUnmounted(() => {
    scroll.value.destroy()
  })

  return scroll
}
