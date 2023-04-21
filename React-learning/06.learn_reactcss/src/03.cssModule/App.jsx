import React, { PureComponent } from 'react'
import Home from './Home/Home'

import appStyle from './App.module.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={appStyle.title}>Hello!world!</h2>
        <span className={appStyle.text}>你好！李银河！</span>
        <Home/>
      </div>
    )
  }
}

export default App