export function isEmpty(value: unknown): value is undefined | null {
  if (value === undefined || value === null || value === '') {
    return true
  }
  if (Array.isArray(value)) {
    return Boolean(value.length === 0)
  }
  if (typeof value === 'object') {
    if (value instanceof Date) {
      return Number.isNaN(value.getTime())
    }
    if (value instanceof Blob) {
      return false
    }
    return value !== null ? Boolean(Object.keys(value).length === 0) : false
  }

  return false
}
