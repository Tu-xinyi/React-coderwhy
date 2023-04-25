import React, { PureComponent } from 'react'
import Home from './page/Home'
import Profile from './page/Profile'
import './style.css'
import {connect} from 'react-redux'

export class App extends PureComponent {
  render() {
    const {counter} = this.props
    return (
      <div>
        <h2>App counter:{counter}</h2>
        <div className='pages'> 
        <div><Home/></div>
        <div><Profile/></div>    
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  counter:state.counter.counter
})

export default connect(mapStateToProps)(App)
