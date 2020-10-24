import { isString } from '../isString'
import { isNumber } from '../isNumber'
import { isUndefined } from '../isUndefined'
import { isObject } from '../isObject'
import { isBoolean } from '../isBoolean'

export function isEqual(first: any, second: any): boolean {
  if (isUndefined(first) || isUndefined(second)) return false
  const firstType = first.constructor.name
  const secondType = second.constructor.name

  if (firstType.localeCompare(secondType) === 0) {
    if (isString(first)) {
      return first.localeCompare(second) === 0
    }

    if (Array.isArray(first) && first.length === second.length) {
      const result = first.filter((item, index) => {
        return !isEqual(item, second[index])
      })
      return result.length === 0
    }

    if (isNumber(first)) {
      const oneArg = first.toString()
      const twoArg = second.toString()
      return oneArg.localeCompare(twoArg) === 0
    }

    if (isObject(first)) {
      return JSON.stringify(first) === JSON.stringify(second)
    }

    if (isBoolean(first)) {
      return first === second
    }
  } else if (!Number.isNaN(first) && !Number.isNaN(second)) {
    return Number(first) === Number(second)
  }
  return false
}
