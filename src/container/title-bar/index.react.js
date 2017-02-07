import React, { Component } from 'react'

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
  render() {
    return (
      <div
        style={ titleBarMain }
      >
        <div style={ { flex: 1 } }>{ '<' }</div>
        <div style={ { flex: 1 } }>{ '>' }</div>
        <div
          style={ titleBarSearchAndUpgrade }
        >
          <div>
            <input style={ titleBarUpgradeInput } placeholder='搜尋' type='text' />
          </div>
          <div style={ Object.assign({ marginRight: 10 }, titleBarUpgradeBtn) }>upgrade</div>
        </div>
        <div style={ { flex: 1 } }>1</div>
        <div style={ { flex: 1 } }>2</div>
        <div style={ { flex: 1 } }>3</div>
      </div>
    )
  }
}

export default TitleBar
