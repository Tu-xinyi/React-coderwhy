import React, { PureComponent } from 'react'

import {connect} from 'react-redux'

import {subNumber,addNumber} from '../store/features/counter'



export class Profile extends PureComponent {
  addNumber(num){
    this.props.addNumber(num)
  }
  subNumber(num){
    this.props.subNumber(num)
  }
  render() {
    const {counter,banners,recommends} = this.props
    return (
      <div>
        <h2>Profile counter:{counter}
        </h2>
        <div>
          <button onClick={e=>this.addNumber(5)}>+5</button>
          <button onClick={e=>this.subNumber(5)}>-5</button>
        </div>
        <div className='banner'>
          <h2>轮播图展示：</h2>
          <ul>
            {
              banners.map((item,index)=>{
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
        <div className='recommend'>
          <h2>推荐数据展示：</h2>
          <ul>
            {
              recommends.map((item,index)=>{
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  counter:state.counter.counter,
  banners:state.home.banners,
  recommends:state.home.recommends,
})

const mapDispatchToProps = (dispatch)=>({
  addNumber(num){
    dispatch(addNumber(num))
  },
  subNumber(num){
    dispatch(subNumber(num))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile)