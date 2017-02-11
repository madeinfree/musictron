import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  startMusic
} from '../../action/playAction'

const leftMain = {
  float: 'left',
  width: '10%',
  padding: 10
}
const leftTitleStyle = {
  fontSize: 14
}
const favoriteBtnStyle = {
  cursor: 'default'
}

class LeftContainer extends Component {
  render() {
    const {
      favoriteVideoIds,
      startMusic,
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
                return (
                  <div
                    onClick={ () => {
                      startMusic(video.videoId, {
                      title: video.title,
                      description: video.description
                    })
                  } }
                    style={ favoriteBtnStyle }
                    key={ `${video.videoId}-${idx}` }
                  >
                    { video.title.slice(0, 10) + '...' }
                    <hr />
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
    favoriteVideoIds: state.history.favoriteVideoIds
  }
}

const mapDispatchToProps = {
  startMusic
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftContainer)
