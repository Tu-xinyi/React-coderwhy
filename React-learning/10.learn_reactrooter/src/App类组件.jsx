import React, { PureComponent } from 'react'
// NavLink 和 Link 的区别: 在点击按钮时 NavLink会自动添加一个class 方便为标签添加样式 Link则没有
// Navigate  用于重定向
// useNavigate 手动实现路由跳转 但是只适用于函数组件 
import { Route, Routes,NavLink, Navigate} from 'react-router-dom'
import  Home from './pages/Home'
import About from './pages/About'
// import './style.css'
import Login from './pages/Login'
import NotFound  from './pages/NotFound'
import HomeRecommends from './pages/HomeRecommends'
import HomeRanking from './pages/HomeRanking'

// 1.映射关系通常在App中进行配置
export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        {/* 2.Link 设置路由跳转链接 */}
        {/* <Link to='/home'>Home页面</Link>
        <Link to='/about'>About页面</Link> */}
        {/* 2.NavLink的使用 */}
        {/* 3.如果想直接给navLink添加一些样式 要使用函数返回对象的形式 */}
        <div className='nav'>
          <NavLink to='/home' style={({isActive})=>({color: isActive ? 'red':'pink'})}>首页</NavLink>
          <NavLink to='/about' style={({isActive})=>({color:isActive?'red':'purple'})}>关于</NavLink>
          <NavLink to='/login'>登录</NavLink>
        </div>

        <hr />

        <div className='content'></div>
        {/* 配置映射关系 path => component */}
        <Routes>
          {/* path：路径  element：组件 */}
          <Route path='/' element={<Navigate to='/login'></Navigate>}></Route>
          <Route path='/home' element={<Home/>}>
            <Route path='/home' element={<Navigate to='/home/recommend'></Navigate>}></Route>
            <Route path='/home/recommend' element={<HomeRecommends/>}></Route>
            <Route path='/home/ranking' element={<HomeRanking/>}></Route>
          </Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>

        <hr />

        <div className='footer'>Footer</div>
      </div>
    )
  }
}

export default App