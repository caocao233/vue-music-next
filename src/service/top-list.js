import { get } from '@/service/base'

export function getTopList() {
  return get('/api/getTopList')
}
