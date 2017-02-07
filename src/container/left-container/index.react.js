import React, { Component } from 'react'

const leftMain = {
  float: 'left',
  width: '10%',
  padding: 10
}
const leftStyle = {
  marginTop: 10,
  fontSize: 14
}
const leftTitleStyle = {
  marginTop: 40,
  fontSize: 12
}
const leftBtn = {
  marginTop: 5,
  fontSize: 14
}

class LeftContainer extends Component {
  render() {
    return (
      <div
        style={ leftMain }
      >
        <div
          style={ leftStyle }
        >
          瀏覽
        </div>
        <div>
          <div style={ leftTitleStyle }>你的音樂</div>
          <div style={ leftBtn }>歌曲</div>
        </div>
      </div>
    )
  }
}

export default LeftContainer
