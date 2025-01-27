import { useState, useEffect } from 'react';
import './OtherProductDetail.css';
import { Link, useParams } from 'react-router-dom';
import BurguerButton from '../../atoms/BurguerButton/BurguerButton';
import ProductDetailInfo from '../../components/ProductDetailInfo/ProductDetailInfo';
import Footer from '../../components/Footer/Footer';
import AdditionalProducts from '../../components/AdditionalProducts/AdditionalProducts';

const ProductDetail = () => {
   /*funcion para cargar la información de un solo producto*/
   let { id } = useParams();
   const [productInfo, setProductInfo] = useState([])
   
   const getOneProduct = async () =>{
     /*obtner la url del servidor a partir del id de la url del producto*/
     const urlProduct = `http://localhost:3000/api/products/${id}`;
 
     /*hacer la petición a la API rest del producto*/ 
     const request =  await fetch(urlProduct)
     const productData = await request.json();
     const { data } = productData;
     setProductInfo(data)
   }

   useEffect(()=>{
    getOneProduct();
  },[id])

  return (
    <>
     <section className='product-description-container'>
        <Link className="product-tittle-init" to="/"><h1>Sienna Walks</h1></Link>   
        <BurguerButton buttonMode={false}/>
        <ProductDetailInfo  name={productInfo.name} urlImage={productInfo.image} price={productInfo.price} category={productInfo.category} color={productInfo.color}/>
        <AdditionalProducts name={productInfo.name} urlImage={productInfo.image} price={productInfo.price} category={productInfo.category} color={productInfo.color}/>    
     </section>
     <Footer footerBackground={'#f9f9f9'} footerMarginTop={"1.6rem"}/>
    </>
  )
}

export default ProductDetail
