import React, { PureComponent, createRef } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      intro:'I am tutu !'
    }
    this.introRef = createRef()
  }
  componentDidMount(){
    // 监听变化
    // this.introRef.current.addEventListener
  }
  handleSubmitClick(e){
    e.preventDefault();
    console.log('获取结果:' ,this.introRef.current.value);
  }

  render() {
    const {intro} = this.state
    return (
      <div>
         <form onSubmit={e => this.handleSubmitClick(e)}>
          <label htmlFor="intro" >
            {/* 非受控组件 内部不再交有react进行管理 而是交给其内部自己进行管理 (对非受控组件的监听本质是在操作Dom) */}
            {/* 给非受控组件添加默认值时 => defualtValue/defualtSelect */}
             intro:
             <input id ="intro" type="text" defaultValue={intro}  ref = {this.introRef}/>
          </label>
          <button type='submit'>注册</button>
        </form>
      </div>
    )
  }
}

export default App