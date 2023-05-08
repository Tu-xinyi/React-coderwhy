import React, { PureComponent } from 'react'

// 类组件的缺陷；
// 1.逻辑过多时 => 冗余
// 2.this指向是个难点
// 3.组件复用比较难 => Hoc(编写需要经验)

class HelloWorld extends PureComponent{
  constructor(){
    super()
    this.state={
      message :'Hello World 1'
    }
  }
  changeMessage(){
    this.setState({message:'你好！李银河！1'})
  }
  render(){
    const {message} = this.state
    return(
      <div>
        <h2>{message}</h2>
        <button onClick={e=>this.changeMessage()}>修改文案</button>
      </div>
    )
  }
}

//函数组件的缺点：
// 1.函数组件当内容发生变化时，不会触发render函数
// 2.加入数据发生改变时，会触发render函数。当重新执行函数组件时，也会重新执行let => 更新无效
// 3.函数组件没有生命周期 

function HelloWorld2(props){
    let message= 'Hello World 2'
    return(
      <div>
        <h2>{message}</h2>
        <button onClick={e => message = '你好！李银河！2'}>修改文案</button>
      </div>
    )
}

export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld/>
        <hr />
        <HelloWorld2/>
      </div>
    )
  }
}

export default App