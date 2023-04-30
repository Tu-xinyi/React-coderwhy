import axios from 'axios'
import * as actionTypes from './contants.js'

export const changeBannersAction = (banners)=>({
  type:actionTypes.CHANGE_BANNERS,
  banners
})
export const changeRecommendsAction = (recommends)=>({
  type:actionTypes.CHANGE_RECOMMENDS,
  recommends
})
export const fetchHomeMutidateAction = ()=>{
  function foo(dispatch,getStore){
    axios.get('http://123.207.32.32:8000/home/multidata').then(res=>
    {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list    
      dispatch(changeBannersAction(banners))
      dispatch(changeRecommendsAction(recommends))
    })

  }
  return foo
}