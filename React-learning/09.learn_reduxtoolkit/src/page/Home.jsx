import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {addNumber,subNumber} from '../store/features/counter'
// import axios from 'axios'

// import store from '../store'
import {fetchHomeMultidataAction} from '../store/features/home'

export class Home extends PureComponent {
  addNumber(num){
    this.props.addNumber(num)
  }
  subNumber(num){
    this.props.subNumber(num)
  }
  componentDidMount(){
    // axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
    //   const banners= res.data.data.banner.list;
    //   const recommends = res.data.data.recommend.list;
    //   store.dispatch(changeBanners(banners))
    //   store.dispatch(changeRecommends(recommends))
    // })
    this.props.fetchHomeMultidata()
  }
  render() {
    const {counter} = this.props
    return (
      <div>
        <h2>Home counter:{counter}</h2>
        <div>
          <button onClick={e=>this.subNumber(1)}>-1</button>
          <button onClick={e=>this.addNumber(1)}>+1</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>({
  counter:state.counter.counter
})

const mapDispatchToProps = (dispatch)=>({
  addNumber(num){
    dispatch(addNumber(num))
  },
  subNumber(num){
    dispatch(subNumber(num))
  },
  fetchHomeMultidata(){
    dispatch(fetchHomeMultidataAction({name:'tutu'}))
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)