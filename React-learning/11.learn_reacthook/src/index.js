import React from "react";
import ReactDOM from "react-dom/client";
// import App from './01.不使用Hook/App';
// import App from  './02.计数器案例/App'
// import App from './03.useEffect/App.jsx'
// import App from "./04.useContext/App.jsx";
import App from './05.useCallback和useMemo/App.jsx'
import {
  UserContext,
  ThemeContext,
} from './04.useContext/context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContext.Provider value={{ name: "tutu", age: 18 }}>
    <ThemeContext.Provider value={{ name: "chengcheng", age: 20 }}>
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
);
