import React, { useEffect, useRef, useState } from 'react';
import './Allproducs.css';
import BurguerButton from '../../atoms/BurguerButton/BurguerButton';
import { Link } from 'react-router-dom';
import imageFilter from '../../assets/logos/image_filter.svg';
import { SidebarAllProductsContext } from '../../context/StoreContext';
import SidebarFilterSlider from '../../atoms/SidebarFilterSlider/SidebarFilterSlider';
import { initialDataAllProducts } from './AllProductsData';
import ShoeStoreTarget from '../../atoms/ShoeStoreTarget/ShoeStoreTarget';
import PersonalizeShoes from '../../components/PersonalizeShoes/PersonalizeShoes';
import Footer from '../../components/Footer/Footer';

const AllProducts = () => {
  const { onChangeSidebarFilter } = React.useContext(SidebarAllProductsContext);
  const bodyWidth = document.body.clientWidth;

  //variables para la lista de productos
  const [initialAllProducts, setInitialAllProducts] = useState([]);
  const [totalPages,setTotalPages] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState([])

  //variable para las referencias de los botones de la paginación
  const allProductsPagesRef = useRef(null);
  //función para aplicar estilos a llos botones de paginación 

  const applyButtonsStyles = (number) =>{
        //nodo de paginación
     const allProductsPagesNode = allProductsPagesRef.current;
     const allPProductsPagesItems = [...allProductsPagesNode.childNodes];

     //sacar el nodo que estoy seleccionando y aplicarle el estilo gris
     const productPageSelected = allPProductsPagesItems[number-1];
     productPageSelected.classList.replace('all-products-page-number','all-products-selected-number')

    //excluir todos lo otros nodos y aplicarle el estilo blanco
     const productsPageExcluded = allPProductsPagesItems.filter((item)=>{ 
      return item !== productPageSelected}) 

    //aplicar a los botones excluidos el estilo blanco
      productsPageExcluded.forEach((excluded)=> { return excluded.classList.replace('all-products-selected-number','all-products-page-number')})
  }

  //funcion para obtener los datos del array
  const getProductsByNumber = (index) =>{
    const totalITems = initialAllProducts.length;
    const items = 16;
    const itemsPerPage = Math.ceil(totalITems/items);

    //tomar un array e incluir el número de páginas progeresivamente 
    const numberPage = [];
    
    for(let i=1;i<=itemsPerPage;i++){  
      numberPage.push(i);
    }
    
    setTotalPages(numberPage);

    //busca el numero de la página entre todas las páginas para agregar un indice a la fake API
    let foundedNumber =  numberPage.find(item=>{ return item===index});
    let previousNumber = foundedNumber - 1;
    const firstPosition = items *  previousNumber;
    const secondPosition = items *  foundedNumber;
  
    let filteredProducts = initialAllProducts.slice(firstPosition,secondPosition)
    
    if(secondPosition>totalITems && firstPosition - totalITems <0){
      const negative = firstPosition-total;
      filteredProducts = initialAllProducts.slice(negative)
    }

    setProductsPerPage(filteredProducts);
    applyButtonsStyles(index)
  }

  useEffect(()=>{
    
    //añadir al estado los productos hardcodeados
    setInitialAllProducts(initialDataAllProducts)
    getProductsByNumber(1);
    
  },[initialAllProducts])
  
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
            {(productsPerPage.length >0)? productsPerPage.map((product)=>{
                return <ShoeStoreTarget
                classShoeName='shoe-store-target-all-products'
                key={product.id}
                collection={product.collection}
                shoesName={product.shoesName}
                shoesPrice={`$${product.shoesPrice}`}/>
            }):<h1>No hay productos para mostrar ajajajaj</h1>}
          </section>
        </main>
        {/*numeros que se van a usar en la paginación*/}
        <section className='all-products-pages' ref={allProductsPagesRef}>
           <button className='all-products-page-number all-products-selected-number' onClick={()=>{getProductsByNumber(1)}}>1</button>
           <button className='all-products-page-number' onClick={()=>{getProductsByNumber(2)}}>2</button>   
           <button className='all-products-page-number' onClick={()=>{getProductsByNumber(3)}}>3</button>
           <button className='all-products-page-number' onClick={()=>{getProductsByNumber(4)}}>4</button>   
        </section>
    </section>
    <PersonalizeShoes/>
    <Footer/>
    </>
  )
}

export default AllProducts
