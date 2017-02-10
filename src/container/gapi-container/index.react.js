import React, { Component } from 'react'
import { connect } from 'react-redux'

class GAPI extends Component {

  componentDidMount() {
    // init google api
    this.initGAPI()
  }

  initGAPI() {
    gapi.load('client', this.startInitialAPI)
  }
  startInitialAPI() {
    console.log('youtube loaded..')
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }

}

export default GAPI
