const store = require('./store/index.js')

console.log(store.getState());

// 修改store中的数据：必须通过action
const nameAction = { type:'change_name',name:'Kobe' }
store.dispatch(nameAction)
console.log(store.getState());

const countAction = {type:'add_number',counter :10}
store.dispatch(countAction)
console.log(store.getState());


