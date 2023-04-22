const store = require('./store/index.js')

// 当store发生变化时 自动回调函数
const unsubscribe = store.subscribe(()=>{
  console.log('订阅数据的变化：',store.getState());
})


store.dispatch({ type:'change_name',name:'Kobe' })

// 取消订阅
unsubscribe()

store.dispatch({type:'add_number',counter :10})
// 每次dispatch完都是在手动的获取  =>实现自动订阅数据 自动刷新
// console.log(store.getState());


