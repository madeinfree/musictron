import React, { Component } from 'react'

const rightMain = {
  float: 'left',
  width: '10%',
  padding: 10
}

class RightContainer extends Component {
  render() {
    return (
      <div
        style={ rightMain }
      >
        Right
      </div>
    )
  }
}

export default RightContainer
