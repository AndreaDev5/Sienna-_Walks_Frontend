import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import shoppingBigCart from '../../assets/logos/ph_shopping-cart-big.svg';
import './SidebarCartComponent.css';
import { StoreContext } from '../../context/StoreContext';

const SidebarCartComponent = ({sidebarCartComponent,sidebarCartTittle,sidebarCartBigIcon,shoeImage}) => {
const { onChangeDarkBurguer} = useContext(StoreContext);

  return (
    <section className={sidebarCartComponent}>
      <h1 className={sidebarCartTittle}>Tu carrito de compras está vacío</h1>
      <img className={sidebarCartBigIcon} src={shoppingBigCart}/>
      <Link to={"/"} className="sidebar-link-all" onClick={onChangeDarkBurguer}>Ver más</Link>
    </section>
  )
}

export default SidebarCartComponent
