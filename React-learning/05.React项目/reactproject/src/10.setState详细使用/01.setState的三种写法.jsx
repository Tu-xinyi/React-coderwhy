import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super()
    this.state={
      message:'Hello World!',
      count:10
    }
  }
  // 当使用setState时 内部调用的是Object.assign(this.state,newState) 将数据合并 不同的数据进行覆盖
  changeText(){
    // 1.基本使用  传入一个对象
    // this.setState({
    //   message:'你好！李银河！'
    // })

    // 2.可以传入一个回调函数
    // 好处一：可以在函数总编写新的state的逻辑
    // 好处二：当前的回调函数会将之前的state和props传递进来
    // this.setState((state,props)=>{
    //   console.log(state.message);
    //   return {
    //     message:'你好！李银河！ '
    //   }
    // })

    // 3.setState在React事件处理中是异步调用
    // this.setState({
    //     message:'你好！李银河！'
    //   })
    //   console.log('setState后的值并不会立刻发生改变',this.state.message);

    // 如果希望在数据更新后(数据合并)，得到对应的数据进行处理
    // 可以传入第二个参数callback 得到更新后的数据
    // this.setState({message:'你好！李银河！'},()=>{
    //   console.log('最新数据',this.state.message);
    // })
    this.setState(()=>{
      return{
        message:'你好！李银河！'
      }
    },()=>{
      console.log('最新数据',this.state.message);
    })

  }
  increment(i){

  }
  render() {
    const {message,count} = this.state
    return (
      <div>
        <h2>message:{message}</h2>
        <button onClick={e=>{this.changeText()}}>点击修改message</button>
        <h2>count:{count}</h2>
        <button onClick={e=>{this.increment(1)}}>点击按钮+1</button>
      </div>
    )
  }
}

export default App