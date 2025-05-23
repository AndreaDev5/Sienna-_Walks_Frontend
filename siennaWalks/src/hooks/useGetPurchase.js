import { useReducer, useRef, useState } from 'react';

const useGetPurchase= () => {

    /*funciones para quitar y poner el modal del carrito de compras 🛒🖤🤍*/    
    const [modal,setModal] = useState('modal-closed');

     /*funcion para cambiar el modal */
    const onChangeModal = () =>{
        modal==='modal-closed'?setModal('modal'):setModal('modal-closed');
    }
    
     /*funciones para cerrar el carrito de compras 🛒 y abrir el cuadro de compra💰 */
        //Eliminar el component de de tienda
    const [shoppingCartComponent, setShoppingCartComponent] = useState('shopping-cart-component');
    
    const onChangeCartComponent = () =>{
        shoppingCartComponent==='shopping-cart-component'?setShoppingCartComponent('shopping-cart-closed'):setShoppingCartComponent('shopping-cart-component');
    }

    /*boton para cerrar la interfaz de la compra 🛒🖤🤍*/
    const [shoppingPurchase,setShoppingPurchase] = useState('shopping-purchase-closed');

    const onChangeShoppingPurchase = (e) =>{
        shoppingPurchase==='shopping-purchase-closed'?setShoppingPurchase('shopping-purchase'):setShoppingPurchase('shopping-purchase-closed');
    }

    return { modal, setModal, onChangeModal, shoppingCartComponent,onChangeCartComponent , onChangeCartComponent,shoppingPurchase, onChangeShoppingPurchase }
}

export { useGetPurchase }