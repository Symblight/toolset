import { removeIn } from '../../src'

const user = {
  name: 'Test',
  age: 26,
  job: {
    title: 'Test',
    type: {
      name: 'dev',
      item: 'rest',
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

const arrayTest = ['user', 'admin', 'root']

describe('RemoveIn function', () => {
  it('remove value in object by string path', () => {
    const result = removeIn(user, 'name')
    expect(result).toEqual({
      age: 26,
      job: {
        title: 'Test',
        type: {
          name: 'dev',
          item: 'rest',
        },
      },
    })
  })
  it('remove value in object by number from array', () => {
    const result = removeIn(userArray, 1)
    expect(result).toEqual([userArray[0]])
  })
  it('remove key from object', () => {
    const result = removeIn(user, ['job', 'type', 'name'])
    expect(result).toEqual({
      age: 26,
      job: { title: 'Test', type: { item: 'rest' } },
      name: 'Test',
    })
  })
  it('remove key from object by wrong path', () => {
    const result = removeIn(user, ['job', 'rest', 'name'])
    expect(result).toEqual({
      age: 26,
      job: {
        rest: {},
        title: 'Test',
        type: {
          item: 'rest',
          name: 'dev',
        },
      },
      name: 'Test',
    })
  })
  it('remove item by index from array', () => {
    const result = removeIn(arrayTest, [1])
    expect(result).toEqual(['user', 'root'])
  })
  it('remove item by wrong index from array', () => {
    const result = removeIn(arrayTest, [5])
    expect(result).toEqual(['user', 'admin', 'root'])
  })
  it('remove key from array of objects', () => {
    const result = removeIn(userArray, [0, 'job', 'type'])
    expect(result).toEqual([
      { age: 26, job: { title: 'Test' }, name: 'Test' },
      {
        age: 24,
        job: { title: 'Test', type: { name: 'prod' } },
        name: 'Test-2',
      },
    ])
  })
})
