export function baseGet(store: any, path: unknown[]): any {
  if (Array.isArray(path)) {
    let currentIndex = 0
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
