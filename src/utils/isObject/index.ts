export function isObject(d: unknown): boolean {
  return typeof d === 'object' && !Array.isArray(d)
}
