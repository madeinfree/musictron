import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  startMusic,
  stopMusic,
  restartMusic
} from '../../action/playAction'

const middleHr = {
  display: 'block',
  width: '100%',
  height: 1,
  backgroundColor: '#ccc',
  marginTop: 12
}

const middleMain = {
  float: 'left',
  width: '70%',
  padding: 10
}
const middleCover = {
  display: 'flex'
}
const middleCoverSongText = {
  marginLeft: 10,
  fontSize: 36
}

// button
const middleBtnWrapper = {
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
  color: '#000',
  fontSize: 12,
  border: '1px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 130,
  height: 36,
  borderRadius: 18
}
const middleSettingBtn = {
  marginLeft: 10,
  marginTop: 10,
  color: '#000',
  fontSize: 12,
  border: '1px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 36,
  borderRadius: 150
}

// list
const middleListHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 12
}
const middleListBodyRow = {
  marginTop: 10,
  marginBottom: 10,
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 16
}

class MiddleContainer extends Component {

  constructor(props) {
    super(props);

    this.player = null
    this.lastVideoId = ''
  }

  componentDidMount() {
    const {
      play
    } = this.props
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = this.onReady.bind(this)
  }

  componentDidUpdate() {
    const {
      lists,
      play
    } = this.props

    if (this.lastVideoId === play.videoId) return

    this.lastVideoId = play.videoId
    if (this.player && this.player.loadVideoById) {
      this.player.loadVideoById(play.videoId, 0, "large")
    }
  }

  onReady() {
    const {
      play
    } = this.props
    this.player = new YT.Player('player', {
      height: '200',
      width: '200',
      playerVars: { 'autoplay': 1, 'controls': 0 },
      videoId: play.videoId || 'uG3BGIq3-Cc',
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onStateChange.bind(this)
      }
    });
  }

  onPlayerReady() {
    const {
      play
    } = this.props
    if (play.isPlayed) {
      this.player.playVideo()
    }
  }

  onStateChange(e) {
    const status = e.data
    if (status === 0) {
      this.onPlayerReady()
    }
  }

  onPlayMusic() {
    const {
      restartMusic
    } = this.props
    this.player.playVideo()
    restartMusic()
  }

  onStopMusic() {
    const {
      stopMusic
    } = this.props
    this.player.pauseVideo()
    stopMusic()
  }

  render() {

    const {
      lists,
      play,
      startMusic
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
              style={ middleStartBtn }
              onClick={ play.isPlayed ? this.onStopMusic.bind(this) : this.onPlayMusic.bind(this) }
            >
              { play.isPlayed ? '暫停' : '播放' }
            </div>
            <div
              style={ middleFollowBtn }
            >
              加入最愛
            </div>
            <div
              style={ middleSettingBtn }
            >
              ⋯⋯
            </div>
          </div>
        </div>
        <span
          style={ middleHr }
        ></span>
        <div>
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
                    key={ `${title}-idx` }
                    style={ middleListBodyRow }
                  >
                    <div style={ { flex: 1, textAlign: 'center', cursor: 'pointer' } } onClick={ () => startMusic(videoId, { title, description }) }>
                      <img width='100%' src={ thumbnails.default.url} />
                    </div>
                    <div
                      style={ { flex: 1, textAlign: 'center', cursor: 'default' } }
                      onClick={ () => startMusic(videoId || playlistId, { title, description }) }
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
const mapDispatchToProps = {
  startMusic,
  stopMusic,
  restartMusic
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiddleContainer)
