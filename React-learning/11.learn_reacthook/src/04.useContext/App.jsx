import React, { memo,useContext } from 'react'
import {UserContext,ThemeContext} from './context/index'

const App = memo(() => {
  const User = useContext(UserContext)
  const Theme = useContext(ThemeContext)
  console.log(User.name);
  return (
    <div>
        <h2>{User.name}---{User.age}</h2>
        <h2>{Theme.name}---{Theme.age}</h2>
    </div>
    )
})

export default App