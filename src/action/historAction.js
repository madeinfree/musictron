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

export {
  getHistoryCacheTitle,
  cacheTitle
}
