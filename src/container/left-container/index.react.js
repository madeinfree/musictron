import React, { Component } from 'react'

const leftMain = {
  float: 'left',
  width: '10%',
  padding: 10
}
const leftTitleStyle = {
  fontSize: 14
}

class LeftContainer extends Component {
  render() {
    return (
      <div
        style={ leftMain }
      >
        <div>
          <div style={ leftTitleStyle }>儲存的音樂</div>
        </div>
      </div>
    )
  }
}

export default LeftContainer
