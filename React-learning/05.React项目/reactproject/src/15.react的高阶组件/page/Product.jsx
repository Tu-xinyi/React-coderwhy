import React, { PureComponent } from 'react'
// import ThemeContext from '../context/theme-context'
import withTheme from '../HOC/with-theme.js'

// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>
//         Product:
//         <ThemeContext.Consumer>
//           {value=>{
//             return <h2>theme:{value.color}==={value.size}</h2>
//           }}
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }

// export default Product

export class Product extends PureComponent {
  render() {
    return (
      <div>
        Product:{this.props.color}===={this.props.size}
      </div>
    )
  }
}

export default withTheme(Product) 