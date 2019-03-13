export default function (state = null, action) {
    if(action.type === "MESSAGES_DATA"){
        return action.payload;
    }else{
        return state;
    }
}