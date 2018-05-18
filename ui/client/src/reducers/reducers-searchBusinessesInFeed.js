// export default function (state = null, action) {
//   console.log('this is reducer from searchbusinesses', action.payload)
//   if(action.type === "SEARCH_BUSINESSES"){
//       return action.payload;
//   }else{
//       return state;
//   }
// }

const loadingStatus = (state = {}, action) => {
  console.log('this is my reducer loading', action)
  switch(action.type) {
    case "SEARCH_BUSINESSES_FULFILLED":
      state = {
        ...state,
        loading: action.payload,
        type: action.type
      };
      break;
  }
  return state;
}

export default searchBusinesses;