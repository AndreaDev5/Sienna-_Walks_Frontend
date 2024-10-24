import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './Collections.css';
import { Link } from 'react-router-dom';
import leftArrow from '../../assets/logos/chevron-left.svg';
import rightArrow from '../../assets/logos/chevron-right.svg';

const CollectionItem = ({image,collectionName,collectionDescription,collectionLink}) =>{

  const collectionItem = useRef(null);

    useLayoutEffect(()=>{
      const collectionItemNode = collectionItem.current;
      collectionItemNode.style.backgroundImage = image;
    },[])

    return(
        <Link className='collection-item' to={collectionLink} ref={collectionItem}>
        <section className='collection-item-description'>
           <h2>{collectionName}</h2>
           <p>{collectionDescription}</p>
        </section>
       </Link>
    )
} 

const Collections = () => {
  const containerRef = useRef(null);
  
  const onChangeRight = () =>{
    /*saca el primer nodo*/
    const firstNode = containerRef.current.firstChild;
      
    /*saco el ancho total del nodo*/ 
    const totalScroll = firstNode.clientWidth * 3;
  
    /*obtener el contenedor*/ 
    const containerRefNode = containerRef.current;
    containerRefNode.scrollBy({
      left:  totalScroll,
      behavior: "smooth"  
    })
  }  
  
  const onChangeLeft = () =>{
    /*saca el primer nodo*/
    const firstNode = containerRef.current.firstChild;
      
    /*saco el ancho total del nodo*/ 
    const totalScroll = firstNode.clientWidth * 3;
  
    /*obtener el contenedor*/ 
    const containerRefNode = containerRef.current;

    containerRefNode.scrollBy({
      left: -totalScroll,
      behavior: "smooth"  
    })
  }
 
  return (
    <section className='collections'>
      <article className='collections-tittle'>
        <div className='collections-tittle-line'></div>
        <h1>Colecciones</h1>
        <div className='collections-tittle-line'></div>
      </article>
      <section className='collection-grid'>
      <figure className='collection-left-arrow' onClick={onChangeLeft}>
        <img src={leftArrow}/>
      </figure>    
      <div className='collection-container'>  
      <div className='collection-set' ref={containerRef}>
        <CollectionItem
          collectionLink='./colecciones/eclat-eternel'
          image='url(src/assets/images/coleccion-1.jpg)'
          collectionName='Eclat Éternel'
          collectionDescription='Brillo eterno que resalta la exclusividad y refinamiento'/>
        <CollectionItem
          collectionLink='./colecciones/l`aura-majestueuse'
          image='url(src/assets/images/coleccion-2.jpg)'
          collectionName='L`Aura Majestueuse'
          collectionDescription='Una colección con una presencia majestuosa y sofisticada'
        />
        <CollectionItem
          collectionLink='./colecciones/velours-divin'
          image='url(src/assets/images/coleccion-3.jpg)'
          collectionName='Velours Divin'
          collectionDescription='Inspirada en la suavidad y el lujo del terciopelo divino'
        />
        <CollectionItem
          collectionLink='./colecciones/heritage-d`or'
          image='url(src/assets/images/coleccion-4.jpg)'
          collectionName='Héritage d`Or '
          collectionDescription='Un legado dorado que combina tradición y lujo contemporáneo'
          />
        <CollectionItem
          collectionLink='./colecciones/opulence-sauvage'
          image='url(src/assets/images/coleccion-5.png)'
          collectionName='Ciel de Minuit'
          collectionDescription='Una fusión entre la elegancia salvaje y la opulencia moderna'
          />
         <CollectionItem
          collectionLink='./colecciones/noir-elegance'
          image='url(src/assets/images/coleccion-6.png)'
          collectionName='Noir Élégance'
          collectionDescription='Un clásico de la moda en negro, con un enfoque en la sofisticación pura'
          />
          <CollectionItem
          collectionLink='./colecciones/ciel-de-minuit'
          image='url(src/assets/images/coleccion-7.png)'
          collectionName='Ciel de Minuit'
          collectionDescription='Inspirado en el misterio y el lujo del cielo nocturno'
          /> 
      </div>
      </div>
      <figure className='collection-right-arrow' onClick={onChangeRight}>
        <img src={rightArrow}/>
      </figure>
      </section>
    </section>
  )
}

export default Collections
