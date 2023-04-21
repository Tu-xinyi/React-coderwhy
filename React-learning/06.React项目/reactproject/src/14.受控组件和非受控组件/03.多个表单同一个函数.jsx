import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      userName:"",
      password:''
    }
  }
  handleSubmitClick(e){
    // 1.阻止默认的行为
    e.preventDefault()
    console.log('获取所有输入的内容');
    // 2.获取所有的表单数据
    console.log(this.state.userName,this.state.password);
  }
  // 相同逻辑做出合并
  // handleUsernameChange(e){
  //   this.setState({userName:e.target.value})
  // }
  // handlepasswordChange(e){
  //   this.setState({password:e.target.value})
  // }

  handlechange(e){
    // const keyName = e.target.name
    // this.setState({
      // 计算属性名
    //   [keyName]:e.target.value
    // })

    this.setState({
      // 计算属性名
      [e.target.name]:e.target.value
    })
  }
  render() {
    const {userName,password} = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
        {/* 1. 用户名和密码 */}
        <label htmlFor="userName">
        用户：
        <input 
          type="text"
          id='userName'
          name="userName"
          value={userName}
          onChange={e=>this.handlechange(e)}
        />
        </label>
        <label htmlFor="userName">
        密码：
        <input 
          type="password"
          id='password'
          name="password"
          value={password}
          onChange={e=>this.handlechange(e)}
        />
        </label>
        <button type='submit'>注册</button>
        </form>
      </div>
    )
  }
}

export default App