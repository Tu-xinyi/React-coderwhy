import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state={
      books:[
        {name:'你不知道的html', price:40,count:1},
        {name:'你不知道的js', price:50,count:1},
        {name:'你不知道的Vue', price:60,count:1},
        {name:'你不知道的React', price:70,count:1}
      ]
    }
  }
  increment(count,index){
    // this.setState({books[index].count:count+1})
    const array = [...this.state.books]
    array[index].count=count+1
    this.setState({books:array})
  }
  addbook(){
    const newBooks={name:'你不知道的Node',price:90,count:1}

    //  直接修改原有State 然后直接设置
    //  在PureComponent中不生效， 因为实在原内存区域添加的数据  认为数据没有差异 render函数不生效
    //  原理还是使用shouldComonentUpdate 进行浅层比较
    // this.state.books.push(newBooks)
    // this.setState({books:this.state.books})

    //正确写法：  进行浅拷贝 是两块内存 有区别 render函数生效  
    const addBooks=[...this.state.books]
    addBooks.push(newBooks)
    this.setState({books:addBooks})
  }
  render() {
    const {books} = this.state
    return (
      <div>
        图书数据列表：
        <ul>
          {
            books.map((item,index)=>{
            return(
               <li key={index} >{item.name}--{item.price}--{item.count}
               <button onClick={()=>this.increment(item.count,index)} key={index}> +1</button>
               </li>
            )
            })
          }
        </ul>
        <button onClick={e=>this.addbook()}>添加书籍</button>
      </div>
    )
  }
}

export default App