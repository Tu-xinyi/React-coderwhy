import * as actionTypes from './constant'
import axios from 'axios'

export const addNumberAction = (num)=>({
  type:actionTypes.ADD_NUMBER,
  num
})
export const subNumberAction = (num)=>({
  type:actionTypes.SUB_NUMBER,
  num
})
export const changeBannersAction = (banners)=>({
  type:actionTypes.CHANGE_BANNERS,
  banners
})
export const changeRecommendsAction = (recommends)=>({
  type:actionTypes.CHANGE_RECOMMENDS,
  recommends
})
export const fetchHomeMutidateAction = ()=>{
  // 1.一个普通的action 返回的应该是个对象
  // 问题：对象中是不能直接拿到异步请求返回的数据的 （dispatch是同步的）
  // return {}
  function foo(dispatch,getStore){
    // 可以执行异步操作 axios发送请求 
    // 并且函数会被自动执行
    axios.get('http://123.207.32.32:8000/home/multidata').then(res=>
    {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list    
      dispatch(changeBannersAction(banners))
      dispatch(changeRecommendsAction(recommends))
    })

  }
  // 返回一个函数 原本redux是不支持的 => redux-thunk
  return foo
}