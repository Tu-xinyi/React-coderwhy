import * as actionTypes from './constant'


export const addNumber = (num)=>({
  type:actionTypes.ADD_NUMBER,
  num
})
export const subNumber = (num)=>({
  type:actionTypes.SUB_NUMBER,
  num
})