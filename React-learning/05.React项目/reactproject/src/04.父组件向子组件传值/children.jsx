import React ,{Component} from 'react'
import PropTypes from 'prop-types'
class Children extends Component{
  // constructor中的props写不写都行 可以直接使用props
  // constructor(props){
  //   super(props)
  //   this.props=props
  // }
 
  // 默认值的写法二（不常用）
  static defaultProps={
    name:'lili',
    age:22
  }
  render(){
    return(
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
      </div>
    )
  }
 
}
Children.propTypes={
    name:PropTypes.string,
    age:PropTypes.number.isRequired
}
// 设置默认值（常用写法）
Children.defaultProps={
  name:'lili',
  age:22
}
export default Children