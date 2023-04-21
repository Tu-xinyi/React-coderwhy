import React, { PureComponent } from 'react'
import Cart from './page/Cart'

export class App extends PureComponent {
  // constructor(){
  //   super()
  //   this.state={
  //     isLogin:false
  //   }
  // }
  login(){
    localStorage.setItem('token',"tutu")
    // this.setState({isLogin:true})
    // 不推荐
    this.forceUpdate()
  }
  render() {
    return (
      <div>
       App
       {/* 能否显示取决于token */}
       <Cart/>
       <button onClick={()=>this.login()} >登录</button>
      </div> 
    )
  }
}

export default App
