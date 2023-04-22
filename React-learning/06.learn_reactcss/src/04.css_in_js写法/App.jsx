import React, { PureComponent } from 'react'
// AppWrapper,SetionWapper是两个组件
import { AppWrapper,SetionWapper } from './style.js'
import * as cssdate from './style/cssdate.js'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      size:cssdate.fontSize,
      color:'blue'
    }
  }
  render() {
    const {size,color} = this.state
    return (
      <AppWrapper size={size} color={color}>
        AppWrapper:
        <SetionWapper>
          Setion
          <div className='title'>标题</div>
          <div className='content'>内容</div>
        </SetionWapper>
        <div className='footer'>
          <p>版权声明</p>
          <p>免责声明</p>
        </div>
      </AppWrapper>
    )
  }
}

export default  App