import React, { PureComponent } from 'react'
import store from '../store/index'
import {addNumber} from '../store/actionCreater'

export class Home extends PureComponent {

  constructor(){
    super()
    this.state = {
      // 初始化的时候获取store里的
      counter:store.getState().counter
    }
  }
  componentDidMount(){
    store.subscribe(()=>{
      const state = store.getState()
      this.setState({counter:state.counter})
    })
  }
  addNumber(num){
    store.dispatch(addNumber(num))
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>Home counter:{counter}</h2>
        <button onClick={e=>this.addNumber(1)}>+1</button>
        <button onClick={e=>this.addNumber(5)}>+5</button>
        <button onClick={e=>this.addNumber(10)}>+10</button>
      </div>
    )
  }
}

export default Home