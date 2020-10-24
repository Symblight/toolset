import { baseGet } from '../../base'
import { isEmpty, isUndefined } from '../../utils'

export function hasIn(store: any, path: unknown[] | string | number): boolean {
  const result = baseGet(store, path)

  if (isUndefined(result)) {
    return false
  }
  if (isEmpty(result)) {
    return false
  }
  return true
}
