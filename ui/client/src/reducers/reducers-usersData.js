export default function (state = null, action) {
    if(action.type === "USERS_DATA"){
        return action.payload;
    }else{
        return state;
    }
}