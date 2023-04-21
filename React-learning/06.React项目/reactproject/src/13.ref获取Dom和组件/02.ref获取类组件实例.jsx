import React, { Component,createRef } from 'react'

class HelloWorld  extends Component{
  text(){
    console.log('====text====');
  }
  render(){
    return <div>Hello!World!</div>
  }
}
export class App extends Component {
  constructor(){
    super()
    this.state={

    }
    this.HWref = createRef()
  }
  getHW(){
    console.log('===getHW===');
    this.HWref.current.text()
  }
  render(){
    return (
      <div>
        <HelloWorld ref={this.HWref}/>
        <button onClick = {()=>{this.getHW()}}>获取组件</button>
      </div>
    )
  }
}

export default App