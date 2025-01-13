import React from 'react';
import blackArrow from '../../assets/logos/up--black-arrow.svg';
import { SidebarAllProductsContext } from '../../context/StoreContext';
import { useContext, useState, useRef, useEffect, } from 'react';
import { useFilterProducts } from '../../hooks/useFilterProducts';
import './SideberFilterSlider.css';

const SidebarFilterSlider = () => {
    const { filterCollectionRef, onChangeFilterCollection, arrowRef,
        filterSizesRef , onChangeFilterSizes, arrowSizesRef, filterColorRef, onChangeColorSizes, arrowColorRef
      } = useContext(SidebarAllProductsContext);   
    
    const { productList,toggleFilters,filteredProducts } = useFilterProducts();
    console.log(`Sidebar ${filteredProducts}`);

  return (
    <article className='sidebar-filter-slider'>
            <div className='sidebar-filter-collection-hidden' ref={filterCollectionRef}>
                <section className='sidebar-filter-button' onClick={onChangeFilterCollection}>
                  <p>Colección</p>
                  <img src={blackArrow} className='up-arrow' ref={arrowRef}/>
                </section>
                <section className='sidebar-collections-check-hidden'>
                  <label className='sidebar-collection-check-option'>
                    <p>Eclat Éternel</p>
                    <input type="checkbox" onChange={()=> toggleFilters("category","Eclat Éternel")}/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>L'aura Majestuse</p>
                    <input type="checkbox" onChange={()=> toggleFilters("category",`L'Aura Majestueuse`)}/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>Velours Divin</p>
                    <input type="checkbox" onChange={()=> toggleFilters("category",`Velours Divin`)}/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>Heritage d'Or</p>
                    <input type="checkbox" onChange={()=> toggleFilters("category",`Héritage d'Or`)}/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>Opulence Sauvage</p>
                    <input type="checkbox" onChange={()=>toggleFilters("category",`Opulence Sauvage`)}/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>Noir Élegance</p>
                    <input type="checkbox" onChange={()=>toggleFilters("category",`Noir Élégance`)}/>
                  </label>
                  <label className='sidebar-collection-check-option'>
                    <p>Ciel de Minuit</p>
                    <input type="checkbox" onChange={()=>toggleFilters("category",`Ciel de Minuit`)}/>
                  </label>
                </section>
            </div>
            <div className='sidebar-filter-size-hidden' ref={filterSizesRef}>
                <section className='sidebar-size-button' onClick={onChangeFilterSizes}>
                  <p>Talla</p>
                  <img className='up-size-arrow' src={blackArrow} ref={arrowSizesRef}/>
                </section>
                <section className='sidebar-size-check-hidden'>
                  <label className='sidebar-size-check-option'>
                    <p>34</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-size-check-option'>
                    <p>35</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-size-check-option'>
                    <p>36</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-size-check-option'>
                    <p>37</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-size-check-option'>
                    <p>38</p>
                    <input type="checkbox"/>
                  </label>
                </section>
            </div>
            <div className='sidebar-filter-color-hidden'  ref={filterColorRef}>
                <section className='sidebar-color-button' onClick={onChangeColorSizes}>
                  <p>Color</p>
                  <img src={blackArrow} ref={arrowColorRef} className='up-color-arrow'/>
                </section>
                <section className='sidebar-color-check-hidden'>
                  <label className='sidebar-color-check-option black-button'>
                    <p>Negro</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-color-check-option white-button'>
                    <p>Blanco</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-color-check-option red-button'>
                    <p>Rojo</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-color-check-option blue-button'>
                    <p>Azul</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-color-check-option brown-button'>
                    <p>Café</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-color-check-option beige-button'>
                    <p>Beige</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-color-check-option white-cream-button'>
                    <p>Crema Blanco</p>
                    <input type="checkbox"/>
                  </label>
                  <label className='sidebar-color-check-option wine-red-button'>
                    <p>Vino Tinto</p>
                    <input type="checkbox"/>
                  </label>
                </section>
            </div>       
        </article>
  )
}

export default SidebarFilterSlider
