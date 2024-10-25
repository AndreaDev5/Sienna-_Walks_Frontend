import React from 'react';
import './AboutValues.css';
import shoeMaking from '../../assets/logos/shoe-making-about-1.svg';
import designShoes from '../../assets/logos/design-tools-about-1.svg';
import customerServiceAbout from '../../assets/logos/customer-service-about-1.svg'

const AboutValues = () => {
  return (
    <>
    <section className='about-values'>
    <h1 className='about-values-main-tittle'>Nuestra Promesa</h1>
        <section className='about-cards-container'>  
            <article className='about-values-card'>
                <h2>Calidad con compromiso</h2>    
                <figure className='about-values-fig'>
                    <img src={shoeMaking}/>
                </figure>
                <p className='about-values-description'>Cada par de zapatos refleja un estándar de calidad que garantiza no solo durabilidad, sino también estilo.</p>
            </article>
            <article className='about-values-card'>
                <h2>Diseños personlizados</h2>    
                <figure className='about-values-fig'>
                    <img src={designShoes}/>
                </figure>
                <p className='about-values-description'>Ofrecemos la posibilidad de personalizar diseños, cada uno de nosotros merece un par de zapatos que cuente su propia historia</p>
            </article>
            <article className='about-values-card'>
                <h2>Atención personal</h2>    
                <figure className='about-values-fig'>
                    <img src={customerServiceAbout}/>
                </figure>
                <p className='about-values-description'>A través de WhatsApp y nuestras redes sociales, nos esforzamos por conocer a cada cliente y brindar un servicio que vaya más allá de la venta, creando una conexión real.</p>
            </article>
        </section>    
    </section>
    <section className='about-thanksgiving'>
        <h1>Gracias por confiar en Sienna Walks</h1>
        <p>Juntos, caminemos hacia un futuro donde cada paso sea una expresión auténtica de quién eres.</p>
    </section>
    </>
  )
}

export default AboutValues
