import { baseRemove } from '../../base'

export function removeIn(object: any, path: unknown[] | string | number): any {
  return baseRemove(object, path)
}
