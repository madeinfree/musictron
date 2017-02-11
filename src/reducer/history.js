const initialState = {
  videoTitles: [],
  favoriteVideoIds: []
}

const history = (state = initialState, action) => {
  switch(action.type) {
    case 'CHECKOUT_HISTORY_TITLE_FROM_DB':
      return Object.assign({}, state, {
        videoTitles: action.payload.items
      })
    case 'CATCH_VIDEO_TITLE':
      return Object.assign({}, state, {
        videoTitles: state.videoTitles.concat(action.payload.title)
      })
    case 'CLEAR_CATCH_VIDEO_TITLE':
      return Object.assign({}, state, {
        videoTitles: []
      })
    case 'ADD_FAVORITE_VIDEO_ID':
      return Object.assign({}, state, {
        favoriteVideoIds: state.favoriteVideoIds.concat({
          title: action.payload.title,
          videoId: action.payload.videoId
        })
      })
    default:
      return state
  }
}

export {
  history
}
