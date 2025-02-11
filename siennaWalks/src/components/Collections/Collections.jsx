import './Collections.css';
import leftArrow from '../../assets/logos/chevron-left.svg';
import rightArrow from '../../assets/logos/chevron-right.svg';
import CollectionItem from '../../atoms/CollectionItem/CollectionItem';
import { useCollectionsEdit } from '../../hooks/useCollectionsEdit';

// 🔄 Componente principal para manejar el carrusel de colecciones
const Collections = () => {
  const { containerRef,onChangeRight,onChangeLeft,images } = useCollectionsEdit()

  return (
    <section className='collections'>
      {/* 🎨 Título de la sección */}
      <article className='collections-tittle'>
        <div className='collections-tittle-line'></div>
        <h1>Colecciones</h1>
        <div className='collections-tittle-line'></div>
      </article>

      {/* 🖼️ Contenedor del carrusel */}
      <section className='collection-grid'>
        <figure className='collection-left-arrow' onClick={onChangeLeft}>
          <img src={leftArrow} alt="Scroll Left"/>
        </figure>    
        
        <div className='collection-container'>
          <div className='collection-set' ref={containerRef}>
            <CollectionItem
              collectionLink='./colecciones/eclat-eternel'
              image={`url(${images[0]})`} 
              collectionName='Eclat Éternel'
              collectionDescription='Brillo eterno que resalta la exclusividad y refinamiento'
            />
            <CollectionItem
              collectionLink='./colecciones/l`aura-majestueuse'
              image={`url(${images[1]})`}
              collectionName='L`Aura Majestueuse'
              collectionDescription='Una colección con una presencia majestuosa y sofisticada'
            />
            <CollectionItem
              collectionLink='./colecciones/velours-divin'
              image={`url(${images[2]})`} 
              collectionName='Velours Divin'
              collectionDescription='Inspirada en la suavidad y el lujo del terciopelo divino'
            />
            <CollectionItem
              collectionLink='./colecciones/heritage-d`or'
              image={`url(${images[3]})`} 
              collectionName='Héritage d`Or '
              collectionDescription='Un legado dorado que combina tradición y lujo contemporáneo'
            />
            <CollectionItem
              collectionLink='./colecciones/opulence-sauvage'
              image={`url(${images[4]})`} 
              collectionName='Opulence Sauvage'
              collectionDescription='Una fusión entre la elegancia salvaje y la opulencia moderna'
            />
            <CollectionItem
              collectionLink='./colecciones/noir-elegance'
              image={`url(${images[5]})`} 
              collectionName='Noir Élégance'
              collectionDescription='Un clásico de la moda en negro, con un enfoque en la sofisticación pura'
            />
            <CollectionItem
              collectionLink='./colecciones/ciel-de-minuit'
              image={`url(${images[6]})`} 
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
