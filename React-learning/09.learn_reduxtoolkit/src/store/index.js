// 1.创建store  redux使用的是createStore RTK技术使用configureStore()函数
import {configureStore} from '@reduxjs/toolkit'

import counterReducer from './features/counter'
import homeReducer from './features/home'


const store = configureStore({
  // reducer将两个reducer合并
  reducer:{
    counter:counterReducer,
    home:homeReducer
  }
})

export default store