import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  stopMusic
} from '../../action/playAction'
import { secondToHHMMSS } from '../../utils/timer'

import ControllBar from '../../component/footer-component/controllbar.react'

const footerMainStyle = {
  position: 'fixed',
  display: 'flex',
  bottom: 0,
  clear: 'both',
  width: '100%',
  borderTop: '1px solid rgba(255, 255, 255, .1)'
}
const progressBarCircleStyle = {
  position: 'absolute',
  top: -7,
  width: 15,
  height: 15,
  backgroundColor: '#ccc',
  borderRadius: 50
}

class FooterContainer extends Component {
  render() {
    const {

      // state from reducer
      play,
      detail,

      // handle to stop music
      onStopMusic,
      onPlayMusic,
      onChangeVideoSeek
    } = this.props

    const currentTime = (play.currentTime / detail.contentDetails.videoDuration * 100) || 0
    const currentTimeProgressCircle = Object.assign({}, progressBarCircleStyle, { left: currentTime * 7 })

    return (
      <div
        style={ footerMainStyle }
      >
        <div style={ { backgroundColor: 'rgb(64, 64, 64)' } }>
          <img style={ { transform: 'scale(0.7)' } } height='100%' src={ play.detail.url } />
        </div>
        <div style={ { padding: 12, backgroundColor: 'rgb(64, 64, 64)', width :'100%' } }>
          <div style={ { fontSize: 12, marginLeft: 20, color: '#fff', fontWeight: 900, letterSpacing: 5 } }>
            <div>{ play.detail.title }</div>
          </div>
          <div style={ { display: 'flex', marginTop: 20, alignItems: 'center' } }>
            <div>
              <ControllBar
                isPlayed={ play.isPlayed }
                onStopMusic={ onStopMusic }
                onPlayMusic={ onPlayMusic }
                onChangeVideoSeek={ onChangeVideoSeek }
              />
            </div>
            <div style={ { position: 'relative', borderRadius: 5, width: 700, height: 2, backgroundColor: 'rgb(63, 125, 49)', marginLeft: 20 } }>
              <div style={ currentTimeProgressCircle }></div>
            </div>
            <div style={ { marginLeft: 10, color: '#fff' } }>{ secondToHHMMSS(detail.contentDetails.videoDuration) } / { secondToHHMMSS(play.currentTime) }</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    play: state.play,
    detail: state.detail
  }
}

const mapDispatchToProps = {
  stopMusic
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterContainer)
