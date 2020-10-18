import { baseSet } from '../baseSet'

export function setIn(object: any, path: unknown[], value: unknown): any {
  return baseSet(object, path, value)
}
