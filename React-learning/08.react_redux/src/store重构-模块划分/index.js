import {createStore,applyMiddleware,compose,combineReducers} from 'redux'
// applyMiddleware使用中间件 能够dispatch一个函数 compose devtool的默认值 combineReducers合并reducer
// import reducer from './reducer'
// 正常情况下 store.dispatch(object)
// 要想派发函数 store.dispatch(function)  =>redux-thunk 引入midddleware
import thunk from 'redux-thunk'
import homeReducer from './home/index'
import countReducer from './counter/index'

// 将reducer合并
const  reducer = combineReducers({
  counter: countReducer,
  home:homeReducer
})
// 打开redux-devtool工具  开发环境打开 用于调试数据 生产环境要关闭 避免数据泄露
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))


export default store