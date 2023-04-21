import React ,{Component} from 'react'
import Children from './children'

export default class App extends Component{
  constructor(){
    super()
    this.state={
      name:'TUTU',
      age:18
    }
  }
  render(){
    const {name,age}=this.state
    return(    
    <div>
      <Children name={name} age={age}></Children>
    </div>
    )

  }
}