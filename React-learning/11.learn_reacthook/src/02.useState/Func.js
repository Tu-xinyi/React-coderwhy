import { memo, useState } from "react";
// Hook就是像useState，useEffect的函数

// hook不能在普通函数中使用 可以在自定义Hook中使用 => 命名为useXXX 会被识别为自定义Hook
function useFoo(){
   const [message] = useState('hello!')
   return message
}

function Func(props) {
  // useState(初始值) 函数返回的数组 arr[0]是初始值 arr[1]是改变值的!函数! arr[1]会替换掉arr[0] 并且会触发render 重新渲染
  // 只能在函数顶层 调用 hook
  const [counter, setCounter] = useState(0);
  // console.log(typeof(setCounter));  ===function
  const message = useFoo()
  console.log(message);
  return (
    <div>
      <div>{counter}</div>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
      <button onClick={(e) => setCounter(counter + -1)}>-1</button>
    </div>
  );
}

export default memo(Func);
