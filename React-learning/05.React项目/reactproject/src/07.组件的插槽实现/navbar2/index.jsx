import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 全局样式 
// import '../navbar/navbar.css'

export class NavBar extends Component {
  render() {
    // 左中右都不确定放什么的时候 使用插槽
    const {leftslot,centerslot,rightslot} = this.props
    return (
      <div className='navbar'>
        <div className='left'>{leftslot}</div>
        <div className='center'>{centerslot}</div>
        <div className='right'>{rightslot}</div>
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