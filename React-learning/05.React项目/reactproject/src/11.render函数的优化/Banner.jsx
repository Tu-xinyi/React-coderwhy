import React, { PureComponent } from 'react'

export class Banner extends PureComponent {
  constructor(props){
    super(props)
    this.state={

    }
  }
  // 同样在shouldComponentUpdate中对state和props中的值做出比较
  // shouldComponentUpdate(){
   
  // }
  render() {
    const {count} = this.props
    console.log('Banner render');
    return (
      <div>Banner---{count}</div>
    )
  }
}

export default Banner