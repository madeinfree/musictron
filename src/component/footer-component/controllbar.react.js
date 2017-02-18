import React, { Component } from 'react'
import ControllbarItem from './controllbarItem.react'

const controllbarMainStyle = {
  marginLeft: 20
}

const controllbarItemStyle = {
  fontSize: 20,
  color: '#fff'
}

class ControllBar extends Component {
  constructor(props) {
    super(props);
  }

  backwardVideoSeek() {
    const {
      onChangeVideoSeek
    } = this.props
    onChangeVideoSeek(-5)
  }
  forwardVideoSeek() {
    const {
      onChangeVideoSeek
    } = this.props
    onChangeVideoSeek(5)
  }

  render() {

    const {
      isPlayed,

      onStopMusic,
      onPlayMusic,
      onChangeVideoSeek
    } = this.props

    return (
      <div style={ controllbarMainStyle }>
        <ControllbarItem
          type='backward'
          marginRight={ 20 }
          onHandleClick={ this.backwardVideoSeek.bind(this) }
          style={ controllbarItemStyle }
        />
        <ControllbarItem
          type={ isPlayed ? 'stop-circle' : 'play-circle'}
          onHandleClick={ isPlayed ? onStopMusic : onPlayMusic }
          style={ controllbarItemStyle }
        />
        <ControllbarItem
          type='forward'
          marginLeft={ 20 }
          onHandleClick={ this.forwardVideoSeek.bind(this) }
          style={ controllbarItemStyle }
        />
      </div>
    )
  }
}

export default ControllBar
