import React, { Component } from 'react'
import { connect } from 'react-redux'

const middleHr = {
  display: 'block',
  width: '100%',
  height: 1,
  backgroundColor: '#ccc',
  marginTop: 12
}

const middleMain = {
  height: 700,
  width: '100%',
  overflow: 'auto',
  padding: 10,
  backgroundColor: 'rgba(80, 80, 80, .1)'
}
const middleCover = {
  display: 'flex'
}
const middleCoverSongText = {
  marginLeft: 10,
  fontSize: 36,
  color: '#fff'
}

// button
const middleBtnWrapper = {
  marginTop: 10,
  display: 'flex'
}
const middleStartBtn = {
  marginTop: 10,
  color: '#fff',
  fontSize: 12,
  backgroundColor: '#6aa760',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  height: 36,
  borderRadius: 18
}
const middleFollowBtn = {
  marginLeft: 10,
  marginTop: 10,
  color: '#fff',
  fontSize: 12,
  border: '1px solid #fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 130,
  height: 36,
  borderRadius: 18
}

// list
const middleListHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 12
}
const middleListBodyRow = {
  color: '#fff',
  marginTop: 10,
  marginBottom: 10,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 16
}

class MiddleContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  onAddFavoriteVideoId() {
    const {
      play,
      db
    } = this.props
    const {
      addFavoriteVideoId
    } = this.props

    if (play.detail.title && play.videoId) {
      db.onSetFavoriteIntoDB(play.videoId, play.detail.title, play.detail.description, play.detail.url)
      addFavoriteVideoId({
        title: play.detail.title,
        description: play.detail.description,
        videoId: play.videoId,
        url: play.detail.url
      })
    }
  }

  render() {

    const {
      lists,
      play,
      startMusic,
      searchVideosDetails
    } = this.props
    return (
      <div
        style={ middleMain }
      >
        <div
          style={ middleCover }>
          <div id="player"></div>
          <div
            style={ middleCoverSongText }
          >
            <div style={ { fontSize: 14 } }>{ play.detail.title }</div>
            <div style={ { fontSize: 20, marginTop: 20 } }>{ play.detail.description }</div>
          </div>
        </div>
        <div>
          <div
            style={ middleBtnWrapper }
          >
            <div
              onClick={ this.onAddFavoriteVideoId.bind(this) }
              style={ middleFollowBtn }
            >
              加入最愛
            </div>
          </div>
        </div>
        <div style={{ height: 350, overflow: 'auto', marginTop: 16 }}>
          <div
            style={ middleListHeader }
          >
            <div style={ { flex: 1, textAlign: 'center' } }></div>
            <div style={ { flex: 1, textAlign: 'center' } }></div>
            <div style={ { flex: 4 } }></div>
            <div style={ { flex: 2 } }></div>
          </div>
          <div>
            {
              lists.map((list, idx) => {
                const {
                  title,
                  description,
                  publishedAt,
                  thumbnails
                } = list.snippet
                const {
                  videoId,
                  playlistId
                } = list.id
                // null elem when videoId is undefined
                if (!videoId) return
                return (
                  <div
                    key={ `${title}-${idx}` }
                    style={ middleListBodyRow }
                  >
                    <div
                      style={ { flex: 1, textAlign: 'center', cursor: 'pointer' } }
                      onClick={ () => {
                        searchVideosDetails({ videoId })
                        startMusic(videoId || playlistId, { title, description, url: thumbnails.default.url })
                      } }
                    >
                      <img width='100%' src={ thumbnails.default.url } />
                    </div>
                    <div
                      style={ { flex: 1, textAlign: 'center', cursor: 'default' } }
                    >{ videoId === play.videoId ? '播放中' : '播放' }</div>
                    <div style={ { flex: 4 } }>{ title }</div>
                    <div style={ { flex: 2 } }>{ publishedAt }</div>
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

// export default MiddleContainer
const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    play: state.play
  }
}

export default connect(
  mapStateToProps
)(MiddleContainer)
