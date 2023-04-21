import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state={
      userName:"",
      password:'',
      isAgree:true,
      hobbies:[
        {value:'sing',text:'唱歌',isChecked:false},
        {value:'dance',text:'跳舞',isChecked:false},
        {value:'play',text:'打篮球',isChecked:false},
      ]
    }
  }
  handleSubmitClick(e){
    e.preventDefault()
    console.log('获取所有输入的内容');
    console.log(this.state.userName,this.state.password);
    console.log(this.state.hobbies.filter(item=>item.isChecked).map(item=>item.text));
  }
 
  handlechange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  checkChange(e){
    this.setState({
      isAgree:e.target.checked
    })
  }

  checksChange(e,index){
    const hobbies = [...this.state.hobbies];    
    hobbies[index].isChecked = e.target.checked;
    this.setState({
      hobbies
    })
  }

  render() {
    const {userName,password,isAgree,hobbies} = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
        <label htmlFor="userName">
        用户：
        <input 
          type="text"
          id='userName'
          name="userName"
          value={userName}
          onChange={e=>this.handlechange(e)}
        />
        </label>
        <label htmlFor="password">
        密码：
        <input 
          type="password"
          id='password'
          name="password"
          value={password}
          onChange={e=>this.handlechange(e)}
        />
        </label>
        <button type='submit'>注册</button>
        <br></br>

      {/* checkbox单选 */}
        <label htmlFor="agree">
        同意注册
        {/* 添加checked属性后 input立马变成受控组件 需要react内部进行维护 */}
        <input 
        type="checkbox" 
        id='agree' 
        checked={isAgree}
        onChange={e=>this.checkChange(e)}/>
        </label>

      {/* checkbox多选 */}
      <div>
      您的爱好：
        {
          hobbies.map((item,index)=>{
            return(
              <label htmlFor={item.value} key={item.value}>
                <input 
                  type="checkbox" 
                  id={item.value} 
                  checked={item.isChecked} 
                  onChange={(e)=>{
                    this.checksChange(e,index)
                }}
                />
                <span>{item.text}</span>
              </label>
            )
          })
        }
      </div>
      
        </form>
      </div>
    )
  }
}

export default App