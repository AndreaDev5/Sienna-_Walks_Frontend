import { useState, useEffect } from 'react';
import './ProductDetail.css';
import { Link, useParams } from 'react-router-dom';
import BurguerButton from '../../atoms/BurguerButton/BurguerButton';
import ProductDetailInfo from '../../components/ProductDetailInfo/ProductDetailInfo';
import ShoeStoreTarget from '../../atoms/ShoeStoreTarget/ShoeStoreTarget';
import Footer from '../../components/Footer/Footer';

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
    <section>
        {(productList.length > 0)?productList.map((product)=>{
            return <ShoeStoreTarget
            classShoeName='shoe-store-target'
            key={product._id}
            collection={product.category}
            shoesName={product.name}
            image={product.image}
            productLink={`/producto/${product._id}`}
            shoesPrice={`$${product.price}`}/>
        }):''}
    </section>
    </>
    )
}
 
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
  },[])

  /*name,urlImage,price,category*/
  return (
    <>
     <section className='product-description-container'>
        <Link className="product-tittle-init" to="/"><h1>Sienna Walks</h1></Link>   
        <BurguerButton buttonMode={false}/>
        <ProductDetailInfo  name={productInfo.name} urlImage={productInfo.image} price={productInfo.price} category={productInfo.category}/>
        <AdditionalProducts/>    
     </section>
     <Footer footerBackground={'#f9f9f9'} footerMarginTop={"1.6rem"}/>
    </>
  )
}

export default ProductDetail
