const initialState = []

const lists = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCHMUSICLISTS':
      const items = action.payload
      return items
    default:
      return state
  }
}

export {
  lists
}
