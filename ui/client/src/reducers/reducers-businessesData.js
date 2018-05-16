// export default function (state = null, action) {
//     console.log('this is the data business', action)
//     if(action.type === "BUSINESSES_DATA_FULFILLED"){
//         return action.payload;
//     }else{
//         return state;
//     }
// }

const businessesData = (state = null, action) => {
    console.log('business data', action)
    switch(action.type) {
        case "BUSINESSES_DATA_FULFILLED":
        state = {
            ...state,
            businesses: action.payload
        };
        console.log('this is my reducerbsdata', action.payload)
        break;
    }
    return state;
  }
  
  export default businessesData;