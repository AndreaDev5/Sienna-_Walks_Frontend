import  { useContext } from 'react'; 
import './Sidebar.css'; 
import { Link } from 'react-router-dom'; 
import { StoreContext } from "../../context/StoreContext"; 
import SiennaCollectionLinks from '../../atoms/SiennaCollectionLInks/SiennaCollectionsLinks'; 
import SidebarCartCompoent from '../SidebarCartComponent/SidebarCartComponent';
import ShoppingCart from '../../atoms/HeaderShoppingCart/ShoppingCart';

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
        </div>
      </article>
      <article className='sidebar-overflow-buttons'>
        <div className='first-button' ref={firstButtonRef}></div>
        <div className='second-button' ref={secondButtonRef}></div>
      </article>
      <ShoppingCart shoppingCartContainer='sidebar-shoppping-cart' shoppingCartMarker='shopping-cart-marker' shoppingCartEvent={()=>{setScrollCount(2)}}/>
    </section>
  );
}

export default Sidebar; 
