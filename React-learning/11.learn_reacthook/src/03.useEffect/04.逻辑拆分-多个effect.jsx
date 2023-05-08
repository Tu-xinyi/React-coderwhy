import React, { memo, useEffect,useState } from 'react'

const App = memo(() => {
  const [counter,setCounter] = useState(20)
  // 一个模块 做一个模块的事情 进行逻辑拆分
  useEffect(()=>{
    console.log('documnent');
  })
    useEffect(()=>{
      console.log('evebtBus');
    })

  useEffect(()=>{
    console.log('监听数据');
    return ()=>{
      console.log('取消监听');
    }
  })
  return (
   <div>
     <div>useEffect取消监听</div>
     <button onClick={e=>setCounter(counter+1)}>+1</button>   </div>
  )
})

export default App