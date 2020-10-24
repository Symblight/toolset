import { updateIn } from '../../src'

const user = {
  name: 'Test',
  age: 26,
  job: {
    title: 'Test',
    type: {
      name: 'dev',
      items: ['user', 'admin', 'root'],
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
        items: ['user', 'admin', 'root'],
      },
    },
  },
  {
    name: 'Test-2',
    age: 24,
    job: {
      title: 'Test',
      type: {
        items: ['user', 'admin', 'root'],
      },
    },
  },
]

describe('UpdateIn function', () => {
  it('Filter array in object', () => {
    const result = updateIn(userArray, [0, 'job', 'type', 'items'], (items) =>
      items.filter((item: any) => item !== 'root')
    )
    expect(result).toEqual([
      {
        name: 'Test',
        age: 26,
        job: {
          title: 'Test',
          type: {
            items: ['user', 'admin'],
          },
        },
      },
      {
        name: 'Test-2',
        age: 24,
        job: {
          title: 'Test',
          type: {
            items: ['user', 'admin', 'root'],
          },
        },
      },
    ])
  })
  it('Set value', () => {
    const result = updateIn(user, ['job', 'type'], () => ({
      name: 'pro',
      items: ['user', 'admin', 'root', 'test'],
    }))

    expect(result).toEqual({
      name: 'Test',
      age: 26,
      job: {
        title: 'Test',
        type: {
          name: 'pro',
          items: ['user', 'admin', 'root', 'test'],
        },
      },
    })
  })
})
