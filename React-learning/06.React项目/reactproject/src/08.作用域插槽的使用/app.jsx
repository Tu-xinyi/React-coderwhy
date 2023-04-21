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
  getItem(item){
    if(item==='流行'){
      return <span>{item}</span>
    }else if(item==='精选'){
      return <button>{item}</button>
    }else{
      return <h2>{item}</h2>
    }
  }
  render() {
    const {title,tabIndex} = this.state
    return (
      <div>
        <TabControl title={title} 
        tabClick={i=>{this.tabClick(i)}}
        itemType={item =>this.getItem(item)}
        />
        <h1 >{title[tabIndex]}</h1>
      </div>
    )
  }
}

export default app