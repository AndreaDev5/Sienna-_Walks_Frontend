import './Footer.css';  
import { Link } from 'react-router-dom';
import nequi from '../../assets/logos/nequi-logo-oscuro.svg';
import daviplata from '../../assets/logos/daviplata-logo-oscuro.svg';
import facebook from '../../assets/logos/jam_facebook.svg';
import instagram from '../../assets/logos/iconoir_instagram.svg';
import linkedin from '../../assets/logos/jam_linkedin.svg';
import { useLayoutEffect, useRef, useEffect } from 'react';

function Footer({footerWidth,footerBackground,footerMarginTop}) {
const footerRef = useRef(null);
const footerRefContainer = useRef(null);

useLayoutEffect(()=>{
    const bodyWidth = document.body.clientWidth;
    const footerRefNode = footerRef.current;
    if(bodyWidth>=1279){
        footerRefNode.style.width = `${ footerWidth / 10 }rem`
    }
    
    /*color para el contenedor del footer*/
    const footerRefContainerNode = footerRefContainer.current;
    footerRefContainerNode.style.background = footerBackground;
    footerRefContainerNode.style.marginTop = footerMarginTop;
},[])

return (
    <section className='footer-container' ref={footerRefContainer}>
        <footer className='footer' ref={footerRef}>
            <div className='footer-links-container'>
            <section className='footer-interest-links'>
                <h3 className='footer-tittle'>LINKS DE INTERÉS</h3>
                <Link to={'/acerca-de-Sienna'}>Acerca de Sienna</Link>
                <Link to={'/ver-productos'}>Ver más</Link>
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
            <p className='footer-location'>Bogotá, 2024</p>
        </footer>
    </section>
);
}

export default Footer;
