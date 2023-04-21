import ThemeContext  from "./context/theme-context"

function HomeBanner(){
  // 函数式组件使用context共享数据
  return (
    <div>
      <div>HomeBanner</div>
      <ThemeContext.Consumer>
        {
          value=>{
            return <div>{value.color}</div>
          }
        }
      </ThemeContext.Consumer>
    </div>
  )
  
}

export default HomeBanner