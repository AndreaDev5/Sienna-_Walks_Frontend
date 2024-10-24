import './Header.css';  
import { Link } from 'react-router-dom';
import SiennaCollectionLinks from '../../atoms/SiennaCollectionLInks/SiennaCollectionsLinks';
import shoppingCarIcon from '../../assets/logos/ph_shopping-cart-dark.svg';
import emptyProfile from '../../assets/logos/ph_user-rectangle-thin.svg';

function Header() {
 return (
    <header className='header'>
        <main className='header-container'>
        <article className='header-right-links'>    
            <Link to={'/'} className='header-tittle-link'><h1>Sienna Walks</h1></Link>
            <SiennaCollectionLinks/>    
        </article>
        <article className='header-left-links'>
            <ul className='header-options-links'>
                <Link to={'/acerca-de-Sienna'}>Acerca de</Link>
                <Link to={'/ingresa'}>Ingresa</Link>
                <Link to={'/registrate'}>Regístrate</Link>
            </ul>
            <ul className='header-options-buttons'>
                <figure className='header-shoppping-cart'>
                    <p className='header-cart-marker'>0</p>  
                    <img src={shoppingCarIcon}/>
                </figure>
                <figure className='header-bar-profile'>
                    <img src={emptyProfile}/>
                </figure>
            </ul>
        </article>
        </main>
    </header>
    );
}

export default Header;
