import React  from 'react'
import {Link,NavLink,useNavigate, useRoutes} from 'react-router-dom'
import routes from './route'


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
        {useRoutes(routes)}

        <hr />

        <div className='footer'>Footer</div>
      </div>
    )
}

export default App