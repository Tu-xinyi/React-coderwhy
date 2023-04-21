import React, { Component } from 'react'
import NavBar from './navbar/index.jsx'
import NavBar2 from './navbar2/index.jsx'

export class app extends Component {
  render() {
    return (
      <div>
        <NavBar>
          {/* 实现方法一：使用children子元素 ：NavBar中的元素会被存放在 this.props.children中     
                          NavBar组件存放多个内容时  this.props.children是数组
                          NavBar中只存放一个内容时  this.props.children就是当前存放的内容  */}
          <button>按钮</button>
          <h4>我是标题</h4>
          <i>我是斜体</i>
        </NavBar>
          {/*实现方法二：使用props*/}                
        <NavBar2
          leftslot={123}
          centerslot={456}
          rightslot={<button>按钮</button>}
          />
      </div>
    )
  }
}

export default app