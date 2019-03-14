const loadingStatus = (state = {}, action) => {
  console.log('this is my reducer loading', action)
  switch(action.type) {
    case "SEARCH_LOADING_FULFILLED":
      state = {
        ...state,
        loading: action.payload,
        type: action.type
      };
      //have a switch case here for 'SEARCH_BUSINESSES_PENDING'
      break;
  }
  return state;
}

export default loadingStatus;