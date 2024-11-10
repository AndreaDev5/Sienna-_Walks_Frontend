import React, { useContext, useState, useRef, useEffect, useLayoutEffect } from 'react';
import './SidebarFilter.css';
import closeButton from '../../assets/logos/x-bold.svg';
import blackArrow from '../../assets/logos/up--black-arrow.svg';
import { SidebarAllProductsContext } from '../../context/StoreContext';

export default function SidebarFilter() {
const { sidebarFilter, onChangeSidebarFilter } = useContext(SidebarAllProductsContext);
const filterCollectionRef = useRef(null);
const [filterItem, setFilterItems] = useState(false);

const onChangeFilterCollection = () =>{
  setFilterItems(!filterItem);

  const filterCollectionNode = filterCollectionRef.current;
  const filterLinksNode = filterCollectionNode.childNodes[1];
  
  if(filterItem===true){
    filterCollectionNode.classList.replace('sidebar-filter-collection-hidden','sidebar-filter-collection-extended');
    filterLinksNode.classList.replace('sidebar-collections-check-hidden','sidebar-collections-check-extended')
  }
  else{
    filterCollectionNode.classList.replace('sidebar-filter-collection-extended','sidebar-filter-collection-hidden');
    filterLinksNode.classList.replace('sidebar-collections-check-extended','sidebar-collections-check-hidden')
  }
}

  return (
    <section className={sidebarFilter?'sidebar-filter':'sidebar-filter-change'}>
      <div className='sidebar-filter-container'>      
         <img className='sidebar-filter-close' src={closeButton} onClick={onChangeSidebarFilter}/>
         <h1 className='sidebar-filter-tittle'>Filtros</h1>
         <article className='sidebar-filter-slider'>
            <div className='sidebar-filter-collection-hidden' ref={filterCollectionRef}>
                <section className='sidebar-filter-button' onClick={onChangeFilterCollection}>
                  <p>Colección</p>
                  <img src={blackArrow} className='up-arrow'/>
                </section>
                <section className='sidebar-collections-check-hidden'>
                  <label className='sidebar-collection-check-option'>
                    <p>Eclat Éternel</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>L'aura Majestuse</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>Velours Divin</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>Heritage d'Or</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>Opulence Sauvage</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>Noir Élegance</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>Ciel de Minuit</p>
                    <input type="checkbox"/>
                  </label>
                </section>
            </div>
            <div className='sidebar-filter-size'>
                <p>Talla</p>
                <img src={blackArrow}/>
            </div>
            <div className='sidebar-filter-color'>
                <p>Color</p>
                <img src={blackArrow}/>
            </div>       
        </article>     
      </div>
    </section>
  )
}
