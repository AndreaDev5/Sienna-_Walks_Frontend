import  { useContext,useEffect,useRef,useState } from 'react'; 
import './Sidebar.css'; 
import { Link } from 'react-router-dom'; 
import { StoreContext } from "../../context/StoreContext"; 
import shoppingCart from '../../assets/logos/ph_shopping-cart-dark.svg'; 
import emptyProfile from '../../assets/logos/ph_user-rectangle-thin.svg'; 
import SiennaCollectionLinks from '../../atoms/SiennaCollectionLInks/SiennaCollectionsLinks'; 
import SidebarCartCompoent from '../../atoms/SidebarCartComponent/SidebarCartComponent';
import SidebarUserComponent from '../../atoms/SidebarUSerComponent/SidebarUserComponent';

function Sidebar() {
  /*hook para el botón de hamburguesa 🍔*/
  const { sidebarBurguerRef, onChangeDarkBurguer, onChangeLightBurguer} = useContext(StoreContext);

  /*hook para el botón de scroll horizontal ⬅➡*/
  const {classContainer,firstButtonRef,secondButtonRef,thidrButtonRef,
    handleTouchStart,handleTouchMove,handleTouchEnd,setScrollCount } = useContext(StoreContext);  

  return (
    <section className='sidebar' ref={sidebarBurguerRef}>
        <Link className='sidebar-tittle' to={'/'} onClick={onChangeDarkBurguer}>
          <h1>Sienna Walks</h1> 
        </Link>
      <article className='sidebar-carousel-container'>
        <div className={classContainer} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <ul className='sidebar-container'>
            <SiennaCollectionLinks/>
            <Link className='sidebar-about-me' to={'/acerca-de-Sienna'} onClick={onChangeDarkBurguer}>Acerca de</Link>
            <Link className='sidebar-log-in' to={'/ingresa'} onClick={onChangeLightBurguer}>Ingresa</Link>
            <Link className='sidebar-register' to={'/registrate'} onClick={onChangeLightBurguer}>Registrate</Link>
          </ul>
          <div className='sidebar-cart-container'>
            <SidebarCartCompoent sidebarCartComponent={'sidebar-cart-component'} sidebarCartTittle={'sidebar-cart-tittle'} 
            sidebarCartBigIcon={'sidebar-cart-big-icon'}/>
          </div>
          <div className='sidebar-user-container'>
            <SidebarUserComponent sidebarUserComponent={'sidebar-user-component'} sidebarEmptyUser={'sidebar-empty-user'}
            sidebarUserTittle={'sidebar-user-tittle'} sidebarUserLinks={'sidebar-user-links'}/>
          </div>
        </div>
      </article>
      <article className='sidebar-overflow-buttons'>
        <div className='first-button' ref={firstButtonRef}></div>
        <div className='second-button' ref={secondButtonRef}></div>
        <div className='third-button' ref={thidrButtonRef}></div>
      </article>
      
      <article className='sidebar-options-buttons' >
        <figure className='sidebar-shoppping-cart' onClick={()=>{setScrollCount(2)}}>
          <p className='shopping-cart-marker'>0</p>  
          <img src={shoppingCart} alt="Carrito de compras"/> 
        </figure>
        
        <figure className='side-bar-profile' onClick={()=>{setScrollCount(3)}}>
          <img src={emptyProfile} alt="Perfil vacío"/>
        </figure>
      </article>
    </section>
  );
}

export default Sidebar; 
