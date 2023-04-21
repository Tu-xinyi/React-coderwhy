import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      userName:""
    }
  }
  handleSubmitClick(e){
    // 1.阻止默认的行为
    e.preventDefault()
    console.log('获取所有输入的内容');
    // 2.获取所有的表单数据
    console.log(this.state.userName);
  }
  handleUsernameChange(e){
    this.setState({userName:e.target.value})
  }
  render() {
    const {userName} = this.state
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
          onChange={e=>this.handleUsernameChange(e)}
        />
        </label>
        <button type='submit'>注册</button>
        </form>
      </div>
    )
  }
}

export default App