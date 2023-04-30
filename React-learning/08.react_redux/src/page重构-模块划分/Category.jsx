// 想在该页面请求数据 并存入store中 展示在About page页面
// 1.发送网络请求 npm i axios

import React, { PureComponent } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {changeBannersAction,changeRecommendsAction} from '../store重构-模块划分/home/actionCreaters'

export class Category extends PureComponent {
  // 在接口获取数据
  componentDidMount(){
    axios.get('http://123.207.32.32:8000/home/multidata').then(res=>
    {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list    
      this.props.changeBanners(banners)
      this.props.changeRecommends(recommends)
    })
  }
  render() {
    return (
      <div>
        <h2>Category</h2>
      </div>
    )
  }
}

const mapDispatchToProps =(dispatch)=>({
  changeBanners(banners){
      dispatch(changeBannersAction(banners))
  },
  changeRecommends(recommends){
    dispatch(changeRecommendsAction(recommends))
  }
})

export default connect(null,mapDispatchToProps)(Category)