import { signupData } from '../actions/type'; 

const initialState = {
  userInfo: {}
}

export default function(state = {}, action) {
  console.log('REDUCER')
  if (action.type === signupData) {
    console.log('ay action', action.usersInformation)
    return Object.assign({}, { usersInformation: action.usersInformation })
  } else {
    return state; 
  }
}
