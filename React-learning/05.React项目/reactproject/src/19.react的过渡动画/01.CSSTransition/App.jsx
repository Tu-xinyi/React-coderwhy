import React, { PureComponent } from 'react'
import { CSSTransition} from 'react-transition-group'
import './App.css'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      isShow:false
    }
  }
  change(){
    this.setState({isShow:!this.state.isShow})
  }
  render() {
    const {isShow} = this.state
    return (
      <div>
         <button onClick={()=>this.change()}>切换</button>
         {/* unmountOnExit={true} 组件在动画执行推出后被移除
             timeout 类组件被移除的时间
             appear 第一次出现也有动画 ???appear不生效
         */}
         <CSSTransition 
         unmountOnExit={true} 
         in={isShow} 
         classNames='why'
         timeout={2000}
         appear
         onEnter={()=>console.log('开始进入动画')}
         onEntering={()=>{console.log('正在进入动画')}}
         onEntered={()=>console.log('动画执行结束')}
         onExit={()=>console.log('开始离开动画')}
         onExiting={()=>{console.log('正在离开动画');}}
         onExited={()=>{console.log('已经离开动画');}}
         >
          <h2>哈哈哈</h2>
         </CSSTransition>
      </div>
    )
  }
}

export default App