import { isIn } from '../../src'

const user = {
  name: 'Test',
  age: 26,
  job: {
    title: 'Test',
    type: {
      name: 'dev',
    },
  },
}

const userArray = [
  {
    name: 'Test',
    age: 26,
    job: {
      title: 'Test',
      type: {
        name: 'dev',
      },
    },
  },
  {
    name: 'Test-2',
    age: 24,
    job: {
      title: 'Test',
      type: {
        name: 'prod',
      },
    },
  },
]

describe('isIn function', () => {
  it('is the value the same by string path', () => {
    const result = isIn(user, 'name', 'Test')
    expect(result).toEqual(true)
  })
  it('is the value the same object by number from array', () => {
    const result = isIn(userArray, 1, userArray[1])
    expect(result).toEqual(true)
  })
  it('is the value the same value by path', () => {
    const result = isIn(user, ['job', 'type', 'name'], 'dev')
    expect(result).toEqual(true)
  })
  it('is the value the same value from array objects by path', () => {
    expect(isIn(userArray, [1, 'job', 'type', 'name'], 'prod')).toEqual(true)
  })
  it('is the value the same value from the object on the wrong path', () => {
    expect(isIn(user, ['job', 'type', 'age'], 26)).toEqual(false)
  })
  it('is the value the same value from the empty object', () => {
    expect(isIn({}, ['job', 'type', 'age'], 26)).toEqual(false)
  })
})
