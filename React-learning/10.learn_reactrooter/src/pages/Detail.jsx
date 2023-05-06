import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class Detail extends PureComponent {
  render() {
    const {router} = this.props
    // console.log(router);

    return (
      <div>
        <h2>Detail Page:</h2>
        <h2>id:{router.params.id}</h2>
      </div>
    )
  }
}

export default withRouter(Detail)