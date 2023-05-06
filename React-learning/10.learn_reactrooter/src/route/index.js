import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import HomeRecommends from "../pages/HomeRecommends";
import HomeRanking from "../pages/HomeRanking";
import HomeSongMenu from "../pages/HomeSongMenu";
import Order from "../pages/order";
import User from "../pages/User";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
// import Categroy from "../pages/Categroy";
// import About from "../pages/About";
import NotFound from "../pages/NotFound";

// 页面懒加载 =》打包时进行分包 在index.js中 需要 suspense进行导入
import React from "react";
const About = React.lazy(()=> import ('../pages/About'))
const Categroy = React.lazy(()=>import('../pages/Categroy'))

const routes = [
  {
    path:'/',
    element:<Navigate to='/login'></Navigate>
  },
  {
    path:'/home',
    element:<Home/>,
    children:[
      {
        path:'/home',
        element:<Navigate to='/home/recommend'></Navigate>
      },
      {
        path:'/home/recommend',
        element:<HomeRecommends/>
      },
      {
        path:'/home/ranking',
        element:<HomeRanking/>
      },
      {
        path:'/home/songMenu',
        element:<HomeSongMenu/>
      }
    ]
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/category',
    element:<Categroy/>
  },
  {
    path:'/order',
    element:<Order/>
  },
  {
    path:'detail/:id',
    element:<Detail/>
  },
  {
    path:'/user',
    element:<User/>
  },
  {
    path:'*',
    element:<NotFound/>
  }
]
export default routes