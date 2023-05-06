import {useNavigate ,useParams,useSearchParams} from "react-router-dom"

// 高阶组件 
export default function withRouter(WapperComponent){
  return function(props){
    // 1.函数组件中可以使用useNavigate => 实现手动跳转路由   在this.props.router.navigate中获取
    const navigate = useNavigate()
    
    // 2.useParams 获取！路径！携带的信息  在this.props.router.params中获取
    const params = useParams()

    // 3.useLocation 获取路径参数 在this.props.router.params中获取 => 需要自己结构
    // const location = useLocation() 
    // console.log(location); {pathname: '/user', search: '?name=tutu&age=18'}

    // 4.useSearchParams 也可以获取路径参数 返回的是数组 结构后 在searchParams中调用get方法获取值
    const [searchParams] = useSearchParams()
    // console.log(searchParams.get('name'),searchParams.get('age')); => 名称是写死的 xxx => 把searchParams转成普通对象
    const query = Object.fromEntries(searchParams)

    const router = {navigate ,params,query}
    // 对组件进行增强 把useNavigate传到组件的props.router中
    // this.props.router.navigate() 跳转路径 
    // this.props.router.params() 携带的参数 
    return <WapperComponent {...props} router={router}/>
  }
}