import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      counter:10
    }
  }
  changeTitle(){
   this.setState({counter:this.state.counter+1})
  }
  componentDidMount(){
    document.title = this.state.counter
  }
  componentDidUpdate(){
    document.title = this.state.counter
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <div>{counter}</div>
        <button onClick={e => this.changeTitle()}>title+1</button>
      </div>
    )
  }
}

export default App