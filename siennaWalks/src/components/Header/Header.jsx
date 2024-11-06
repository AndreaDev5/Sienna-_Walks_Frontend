// 🌟 Encabezado de la aplicación con enlaces y botones de navegación
import './Header.css';  
import { Link } from 'react-router-dom';
import SiennaCollectionLinks from '../../atoms/SiennaCollectionLInks/SiennaCollectionsLinks';
import shoppingCarIcon from '../../assets/logos/ph_shopping-cart-dark.svg';
import emptyProfile from '../../assets/logos/ph_user-rectangle-thin.svg';
import SidebarCartComponent from '../../atoms/SidebarCartComponent/SidebarCartComponent';
import SidebarUserComponent from '../../atoms/SidebarUSerComponent/SidebarUserComponent';
import { HeaderContext } from '../../context/StoreContext';
import { useContext } from 'react';

function Header() {
const {cartComponent,userComponent,toggleCartComponent,toggleUserComponent,toggleUSerCart} = useContext(HeaderContext)

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
                <Link to={'/acerca-de-Sienna'} onClick={toggleUSerCart}>Acerca de</Link>
                <Link to={'/ingresa'} onClick={toggleUSerCart}>Ingresa</Link>
                <Link to={'/registrate'} onClick={toggleUSerCart}>Regístrate</Link>
            </ul>
            <ul className='header-options-buttons'>
                <figure className='header-shoppping-cart' onClick={toggleCartComponent}>
                    <p className='header-cart-marker'>0</p>  
                    <img src={shoppingCarIcon}/>
                </figure>
                <figure className='header-bar-profile' onClick={toggleUserComponent}>
                    <img src={emptyProfile}/>
                </figure>
            </ul>
        </article>
        </main>
    </header>
    {cartComponent?<SidebarCartComponent sidebarCartComponent={'sidebar-cart-initial-component'} sidebarCartTittle={'sidebar-cart--initial-tittle'} sidebarCartBigIcon={'sidebar-cart-initial-big-icon'}/> :''}
    {userComponent?<SidebarUserComponent sidebarUserComponent={'sidebar-user-initial-component'} sidebarEmptyUser={'sidebar-initial-empty-user'} sidebarUserTittle={'sidebar-user-initial-tittle'} sidebarUserLinks={'sidebar-user-initial-links'}/>:''}
    </>
    );
}

export default Header;
