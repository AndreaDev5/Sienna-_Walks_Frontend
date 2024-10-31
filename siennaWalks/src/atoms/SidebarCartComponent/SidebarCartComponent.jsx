import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import shoppingBigCart from '../../assets/logos/ph_shopping-cart-big.svg';
import './SidebarCartComponent.css';
import { StoreContext } from '../../context/StoreContext';

const SidebarCartComponent = () => {
const { onChangeDarkBurguer} = useContext(StoreContext);

  return (
    <section className='sidebar-cart-component'>
      <h1 className='sidebar-cart-tittle'>Tu carrito de compras está vacío</h1>
      <img className='sidebar-cart-big-icon' src={shoppingBigCart}/>
      <Link to={"/"} className="sidebar-link-all" onClick={onChangeDarkBurguer}>Ver y comprar</Link>
    </section>
  )
}

export default SidebarCartComponent
