import {createSlice} from '@reduxjs/toolkit'

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
      const payload = action.payload;
      state.counter = state.counter+payload
    },
    subNumber(state,action){
      console.log(action);
      const payload = action.payload;
      state.counter = state.counter-payload
    }
  }
})

export const {addNumber,subNumber} = counterSlice.actions
// counterSlice.reducer
export default counterSlice.reducer