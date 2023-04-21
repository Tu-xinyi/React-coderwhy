import React, { PureComponent } from 'react'
import Home from './Home'
import Banner from './Banner'
import Profile from './Profile'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      message:'Hello World!',
      count:1
    }
  }
  changeText(){
    this.setState({message:'你好李银河！'})
  }
  increment(){
    this.setState({count:this.state.count+1})
  }
  // 性能优化的点 ===>开发过程中如果都是手写 太麻烦  ===> PureComponent（原理就是在shouldComponentUpdate中浅层比较）
  // shouldComponentUpdate(nextProps,newState){
  //   if(this.state.message !== newState.message){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  render() {
    const {message,count} = this.state
    console.log('App render');
    return (
      <div>
        <div>{message}----{count}</div>
        <button onClick={e=>this.changeText()}>修改message</button>
        <button onClick={e=>this.increment()}>+1</button>
        <Home messgee={message}></Home>
        <Banner count={count}></Banner>
        <Profile message={message}/>
      </div>
    )
  }
}

export default App