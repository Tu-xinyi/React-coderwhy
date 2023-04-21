import React, { PureComponent } from 'react'
import ThemeContext from './context/theme-context'
import Product from './page/Product.jsx'

export class App extends PureComponent {
  render() {
    return (
      <div>
       <ThemeContext.Provider value={{color:'red',size:30}}>
       <Product/>
       </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
