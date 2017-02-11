import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  searchMusicLists
} from '../../action/listAction'
import {
  getHistoryCacheTitle
} from '../../action/historAction'

const rightMain = {
  float: 'left',
  width: '10%',
  padding: 10
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
      searchMusicLists
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
                key={ `${title.title}-${idx}-${new Date().getTime()}` }
                onClick={ () => searchMusicLists({ q: title.title }) }
              >
                { title.title }
              </div>
            )
          })
        }
        清除歷史紀錄
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
  searchMusicLists
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightContainer)
