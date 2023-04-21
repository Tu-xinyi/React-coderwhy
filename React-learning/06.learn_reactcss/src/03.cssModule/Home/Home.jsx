import React, { PureComponent } from 'react'
import homeStyle from './Home.module.css'

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <div className={homeStyle.title}>Home</div>
      </div>
    )
  }
}

export default Home