const initialState = {
  videoId: '',
  playIndex: 0,
  currentTime: 0,
  isPlayed: false,
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
        description,
        url
      } = action.payload
      return Object.assign({}, state, { videoId,
        detail: {
          title,
          description,
          url
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
    case 'GET_CURRENT_TIME':
      return Object.assign({}, state, {
        currentTime: action.payload.currentTime
      })
    default:
      return state
  }
}

export {
  play
}
