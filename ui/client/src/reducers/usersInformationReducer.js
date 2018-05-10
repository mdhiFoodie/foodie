import { usersInformation } from '../actions/type';

const initialState = {
  usersInfo: {}
}

export default (state = initialState, action) => {
  if (action.type === usersInformation) {
    return {
      ...state,
      usersInfo: action.info
    }
  } else {
    return initialState;
  }
}