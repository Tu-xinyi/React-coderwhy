import React, { Component } from 'react'
import ThemeContext from './context/theme-context'

class Polify extends Component {
  render() {
    return (
      <div>
        <div>polify</div>
        {/* 能够使用默认数据 */}
      <ThemeContext.Consumer>
        {
          value=>{
            return <h1>{value.color}</h1>
          }
        }
      </ThemeContext.Consumer>
      </div>     
    )
  }
}

export default Polify