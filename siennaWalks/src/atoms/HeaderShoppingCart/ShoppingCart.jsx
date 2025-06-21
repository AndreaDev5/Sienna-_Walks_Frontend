import React, { useContext } from 'react';
import './ShoppingCart.css';
import shoppingCarIcon from '../../assets/logos/ph_shopping-cart-dark.svg';
import { ShoppgingCartContext } from '../../context/StoreContext';


export default function ShoppingCart({shoppingCartContainer,shoppingCartMarker,shoppingCartEvent}) {
  const { product } = useContext(ShoppgingCartContext);
  const totalPurchase = product.purchase;
  
  return (
    <figure className={shoppingCartContainer} onClick={shoppingCartEvent}>  
        <p className={shoppingCartMarker}>{totalPurchase.length}</p>
        <img src={shoppingCarIcon}/>
    </figure>
  )
}
