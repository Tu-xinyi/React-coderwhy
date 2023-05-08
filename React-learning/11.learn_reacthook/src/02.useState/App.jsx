import React, {memo} from 'react'
import Func from './Func.js'
import Classs from './Classs.jsx'
// import Func from './func'

const App = memo(()=>{
    return (
     <div>
       <h3>class counter:</h3>
       <Classs/>
       <hr />
       <h3>func counter:</h3>
       <Func/>
     </div>
    )
})
  


export default App