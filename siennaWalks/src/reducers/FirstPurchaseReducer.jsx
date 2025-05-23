export function FirstPurchaseReducer(state,action){
    switch (action.type) {
        case 'substract-product':
            return {
             ...state,
             unities: state.unities - 1,
            }    
        case 'add-product':
            return {
             ...state,
             unities: state.unities + 1,
            }
        case 'change-size':
            return{
            ...state,
            size: action.NextSize     
        }

        case 'get-purchase':
            return {
            ...state,
            name: action.NextName,
            urlImage: action.NextUrlImage,
            price: action.NextPrice,
            category: action.NextCategory,
            color: action.NextColor,
            id: action.NextId,
            total: state.price * state.unities,
        }
        
        case 'add-purchase':
            return{
                ...state,
                purchase: [...state.purchase,{
                name: state.name,
                urlImage: state.urlImage, 
                price: state.price,
                category: state.category,
                color: state.color,
                id: state.id,
                unities: state.unities,
                size: state.size,
                total: state.price * state.unities,
            }]
            }
    }
}