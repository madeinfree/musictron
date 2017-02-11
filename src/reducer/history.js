const initialState = {
  videoTitles: []
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
    default:
      return state
  }
}

export {
  history
}
