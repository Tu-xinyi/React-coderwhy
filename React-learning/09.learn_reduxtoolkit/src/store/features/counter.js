// 1.创建counter的reducer  使用createSlice()函数     最后还是使用react-redux将react和rtk联系到一起
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  // 模块命名的名称
  name:'counter',
  // 初始化的值
  initialState:{
    counter:100
  },
  // reducers 相当于reducer函数
  reducers:{
    // 相当于一个case语句
    addNumber(state,action){
      // action有自己的类型和payload
      const payload = action.payload;
      state.counter = state.counter+payload
    },
    // 结构action
    subNumber(state,{payload}){
      state.counter = state.counter-payload
    }
  }
})
// 在reducer定义的操作 可以在counterSlice.actions中获取
export const {addNumber,subNumber} = counterSlice.actions
// 当dispatch(addNumber(num))时 传入的参数会在action的payload中显示 


// 真正导出的是 counterSlice.reducer 目的是在index中用configureStore将不同组件俺的reducer结合起来
export default counterSlice.reducer