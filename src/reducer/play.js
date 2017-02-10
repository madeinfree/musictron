const initialState = {
  videoId: '',
  detail: {
    title: '',
    description: ''
  }
}

const play = (state = initialState, action) => {
  switch(action.type) {
    case 'STARTMUSIC':
      const {
        videoId,
        title,
        description
      } = action.payload
      return Object.assign({}, state, { videoId, title, description })
    default:
      return state
  }
}

export {
  play
}
