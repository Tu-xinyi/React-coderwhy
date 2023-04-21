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
    const {title} =this.props
    const {currentIndex} = this.state
    return (
      <div className='tab-control'>
        {
          title.map((item,index)=> {
            return(
              <div className={`item ${index === currentIndex? 'active':''}`} 
              key={item}
              onClick ={e=>{this.change(index)}}>
                <span className='text'>{item}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default index