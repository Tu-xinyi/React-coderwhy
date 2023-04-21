import { memo } from "react";

// function  Profile (props){
//   const {message} = props
  // 当count发生改变的时候 Profile也重新加载 因为函数组件没有生命周期 ===> 用memo对函数组件进行包裹
//   console.log('Profile render');
//   return(
//     <div>Profile---{message}</div>
//   )
// }

// 优化方法
  const Profile = memo(function(props){
      const {message} = props
  console.log('Profile render');
  return(
    <div>Profile---{message}</div>
  )
  })
export default Profile