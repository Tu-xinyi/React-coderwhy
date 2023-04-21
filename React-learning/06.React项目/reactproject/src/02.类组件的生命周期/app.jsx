import { Component } from "react";
import HelloWorld from './helloworld'

class App extends Component{
  constructor(){
    super()
    this.state={
      isShow: true
    }
  }
  switchShow(){
    this.setState({isShow:!this.state.isShow})
  }
  render(){
    const {isShow} = this.state;
    return(
      <div>
        
        <button onClick = {e=>this.switchShow()}>切换</button>
        {isShow && <HelloWorld/>}
      </div>
    )
  }
}
export default App