export function baseGet(store: any, path: unknown[] | string | number): any {
  let currentIndex = 0

  if (typeof path === 'string' || typeof path === 'number') {
    return store[path]
  }

  if (Array.isArray(path)) {
    const length = path.length

    while (store !== null && currentIndex < length) {
      if (typeof store[path[currentIndex]] !== 'undefined') {
        store = store[path[currentIndex++]]
      } else {
        store = store[path[currentIndex]]
        break
      }
    }
  }

  return store
}
