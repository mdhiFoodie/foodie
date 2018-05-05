export default function (state = null, action) {
    if(action.type === "FRIENDS_DATA"){
        return action.payload;
    }else{
        return state;
    }
}