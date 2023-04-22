const {CHANGE_NAME,ADD_NUMBER} = require('./constants')

const changeNameAction = (name)=>({
  type:CHANGE_NAME,
  name
})

const changeCounterAction = (counter)=>({
  type:ADD_NUMBER,
  counter
})

module.exports={
  changeNameAction,
  changeCounterAction
}