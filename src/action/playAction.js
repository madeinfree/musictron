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

export {
  startMusic,
  stopMusic,
  restartMusic
}
