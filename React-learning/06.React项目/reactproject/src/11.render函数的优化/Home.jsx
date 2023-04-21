import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  render() {
    console.log('Home render');
    const {message} = this.props
    return (
      <div>Home---{message}</div>
    )
  }
}

export default Home