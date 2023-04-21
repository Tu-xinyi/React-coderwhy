import ThemeContext from "../context/theme-context";

function withTheme(OriginComponent){
  return (
    (props)=>{
      return(
        <ThemeContext.Consumer>
          {
            value=>{
              return <OriginComponent {...props}{...value}/>
            }
          }
        </ThemeContext.Consumer>
      )
    }
  )
}

export default withTheme