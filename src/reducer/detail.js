import { durationToSecond } from '../utils/timer'

const initialState = {
  contentDetails: {
    videoDuration: 0
  }
}

const detail = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_VIDEOS_DETAILS':
      return Object.assign({}, state, {
        contentDetails: {
          videoDuration: durationToSecond(action.payload.items[0].contentDetails.duration)
        }
      })
    default:
      return state
  }
}

export {
  detail
}
