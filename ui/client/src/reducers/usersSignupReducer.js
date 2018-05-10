import { signupData } from '../actions/type'; 

const initialState = {
  data: {}
}

export default function(state = initialState, action) {
  console.log('REDUCER')
  if (action.type === signupData) {
    return {
      //grabs all the state object and changes the userData to the new payload 
      ...state, 
      data: action.usersInformation
    }
  } else {
    return state; 
  }
}