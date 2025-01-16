import React from 'react';
import BurguerButton from '../../atoms/BurguerButton/BurguerButton';
import SiennaCollectionPages from '../../atoms/SiennaCollectionPages/SiennaCOllectionPages';
import './Collection.css';

function Collection({collectionTittle}) {
  return (
    <>
    <section className='collection-container'>
      <h1 className='collection-header-tittle'>Sienna Walks</h1>
      <BurguerButton buttonMode={false}/>
      <SiennaCollectionPages/>
      <article className='collection-page-tittle'>
        <div className='collection-page-tittle-line'></div>
        <h1>{collectionTittle}</h1>
        <div className='collection-page-tittle-line'></div>
      </article>
    </section>
    </>
  )
}

export default Collection



