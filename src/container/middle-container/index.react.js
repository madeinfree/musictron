import React, { Component } from 'react'
import { connect } from 'react-redux'

const middleHr = {
  display: 'block',
  width: '100%',
  height: 1,
  backgroundColor: '#ccc',
  marginTop: 12
}

const middleMain = {
  float: 'left',
  width: '70%',
  padding: 10
}
const middleCover = {
  display: 'flex'
}
const middleCoverSongText = {
  marginLeft: 10,
  fontSize: 36
}

// button
const middleBtnWrapper = {
  display: 'flex'
}
const middleStartBtn = {
  marginTop: 10,
  color: '#fff',
  fontSize: 12,
  backgroundColor: '#6aa760',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 100,
  height: 36,
  borderRadius: 18
}
const middleFollowBtn = {
  marginLeft: 10,
  marginTop: 10,
  color: '#000',
  fontSize: 12,
  border: '1px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 130,
  height: 36,
  borderRadius: 18
}
const middleSettingBtn = {
  marginLeft: 10,
  marginTop: 10,
  color: '#000',
  fontSize: 12,
  border: '1px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 36,
  borderRadius: 150
}

// list
const middleListHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 12
}
const middleListBodyRow = {
  marginTop: 10,
  marginBottom: 10,
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 16
}

class MiddleContainer extends Component {
  render() {

    const {
      lists
    } = this.props

    return (
      <div
        style={ middleMain }
      >
        <div
          style={ middleCover }>
          <div>
            <img src='https://placeholdit.imgix.net/~text?txtsize=19&txt=200%C3%97200&w=200&h=200' />
          </div>
          <div
            style={ middleCoverSongText }
          >歌曲</div>
        </div>
        <div>
          <div
            style={ middleBtnWrapper }
          >
            <div
              style={ middleStartBtn }
            >
              播放
            </div>
            <div
              style={ middleFollowBtn }
            >
              關注
            </div>
            <div
              style={ middleSettingBtn }
            >
              ⋯⋯
            </div>
          </div>
        </div>
        <span
          style={ middleHr }
        ></span>
        <div>
          <div
            style={ middleListHeader }
          >
            <div style={ { flex: 1, textAlign: 'center' } }></div>
            <div style={ { flex: 1, textAlign: 'center' } }></div>
            <div style={ { flex: 4 } }>歌曲</div>
            <div style={ { flex: 2 } }>藝人</div>
            <div style={ { flex: 2 } }>日期</div>
            <div style={ { flex: 1, textAlign: 'center' } }>選項</div>
          </div>
          <div>
            {
              lists.map((list, idx) => {
                return (
                  <div
                    key={ `${list.title}-idx` }
                    style={ middleListBodyRow }
                  >
                    <div style={ { flex: 1, textAlign: 'center', cursor: 'default' } }>{ list.started ? '(||)' : '' }</div>
                    <div style={ { flex: 1, textAlign: 'center', cursor: 'default' } }>+</div>
                    <div style={ { flex: 4 } }>{ list.title }</div>
                    <div style={ { flex: 2 } }>{ list.singer }</div>
                    <div style={ { flex: 2 } }>{ list.date.toDateString() }</div>
                    <div style={ { flex: 1, textAlign: 'center', cursor: 'default' } }>⋯⋯</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

// export default MiddleContainer
const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}
const mapDispatchToProps = {}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MiddleContainer)
