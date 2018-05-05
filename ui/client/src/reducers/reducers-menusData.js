export default function (state = null, action) {
    if(action.type === "MENUS_DATA"){
        return action.payload;
    }else{
        return state;
    }
}