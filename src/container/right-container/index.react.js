import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  searchMusicLists
} from '../../action/listAction'
import {
  getHistoryCacheTitle,
  clearCacheTitle
} from '../../action/historAction'

const rightMain = {
  float: 'left',
  width: '10%'
}

const historyBtnStyle = {
  cursor: 'default'
}

const clearCacheBtnStyle = {
  cursor: 'default'
}

class RightContainer extends Component {
  componentDidMount() {
    const {
      getHistoryCacheTitle,
      db
    } = this.props
    getHistoryCacheTitle({ db })
  }
  render() {
    const {
      history,
      searchMusicLists,
      db
    } = this.props
    return (
      <div
        style={ rightMain }
      >
        歷史搜尋
        {
          history.videoTitles.map((title, idx) => {
            return (
              <div
                style={ historyBtnStyle }
                key={ `${title.title}-${idx}-${new Date().getTime()}` }
                onClick={ () => searchMusicLists({ q: title.title }) }
              >
                { title.title }
              </div>
            )
          })
        }
        <div
          style={ clearCacheBtnStyle }
          onClick={ () => this.props.clearCacheTitle({ db }) }
        >清除歷史紀錄</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history
  }
}
const mapDispatchToProps = {
  getHistoryCacheTitle,
  searchMusicLists,
  clearCacheTitle
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightContainer)
