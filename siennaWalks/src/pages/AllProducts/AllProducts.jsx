import React, { useContext } from 'react';
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
  //console.log(`all products ${filteredProducts}`);
  const {productList,toggleFilters,filteredProducts } = useContext(SidebarAllProductsContext);
  
  console.log(`all products ${filteredProducts}`);
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
            {(filteredProducts?.length >0) && filteredProducts.map((product)=>{
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
        <p className='all-products-indicator'><strong>{productList?.length}</strong> de <strong>{productList?.length}</strong> productos</p>
        <button className='all-products-charger'>Ver más</button>    
    </section>
    <PersonalizeShoes/>
    <Footer/>
    </>
    )
  }

export default AllProducts
