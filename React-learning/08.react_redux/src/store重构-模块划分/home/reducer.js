import * as actionTypes from './contants.js'

const initialState = {
  banners:[],
  recommends:[]
}

function reducer(state = initialState,action){
  switch(action.type){
    case actionTypes.CHANGE_BANNERS:
      return {...state,banners:action.banners}
    case actionTypes.CHANGE_RECOMMENDS:
      return {...state,recommends:action.recommends}
    default:
      return state
  }
}
export default reducer