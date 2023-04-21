import React, { Component,createRef } from 'react'

export class App extends Component {
  constructor(){
    super()
    this.state={

    }
    this.titleRef = createRef()
    this.titleEl = createRef(0)
  }
  getDom(){
    // 方法一：在React元素上绑定一个ref字符串 (老方法 不推荐使用)
    console.log(this.refs.why);
    // 方法二：提前创建好ref createRef() 将创建出来的元素绑定到对象 通过.current获取 (官方推荐的方法)
    console.log(this.titleRef.current);
    // 方法三：通过el获取
    console.log(this.titleEl);
  }
  render() {
    return (
      <div>
        <h2 ref="why">Hello! world!</h2>
        <h2 ref={this.titleRef}>你好！李银河！</h2>
        <h2 ref={el=>this.titleEl = el}>你好！涂欣怡！</h2>
        <button onClick={()=>{this.getDom()}}>获取到ref元素</button>
      </div>
    )
  }
}

export default App