import { baseGet } from '../baseGet'

export function getIn(store: any, path: unknown[]): any {
  return baseGet(store, path)
}
