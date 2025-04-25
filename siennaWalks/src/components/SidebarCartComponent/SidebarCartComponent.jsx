import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shoppingBigCart from '../../assets/logos/ph_shopping-cart-big.svg';
import './SidebarCartComponent.css';
import { StoreContext, ShoppgingCartContext, HeaderContext } from '../../context/StoreContext';
import SidebarCartTarget from '../../atoms/SidebarCartTarget/SidebarCartTarget';
import shoppingCart from '../../assets/logos/ph_shopping-cart-light.svg';
import whatsAppIcon from '../../assets/logos/black-icon-whatsapp.svg';

const SidebarCartComponent = ({sidebarCartComponent,sidebarCartTittle,sidebarCartBigIcon}) => {
const { onChangeDarkBurguer,onChangeLightBurguer} = useContext(StoreContext);
const { toggleCartComponent } = useContext(HeaderContext);
const { purchase, onChangeModal,totalPurchase } = useContext(ShoppgingCartContext);

/*funciones para ver el carrito de compras*/
const shoppingCartModal = (e) =>{
  //añaidr el evento de mover el modal
  e.preventDefault();

  const body = document.body.clientWidth;

  if(body<=1133){
    onChangeLightBurguer();  
    onChangeModal();
  }
  else{
    onChangeModal();
    toggleCartComponent();
  }
}

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
              id={product.id}
              key={product.id}
          />
        })} 
        </div>
        <article className='sidebar-totals'>
          <p>Total:</p>
          <p className='sidebar-totals-price'>$ {totalPurchase}</p>
        </article>
        <article className='sidebar-purchase-buttons' onClick={shoppingCartModal}>
          <button className='sidebar-watch-cart' >
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
