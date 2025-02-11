import { useState, useEffect } from 'react';

const useAdditionalProducts = () =>{
     /*hacer un llamado a la API de productos*/ 
    /*variables de consumo de la API*/
    const [productList, setProductList ] = useState([]);
      
    const getAllProducts = async () =>{
      const productURL =  'http://localhost:3000/api/products/';
      const request =  await fetch(productURL)
      const productData = await request.json();
      const { data } = productData;
  
      /*organizar los datos de mayor a menor */
      const organizedData = data.sort((a,b)=>{
          let x = a.createdAt;
          let y = b.createdAt;
          if( x > y){ return -1}
          if( x < y ){ return 1 };
          return 0
      })
  
      const lastFourProducts = organizedData.slice(0,4)
      setProductList(lastFourProducts) 
    }
  
    useEffect(()=>{
        getAllProducts();
        window.scrollTo(0, 0); 
      },[])

      return { productList }
}

export { useAdditionalProducts }

