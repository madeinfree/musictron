import React, { Component } from 'react'

const leftMain = {
  float: 'left',
  width: '10%',
  padding: 10
}
const leftTitleStyle = {
  marginTop: 40,
  fontSize: 12
}

class LeftContainer extends Component {
  render() {
    return (
      <div
        style={ leftMain }
      >
        <div>
          <div style={ leftTitleStyle }>加入儲存的音樂</div>
        </div>
      </div>
    )
  }
}

export default LeftContainer
