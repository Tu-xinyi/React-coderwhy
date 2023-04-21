import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      size : 80
    }
  }
  creaseSize(){
    this.setState({size : this.state.size+5})
  }
  render() {
    const {size} = this.state
    return (
      <div>
        <span style={{color:"red",fontSize:`${size}px`}}>Hello!World!</span>
        <h2 style={{color:'blue',fontSize:'30px'}}>你好！李银河！</h2>
        <button onClick={()=>{this.creaseSize()}}>size+5</button>
      </div>
    )
  }
}

export default App