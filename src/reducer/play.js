const initialState = {
  videoId: '',
  playIndex: 0,
  currentTime: 0,
  volume: 50,
  isPlayed: false,
  detail: {
    title: '',
    description: '',
    url: ''
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
        isPlayed: true,
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
    case 'SET_VOLUME':
      const {
        volume
      } = action.payload
      return Object.assign({}, state, {
        volume
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
