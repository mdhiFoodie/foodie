export default function (state = null, action) {
    if(action.type === "ORDERS_DATA"){
        return action.payload;
    }else{
        return state;
    }
}