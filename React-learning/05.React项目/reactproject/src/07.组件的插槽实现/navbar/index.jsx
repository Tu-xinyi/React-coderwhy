import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './navbar.css'

export class NavBar extends Component {
  render() {
    // 左中右都不确定放什么的时候 使用插槽
    return (
      <div className='navbar'>
        <div className='left'>{this.props.children[0]}</div>
        <div className='center'>{this.props.children[1]}</div>
        <div className='right'>{this.props.children[2]}</div>
      </div>
    )
  }
}

// 限制只能传入一个元素/多个元素
NavBar.propTypes={
    // children:PropTypes.element
    children:PropTypes.array
}

export default NavBar