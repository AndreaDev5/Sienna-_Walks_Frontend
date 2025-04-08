// 🌟 Encabezado de la aplicación con enlaces y botones de navegación
import './Header.css';  
import { Link } from 'react-router-dom';
import SiennaCollectionLinks from '../../atoms/SiennaCollectionLInks/SiennaCollectionsLinks';
import SidebarCartComponent from '../SidebarCartComponent/SidebarCartComponent';
import { HeaderContext } from '../../context/StoreContext';
import { useContext } from 'react';
import ShoppingCart from '../../atoms/HeaderShoppingCart/ShoppingCart';

function Header() {
const {cartComponent,toggleCartComponent,toggleUSerCart} = useContext(HeaderContext)

return (
    <>
    <header className='header'>
        <main className='header-container'>
        <article className='header-right-links' onClick={toggleUSerCart}>    
            <Link to={'/'} className='header-tittle-link'><h1>Sienna Walks</h1></Link>
            <SiennaCollectionLinks/>    
        </article>
        <article className='header-left-links' >
            <ul className='header-options-links'>
                <Link to={'/acerca-de-Sienna'} onClick={toggleUSerCart}>Acerca de Sienna</Link>
                <ShoppingCart shoppingCartContainer='header-shoppping-cart' shoppingCartMarker='header-cart-marker' shoppingCartEvent={toggleCartComponent}/>
            </ul>
        </article>
        </main>
    </header>
    {cartComponent?<SidebarCartComponent sidebarCartComponent={'sidebar-cart-initial-component'} sidebarCartTittle={'sidebar-cart--initial-tittle'} sidebarCartBigIcon={'sidebar-cart-initial-big-icon'}/> :''}
    </>
    );
}

export default Header;
