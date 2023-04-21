import React, { PureComponent } from 'react'
import './App.css'
import Home from './Home/Home.jsx'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='title'>Hello!world!</h2>
        <span className='text'>你好！李银河！</span>
        <Home/>
      </div>
    )
  }
}

export default App