import React, { Component } from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { lists } from './reducer/list'

import TitleBar from './container/title-bar/index.react'
import LeftContainer from './container/left-container/index.react'
import MiddleContainer from './container/middle-container/index.react'
import RightContainer from './container/right-container/index.react'

const store = createStore(
  combineReducers({
    lists
  })
)

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <TitleBar />
        </div>
        <div>
          <LeftContainer />
          <MiddleContainer />
          <RightContainer />
        </div>
      </div>
    )
  }
}

render(
  <Provider store={ store }>
    <Main />
  </Provider>
, document.getElementById('electron-view'))
