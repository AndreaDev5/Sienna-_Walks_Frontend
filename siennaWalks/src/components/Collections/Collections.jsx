// 📦 Importación de librerías, componentes y recursos
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './Collections.css';
import { Link } from 'react-router-dom';
import leftArrow from '../../assets/logos/chevron-left.svg';
import rightArrow from '../../assets/logos/chevron-right.svg';

// 🖼️ Componente para cada colección individual
const CollectionItem = ({ image, collectionName, collectionDescription, collectionLink }) => {
  
  // 🔍 Referencia para el elemento de la colección
  const collectionItem = useRef(null);

  // 🖌️ Asignar la imagen de fondo al cargar el componente
  useLayoutEffect(() => {
    const collectionItemNode = collectionItem.current;
    collectionItemNode.style.backgroundImage = image;
  }, [image]);

  return (
    // 🔗 Enlace de la colección
    <Link className='collection-item' to={collectionLink} ref={collectionItem}>
      <section className='collection-item-description'>
        <h2>{collectionName}</h2>
        <p>{collectionDescription}</p>
      </section>
    </Link>
  );
};

// 🔄 Componente principal para manejar el carrusel de colecciones
const Collections = () => {
  const containerRef = useRef(null);

  // ⬅️ Mover el carrusel hacia la derecha
  const onChangeRight = () => {
    const firstNode = containerRef.current.firstChild;
    const totalScroll = firstNode.clientWidth * 3; 
    const containerRefNode = containerRef.current;
    containerRefNode.scrollBy({
      left: totalScroll,
      behavior: "smooth" 
    });
  };

  // ➡️ Mover el carrusel hacia la izquierda
  const onChangeLeft = () => {
    const firstNode = containerRef.current.firstChild;
    const totalScroll = firstNode.clientWidth * 3; // 🖱️ Ancho total para desplazar
    const containerRefNode = containerRef.current;
    containerRefNode.scrollBy({
      left: -totalScroll,
      behavior: "smooth" 
    });
  };

  
  const images = [
    new URL('../../assets/images/coleccion-1.jpg', import.meta.url).href,
    new URL('../../assets/images/coleccion-2.jpg', import.meta.url).href,
    new URL('../../assets/images/coleccion-3.jpg', import.meta.url).href,
    new URL('../../assets/images/coleccion-4.jpg', import.meta.url).href,
    new URL('../../assets/images/coleccion-5.png', import.meta.url).href,
    new URL('../../assets/images/coleccion-6.png', import.meta.url).href,
    new URL('../../assets/images/coleccion-7.png', import.meta.url).href,
  ];

  return (
    <section className='collections'>
      
      <article className='collections-tittle'>
        <div className='collections-tittle-line'></div>
        <h1>Colecciones</h1>
        <div className='collections-tittle-line'></div>
      </article>

      
      <section className='collection-grid'>
        <figure className='collection-left-arrow' onClick={onChangeLeft}>
          <img src={leftArrow} alt="Scroll Left"/>
        </figure>    
        
        <div className='collection-container'>
          <div className='collection-set' ref={containerRef}>
            <CollectionItem
              collectionLink='./colecciones/eclat-eternel'
              image={`url(${images[0]})`} // Aquí usamos la URL generada
              collectionName='Eclat Éternel'
              collectionDescription='Brillo eterno que resalta la exclusividad y refinamiento'
            />
            <CollectionItem
              collectionLink='./colecciones/l`aura-majestueuse'
              image={`url(${images[1]})`} // Aquí usamos la URL generada
              collectionName='L`Aura Majestueuse'
              collectionDescription='Una colección con una presencia majestuosa y sofisticada'
            />
            <CollectionItem
              collectionLink='./colecciones/velours-divin'
              image={`url(${images[2]})`} // Aquí usamos la URL generada
              collectionName='Velours Divin'
              collectionDescription='Inspirada en la suavidad y el lujo del terciopelo divino'
            />
            <CollectionItem
              collectionLink='./colecciones/heritage-d`or'
              image={`url(${images[3]})`} // Aquí usamos la URL generada
              collectionName='Héritage d`Or '
              collectionDescription='Un legado dorado que combina tradición y lujo contemporáneo'
            />
            <CollectionItem
              collectionLink='./colecciones/opulence-sauvage'
              image={`url(${images[4]})`} // Aquí usamos la URL generada
              collectionName='Opulence Sauvage'
              collectionDescription='Una fusión entre la elegancia salvaje y la opulencia moderna'
            />
            <CollectionItem
              collectionLink='./colecciones/noir-elegance'
              image={`url(${images[5]})`} // Aquí usamos la URL generada
              collectionName='Noir Élégance'
              collectionDescription='Un clásico de la moda en negro, con un enfoque en la sofisticación pura'
            />
            <CollectionItem
              collectionLink='./colecciones/ciel-de-minuit'
              image={`url(${images[6]})`} // Aquí usamos la URL generada
              collectionName='Ciel de Minuit'
              collectionDescription='Inspirado en el misterio y el lujo del cielo nocturno'
            />
          </div>
        </div>

        <figure className='collection-right-arrow' onClick={onChangeRight}>
          <img src={rightArrow} alt="Scroll Right"/>
        </figure>
      </section>
    </section>
  );
};

export default Collections;
