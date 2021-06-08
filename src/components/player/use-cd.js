import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'

export default function useCd() {
  const cdRef = ref(null)
  const cdImageRef = ref(null)

  const store = useStore()
  const playing = computed(() => store.state.playing)

  const cdCls = computed(() => {
    return playing.value ? 'playing' : ''
  })

  watch(playing, (newPlaying) => {
    if (!newPlaying) {
      syncTransform(cdRef.value, cdImageRef.value)
    }
  })

  function syncTransform(wrapper, inner) {
    const innerTransfrom = getComputedStyle(inner).transform
    wrapper.style.transform = innerTransfrom
  }

  return {
    cdCls,
    cdRef,
    cdImageRef
  }
}
