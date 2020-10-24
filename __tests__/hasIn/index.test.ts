import { hasIn } from '../../src'

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

describe('hasIn function', () => {
  it('has the value by string path', () => {
    const result = hasIn(user, 'name')
    expect(result).toEqual(true)
  })
  it('has the value  by number from array', () => {
    const result = hasIn(userArray, 1)
    expect(result).toEqual(true)
  })
  it('has the value by path', () => {
    const result = hasIn(user, ['job', 'type', 'name'])
    expect(result).toEqual(true)
  })
  it('has the value from array objects by path', () => {
    expect(hasIn(userArray, [1, 'job', 'type', 'name'])).toEqual(true)
  })
  it('has the value from the object on the wrong path', () => {
    expect(hasIn(user, ['job', 'type', 'age'])).toEqual(false)
  })
  it('has the value from the empty object', () => {
    expect(hasIn({}, ['job', 'type', 'age'])).toEqual(false)
  })
})
