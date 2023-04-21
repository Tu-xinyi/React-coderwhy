import React, { Component } from 'react'
import './tabControl.css'

export class index extends Component {
  constructor(){
    super()
    this.state={
      currentIndex:0
    }
  }
  change(index){
    this.setState({currentIndex:index})
    this.props.tabClick(index)
  }
  render() {
    const {title,itemType} =this.props
    const {currentIndex} = this.state
    return (
      <div className='tab-control'>
        {
          title.map((item,index)=> {
            return(
              <div className={`item ${index === currentIndex? 'active':''}`} 
              key={item}
              onClick ={e=>{this.change(index)}}>
                {/* 作用于插槽 有父向子传递内容 由子决定数据*/}
                {/* span不想固定下来 使用插槽 变得灵活*/}
                {/* <span className='text'>{item}</span> */}
                {itemType(item)}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default index