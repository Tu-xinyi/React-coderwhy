import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
// 1.安装react-router-dom --react-router里面有很多 react-native的内容 针对于web开发 我们下载react-router-dom就可以了
// react-router为我们提供了两个主要的组件 BrowserRouter{history模式} HashRouter{hash模式}  将App做一个包裹

// 2.引入其中一种模式的组件
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3.使用HasRouter组件将其包裹 */}
    <HashRouter>    
      <App />
    </HashRouter>
  </React.StrictMode>
);

