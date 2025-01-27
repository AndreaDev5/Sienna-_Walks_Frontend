import { useState, useEffect } from 'react';
import ShoeStoreTarget from '../../atoms/ShoeStoreTarget/ShoeStoreTarget';
import './AdditionalProducts.css';

const AdditionalProducts = () =>{
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
        
        return(
        <>
        <article className='other-products-tittle'>
            <div className='other-products-tittle-line'></div>
            <h1>También te puede gustar</h1>
            <div className='other-products-tittle-line'></div>
        </article>
        <section className='other-products-list'>
            {(productList.length > 0)?productList.map((product)=>{
                return <ShoeStoreTarget
                classShoeName='shoe-store-target'
                key={product._id}
                collection={product.category}
                shoesName={product.name}
                image={product.image}
                productLink={`/otros-productos/${product._id}`}
                shoesPrice={`$${product.price}`}/>
            }):''}
        </section>
        </>
        )
    }

    export default AdditionalProducts;