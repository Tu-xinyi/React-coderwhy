import React, { Component } from 'react'
import TabControl from './TabControl/index.jsx'

export class app extends Component {
  constructor(){
    super();
    this.state={
        title:['流行','新款','精选'],
        tabIndex:0
    }
  }
  tabClick(i){
    this.setState({tabIndex:i})
  }
  render() {
    const {title,tabIndex} = this.state
    return (
      <div>
        <TabControl title={title} tabClick={i=>{this.tabClick(i)}}/>
        <h1 >{title[tabIndex]}</h1>
      </div>
    )
  }
}

export default app