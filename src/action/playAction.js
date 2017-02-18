const startMusic = (videoId, { title, description, url }) => {
  return {
    type: 'STARTMUSIC',
    payload: {
      videoId,
      title,
      description,
      url
    }
  }
}

const stopMusic = () => {
  return {
    type: 'STOP_MUSIC'
  }
}

const restartMusic = () => {
  return {
    type: 'RESTART_MUSIC'
  }
}

const setVolume = (volume) => {
  return {
    type: 'SET_VOLUME',
    payload: {
      volume
    }
  }
}

const getCurrentTime = (time) => {
  return {
    type: 'GET_CURRENT_TIME',
    payload: {
      currentTime: time
    }
  }
}

export {
  startMusic,
  stopMusic,
  restartMusic,
  setVolume,
  getCurrentTime
}
