import React, { Component } from 'react'
import HomeInfo from './HomeInfo.jsx'
import HomeBanner from './HomeBanner.jsx'

export class Home extends Component {
  render() {
    return (
      <div>
       <div>Home</div>
       <div>Name:{this.props.name}</div>
       <div>  Age:{this.props.age}</div>
        <HomeInfo></HomeInfo>
        <HomeBanner></HomeBanner>
        </div>
    )
  }
}

export default Home