import React, { Component } from 'react'

class ControllbarItem extends Component {
  render() {

    const {
      type,
      style,
      marginLeft,
      marginRight,

      // event handler
      onHandleClick
    } = this.props

    const marginStyle = {
      marginLeft: marginLeft ? marginLeft : 0,
      marginRight: marginRight ? marginRight : 0
    }

    const combineStyles = Object.assign({}, style, marginStyle)

    return (
      <i
        style={ combineStyles }
        className={ `fa fa-${type}` }
        onClick={ onHandleClick ? onHandleClick : null }
      >
      </i>
    )
  }
}

export default ControllbarItem
