
import './Footer.css';  
import { Link } from 'react-router-dom';
import nequi from '../../assets/logos/nequi-logo-oscuro.svg';
import daviplata from '../../assets/logos/daviplata-logo-oscuro.svg';


function Footer() {
return (
    <section className='footer-container'>
        <footer className='footer'>
            <section className='footer-recommended-links'>
                <h3 className='footer-tittle'>LINKS DE INTERÉS</h3>
                <Link to={'/acerca-de-Sienna'}>Acerca de</Link>
                <Link to={'/ingresa'}>Ingresa</Link>
                <Link to={'/registrate'}>Regístrate</Link>
                <h3 className='footer-tittle'>EXPLORA</h3>
                <Link to={'/'}>Ver y comprar</Link>
                <h3 className='footer-tittle'>MEDIOS DE PAGO</h3>
                <img src={nequi} className='footer-nequi' alt='sienna-medio-pago-nequi'/>
                <img src={daviplata} className='footer-daviplata' alt='sienna-medio-pago-daviplata'/>
            </section>
            <h3 className='footer-sienna-tittle'>Sienna Walks</h3>
            <section className='footer-credits'>
                <p>Diseño y desarrollo</p>
                <article className='footer-sienna-developers'>
                    <a href='https://www.linkedin.com/in/andrea-zuluaga-monroy/'>ANDREA ZULUAGA</a> | <a href='https://www.linkedin.com/in/jonathan-santos-8033002b3/'>JONATHAN SANTOS</a> | <a href='https://www.linkedin.com/in/jfranco-webdev/'>JUAN DAVID FRANCO</a>    
                </article>
                <p className='footer-location'>Bogotá, 2024</p>
            </section>
        </footer>
    </section>
);
}

export default Footer;
