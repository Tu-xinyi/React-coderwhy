import React, { Component } from 'react'
import {flushSync} from 'react-dom'

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
    // 在React18前 在setTimeout中打印的就是你好！李银河！
    // 在React18后 就算在setTimeout中进行批处理 也没有办法进行同步操作
    // setTimeout(()=>{
    //     this.setState({message:"你好！李银河！"})
    //   console.log(this.state.message);
    // },0)
    
    // 使用flushSync达到同步更新的效果
    setTimeout(()=>{
      flushSync(()=>{
        this.setState({message:"你好！李银河！"})
      })
        console.log(this.state.message);
      },0)
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