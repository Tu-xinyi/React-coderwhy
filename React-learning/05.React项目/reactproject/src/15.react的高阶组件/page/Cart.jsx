import React, { PureComponent } from 'react'
import LoginAuth from '../HOC/login-auth'

export class Cart extends PureComponent {
  render() {
    return (
      <h2>Cart Page</h2>
    )
  }
}

export default LoginAuth(Cart)