import React, { PureComponent } from 'react'
import classNames from 'classnames'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      isAAA:true,
      isBBB:false,
      isCCC:true
    }
  }
  render() {
    const {isAAA,isBBB,isCCC} = this.state
    return (
      <div>
        <h2 className={classNames('aaa',{A:isAAA},{B:isBBB},{C:isCCC})}>classsNames</h2>
      </div>
    )
  }
}

export default App