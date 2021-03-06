const searchMusicLists = (params = { q: 'MAYDAY 五月天 派對動物' }) => {
  return (dispatch, getState) => {
    gapi.load('client', () => {
      gapi.client.init({
        'apiKey': 'AIzaSyAOVsoqkt9297d15nycZy3-Z08upL-y6i0'
      }).then(() => {
        return gapi.client.request({
          method: 'GET',
          path: '/youtube/v3/search',
          params: {
            part: 'snippet',
            maxResults: 50,
            type: 'video',
            order: 'date',
            videoDuration: 'short',
            q: params.q
          }
        })
      }).then(res => {
        dispatch({
          type: 'SEARCHMUSICLISTS',
          payload: res.result.items
        })
      })
    })
  }
}

export {
  searchMusicLists
}
