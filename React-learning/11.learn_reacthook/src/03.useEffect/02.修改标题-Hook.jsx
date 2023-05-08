import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [counter,setCounter] = useState(20)
  //组件更新 自动执行 
  useEffect(()=>{
    document.title = counter
  })
  return (
    <div>
      <div>{counter}</div>
      {/* ？？？？{e=>setCounter(counter+1)}？？？ */}
      <button onClick={e=>setCounter(counter+1)}>+1</button>
    </div>
  )
})

export default App