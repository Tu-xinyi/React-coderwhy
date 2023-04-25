import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

// 创建异步action 方法一：
// export const fetchHomeMultidataAction = createAsyncThunk(
//   'fetch/homemultidata',
//   async()=>{
//     const res= await axios.get('http://123.207.32.32:8000/home/multidata')
// return res.data;
// }
// )

// 方法二：
export const fetchHomeMultidataAction = createAsyncThunk(
  'fetch/homemultidata',
  async(extraInfo,{dispatch,getState})=>{
    // 可以接受一些额外传入的数据
    // console.log(extraInfo);
    const res= await axios.get('http://123.207.32.32:8000/home/multidata')
    const banners= res.data.data.banner.list;
    const recommends = res.data.data.recommend.list;
    dispatch(changeBanners(banners))
    dispatch(changeRecommends(recommends))
  // return res.data;
}
)

const homeSlice = createSlice({
    name:'home',
    initialState:{
      banners:[],
      recommends:[]
    },
    reducers:{
      changeBanners(state,{payload}){
        state.banners = payload
      },
      changeRecommends(state,{payload}){
        state.recommends=payload
      },
    },
    // 方法一
    // extraReducers:{
    //   // 计算属性名
    //   [fetchHomeMultidataAction.pending](state,action){
    //     console.log('pending');
    //   },
    //   [fetchHomeMultidataAction.fulfilled](state,{payload}){
    //     console.log('fulfilled');
    //     state.banners= payload.data.banner.list
    //     state.recommends= payload.data.recommend.list
    //   },
    //   [fetchHomeMultidataAction.rejected](state,action){
    //     console.log('rejected');
    //   }
    // }
})

export const {changeBanners,changeRecommends} = homeSlice.actions

export default homeSlice.reducer