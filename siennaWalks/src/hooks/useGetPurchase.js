import { useReducer, useRef, useState } from 'react';
import { PurchaseReducer } from '../reducers/PurchaseReducer';

const useGetPurchase= () => {
    /*funciones para añadir y quitar productos del carrito de compras 🛒*/
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
                purchase: formReferenceNode.price.value * formReferenceNode.unities.value,
                id: new Date().getTime()    
            }
    
            const accion = {
                type:'purchase',
                payload: productData
            } 
    
            dispatch(accion);
        }
        
        const deletePurchase = (id) =>{
            const accion = {
                type:'delete',
                payload: id
            } 
    
            dispatch(accion);
        }
    
    /*funciones para quitar y poner el modal del carrito de compras 🛒🖤🤍*/    
    const [modal,setModal] = useState('modal-closed');

     /*funcion para cambiar el modal*/
    const onChangeModal = () =>{
        modal==='modal-closed'?setModal('modal'):setModal('modal-closed');
    }
    
    /*agrega en un array el total de la compra*/
    let totals = purchase.map((item)=>{
        return item.purchase
    })

    let initTotal = 0;

/*usar el método reduce para sumar los totalse*/
let totalPurchase = totals.reduce((accumulator,currentValue)=> accumulator + currentValue,initTotal);

    return { formReference, purchase , getPurchase, deletePurchase, modal, setModal, onChangeModal, totalPurchase }
}

export { useGetPurchase }