import  { useContext } from 'react'; 
import './Sidebar.css'; 
import { Link } from 'react-router-dom'; 
import { StoreContext } from "../../context/StoreContext"; 
import shoppingCart from '../../assets/logos/ph_shopping-cart-dark.svg';  
import SiennaCollectionLinks from '../../atoms/SiennaCollectionLInks/SiennaCollectionsLinks'; 
import SidebarCartCompoent from '../../atoms/SidebarCartComponent/SidebarCartComponent';
import SidebarUserComponent from '../../atoms/SidebarUSerComponent/SidebarUserComponent';

function Sidebar() {
  /*hook para el botón de hamburguesa 🍔*/
  const { sidebarBurguerRef, onChangeDarkBurguer} = useContext(StoreContext);

  /*hook para el botón de scroll horizontal ⬅➡*/
  const {classContainer,firstButtonRef,secondButtonRef,
    handleTouchStart,handleTouchMove,handleTouchEnd,setScrollCount } = useContext(StoreContext);  

  return (
    <section className='sidebar' ref={sidebarBurguerRef}>
        <Link className='sidebar-tittle' to={'/'} onClick={onChangeDarkBurguer}>
          <h1>Sienna Walks</h1> 
        </Link>
      <article className='sidebar-carousel-container'>
        <div className={classContainer} onTouchMove={handleTouchMove} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <ul className='sidebar-container'>
            <section className='sidebar-inner-container'>  
              <SiennaCollectionLinks/>
              <Link className='sidebar-about-me' to={'/acerca-de-Sienna'} onClick={onChangeDarkBurguer}>Acerca de Sienna</Link>
            </section>
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
      </article>
        <figure className='sidebar-shoppping-cart' onClick={()=>{setScrollCount(2)}}>
          <p className='shopping-cart-marker'>0</p>  
          <img src={shoppingCart} alt="Carrito de compras"/> 
        </figure>
    </section>
  );
}

export default Sidebar; 
