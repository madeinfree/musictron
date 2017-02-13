import idb from './database/indexedDB'
const db = new idb

import React, { Component } from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { lists } from './reducer/list'
import { play } from './reducer/play'
import { history } from './reducer/history'
import { detail } from './reducer/detail'
import thunk from 'redux-thunk';

import APIWrapper from './container/gapi-container/index.react'
import TitleBar from './container/title-bar/index.react'
import LeftContainer from './container/left-container/index.react'
import MiddleContainer from './container/middle-container/index.react'
import RightContainer from './container/right-container/index.react'
import FooterContainer from './container/footer-container/index.react'

const store = createStore(
  combineReducers({
    lists,
    play,
    history,
    detail
  })
, applyMiddleware(thunk))

const mainWrapperStyle = {
  display: 'flex',
  height: 700,
  overflow: 'hidden'
}

const blurStyle = {
  backgroundSize: 'cover',
	backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAYAAACXU8ZrAAAAXElEQVQYV2XNXQoAIQgE4JkKiuoi/dz/eLnorr2sICh8jtx7C0loxxgRQkBrDTln9N5RawXnnIKvHCvUA4WlFHCtdZHIOypKKVm6liXdhcQ5x5BjQ2OM3zt/78kPiIwRbfZ4fHwAAAAASUVORK5CYII=")'
}

class Main extends Component {

  render() {
    return (
      <div>
        <APIWrapper>
          <div style={ Object.assign({}, blurStyle, { filter: 'blur(1px)' ,width: '100%', height: '100%', position: 'absolute', backgroundColor: '#fff', zIndex: '-1' }) }></div>
          <div>
            <TitleBar
              db={ db }
            />
          </div>
          <div style={ mainWrapperStyle }>
            <LeftContainer
              db={ db }
            />
            <MiddleContainer
              db={ db }
            />
          </div>
          <div>
            <FooterContainer />
          </div>
        </APIWrapper>
      </div>
    )
  }
}

db.initializeDB(() => {
  render(
    <Provider store={ store }>
      <Main />
    </Provider>
  , document.getElementById('electron-view'))
})
