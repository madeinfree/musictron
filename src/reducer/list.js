const initialState = [
  {
    id: 1,
    title: 'HipHop-song',
    singer: 'John',
    date: new Date(),
    started: false
  },
  {
    id: 2,
    title: 'KPOP-song',
    singer: 'Lin',
    date: new Date(),
    started: false
  },
  {
    id: 3,
    title: 'Blue-song',
    singer: 'Marz',
    date: new Date(),
    started: true
  }
]

const lists = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH':
      return state
    default:
      return state
  }
}

export {
  lists
}
