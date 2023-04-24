import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
// 引入的store会被使用在封装的高阶组件里
import store from './store/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log('store',store.state)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);