import { useReducer, useRef } from 'react';
import { PurchaseReducer } from '../reducers/PurchaseReducer';

const useGetPurchase= () => {
    const formReference = useRef(null);
    const [purchase,dispatch] = useReducer(PurchaseReducer,[]);
    
        const getPurchase = (e) =>{
            e.preventDefault();
    
            const formReferenceNode = formReference.current;

            let productData = {
                name: formReferenceNode.name.value,
                image: formReferenceNode.image.value,
                price: formReferenceNode.price.value,
                category: formReferenceNode.category.value,
                color: formReferenceNode.color.value,
                unities: formReferenceNode.unities.value,
                size: formReferenceNode.size.value,
                purchase: formReferenceNode.price.value * formReferenceNode.unities.value
            }
    
            const accion = {
                type:'purchase',
                payload: productData
            } 
    
            dispatch(accion);
        }
        
    return { formReference, purchase , getPurchase }
}

export { useGetPurchase }