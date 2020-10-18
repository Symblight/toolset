import { baseRemove } from '../baseRemove'

export function removeIn(object: any, path: unknown[]): any {
  return baseRemove(object, path)
}
