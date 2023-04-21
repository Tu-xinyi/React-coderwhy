import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super()
    this.state={
      message:'Hello World!',
      count:10
    }
  }
  changeText(){
    
  }
  increment(){
    // 将三次合并到一起 相当于在队列中 三次都是10+1=11 =>最后的数值为11
    // this.setState({count:this.state.count+1})
    // this.setState({count:this.state.count+1})
    // this.setState({count:this.state.count+1})
    // console.log("count:",this.state.count);

    // 可以使用回调函数避免这种情况  因为state拿到的是最新的state 队列中上一个函数执行完后 下一个函数拿到最新的staet
    this.setState((state)=>{
      return {
        count:state.count+1
      }
    })
    this.setState((state)=>{
      return {
        count:state.count+1
      }
    })
    this.setState((state)=>{
      return {
        count:state.count+1
      }
    })
  }
  render() {
    console.log('执行render函数');
    const {message,count} = this.state
    return (
      <div>
        <h2>message:{message}</h2>
        <button onClick={e=>{this.changeText()}}>点击修改message</button>
        <h2>count:{count}</h2>
        <button onClick={e=>{this.increment()}}>点击按钮+1</button>
      </div>
    )
  }
}

export default App