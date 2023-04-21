function LoginAuth(OriginComponent){
  return (props)=>{
    const token = localStorage.getItem('token')
    if(token){
      return <OriginComponent {...props}></OriginComponent>
    }else{
      return <h2>请先登录！</h2>
    }
  }
}
export default LoginAuth