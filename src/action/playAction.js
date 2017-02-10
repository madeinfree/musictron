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

export {
  startMusic
}
