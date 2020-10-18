import rfdc from 'rfdc'

export function baseRemove(object: any, path: unknown[]): any {
  if (Array.isArray(path)) {
    const clone = rfdc()
    const nested = clone(object)
    let current = nested

    while (path.length > 1) {
      const [head, ...tail] = path
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
