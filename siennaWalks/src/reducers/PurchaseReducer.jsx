export const PurchaseReducer = (state=[], action)=>{
    switch (action.type) {
        case "purchase":
            return [...state,action.payload]    
        default:
        return state;    
    }     
}
