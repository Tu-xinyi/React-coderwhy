import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import { fetchHomeMutidateAction } from '../store重构-模块划分/home/actionCreaters'

export class Category extends PureComponent {
  // 1.调用fetchHomeMutidate
  componentDidMount(){
    this.props.fetchHomeMutidate()
  }

  render() {
    // console.log(this.props);
    const {counter} = this.props
    return (
      <div>
        <h2>Category-axios优化:{counter}</h2>

      </div>
    )
  }
}
const mapStateToProps = (state)=>({
  counter:state.counter.counter,
})

const mapDispatchToProps =(dispatch)=>({
  // 2.派发fetchHomeMutidateAction
  fetchHomeMutidate(){
    dispatch(fetchHomeMutidateAction())
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Category)