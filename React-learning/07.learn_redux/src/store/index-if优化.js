const { createStore} =require ('redux')

const initialState={
  name:'tutu',
  counter:100
}

function reducer(state = initialState ,action){

  switch(action.type){
    case 'change_name':
      return {...state , name:action.name}
    case "add_number" :
      return  {...state ,counter:state.counter+action.counter}
    default:
      return state
  }

}

const store =createStore(reducer)

module.exports = store