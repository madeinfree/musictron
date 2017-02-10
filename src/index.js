import React, { Component } from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { lists } from './reducer/list'
import { play } from './reducer/play'
import thunk from 'redux-thunk';

import APIWrapper from './container/gapi-container/index.react'
import TitleBar from './container/title-bar/index.react'
import LeftContainer from './container/left-container/index.react'
import MiddleContainer from './container/middle-container/index.react'
import RightContainer from './container/right-container/index.react'

const store = createStore(
  combineReducers({
    lists,
    play
  })
, applyMiddleware(thunk))

class Main extends Component {

  render() {
    return (
      <div>
        <APIWrapper>
          <div>
            <TitleBar />
          </div>
          <div>
            <LeftContainer />
            <MiddleContainer />
            <RightContainer />
          </div>
        </APIWrapper>
      </div>
    )
  }
}

render(
  <Provider store={ store }>
    <Main />
  </Provider>
, document.getElementById('electron-view'))
