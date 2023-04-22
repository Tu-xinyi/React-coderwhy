import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01.css内联样式/App.jsx';
// import App from './02.css普通样式/App.jsx'
// import App from './03.cssModule/App.jsx'
// import App from './04.css_in_js写法/App.jsx'
import App from './05.classnames库/App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

