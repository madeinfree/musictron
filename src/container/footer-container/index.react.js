import React, { Component } from 'react'
import { connect } from 'react-redux'
import { secondToHHMMSS } from '../../utils/timer'

import ControllBar from '../../component/footer-component/controllbar.react'

const flexStyle = {
  display: 'flex'
}

const footerMainStyle = {
  position: 'fixed',
  bottom: 0,
  clear: 'both',
  width: '100%',
  borderTop: '1px solid rgba(255, 255, 255, .1)'
}

const progressBarLineStyle = {
  position: 'relative',
  borderRadius: 5,
  width: '100%',
  height: 2,
  backgroundColor: 'rgb(63, 125, 49)'
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
      onChangeVideoSeek,
      onChangeVideoColume
    } = this.props

    const currentTime = (play.currentTime / detail.contentDetails.videoDuration * 100) || 0
    let currentTimeProgressCircle = {}
    if (this.barLine) {
      currentTimeProgressCircle = Object.assign({}, progressBarCircleStyle, { left: (currentTime / 100) * this.barLine.offsetWidth })
    }

    return (
      <div
        style={ footerMainStyle }
      >
        <div ref={node => this.barLine = node} style={ progressBarLineStyle }>
          <div style={ currentTimeProgressCircle }></div>
        </div>
        <div style={ flexStyle }>
          <div style={ { backgroundColor: 'rgb(64, 64, 64)' } }>
            <img style={ { transform: 'scale(0.7)' } } height='100%' src={ play.detail.url } />
          </div>
          <div style={ { padding: 12, backgroundColor: 'rgb(64, 64, 64)', width :'100%' } }>
            <div style={ { fontSize: 12, marginLeft: 20, color: '#fff', fontWeight: 300 } }>
              <div>{ play.detail.title }</div>
            </div>
            <div style={ { display: 'flex', marginTop: 20, alignItems: 'center', justifyContent: 'space-between' } }>
              <div>
                <ControllBar
                  isPlayed={ play.isPlayed }
                  onStopMusic={ onStopMusic }
                  onPlayMusic={ onPlayMusic }
                  onChangeVideoSeek={ onChangeVideoSeek }
                />
              </div>
              <div style={ { marginLeft: 10, color: '#fff' } }>{ secondToHHMMSS(detail.contentDetails.videoDuration) } / { secondToHHMMSS(play.currentTime) }</div>
              <input type='range' max='100' min='0' onChange={ (e) => onChangeVideoColume(e.target.value) } />
            </div>
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

export default connect(
  mapStateToProps
)(FooterContainer)
