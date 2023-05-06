import React  from 'react'
import { Route, Routes,Link,NavLink, Navigate, useNavigate} from 'react-router-dom'
import  Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound  from './pages/NotFound'
import HomeRecommends from './pages/HomeRecommends'
import HomeRanking from './pages/HomeRanking'
import Categroy from './pages/Categroy'
import Order from './pages/order'
import HomeSongMenu from './pages/HomeSongMenu'
import Detail from './pages/Detail'
import User from './pages/User'

export function App () {
  // 只能放在顶层 不能进行嵌套
    const navgiate = useNavigate()
    function  navgiateTo(path){
        return navgiate(path)
    }
    return (
      <div className='app'>
       
        <div className='nav'>
          <NavLink to='/home' style={({isActive})=>({color: isActive ? 'red':'pink'})}>首页</NavLink>
          <NavLink to='/about' style={({isActive})=>({color:isActive?'red':'purple'})}>关于</NavLink>
          <NavLink to='/login'>登录</NavLink>
          <button onClick={e=>navgiateTo('/category')}>分类</button>
          <button onClick={e=>navgiateTo('/order')}>订单</button>
          {/* 路径携带信息的第二种方式 */}
          <Link to='/user?name=tutu&age=18'>用户</Link>
        </div>

        <hr />

        <div className='content'></div>
        <Routes>
          <Route path='/' element={<Navigate to='/login'></Navigate>}></Route>
          <Route path='/home' element={<Home/>}>
            <Route path='/home' element={<Navigate to='/home/recommend'></Navigate>}></Route>
            <Route path='/home/recommend' element={<HomeRecommends/>}></Route>
            <Route path='/home/ranking' element={<HomeRanking/>}></Route>
            <Route path='/home/songMenu' element={<HomeSongMenu/>}></Route>
          </Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/category' element={<Categroy/>}></Route>
          <Route path='/order' element={<Order/>}></Route>
          {/* 路径携带信息的第一中方式：动态路由传递数据 */}
          <Route path='detail/:id' element={<Detail/>}></Route>
          <Route path='/user' element={<User/>}/>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>

        <hr />

        <div className='footer'>Footer</div>
      </div>
    )
}

export default App