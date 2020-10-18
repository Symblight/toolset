# Javascript toolset

## get started
```bash
npm install @symblight/toolset
```

## tools
- [getIn](###getIn)
- [setIn](###setIn)
- [removeIn](###removeIn)
- [updateIn](###updateIn)

### getIn

```js
import { getIn } from '@symblight/toolset'

const game = {
  name: 'cyberpunk',
  state: {
    title: 'Game',
    type: {
      tag: 'dev',
    },
  },
}

const result = getIn(game, ['state', 'type', 'tag']) // output: dev
```

### setIn
```js
import { setIn } from '@symblight/toolset'

const game = {
  name: 'cyberpunk',
  state: {
    title: 'Game',
    type: {
      tag: 'dev',
    },
  },
}

const result = setIn(game, ['state', 'type', 'tag'], 'prod') // output: object game
```

### removeIn
```js
import { removeIn } from '@symblight/toolset'

const game = {
  name: 'cyberpunk',
  state: {
    title: 'Game',
    type: {
      tag: 'dev',
    },
  },
}

const result = removeIn(game, ['state', 'type', 'tag']) // output: object game
```

### updateIn
```js
import { updateIn } from '@symblight/toolset'

const game = {
  name: 'cyberpunk',
  state: {
    title: 'Game',
    type: {
      tag: 'dev',
    },
  },
}

const result = updateIn(game, ['state', 'type'], (type) => ({ tag: 'prod', version: 1 })) // output: object game
```