import React, { PureComponent } from 'react'

// 通过高阶函数 完成组件的构成  
// 1.安装高阶组件库 npm i react-redux
// 2.给整个应用程序提供store  在index.js中import{Provider} 
// 3.在index.js中引入 store 通过value传递给子组件
// 4.在组件中引入connect connect返回值是一个高阶组件(本质是函数)

import { connect } from 'react-redux'

export class About extends PureComponent {
  render() {
    const {counter} = this.props
    return (
      <div>
        <h2>About counter:{counter}</h2>
      </div>
    )
  }
}

function mapStateToProps(state){
  // console.log('a');
  // console.log(state.counter);
  return {
    counter:state.counter
  }
}

// const mapStateToProps = (state)=>({
//     counter:state.counter
// })

// const mapStateToProps = (state)=>{
//   // console.log(state);
//   return{
//     counter:state.counter
//   }
// }
// mapStateToProps()

export default connect(mapStateToProps)(About)