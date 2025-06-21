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
const {  onChangeModal,product } = useContext(ShoppgingCartContext);

const productList = product.purchase;
const totalPurchase = productList.length;

   /*agrega en un array el total de la compra*/
  let totals = productList.map((item)=>{
        return item.total
    })

  let initTotal = 0;
  /*usar el método reduce para sumar los totalse*/
  let totalPrices = totals.reduce((accumulator,currentValue)=> accumulator + currentValue,initTotal);   


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

  if(totalPurchase <1){
    return (
      <section className={sidebarCartComponent}>
        <h1 className={sidebarCartTittle}>Tu carrito de compras está vacío</h1>
        <img className={sidebarCartBigIcon} src={shoppingBigCart}/>
        <Link to={"/ver-productos"} className="sidebar-link-all" onClick={onChangeDarkBurguer}>Ver más</Link>
      </section>
    )
  }

  if(totalPurchase >=1){
    return(
     <section className={sidebarCartComponent}>
        <div className='sidebar-cart-targets-container'>
      {productList.map((product)=>{
          return <SidebarCartTarget
              name={product.name}
              image={product.urlImage}
              size={product.size}
              unities={product.unities}
              purchase={product.purchase}
              total={product.total}
              id={product.id}
          />
        })}  
        </div>
        <article className='sidebar-totals'>
          <p>Total:</p>
          <p className='sidebar-totals-price'>$ {totalPrices}</p>
        </article>
        <article className='sidebar-purchase-buttons'>
          <button className='sidebar-watch-cart' onClick={shoppingCartModal}>
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
