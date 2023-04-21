import { Component } from "react"

class helloWorld extends Component{
  // 1.初始化state时 执行constructor函数
  constructor(){
    super()
    this.state={
      message:'hello World!'
    }
    console.log('constructor');
  }
  changeText(){
    this.setState({message:'你好，李银河！'})
  }
  // 2.执行render函数
  render(){
    console.log('render');
    const {message} = this.state;
    return (
      <div>
         <div>{message}</div>
         <button onClick={e=>this.changeText()}>更新message数据</button>
      </div>
     
      
    )
  }
  // 3.组件被挂在后执行componentDidMount
  componentDidMount(){
    console.log('组件挂在完成后执行componentDidMount()函数');
  }
  // 4.组件更新完成执行componentDidUpdate  当发生数据更新时 会重新调用一次render函数
  componentDidUpdate(prevProps,prevState,snapShot){
    console.log('组件更新时 执行componentDidUpdate()函数',prevProps,prevState,snapShot);
  }
  // 5.组件在Dom中被移除掉
  componentWillUnmount(){
    console.log('组件被移除掉了 执行componentWillUnmount()函数');
  }

  // 不常用的生命周期补充
  // 询问组件更新是否要重新执行render函数 return false 则无需重新执行
  shouldComponentUpdate(){
    console.log('组件是否重新渲染 执行shouldComponentUpdate');
    return true;
  }
  // 再执行componentUpdate之前 先执行getSnapshotBeforeUpdate()函数
  getSnapshotBeforeUpdate(){
    console.log('组件重新渲染前执行 getSnapshotBeforeUpdate  可在其中存入数据snapShot');

    // 返回一个数据 在componentWillUpdate中可以拿到
    return {
      scrollposition:1000
  }
  }
}
export default helloWorld