import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      fruit:'apple',
      // 多选时value必须为数组
      fruit1:['apple'],
      fruits:[
        {value:'orange',text:'橘子'},
        {value:'apple',text:'苹果'},
        {value:'banana',text:'香蕉'},
      ]
    }
  }
  handleSubmitClick(e){

  }

  changeSelect(e){
    console.log(e.target.value);
    this.setState({fruit:e.target.value})
  }

  changeSelects(e){
    console.log(e);
    // this.setState({fruit1:e.target.value})
  }

  render() {
    const {fruit,fruit1} = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
      
      {/* select组件单选 */}
      <div>
        <select value={fruit} onChange={e=>this.changeSelect(e)}>
          {/* {
            fruits.map((item)=>(
                <option value="item.value" key={item.value}>{item.text}</option>
            ))
          } */}
          <option value="orange">橘子</option>
          <option value="apple">苹果</option>
          <option value="banana">香蕉</option>
        </select>
      </div>
      <br /><br />
      
      {/* select组件 multiple 多选 */}
        <select value={fruit1} onChange={e=>this.changeSelects(e)} multiple>
          <option value="orange">橘子</option>
          <option value="apple">苹果</option>
          <option value="banana">香蕉</option>
          <option value="lemon">柠檬</option>
        </select>
    
        </form>
      </div>
    )
  }
}

export default App