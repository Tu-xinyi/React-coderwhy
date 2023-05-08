import React, { memo, useEffect,useState } from 'react'

const App = memo(() => {
  const [counter,setCounter] = useState(20)
  // 当counter改变时 才执行回调函数
  useEffect(()=>{
    console.log('documnent');
  },[counter])

  // 相当于不执行
  useEffect(()=>{
    console.log('evebtBus');
  },[])

  useEffect(()=>{
    console.log('监听数据');

    // 当组件被卸载时 才执行return
    return ()=>{
      console.log('取消监听');
    }
  },[])
  return (
   <div>
     <div>{counter}</div>
     <button onClick={e=>setCounter(counter+1)}>+1</button>   </div>
  )
})

export default App