// 🌟 Sección principal que presenta la marca y una llamada a la acción

import './Hero.css';
import logo from '../../assets/logos/last-logo-sienna.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero' >
      <img className='hero-logo-sienna' src={logo}/>
      <h1 className='hero-logo-cta'>En cada paso que das llevas contigo un pedazo de tu escencia, elige un calzado que refleje tu estilo y te acompañe en tu aventura</h1>
      <Link className='hero-whatsapp-contact' to={'/ver-productos'}>Ver más</Link>
    </section>
  )
}

export default Hero
