import React from "react"

// 1.创建一个context  (括号里的默认数据 为不在范围内的组件想使用context时提供数据)
const ThemeContext = React.createContext({color:'blue'})

export default ThemeContext