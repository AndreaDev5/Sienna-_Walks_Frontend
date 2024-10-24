import React, { useRef } from 'react';
import './ShoeStoreTarget.css';
import imageStore from '../../assets/images/shoeItemProv.png';
import { Link } from 'react-router-dom';

const ShoeStoreTarget = ({collection,shoesName,shoesPrice,firstColor,secondColor,thirdColor,fourthColor,id}) => {
  
  const firstColorRef = useRef(null);
  const firstColorRefNode = firstColorRef.current;
  //firstColorRefNode.style.backgroundColor= firstColor;
  
  const secondColorRef = useRef(null);
  const secondColorRefNode = firstColorRef.current;

  const thirdColorRef = useRef(null);
  const thirdColorRefNode = firstColorRef.current;  

  const fourthColorRef = useRef(null);
  const fourthColorRefNode = firstColorRef.current;


  return (
    <Link className='shoe-store-target' to='/'>
      <img className='shoe-store-image' src={imageStore} alt={'sienna-ref-nombre-de-zapato'}/>
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
