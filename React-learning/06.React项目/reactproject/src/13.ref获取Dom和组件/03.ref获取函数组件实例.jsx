import React, { Component,createRef,forwardRef } from 'react'

// 函数组件没有实例 无法通过ref进行获取

const HelloWorld = forwardRef(function (props,ref){
  return <div ref = {ref}>Hello!World!</div>
}) 

export class App extends Component {
  constructor(){
    super()
    this.state={

    }
    this.HWref = createRef()
  }
  getHW(){
    console.log(this.HWref.current);
    console.log('===getFunctionHW===');
  }
  render() {
    return (
      <div>
        <HelloWorld ref={this.HWref}/>
        <button onClick = {()=>{this.getHW()}}>获取组件</button>
      </div>
    )
  }
}

export default App