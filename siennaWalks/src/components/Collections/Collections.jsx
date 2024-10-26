// 📦 Importación de librerías, componentes y recursos
import React, { useLayoutEffect, useRef } from 'react';
import './Collections.css';
import { Link } from 'react-router-dom';
import leftArrow from '../../assets/logos/chevron-left.svg';
import rightArrow from '../../assets/logos/chevron-right.svg';

// 🖼️ Componente para cada colección individual
const CollectionItem = ({ image, collectionName, collectionDescription, collectionLink }) => {
  const collectionItem = useRef(null);

  useLayoutEffect(() => {
    if (collectionItem.current) {
      collectionItem.current.style.backgroundImage = `url(${image})`;
    }
  }, [image]);

  return (
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

  const onChangeRight = () => {
    const firstNode = containerRef.current.firstChild;
    const totalScroll = firstNode.clientWidth * 3;
    containerRef.current.scrollBy({
      left: totalScroll,
      behavior: "smooth"
    });
  };

  const onChangeLeft = () => {
    const firstNode = containerRef.current.firstChild;
    const totalScroll = firstNode.clientWidth * 3;
    containerRef.current.scrollBy({
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
          <img src={leftArrow} alt="Scroll Left" />
        </figure>    

        <div className='collection-container'>
          <div className='collection-set' ref={containerRef}>
            {images.map((image, index) => (
              <CollectionItem
                key={index}
                collectionLink={`./colecciones/coleccion-${index + 1}`}
                image={image}
                collectionName={`Colección ${index + 1}`}
                collectionDescription={`Descripción de la colección ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <figure className='collection-right-arrow' onClick={onChangeRight}>
          <img src={rightArrow} alt="Scroll Right" />
        </figure>
      </section>
    </section>
  );
};

export default Collections;
