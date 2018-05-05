export default function (state = null, action) {
    if(action.type === "BUSINESSES_DATA"){
        return action.payload;
    }else{
        return state;
    }
}