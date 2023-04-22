// 我们当前是在node环境下 使用commonjs 用require引入 不用import
const { createStore} =require ('redux')

// 初始化的数据
const initialState={
  name:'tutu',
  counter:100
}

// 创建reducer函数:纯函数  可以接受两个参数 
// 参数一：store中目前保存的state  
// 参数二： action
// 返回值：作为store之后存储的state

function reducer(state = initialState ,action){
  // console.log("reducer中的 state:",state,"action:",action);
  // 一共执行了两次 第一次是在创建的时候
  // reducer中的 state: undefined action: { type: '@@redux/INIT6.w.p.j.i.p' }
  // 第二次是在执行action的时候 调用dispatch
  // reducer中的 state: { name: 'tutu', counter: 100 } action: { type: 'change_name', name: 'Kobe' }

  // 有数据更新 返回一个新的state
  if(action.type==='change_name'){ 
    // state.name = *** 改变了原state  不是纯函数了
    return {...state , name:action.name}
  }else if(action.type === 'add_number'){
    return  {...state ,counter:state.counter+action.counter}
  }
  // 没有数据更新 返回之前的state
  return state
  // 但是第一次返回的state是undefined => state = initialState
}

// 创建的store createStore函数需要传入一个reducer
const store =createStore(reducer)

// 到处store
module.exports = store