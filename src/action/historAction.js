const getHistoryCacheTitle = ({ db }) => {
  return (dispatch) => {
    db.getDBItems(({ items }) => {
      dispatch({
        type: 'CHECKOUT_HISTORY_TITLE_FROM_DB',
        payload: {
          items
        }
      })
    })
  }
}

const cacheTitle = ({ title, db }) => {
  return (dispatch) => {
    db.onSetTitleIntoDB(title, (title) => {
      dispatch({
        type: 'CATCH_VIDEO_TITLE',
        payload: {
          title
        }
      })
    })
  }
}

const clearCacheTitle = ({ db }) => {
  return (dispatch) => {
    db.clearDBItems(() => {
      dispatch({
        type: 'CLEAR_CATCH_VIDEO_TITLE'
      })
    })
  }
}

const getFavoriteCacheTitle = ({ db }) => {
  return (dispatch) => {
    db.getDBFavoriteItems(({ items }) => {
      dispatch({
        type: 'CHECKOUT_FAVORITE_FROM_DB',
        payload: {
          items
        }
      })
    })
  }
}

const addFavoriteVideoId = ({ title, description, videoId, url }) => {
  return {
    type: 'ADD_FAVORITE_VIDEO_ID',
    payload: {
      title,
      description,
      videoId,
      url
    }
  }
}

export {
  getHistoryCacheTitle,
  cacheTitle,
  clearCacheTitle,

  getFavoriteCacheTitle,
  addFavoriteVideoId
}
