 import React,{Component} from 'react'
 import Children from './Children'

export default class App extends Component{
   constructor(){
    super()
    this.state={
      message:'hello!',
      counter:100,
    }
    }
    add(count){
      this.setState({
        counter : this.state.counter+count
      })
    }
    render(){
      const message = this.state.message
      const counter = this.state.counter
      return(
        <div>
        <div>{message}</div>
        <div>{counter}</div>
        <Children addCount={(count)=>this.add(count)}/>
        </div>
      )
      }
}