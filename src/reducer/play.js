const initialState = {
  videoId: ''
}

const play = (state = initialState, action) => {
  switch(action.type) {
    case 'STARTMUSIC':
      return Object.assign({}, state, { videoId: action.payload.videoId })
    default:
      return state
  }
}

export {
  play
}
