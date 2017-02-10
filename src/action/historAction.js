const cacheTitle = ({ title }) => {
  return {
    type: 'CATCH_VIDEO_TITLE',
    payload: {
      title
    }
  }
}

export {
  cacheTitle
}
