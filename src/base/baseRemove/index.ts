import rfdc from 'rfdc'

export function baseRemove(
  object: any,
  path: unknown[] | string | number
): any {
  const clone = rfdc()
  const nested = clone(object)
  let current = nested

  if (typeof path === 'string' || typeof path === 'number') {
    if (Array.isArray(current) && typeof path === 'number') {
      current.splice(path, 1)
    } else {
      delete current[path]
    }
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
    const key = path[0]
    if (typeof current === 'object' && !Array.isArray(current)) {
      delete current[key]
    }
    if (Array.isArray(current)) {
      current.splice(key, 1)
    }

    return nested
  }
}
