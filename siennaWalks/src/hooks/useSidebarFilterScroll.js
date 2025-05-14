import { useState, useEffect, useRef } from "react";

const useSidebarFilterScroll = () =>{
    /*funcion para el  srcroll horizontal del sidebar*/
    const [sidebarFilter,setSidebarFilter] = useState(true)

    const onChangeSidebarFilter = () =>{
        setSidebarFilter(!sidebarFilter);
        console.log(sidebarFilter);
    }
   /** funciones para los filtros de las colecciones, tallas y colores*/
   /*variables para los filtros de colecciones*/ 
   const [filterCollectionItem, setFilterCollectionItems] = useState(false);
   const filterCollectionRef = useRef(null);
   const arrowRef = useRef(null);

   /*variables para los filtros de tallas*/ 
    const [filterSizesItem,setFilterSizesItems] = useState(false);
    const filterSizesRef = useRef(null);
    const arrowSizesRef = useRef(null);

    /*variables para los filtros de colores*/ 
    const [filterColorItem,setFilterColorItems] = useState(false);
    const filterColorRef = useRef(null);
    const arrowColorRef = useRef(null);
   
   const onChangeFilterCollection = () =>{
        setFilterCollectionItems(!filterCollectionItem);
        setFilterSizesItems(false)
        setFilterColorItems(false)
    }

   /*funciones de toggle para los botones de filtro*/
    const onChangeFilterSizes = () =>{
    setFilterSizesItems(!filterSizesItem);
    setFilterCollectionItems(false);
    setFilterColorItems(false)
  }
  
const onChangeColorSizes = () =>{
    setFilterColorItems(!filterColorItem);
    setFilterCollectionItems(false);
    setFilterSizesItems(false);
  }


  /*efecto por default para las colecciones*/
useEffect(()=>{
    const filterCollectionNode = filterCollectionRef.current;
    const filterLinksNode = filterCollectionNode.childNodes[1];
    const arrowRefNode = arrowRef.current;
    
    if(filterCollectionItem===true){
      filterCollectionNode.classList.replace('sidebar-filter-collection-hidden','sidebar-filter-collection-extended');
      filterLinksNode.classList.replace('sidebar-collections-check-hidden','sidebar-collections-check-extended');
      arrowRefNode.classList.replace('up-arrow','down-arrow');
    }
    else{
      filterCollectionNode.classList.replace('sidebar-filter-collection-extended','sidebar-filter-collection-hidden');
      filterLinksNode.classList.replace('sidebar-collections-check-extended','sidebar-collections-check-hidden');
      arrowRefNode.classList.replace('down-arrow','up-arrow');
    }
  })
  
  /*efecto por default para las tallas*/
  useEffect(()=>{
    const filterSizesNode = filterSizesRef.current;
    const filterSizesLinksNode = filterSizesNode.childNodes[1]
    const arrowSizesNode = arrowSizesRef.current;
    
    if(filterSizesItem===true){
      filterSizesNode.classList.replace('sidebar-filter-size-hidden','sidebar-filter-size-extended');
      filterSizesLinksNode.classList.replace('sidebar-size-check-hidden','sidebar-size-check-extended');
      arrowSizesNode.classList.replace('up-size-arrow','down-size-arrow')
    }
    else{
      filterSizesNode.classList.replace('sidebar-filter-size-extended','sidebar-filter-size-hidden');
      filterSizesLinksNode.classList.replace('sidebar-size-check-extended','sidebar-size-check-hidden');
      arrowSizesNode.classList.replace('down-size-arrow','up-size-arrow')
    }
  })
  
  /*efecto por default para los colores*/
  useEffect(()=>{
      const filterColorNode = filterColorRef.current;
      console.log(filterColorNode);
      const filterColorLinksNode = filterColorNode.childNodes[1];
      const arrowColorNode = arrowColorRef.current;
      
      if(filterColorItem===true){
        filterColorNode.classList.replace('sidebar-filter-color-hidden','sidebar-filter-color-extended');
        filterColorLinksNode.classList.replace('sidebar-color-check-hidden','sidebar-color-check-extended');
        arrowColorNode.classList.replace('up-color-arrow','down-color-arrow')
      }else{
        filterColorNode.classList.replace('sidebar-filter-color-extended','sidebar-filter-color-hidden');
        filterColorLinksNode.classList.replace('sidebar-color-check-extended','sidebar-color-check-hidden');
        arrowColorNode.classList.replace('down-color-arrow','up-color-arrow')
      }
  })

   return { sidebarFilter, onChangeSidebarFilter, filterCollectionRef, onChangeFilterCollection, arrowRef, filterSizesRef, 
    onChangeFilterSizes, arrowSizesRef, filterColorRef, onChangeColorSizes, arrowColorRef } 
}

export { useSidebarFilterScroll }