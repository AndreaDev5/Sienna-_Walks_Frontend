import React, { useEffect, useState } from 'react';
import './LastRelease.css'
import ShoeStoreTarget from '../../atoms/ShoeStoreTarget/ShoeStoreTarget';
import { initialData } from './initialData';
import { Link } from 'react-router-dom';

export default function LastRelease(){
  const [provisionalData,setProvisionalData] = useState([]);  

  useEffect(()=>{
    const data = { initialData }
    setProvisionalData(data)      
  },[])  
  
  let finalData = provisionalData.initialData;    

  return (
    <section className='releases'>
      <article className='releases-tittle'>
        <div className='releases-tittle-line'></div>
        <h1>Últimos lanzamientos</h1>
        <div className='releases-tittle-line'></div>
      </article>
      <article className='release-products-container'>
        {(finalData!==undefined) && finalData.map((dataItem)=>{
            return <ShoeStoreTarget 
                key={dataItem.id}
                collection={dataItem.collection}
                shoesName={dataItem.shoesName}
                shoesPrice={`$${dataItem.shoesPrice}`}
                />
        })}
        </article>
        <Link className='link-all-products'>Ver todos los pares</Link>
    </section>
  )
}
