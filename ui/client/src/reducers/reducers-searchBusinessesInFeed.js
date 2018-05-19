// export default function (state = null, action) {
//   console.log('this is reducer from searchbusinesses', action.payload)
//   if(action.type === "SEARCH_BUSINESSES"){
//       return action.payload;
//   }else{
//       return state;
//   }
// }

const searchBusinesses = (state = null, action) => {
  switch(action.type) {
    case "SEARCH_BUSINESSES_FULFILLED":
      state = {
        ...state,
        businesses: action.payload
      };
      break;
  }
  return state;
}

export default searchBusinesses;