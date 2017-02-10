const initialState = {
  videoId: '',
  playIndex: 0,
  isPlayed: true,
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
      return Object.assign({}, state, { videoId,
        detail: {
          title,
          description
        }
      })
    case 'RESTART_MUSIC':
      return Object.assign({}, state, {
        isPlayed: true
      })
    case 'STOP_MUSIC':
      return Object.assign({}, state, {
        isPlayed: false
      })
    default:
      return state
  }
}

export {
  play
}
