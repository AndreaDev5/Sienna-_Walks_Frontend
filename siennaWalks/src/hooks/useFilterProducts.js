import { useEffect, useState } from 'react';

export const useFilterProducts = () =>{

    /*variables de consumo de la API*/
  const [productList, setProductList ] = useState([]);
  //const [newProducts, setNewProducts ] = useState([]);
  
  const getAllProducts = async () =>{
    const productURL =  'http://localhost:3000/api/products/';
    const request =  await fetch(productURL)
    const productData = await request.json();
    const { data } = productData;
    setProductList(data)
  }

  /*funcion de filtrado de producto*/
  const [filters,setFilters] = useState({ category:[], type:[] })  
  
  const toggleFilters = (typeFilter,value) =>{
        setFilters((prev)=>({
        ...prev,
        [typeFilter]: prev[typeFilter].includes(value)
        ? prev[typeFilter].filter((product)=> product !== value):
        [...prev[typeFilter],value]
        }))
      }
      
    const filteredProducts = productList.filter((product)=>{
        const matchCategory = filters.category.length === 0 || filters.category.includes(product.category);
        const matchType = filters.type.length === 0 || filters.type.includes(product.type);
        return matchCategory && matchType;
    })  
    
    
    //console.log(filteredProducts);

  useEffect(()=>{
    getAllProducts();
  },[])

  return { productList,toggleFilters,filteredProducts }
}

