import React, { PureComponent } from 'react'


export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      userName:'tutu'
    }
  }
  inputChange(e){
    console.log('inputChange:' ,e.target.value);
    this.setState({userName:e.target.value},()=>{
      console.log(this.state.userName);
    })
  }
  render() {
    const {userName} = this.state
    return (
      <div>
        {/* 受控组件 input textarea等有了value属性变成受控组件 添加onChange事件修改其中的内容*/}
        <input type="text" value={userName} onChange={(e)=>{this.inputChange(e)}}/>
        {/* 非受控组件 */}
        <input type="text" />
        <div>userName:{userName}</div>
      </div>
    )
  }
}

export default App


// 非受控组件：没有被React真正操作的组件