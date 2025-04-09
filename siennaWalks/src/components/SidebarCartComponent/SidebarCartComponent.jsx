import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shoppingBigCart from '../../assets/logos/ph_shopping-cart-big.svg';
import './SidebarCartComponent.css';
import { StoreContext, ShoppgingCartContext } from '../../context/StoreContext';
import SidebarCartTarget from '../../atoms/SidebarCartTarget/SidebarCartTarget';
import shoppingCart from '../../assets/logos/ph_shopping-cart-light.svg';
import whatsAppIcon from '../../assets/logos/black-icon-whatsapp.svg';

const SidebarCartComponent = ({sidebarCartComponent,sidebarCartTittle,sidebarCartBigIcon}) => {
const { onChangeDarkBurguer} = useContext(StoreContext);
const { purchase } = useContext(ShoppgingCartContext);



/*agrega en un array el total de la compra*/
let totals = purchase.map((item)=>{
    return item.purchase
})

let initTotal = 0;

/*usar el método reducer para sumar los totalse*/
let totalPurchase = totals.reduce((accumulator,currentValue)=> accumulator + currentValue,initTotal);


  if(purchase.length <1){
    return (
      <section className={sidebarCartComponent}>
        <h1 className={sidebarCartTittle}>Tu carrito de compras está vacío</h1>
        <img className={sidebarCartBigIcon} src={shoppingBigCart}/>
        <Link to={"/ver-productos"} className="sidebar-link-all" onClick={onChangeDarkBurguer}>Ver más</Link>
      </section>
    )
  }

  if(purchase.length >=1){
    return(
      <section className={sidebarCartComponent}>
        <div className='sidebar-cart-targets-container'>
        {purchase.map((product)=>{
          return <SidebarCartTarget
              name={product.name}
              image={product.image}
              size={product.size}
              unities={product.unities}
              purchase={product.purchase}
          />
        })} 
        </div>
        <article className='sidebar-totals'>
          <p>Total:</p>
          <p className='sidebar-totals-price'>$ {totalPurchase}</p>
        </article>
        <article className='sidebar-purchase-buttons'>
          <button className='sidebar-watch-cart'>
            <p>Ver carrito</p>
            <img src={shoppingCart}/>
          </button>
          <button className='sidebar-address-purchase'>
            <p>Comprar</p>
            <img src={whatsAppIcon}/>
          </button>
        </article>
      </section>
    )
  }
}

export default SidebarCartComponent
