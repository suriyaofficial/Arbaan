export const userReducer=(state=[],action)=>{
    switch(action.type){
        case "userId":
            return state=action.payload;
                default:
                    return state;
        }
}