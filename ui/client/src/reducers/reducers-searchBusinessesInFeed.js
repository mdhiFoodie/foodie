export default function (state = null, action) {
  console.log('this is actionpayload from searchbusinesses', action.payload)
  if(action.type === "SEARCH_BUSINESSES"){
      return action.payload;
  }else{
      return state;
  }
}