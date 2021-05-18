import { ref, watch, nextTick } from 'vue'

// 歌手列表固定标题
export default function useFixed(props) {
  const groupRef = ref(null) // 拿到每个组的高度
  const listHeights = ref([])

  // 观测数据的变化
  watch(() => props.data, async () => { // 观测 props.data的数据变化
    // 等 DOM 发生变化是在 nextTick 之后
    await nextTick()
    calculate()
  })

  function calculate() {
    const list = groupRef.value.children // 所有的子元素
    const listHeightsVal = listHeights.value
    let height = 0

    listHeightsVal.length = 0 // 初始化
    listHeightsVal.push(height)

    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight // 累加高度
      listHeightsVal.push(height)
    }
  }

  return {
    groupRef
  }
}
