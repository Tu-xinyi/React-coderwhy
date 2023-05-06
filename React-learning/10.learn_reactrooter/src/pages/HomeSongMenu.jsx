import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class HomeSongMenu extends PureComponent {
  constructor(){
    super()
    this.state={
      menu:[
        {id:111,name:'摇滚乐'},
        {id:112,name:'古典乐'},
        {id:113,name:'流行乐'}
      ]
    }
  }
  navigateToDetail(id){
    // console.log(id);
    const {navigate} = this.props.router
    navigate('/detail/'+id)
  }
  render() {
    const {menu} = this.state
    return (
      <div>
        <h2>HomeSongMenu Page 歌单页面</h2>
        <div>
          <ul>
            {
              menu.map((item)=>{
                return <li key={item.id} onClick={e=>this.navigateToDetail(item.id)}>{item.name}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(HomeSongMenu)