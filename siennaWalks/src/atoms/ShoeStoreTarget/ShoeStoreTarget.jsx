// 🥾 Importación de librerías y recursos necesarios

import React, { useRef } from 'react';
import './ShoeStoreTarget.css';

import { Link } from 'react-router-dom';

// 🎯 Componente para mostrar un elemento de la tienda de zapatos
const ShoeStoreTarget = ({classShoeName,collection,shoesName,shoesPrice,image,productLink}) => {
  
// 🎨 Referencias a los colores para gestionar estilos o comportamientos específicos

  const firstColorRef = useRef(null);
  const firstColorRefNode = firstColorRef.current;
  
  const secondColorRef = useRef(null);
  const secondColorRefNode = firstColorRef.current;

  const thirdColorRef = useRef(null);
  const thirdColorRefNode = firstColorRef.current;  

  const fourthColorRef = useRef(null);
  const fourthColorRefNode = firstColorRef.current;

// 🔗 Componente de enlace que envuelve toda la tarjeta del producto
  
  
  return (
    <Link className={classShoeName} to={productLink} onClick={()=>{
      window.scrollTo(0,0);
    }}>
      <img className='shoe-store-image' src={image} alt={'sienna-ref-nombre-de-zapato'}/>
      <p className='shoe-store-collection'>{collection}</p>
      <p className='shoe-store-name'>{shoesName}</p>
      <p className='shoe-store-price'>{shoesPrice}</p>
      <article className='shoe-store-colors'>
        <div className='shoe-first-color' ref={firstColorRef}></div>
        <div className='shoe-second-color' ref={secondColorRef}></div>
        <div className='shoe-third-color' ref={thirdColorRef}></div>
        <div className='shoe-fourth-color' ref={fourthColorRef}></div>
      </article>
    </Link>
  )
}

export default ShoeStoreTarget
