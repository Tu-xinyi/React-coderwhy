import React, { PureComponent } from 'react'
import Hoc from '../HOC/Hoc.js'

export class About extends PureComponent {
  render() {
    return (
      <div>About==={this.props.name}==={this.props.age}</div>
    )
  }
}

// export default About
export default Hoc(About)