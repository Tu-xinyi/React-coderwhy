import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
// 正常情况下 store.dispatch(object)
// 要想派发函数 store.dispatch(function)  =>redux-thunk 引入midddleware
import thunk from 'redux-thunk'

// 打开redux-devtool工具  开发环境打开 用于调试数据 生产环境要关闭 避免数据泄露
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// createStore 第二个参数composeEnhancers（applyMiddleware(thunk)） 是的dispatch的参数可以是function
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))


export default store