const searchVideosDetails = (params = { videoId: '' }) => {
  return (dispatch, getState) => {
    gapi.load('client', () => {
      gapi.client.init({
        'apiKey': 'AIzaSyAOVsoqkt9297d15nycZy3-Z08upL-y6i0'
      }).then(() => {
        return gapi.client.request({
          method: 'GET',
          path: 'youtube/v3/videos',
          params: {
            part: 'contentDetails',
            id: params.videoId
          }
        })
      }, err => { throw new Error(err) }).then(res => {
        dispatch({
          type: 'FETCH_VIDEOS_DETAILS',
          payload: {
            items: res.result.items
          }
        })
      }, err => { throw new Error(err) })
    })
  }
}

export {
  searchVideosDetails
}
