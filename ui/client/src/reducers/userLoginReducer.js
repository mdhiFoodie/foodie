import { userLogin } from '../actions/type'; 

const initialState = {
  userInfo: {}
}

export default (state = initialState, action) => {
  if (action.type === userLogin) {
    return {
      ...state,
      userInfo: action.usersInformation
    }
  } else {
    return state; 
  }
}