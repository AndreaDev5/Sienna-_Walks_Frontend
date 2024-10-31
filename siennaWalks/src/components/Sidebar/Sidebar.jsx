import  { useContext } from 'react'; 
import './Sidebar.css'; 
import { Link } from 'react-router-dom'; 
import { StoreContext } from "../../context/StoreContext"; 
import shoppingCart from '../../assets/logos/ph_shopping-cart-dark.svg'; 
import emptyProfile from '../../assets/logos/ph_user-rectangle-thin.svg'; 
import SiennaCollectionLinks from '../../atoms/SiennaCollectionLInks/SiennaCollectionsLinks'; 
import SidebarCartCompoent from '../../atoms/SidebarCartComponent/SidebarCartComponent';
import SidebarUserContainer from '../../atoms/SidebarUSerComponent/SidebarUserComponent';
import SidebarUserComponent from '../../atoms/SidebarUSerComponent/SidebarUserComponent';

function Sidebar() {
  const { sidebarBurguerRef, onChangeDarkBurguer, onChangeLightBurguer} = useContext(StoreContext);

  return (
    <section className='sidebar' ref={sidebarBurguerRef}>
      {/*cambiar a la etiqueta ul  */}
      
        <Link className='sidebar-tittle' to={'/'} onClick={onChangeDarkBurguer}>
          <h1>Sienna Walks</h1> 
        </Link>
      <article className='sidebar-carousel-container'>
        <div className='sidebar--car-general-container'>
          <ul className='sidebar-container'>
            <SiennaCollectionLinks/>
            <Link className='sidebar-about-me' to={'/acerca-de-Sienna'} onClick={onChangeDarkBurguer}>Acerca de</Link>
            <Link className='sidebar-log-in' to={'/ingresa'} onClick={onChangeLightBurguer}>Ingresa</Link>
            <Link className='sidebar-register' to={'/registrate'} onClick={onChangeLightBurguer}>Registrate</Link>
          </ul>
          <div className='sidebar-cart-container'>
            <SidebarCartCompoent/>
          </div>
          <div className='sidebar-user-container'>
            <SidebarUserComponent/>
          </div>
        </div>
      </article>
      <article className='sidebar-overflow-buttons'>
        <div className='first-button'></div>
        <div className='second-button'></div>
        <div className='third-button'></div>
      </article>
      
      <article className='sidebar-options-buttons'>
        <figure className='sidebar-shoppping-cart'>
          <p className='shopping-cart-marker'>0</p>  
          <img src={shoppingCart} alt="Carrito de compras"/> 
        </figure>
        
        <figure className='side-bar-profile'>
          <img src={emptyProfile} alt="Perfil vacío"/>
        </figure>
      </article>
    </section>
  );
}

export default Sidebar; 
