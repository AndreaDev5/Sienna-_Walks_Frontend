import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './Allproducs.css';
import BurguerButton from '../../atoms/BurguerButton/BurguerButton';
import { Link } from 'react-router-dom';
import imageFilter from '../../assets/logos/image_filter.svg';
import { SidebarAllProductsContext } from '../../context/StoreContext';
import SidebarFilterSlider from '../../atoms/SidebarFilterSlider/SidebarFilterSlider';
import ShoeStoreTarget from '../../atoms/ShoeStoreTarget/ShoeStoreTarget';
import PersonalizeShoes from '../../components/PersonalizeShoes/PersonalizeShoes';
import Footer from '../../components/Footer/Footer';

const AllProducts = () => {
  const { onChangeSidebarFilter } = React.useContext(SidebarAllProductsContext);
  const bodyWidth = document.body.clientWidth;

  /*variables de consumo de la API*/
  const [productList, setProductList ] = useState([]);
  let [productInterval,setProductInterval]  = useState(1);
  let [listedProducts, setListedProducts ] = useState([]);


  const getAllProducts = async () =>{
    const productURL =  'http://localhost:3000/api/products/';
    const request =  await fetch(productURL)
    const productData = await request.json();
    const { data } = productData;
    setProductList(data)
  }

  useEffect(()=>{
    getAllProducts();
  },[])
  



  const filterProducts = (products,index,tab) =>{
    
    //establecer las variables de intervalo
    const entireInterval = products.length;
  
    const secondInterval = index * 16;
    
    let selectedProducts = products.slice(0,secondInterval)

    let renederedProducts = selectedProducts.length; 
    
    if(renederedProducts<=entireInterval){
      setListedProducts((items)=>[...items,selectedProducts])
      const indexedProducts = listedProducts[listedProducts.length - 1];  
      return indexedProducts;
    }
  }

  const visibleProducts = useMemo(()=>filterProducts(productList,productInterval),[productList,productInterval])
 
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
        <article className="all-products-global-nav">
          <Link to="/">INICIO</Link>&nbsp;|&nbsp;<Link to="/ver-productos">BOTAS PARA MUJER</Link>
        </article>
        <main className='all-products-basic-container'>
          <section className='all-products-filter-buttons'>
            {(bodyWidth>=568) && <SidebarFilterSlider/>}
          </section>
          <section className='all-products-general-container'>
            {(visibleProducts?.length >0) && visibleProducts.map((product)=>{
                return <ShoeStoreTarget
                classShoeName='shoe-store-target-all-products'
                key={product.id}
                collection={product.category}
                shoesName={product.name}
                image={product.image}
                shoesPrice={`$${product.price}`}/>
            })} 
          </section>
        </main>
        <p className='all-products-indicator'><strong>{visibleProducts?.length}</strong> de <strong>{productList?.length}</strong> productos</p>
        <button className='all-products-charger' onClick={()=>{setProductInterval(productInterval=productInterval+1)}}>Ver más</button>    
    </section>
    <PersonalizeShoes/>
    <Footer/>
    </>
    )
  }

export default AllProducts
