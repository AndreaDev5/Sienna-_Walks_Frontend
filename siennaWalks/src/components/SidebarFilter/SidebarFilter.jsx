import React, { useContext, useState, useRef, useEffect, } from 'react';
import './SidebarFilter.css';
import closeButton from '../../assets/logos/x-bold.svg';
import { SidebarAllProductsContext } from '../../context/StoreContext';
import SidebarFilterSlider from '../../atoms/SidebarFilterSlider/SidebarFilterSlider';

export default function SidebarFilter() {
const { sidebarFilter, onChangeSidebarFilter } = useContext(SidebarAllProductsContext);
 
  return (
    <section className={sidebarFilter?'sidebar-filter':'sidebar-filter-change'}>
      <div className='sidebar-filter-container'>      
         <img className='sidebar-filter-close' src={closeButton} onClick={onChangeSidebarFilter}/>
         <h1 className='sidebar-filter-tittle'>Filtros</h1>
         <SidebarFilterSlider/>
      </div>
    </section>
  )
}
