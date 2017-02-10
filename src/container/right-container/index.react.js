import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  searchMusicLists
} from '../../action/listAction'

const rightMain = {
  float: 'left',
  width: '10%',
  padding: 10
}

class RightContainer extends Component {
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
                key={ `${title}-${idx}-${new Date().getTime()}` }
                onClick={ () => searchMusicLists({ q: title }) }
              >
                { title }
              </div>
            )
          })
        }
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
  searchMusicLists
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightContainer)
