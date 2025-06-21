import { useState, useEffect, useContext } from 'react';
import './ProductDetail.css';
import { Link, useParams } from 'react-router-dom';
import BurguerButton from '../../atoms/BurguerButton/BurguerButton';
import ProductDetailInfo from '../../components/ProductDetailInfo/ProductDetailInfo';
import Footer from '../../components/Footer/Footer';
import AdditionalProducts from '../../components/AdditionalProducts/AdditionalProducts';
import { ShoppgingCartContext } from '../../context/StoreContext';

const ProductDetail = () => {
   /*funcion para cargar la información de un solo producto*/
   let { id } = useParams();
   
  const { productInfo,getOneProduct } =useContext(ShoppgingCartContext)
  useEffect(()=>{
    getOneProduct(id);
  },[id])
  
  return (
    <>
     <section className='product-description-container'>
        <Link className="product-tittle-init" to="/"><h1>Sienna Walks</h1></Link>   
        <BurguerButton buttonMode={false}/>
        <ProductDetailInfo  name={productInfo.name} urlImage={productInfo.image} price={productInfo.price} category={productInfo.category} color={productInfo.color} id={productInfo._id}/>
        <AdditionalProducts name={productInfo.name} urlImage={productInfo.image} price={productInfo.price} category={productInfo.category} color={productInfo.color}/>    
     </section>
     <Footer footerBackground={'#f9f9f9'} footerMarginTop={"1.6rem"}/>
    </>
  )
}

export default ProductDetail
