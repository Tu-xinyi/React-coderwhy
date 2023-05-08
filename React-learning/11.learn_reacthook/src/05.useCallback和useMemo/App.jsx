import React, { memo, useCallback, useState } from 'react'

const App = memo(() => {
  const [count,setCount ]= useState(0)

  // 2.优化出现的问题 ： count发生变化时 函数组件会重新渲染 increate函数会被重新定义 === >>> 希望能够 只一次定义
  // const increate = e=>{
  //   setCount(count+1)
  // }

  // 3.优化只是用useCallback无意义 
  // useCallback: 同一个函数多次执行时 ，返回同一个函数  也就是说increate总是同一个函数
  // 存在的问题：传入参数function还是被多次定义 只用useCallback进行优化  ===>>>> 无意义
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const increate = useCallback(function(){
    setCount(count+1)
  },[count])
  return ( 
    <div>
      <h2>计数 : { count }</h2>
      {/* 1.传统方式 */}
      <button onClick={e=>setCount(count+1)}>count+1</button>
      {/* 2.函数优化 */}
      <button onClick={increate}>count+1</button>
    </div>
  )
})

export default App