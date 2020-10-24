import { baseSet } from '../../base'

export function setIn(
  object: any,
  path: unknown[] | string | number,
  value: unknown
): any {
  return baseSet(object, path, value)
}
