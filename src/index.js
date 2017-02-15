import idb from './database/indexedDB'
const db = new idb

import React, { Component } from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { lists } from './reducer/list'
import { play } from './reducer/play'
import { history } from './reducer/history'
import { detail } from './reducer/detail'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {
  startMusic,
  stopMusic,
  restartMusic,
  getCurrentTime
} from './action/playAction'
import {
  addFavoriteVideoId
} from './action/historAction'
import {
  searchVideosDetails
} from './action/detailAction'

import APIWrapper from './container/gapi-container/index.react'
import TitleBar from './container/title-bar/index.react'
import LeftContainer from './container/left-container/index.react'
import MiddleContainer from './container/middle-container/index.react'
import RightContainer from './container/right-container/index.react'
import FooterContainer from './container/footer-container/index.react'

const logger = createLogger()

const store = createStore(
  combineReducers({
    lists,
    play,
    history,
    detail
  })
, applyMiddleware(thunk))

const mainWrapperStyle = {
  display: 'flex',
  height: 700,
  overflow: 'hidden'
}

const blurStyle = {
  backgroundSize: 'cover',
	backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAXElEQVQYV2XNXQoAIQgE4JkKiuoi/dz/eLnorr2sICh8jtx7C0loxxgRQkBrDTln9N5RawXnnIKvHCvUA4WlFHCtdZHIOypKKVm6liXdhcQ5x5BjQ2OM3zt/78kPiIwRbfZ4fHwAAAAASUVORK5CYII=")'
}

class Main extends Component {

  constructor() {
    super();
    this.player = null
    this.lastVideoId = ''
    this.lastCurrentTime = 0
    this.CurrentTime = 0

    this.timerForCurrentTimeMethod = null
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
      playerVars: { 'autoplay': 0, 'controls': 0 },
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

    if (play.videoId) {
      this.timerForCurrentTimeMethod = setInterval(this.getCurrentTimeFromVideos.bind(this), 100)
    }
  }
  getCurrentTimeFromVideos() {
    const {
      getCurrentTime
    } = this.props

    this.lastCurrentTime = this.CurrentTime
    this.CurrentTime = this.player.getCurrentTime()
    getCurrentTime(this.CurrentTime)
  }

  onStateChange(e) {
    const status = e.data
    if (status === 0) {
      this.onPlayerReady()
    }
    if (status === 1) {
      if (this.timerForCurrentTimeMethod === null) {
        this.timerForCurrentTimeMethod = setInterval(this.getCurrentTimeFromVideos.bind(this), 100)
      }
    }
    if (status === 2) {
      clearInterval(this.timerForCurrentTimeMethod)
      this.timerForCurrentTimeMethod = null
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

  onChangeVideoSeek(second) {
    const {
      play
    } = this.props
    let seekSecond = parseInt(play.currentTime + second, 10)
    if (seekSecond === 0) { seekSecond = 0 }
    this.player.seekTo(seekSecond)
  }

  render() {

    return (
      <div>
        <APIWrapper>
          <div style={ Object.assign({}, blurStyle, { filter: 'blur(1px)' ,width: '100%', height: '100%', position: 'absolute', backgroundColor: '#fff', zIndex: '-1' }) }></div>
          <div>
            <TitleBar
              db={ db }
            />
          </div>
          <div style={ mainWrapperStyle }>
            <LeftContainer
              db={ db }
            />
            <MiddleContainer
              db={ db }
            />
          </div>
          <div>
            <FooterContainer
              onStopMusic={ this.onStopMusic.bind(this) }
              onPlayMusic={ this.onPlayMusic.bind(this) }
              onChangeVideoSeek={ this.onChangeVideoSeek.bind(this) }
            />
          </div>
        </APIWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    play: state.play
  }
}

const mapDispatchToProps = {
  startMusic,
  stopMusic,
  restartMusic,
  addFavoriteVideoId,
  searchVideosDetails,
  getCurrentTime
}

const ConnectToMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

db.initializeDB(() => {
  render(
    <Provider store={ store }>
      <ConnectToMain />
    </Provider>
  , document.getElementById('electron-view'))
})
