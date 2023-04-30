import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumberAction,subNumberAction } from '../store重构-模块划分/counter/actionCreaters'

export class About extends PureComponent {
  calcNUmber(num,isSub){
    if(isSub){
      this.props.addNumber(num)
    }else{
      this.props.subNumber(num)
    }
  }
  render() {
    const {counter,banners,recommends} = this.props
    return (
      <div>
        <h2>About counter:{counter}</h2>
        <div>
          <button onClick={e=>this.calcNUmber(6,true)}>+6</button>
          <button onClick={e=>this.calcNUmber(6,false)}>-6</button>
          <button onClick={e=>this.calcNUmber(10,true)}>+10</button>
        </div>
        <div className='banners'>
           <h2>轮播图数据：</h2>
          <ul>
            {
              banners.map((item,index)=>{
                return(
                  <li key={index}>{item.title}</li>
                )
              })
            }
          </ul>
        </div>
        <div className='recommends'>
           <h2>推荐数据：</h2>
          <ul>
            {
              recommends.map((item,index)=>{
                return(
                  <li key={index}>{item.title}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state){
//   return {
//     counter:state.counter
//   }
// }

// function mapDispatchToProps (dispatch){
//   return{
//     addNumber(num){
//       dispatch(addNumberAction(num))
//     },
//     subNumber(num){
//       dispatch(subNumberAction(num))
//     }
//   }
// }

const mapStateToProps = (state)=>({
    counter:state.counter.counter,
    banners:state.home.banners,
    recommends:state.home.recommends
})

const mapDispatchToProps= (dispatch)=>({
  addNumber:function(num){
    dispatch(addNumberAction(num))
  },
  subNumber:function(num){
    dispatch(subNumberAction(num))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(About)



// 通过高阶函数 完成组件的构成  
// 1.安装高阶组件库 npm i react-redux
// 2.给整个应用程序提供store  在index.js中import{Provider} 
// 3.在index.js中引入 store 通过value传递给子组件
// 4.在组件中引入connect connect返回值是一个高阶组件(本质是函数)