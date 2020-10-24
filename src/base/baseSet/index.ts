import rfdc from 'rfdc'

export function isFunction(value: any) {
  return typeof value === 'function'
}

interface TStore {
  [key: string]: TStore
}

export function baseSet(
  object: TStore,
  path: unknown[] | string | number,
  value: any
): unknown {
  const clone = rfdc()
  const nested = clone(object)
  let current = nested

  if (typeof path === 'string' || typeof path === 'number') {
    current[path] = value
    return nested
  }

  if (Array.isArray(path)) {
    while (path.length > 1) {
      const [head, ...tail] = path as any[]
      path = tail
      if (current[head] === undefined) {
        current[head] = {}
      }
      current = current[head]
    }
    if (isFunction(value)) {
      current[path[0]] = value(current[path[0]])
    } else {
      current[path[0]] = value
    }
    return nested
  }
}
