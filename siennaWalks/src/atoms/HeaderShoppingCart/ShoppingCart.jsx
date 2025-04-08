import React, { useContext } from 'react';
import './ShoppingCart.css';
import shoppingCarIcon from '../../assets/logos/ph_shopping-cart-dark.svg';
import { ShoppgingCartContext } from '../../context/StoreContext';


export default function ShoppingCart({shoppingCartContainer,shoppingCartMarker,shoppingCartEvent}) {
  const { purchase } = useContext(ShoppgingCartContext);

  
  return (
    <figure className={shoppingCartContainer} onClick={shoppingCartEvent}>  
        <p className={shoppingCartMarker}>{purchase.length}</p>
        <img src={shoppingCarIcon}/>
    </figure>
  )
}
