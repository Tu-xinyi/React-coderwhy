import React, { PureComponent } from 'react'

export class Classs extends PureComponent {
  constructor(){
    super()
    this.state={
      counter:0
    }
  }
  changeCounter(num){
    this.setState({counter:this.state.counter+num})
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <div>{counter}</div>
        <button onClick={e=>this.changeCounter(+1)}>+1</button>
        <button onClick={e=>this.changeCounter(-1)}>-1</button>
      </div>
    )
  }
}

export default Classs