import React, { PureComponent } from 'react'
import Home from './page/Home'
import Profile from './page/Profile'
import './style.css'

// 想在app中订阅store
import store from './store/index'
import { About } from './page/About'

export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      // 初始化的时候获取store里的
      counter:store.getState().counter
    }
  }
  componentDidMount(){
    store.subscribe(()=>{
      const state = store.getState()
      this.setState({counter:state.counter})
    })
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>App counter: {counter}</h2>
        <div className='pages'>
          <Home />
          <Profile/>
          <About/>
        </div>
      </div>
    )
  }
}

export default App