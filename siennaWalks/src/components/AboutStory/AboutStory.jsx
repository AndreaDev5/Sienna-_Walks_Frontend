import React from 'react';
import firstImage from '../../assets/images/acerca-de.jpg';
import secondImage from '../../assets/images/acerca-de-1.jpg';
import thirdImage from '../../assets/images/acerca-de-2.jpg';
import './AboutStory.css';

const AboutStory = () => {
  return (
    <section className='about-story'>
      <div className='about-story-container'>  
      <h1 className='about-story-tittle'>Bienvenidos a Sienna Walk</h1>
      <p>Donde la pasión por el calzado se une con un compromiso inquebrantable hacia la calidad y la autenticidad. Cada par de zapatos 
        que ofrecemos es una expresión de estilo y personalidad, diseñado para empoderar a quienes los usan.
      </p>
      <p>Sienna Walk nació con la visión de crear un espacio donde cada persona pueda encontrar calzado que no solo complemente su estilo, 
        sino que también refleje su esencia. En un mundo donde la moda a menudo se siente impersonal, buscamos ofrecer una experiencia única 
        y auténtica. Nuestra colección abarca una variedad de estilos, desde tacones altos y bajos hasta opciones sin tacón, todos diseñados 
        para brindar comodidad y elegancia en cada paso.
      </p>
      </div>
      <section className='about-image-general-container'>
        <article className='about-image-container'>
            <img src={firstImage}/>
            <img src={secondImage}/>
            <img src={thirdImage}/>
         </article>
      </section>
      <div className='about-story-container'>
      <h1 className='about-story-second-tittle'>Lo que nos distingue en Sienna Walk es nuestro enfoque de personalización y atención al detalle</h1>  
      <p>Cada diseño es creado con amor y dedicación, utilizando materiales de calidad, más allá de los productos, mi verdadero objetivo es construir una comunidad donde 
         cada cliente se sienta visto y valorado.
      </p>
      <p>En Sienna Walk, creo firmemente que la moda es una forma de empoderamiento. Quiero que cada uno de ustedes se sienta 
        inspirado y seguro al usar nuestros productos. Mi misión es ser parte de su viaje, ofreciendo calzado que no solo se vea bien, 
        sino que también haga que cada paso sea significativo.
      </p>  
      </div>   
    </section>
  )
}

export default AboutStory
    