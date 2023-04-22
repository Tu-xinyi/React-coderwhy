import styled from "styled-components";

/* 模板字符换的使用 */
/* 1.模板字符串的基本使用 */
/* const name ='titi',
const age=18
console.log( `你的名字&{name},年龄&{age}`) */

/* 2.模板字符串的使用  函数的调用*/
/* function foo (...args){
  console.log(args)
}
foo(name，'tutu',age，18) => ['name'，'tutu','age'，'18']
foo`name:${name},age:${age}` => [['name:',',age:'],'titi',18] */


// 将div看成一个函数 返回一个div组件
// 安装vscode-styled-components插件 能够识别css代码 智能提示

export const AppWrapper = styled.div.attrs(props=>{
  // 3.在attrs中设置默认值 
  // 当设置默认值时 footer里面的字体颜色也会变成green => ||
  return {tcolor:props.color||'green'}
})`
  border:10px solid purple; 
    
    .footer{
      border: 20px dotted pink;
      font-size: ${props=>props.size}px;
      color: ${props=>props.tcolor};
    }
  
`
// 1.子元素可以单独抽取到一个组件中
// 2.可以接受外部传入的props
// 4.看可以单独设置一个js文件 存放数据
export const SetionWapper = styled.div`
      border:5px solid red;
      height:80px;

      .title{
      border:2px solid black;
      height:30px;
        /* &:hover 当前标题被选中时 */
      &:hover{
        background-color: yellow;
      }
    }
`
