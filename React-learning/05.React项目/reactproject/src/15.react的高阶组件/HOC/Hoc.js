import  { PureComponent } from 'react'

function Hoc(OriginComponent){
  class newComponent extends PureComponent{
    constructor(){
      super()
      this.state={
        userInfo:{
          name:'tutu',
          age:18
        }
      }
    }
    render(){
      return <OriginComponent {...this.props}{...this.state.userInfo}/>
    }
  }
  return newComponent
}

export default Hoc