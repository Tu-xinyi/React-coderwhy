import React, { PureComponent } from 'react'
// import Home from './page/Home'
import Home from './page重构-模块划分/Home'
// import Profile from './page/Profile'
import Profile from './page重构-模块划分/Profile'
import './style.css'

// 想在app中订阅store
// import store from './store/index'
import store from './store重构-模块划分/index'

// import About  from './page/About'
import About from './page重构-模块划分/About'
// import Category from './page/Category'
// import Category from './page/Category-axios优化'
import Category from './page重构-模块划分/Category-axios优化'

export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      // 初始化的时候获取store里的 
      // 合并reducer后 结构变了
      counter:store.getState().counter.counter
    }
  }
  componentDidMount(){
    store.subscribe(()=>{
      const state = store.getState().counter
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
          <Category/>
        </div>
      </div>
    )
  }
}

export default App