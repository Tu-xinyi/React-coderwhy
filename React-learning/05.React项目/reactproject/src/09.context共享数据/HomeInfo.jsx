import React, { Component } from 'react'
// 1.引入ThemeContext
import ThemeContext from './context/theme-context'
import UserContext from './context/user-context.js'

export class HomeInfo extends Component {
  render() {
    // this.context属性输出context传来的值
    console.log(this.context);
    return (
      <div>
        <div>HomeInfo</div>
        {this.context.color}
        {/* Consumer可以共享多个 */}
        <UserContext.Consumer>
          {value =>{
            return <h2>{value.name}</h2>
          }}
        </UserContext.Consumer>
      </div>
      
    )
  }
}
// 设置组件的contexType类型为某一个context (当有多个Context想同时使用 但是contextType只能设置一个 所以使用consumer)
HomeInfo.contextType = ThemeContext

export default HomeInfo