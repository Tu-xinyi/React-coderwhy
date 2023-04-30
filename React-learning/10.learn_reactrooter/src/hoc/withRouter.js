import { useNavigate ,useParams} from "react-router-dom"

// 高阶组件 
export default function withRouter(WapperComponent){
  return function(props){

    const navigate = useNavigate()
    // useParams 获取携带的信息
    const params = useParams()
    const router = {navigate ,params}
    // 对组件进行增强 把useNavigate传到组件中
    return <WapperComponent {...props} router={router}/>
  }
}