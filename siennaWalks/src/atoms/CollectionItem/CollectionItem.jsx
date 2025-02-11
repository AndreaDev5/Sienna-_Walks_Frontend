import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './CollectionItem.css';

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

export default CollectionItem;