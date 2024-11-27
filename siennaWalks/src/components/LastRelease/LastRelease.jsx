import React, { useEffect, useState } from 'react';
import './LastRelease.css'
import ShoeStoreTarget from '../../atoms/ShoeStoreTarget/ShoeStoreTarget';
import { initialData } from './initialData';
import { Link } from 'react-router-dom';

export default function LastRelease(){
  const [provisionalData,setProvisionalData] = useState([]);  
  const [productList, setProductList ] = useState([]);
  const [productPage,setProductPage]  = useState(0);

  const getAllProducts = async (index) =>{
    const productURL = 'http://localhost:3000/api/products/';
    const request = await fetch(productURL)
    const productData = await request.json();
    const { data } = productData;

    const filteredProducts = data.slice(0,index)
    console.log(filteredProducts)
    if(data && productData!==undefined){
      setProductList(data)
    }    
  }

  useEffect(()=>{
    getAllProducts(32);
  },[])

  return (
    <section className='releases'>
      <article className='releases-tittle'>
        <div className='releases-tittle-line'></div>
        <h1>Últimos lanzamientos</h1>
        <div className='releases-tittle-line'></div>
      </article>
      <article className='release-products-container'>
        {(productList!==undefined) && productList.map((dataItem)=>{
            return <ShoeStoreTarget
                classShoeName='shoe-store-target'
                key={dataItem.id}
                collection={dataItem.category}
                shoesName={dataItem.name}
                image={dataItem.image}
                shoesPrice={`$${dataItem.price}`}
                />
        })}
        </article>
        <Link className='link-all-products' to={'/ver-productos'}>Ver todos los pares</Link>
    </section>
  )
}
