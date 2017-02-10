const startMusic = (videoId) => {
  return {
    type: 'STARTMUSIC',
    payload: {
      videoId
    }
  }
}

export {
  startMusic
}
