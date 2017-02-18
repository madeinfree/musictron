import React, { Component } from 'react'

class ControllbarCircle extends Component {

  constructor() {
    super();

    this.state = {
      mouseIsTouch: false,
      lastClientX: 0
    }

    this.timer = null
  }

  windowMouseMove(e) {
    const {
      mouseIsTouch
    } = this.state
    const {
      offsetWidth,
      onChangeVideoSeekFromControllbarCircle
    } = this.props
    if (mouseIsTouch === true) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.setState({
          mouseIsTouch: false
        })
      }, 200)
      this.setState({
        lastClientX: e.clientX
      })
      onChangeVideoSeekFromControllbarCircle(e.clientX / offsetWidth)
    }
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.windowMouseMove.bind(this))
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.windowMouseMove.bind(this))
  }

  render() {
    const {
      style
    } = this.props

    const {
      mouseIsTouch,
      lastClientX
    } = this.state

    return (
      <div
        style={ mouseIsTouch === true ? Object.assign({} ,style, { left: lastClientX }) : style }
        onMouseDown={ (e) => {
          e.preventDefault()
          this.setState({
            mouseIsTouch: true,
            lastClientX: e.clientX - 2
          })
        } }
        onMouseUp={ (e) => {
          e.preventDefault()
          if (mouseIsTouch === true) {
            this.setState({
              mouseIsTouch: false
            })
          }
        } }
      ></div>
    )
  }
}

export default ControllbarCircle
