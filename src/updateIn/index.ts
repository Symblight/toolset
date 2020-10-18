import { baseSet } from '../baseSet'

export function updateIn(
  object: any,
  path: unknown[],
  callback: (item: any) => void
): any {
  return baseSet(object, path, callback)
}
