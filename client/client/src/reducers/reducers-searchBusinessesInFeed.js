const searchBusinesses = (state = null, action) => {
  switch(action.type) {
    case "SEARCH_BUSINESSES_FULFILLED":
      state = {
        ...state,
        businesses: action.payload,
        type: action.type
      };
      //have a switch case here for 'SEARCH_BUSINESSES_PENDING'
        
      break;
  }
  return state;
}

export default searchBusinesses;