import React, { PureComponent } from 'react'
import Hoc from './HOC/Hoc.js'
import About from './page/About.jsx'

const Home = Hoc(function(props){
  return <h2>Home==={props.name}==={props.age}==={props.love}</h2>
})
const Banner = Hoc(function(props){
  return <h2>Banner==={props.name}==={props.age}</h2>
})
const Center = Hoc(function(props){
  return <h2>Center==={props.name}==={props.age}</h2>
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home love='chengcheng'/>
        <Banner/>
        <Center/>
        <About/>
      </div>
    )
  }
}

export default App


// 高阶组件是一个接受一个组件 返回一个新组件的 ！函数！