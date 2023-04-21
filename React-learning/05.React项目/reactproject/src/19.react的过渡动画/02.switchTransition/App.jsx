import React, { PureComponent } from 'react'
import { SwitchTransition,CSSTransition } from 'react-transition-group'
import './App.css'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      isLogin:true
    }
  }
  render() {
    const {isLogin} = this.state
    return (
      <div>
        <button onClick={e=>this.setState({isLogin:!isLogin})}>
            {isLogin ?'退出':'登录'}
          </button>
        <SwitchTransition mode='out-in'>
        <CSSTransition
        key={isLogin?'exit':'login'}
        classNames='login'
        timeout={2000}
        >
          <div>
          <h2>HHHHHH</h2>
          </div>
        </CSSTransition>
          
      </SwitchTransition>
      </div>
      
    
    )
  }
}

export default App