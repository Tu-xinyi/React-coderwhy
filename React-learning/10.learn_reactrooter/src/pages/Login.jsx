import React, { PureComponent } from 'react'
// 路由重定向
import { Navigate } from 'react-router-dom'

export class Login extends PureComponent {
  constructor(){
    super()
    this.state={
      isLogin:'false'
    }
  }
  login(){
    this.setState({isLogin:!this.state.isLogin})
  }
  render() {
    const {isLogin} = this.state
    return (
      <div>
        {isLogin ? <button onClick ={()=>this.login()}>请先登录</button> : <Navigate to='/home'></Navigate> }
      </div>
    )
  }
}

export default Login