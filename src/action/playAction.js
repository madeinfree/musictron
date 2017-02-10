const startMusic = (videoId, { title, description }) => {
  return {
    type: 'STARTMUSIC',
    payload: {
      videoId,
      title,
      description
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

export {
  startMusic,
  stopMusic,
  restartMusic
}
