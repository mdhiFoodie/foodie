export default function (state = null, action) {
    if(action.type === "REVIEWS_DATA"){
        return action.payload;
    }else{
        return state;
    }
}