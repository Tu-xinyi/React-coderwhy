import React, { PureComponent } from 'react'
import { Link, Outlet} from 'react-router-dom'
import { withRouter } from '../hoc'


export class Home extends PureComponent {
  // 想在类组件中使用useNavigate => 高阶组件做封装
  navigateTo(path) {
    const {navigate} = this.props.router
    navigate(path)
  };
  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <div className='home-nav'>
          <Link to='/home/recommend'>推荐</Link>
          <Link to='/home/ranking'>排行榜</Link>
          <button onClick={e=>this.navigateTo('/home/songmenu')}>歌单</button>
        </div>
        {/* 在此可以配置子路由 但是路由的配置会过于分散 => 全部写App中 */}
        {/* 占位窗口 */}
        <Outlet/>
      </div>
    )
  }
}


export default withRouter(Home)