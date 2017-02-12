import React, { Component } from 'react'
import { connect } from 'react-redux'

const footerMainStyle = {
  position: 'fixed',
  display: 'flex',
  bottom: 0,
  clear: 'both',
  width: '100%',
  borderTop: '1px solid rgba(255, 255, 255, .1)'
}

class FooterContainer extends Component {
  render() {
    const {
      play
    } = this.props
    return (
      <div
        style={ footerMainStyle }
      >
        <div style={ { backgroundColor: 'rgb(64, 64, 64)' } }>
          <img style={ { transform: 'scale(0.7)' } } height='100%' src={ play.detail.url } />
        </div>
        <div style={ { display: 'flex', alignItems: 'center', backgroundColor: 'rgb(64, 64, 64)', width :'100%' } }>
          <div style={ { fontSize: 12, marginLeft: 20, color: '#fff', fontWeight: 900, letterSpacing: 5 } }>
            <div>{ play.detail.title }</div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    play: state.play
  }
}

export default connect(
  mapStateToProps
)(FooterContainer)
