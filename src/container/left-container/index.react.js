import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  startMusic
} from '../../action/playAction'
import {
  searchVideosDetails
} from '../../action/detailAction'
import {
  getFavoriteCacheTitle
} from '../../action/historAction'

const leftMain = {
  background: 'rgba(0, 0, 0, .1)',
  color: '#fff',
  height: '100%',
  padding: 25
}
const leftTitleStyle = {
  fontSize: 14,
  marginBottom: 10
}
const favoriteBtnStyle = {
  cursor: 'default',
  marginTop: 10,
  marginBottom: 10,
}

class LeftContainer extends Component {
  componentDidMount() {
    const {
      getFavoriteCacheTitle,
      db
    } = this.props
    getFavoriteCacheTitle({ db })
  }
  render() {
    const {
      //state
      playingVideoId,
      favoriteVideoIds,

      // dispatch
      startMusic,
      searchVideosDetails,

      //indexedDB
      db
    } = this.props

    return (
      <div
        style={ leftMain }
      >
        <div>
          <div style={ leftTitleStyle }>儲存的音樂</div>
          <div>
            {
              favoriteVideoIds.map((video, idx) => {
                const isCurrentVideoId = playingVideoId === video.videoId
                return (
                  <div
                    onClick={ () => {
                      searchVideosDetails({ videoId: video.videoId })
                      startMusic(video.videoId, {
                      title: video.title,
                      description: video.description,
                      url: video.url
                    })
                  } }
                    style={ isCurrentVideoId ? Object.assign({}, favoriteBtnStyle, { color: '#555' }) : favoriteBtnStyle }
                    key={ `${video.videoId}-${idx}` }
                  >
                    { video.title.slice(0, 10) + '...' }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteVideoIds: state.history.favoriteVideoIds,
    playingVideoId: state.play.videoId
  }
}

const mapDispatchToProps = {
  startMusic,
  getFavoriteCacheTitle,
  searchVideosDetails
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftContainer)
