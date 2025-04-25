export const PurchaseReducer = (state=[], action)=>{
    switch (action.type) {
        case "purchase":
            return [...state,action.payload]        
        case "delete": 
            return state.filter(product=> product.id!==action.payload);    
        default:
        return state;    
    }     
}
