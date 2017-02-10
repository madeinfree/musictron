const initialState = {
  videoTitles: []
}

const history = (state = initialState, action) => {
  switch(action.type) {
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
