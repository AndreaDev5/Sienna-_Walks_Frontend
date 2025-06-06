// 🥾 Importación de librerías y recursos necesarios

import  { useRef } from 'react';
import './ShoeStoreTarget.css';
import { useNavigate } from 'react-router-dom';
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

  //enlace directo a un documento
  const navigate = useNavigate();

  const handleClick = () =>{
      window.scrollTo(0,0);
      navigate(productLink)
  }
  // 🔗 Componente de enlace que envuelve toda la tarjeta del producto
  

  return (
    <div className={classShoeName} onClick={handleClick}>
      <img className='shoe-store-image' src={image} alt={'sienna-ref-nombre-de-zapato'}/>
      <p className='shoe-store-collection'>{collection}</p>
      <p className='shoe-store-name'>{shoesName}</p>
      <p className='shoe-store-price'>{shoesPrice}</p>
      <article className='shoe-store-colors'>
        <div className='shoe-first-color' ref={firstColorRef}></div>
      </article>
      <Link className='shoe-look-product' to={productLink}>Ver producto</Link>
    </div>
  )
}

export default ShoeStoreTarget
