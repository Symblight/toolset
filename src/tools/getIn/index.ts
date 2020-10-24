import { baseGet } from '../../base'

export function getIn(store: any, path: unknown[] | string | number): any {
  return baseGet(store, path)
}
