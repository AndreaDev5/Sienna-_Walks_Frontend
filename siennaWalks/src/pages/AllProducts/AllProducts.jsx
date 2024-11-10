import React from 'react';
import './Allproducs.css';
import BurguerButton from '../../atoms/BurguerButton/BurguerButton';
import { Link } from 'react-router-dom';
import imageFilter from '../../assets/logos/image_filter.svg';
import { SidebarAllProductsContext } from '../../context/StoreContext';

const AllProducts = () => {
  const { onChangeSidebarFilter } = React.useContext(SidebarAllProductsContext);
  return (
    <>
    <section className='all-products-container'>
        <Link to='/' className='all-products-tittle-init'><h1>Sienna Walks</h1></Link>
        <BurguerButton buttonMode={false}/>
        <h1 className='all-products-tittle-main'>Botas para mujer</h1>
        <article className='all-products-filter' onClick={onChangeSidebarFilter}>
            <p>Filtros</p>
            <img src={imageFilter}/>    
        </article>
    </section>
    
    </>
  )
}

export default AllProducts
