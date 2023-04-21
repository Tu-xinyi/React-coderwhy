import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context/theme-context.js'
import UserContext from './context/user-context.js'
import Polify from './polify.jsx'

export class app extends Component {
  constructor(){
    super()
    this.state={
      info:{
        name:'tutu',
        age:18
      }
    }
  }
  render() {
    const {info} = this.state
    return (
      <div>
        app
        {/* 给Home传递数据  比较简便的书写形式 */}
        {/* <Home {...info} ></Home> */}

        {/* 多层contex的嵌套 */}
        <UserContext.Provider value={{name:'kobe',age:40}}>
           {/* 将想要传递的值 放到provider中 value属性为后代提供数据 */}
        <ThemeContext.Provider value={{color:'red',size:30}}>
          {/* 将想要将数据据传递给谁包裹起来 */}
          <Home {...info}/>
        </ThemeContext.Provider>
        </UserContext.Provider>
        <Polify/>
       
      </div>
     
    )
  }
}

export default app