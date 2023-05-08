import React, { memo, useEffect,useState } from 'react'

const App = memo(() => {
  const [counter,setCounter] = useState(20)

  useEffect(()=>{
    console.log('监听数据');
    // return 返回一个回调函数 执行清楚函数 如取消监听等
    // 当下次数据更新时 先取消加监听 再监听数据
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