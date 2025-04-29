import React, { useContext, useEffect , useRef} from 'react';
import './Modal.css';
import { ShoppgingCartContext } from '../../context/StoreContext';
import ShoppingCartComponent from '../../components/ShoppingCartComponent/ShoppingCartComponent';
import ShoppingPurchase from '../../components/ShoppingPurchase/ShoppingPurchase';

const shoppingPurchase = () =>{
   
}


export default function Modal() {
  const { modal,setModal,purchase } = useContext(ShoppgingCartContext);

    if(purchase.length === 0){
      setModal('modal-closed')
    }

    return (
      <main className={modal}>
       <ShoppingCartComponent/>
       <ShoppingPurchase/>
      </main>
    )
  }

