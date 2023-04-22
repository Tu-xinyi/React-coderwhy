// 1.将actions抽出单独文件 将action生成过程放到函数中
// 2.将type名抽出到单独文件
// 3.将固定数据的reducer抽出文件

const store = require('./store/index-优化')
const {changeCounterAction,changeNameAction} =require('./store/actionCreators.js')


store.subscribe(()=>{
  console.log('订阅数据的变化：',store.getState());
})


store.dispatch(changeNameAction('lili'))
store.dispatch(changeCounterAction(10))


