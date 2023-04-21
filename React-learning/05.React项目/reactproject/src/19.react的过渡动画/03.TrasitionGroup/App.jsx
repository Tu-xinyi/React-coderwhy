import React, { PureComponent } from 'react'
import './App.css'
// 给列表添加动画
import { TransitionGroup,CSSTransition } from 'react-transition-group'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      books:[
        {id:1,name:'js',price:10,count:1},
        {id:2,name:'node',price:10,count:1},
        {id:3,name:'react',price:10,count:1},
        {id:4,name:'html',price:10,count:1}
      ]
    }
  }
  addBook(){
    const books = [...this.state.books]
    books.push( {id:new Date().getTime(),name:'tutu',price:1,count:1})
    this.setState({books})
  }
  delBook(index){
    const books = [...this.state.books]
    books.splice(index,1)
    this.setState({books})
  }
  render() {
    const {books} = this.state
    return (
      <div>
        书籍列表：
        {/* component：TransitionGroup被渲染成什么元素 默认div*/}
        <TransitionGroup component='ul'>
          {
            books.map((item,index)=>{
              return(
                <CSSTransition key={item.id} classNames='book' timeout={1000}>
                  <li key={index}>{item.name}=={item.count}=={item.price}==
                  <button onClick ={e=>this.delBook(index)}>删除书籍</button>
                  </li>
                  
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick ={e=>this.addBook()}>添加书籍</button>
      </div>
    )
  }
}

export default App