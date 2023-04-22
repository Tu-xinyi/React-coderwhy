import React, { PureComponent } from 'react'
import store from '../store/index'
import {subNumber} from '../store/actionCreater'

export class Profile extends PureComponent {
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
  lessNumber(num){
    store.dispatch(subNumber(num))
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>Profile counter:{counter}</h2>
        <button onClick={e=>this.lessNumber(1)}>-1</button>
        <button onClick={e=>this.lessNumber(5)}>-5</button>
        <button onClick={e=>this.lessNumber(10)}>-10</button>
      </div>
    )
  }
}

export default Profile