import React,{Component} from 'react'

export default class Children extends Component{
    addClick(count){
      this.props.addCount(count)
    }

    render(){
      return(
       <div>
        <button onClick={()=>this.addClick(1)}>+1</button>
        <button onClick={()=>this.addClick(5)}>+5</button>
        <button onClick={()=>this.addClick(10)}>+10</button>
       </div>
      )
      }
}