// Footer 

import './Footer.css';  
import { Link } from 'react-router-dom';
import nequi from '../../assets/logos/nequi-logo-oscuro.svg';
import daviplata from '../../assets/logos/daviplata-logo-oscuro.svg';
import facebook from '../../assets/logos/jam_facebook.svg';
import instagram from '../../assets/logos/iconoir_instagram.svg';
import linkedin from '../../assets/logos/jam_linkedin.svg';
import { useLayoutEffect, useRef } from 'react';

function Footer({footerWidth}) {
const footerRef = useRef(null);
useLayoutEffect(()=>{
    const footerRefNode = footerRef.current;
    footerRefNode.style.width = `${ footerWidth / 10 }rem`
},[])


return (
    <section className='footer-container'>
        <footer className='footer' ref={footerRef}>
            <div className='footer-links-container'>
            <section className='footer-interest-links'>
                <h3 className='footer-tittle'>LINKS DE INTERÉS</h3>
                <Link to={'/acerca-de-Sienna'}>Acerca de</Link>
                <Link to={'/ingresa'}>Ingresa</Link>
                <Link to={'/registrate'}>Regístrate</Link>
            </section>    
            <section className='footer-explore-links'>    
                <h3 className='footer-tittle'>EXPLORA</h3>
                <Link to={'/'}>Ver más</Link>
            </section>
            <section className='footer-social-media'>
                <h3 className='footer-tittle'>REDES SOCIALES</h3>
                <article className='sienna-media-grid'>
                    <Link to={'/'} className='sienna-media-facebook'><img src={facebook}/></Link>
                    <Link to={'/'} className='sienna-media-instagram'><img src={instagram}/></Link>
                    <Link to={'/'} className='sienna-media-linkedin'><img src={linkedin}/></Link>  
                </article>
            </section>
            <section className='footer-ways-payments'>
                <h3 className='footer-tittle'>MEDIOS DE PAGO</h3>
                <img src={nequi} className='footer-nequi' alt='sienna-medio-pago-nequi'/>
                <img src={daviplata} className='footer-daviplata' alt='sienna-medio-pago-daviplata'/>
            </section>
            </div>
            <h3 className='footer-sienna-tittle'>Sienna Walks</h3>
            <section className='footer-credits'>
                <p>Diseño y desarrollo</p>
                <article className='footer-sienna-developers'>
                    <a href='https://www.linkedin.com/in/andrea-zuluaga-monroy/'>ANDREA ZULUAGA |</a><a href='https://www.linkedin.com/in/jonathan-santos-8033002b3/'>JONATHAN SANTOS |</a><a href='https://www.linkedin.com/in/jfranco-webdev/'>JUAN DAVID FRANCO</a>    
                </article>
                <p className='footer-location'>Bogotá, 2024</p>
            </section>
        </footer>
    </section>
);
}

export default Footer;
