import React, { Component } from 'react'

import { connect } from 'react-redux'
import {
  searchMusicLists
} from '../../action/listAction'
import {
  cacheTitle
} from '../../action/historAction'

const titleBarMain = {
  padding: 10,
  justifyContent: 'space-between',
  display: 'flex'
}
const titleBarSearchAndUpgrade = {
  display: 'flex',
  justifyContent: 'space-between',
  flex: 10
}
const titleBarUpgradeInput = {
  padding: 5,
  borderRadius: 18,
  border: '1px solid #000',
  width: 200
}
const titleBarUpgradeBtn = {
  padding: 5,
  color: '#fff',
  fontSize: 12,
  backgroundColor: '#6aa760',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 18,
  width: 50
}

class TitleBar extends Component {

  searchMusic(e) {
    const {
      searchMusicLists,
      cacheTitle,
      db
    } = this.props
    if (e.keyCode === 13) {
      const query = e.target.value
      searchMusicLists({
        q: query
      })
      cacheTitle({
        title: query,
        db
      })
      e.target.value = ''
    }
  }

  render() {
    this.props.searchMusicLists()
    return (
      <div
        style={ titleBarMain }
      >
        <div
          style={ titleBarSearchAndUpgrade }
        >
          <div>
            <input
              style={ titleBarUpgradeInput }
              placeholder='搜尋'
              type='text'
              onKeyDown={ this.searchMusic.bind(this) }
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  searchMusicLists,
  cacheTitle
}

export default connect(
  null,
  mapDispatchToProps
)(TitleBar)
