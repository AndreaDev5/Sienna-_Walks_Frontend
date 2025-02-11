import { useEffect, useRef, useState } from 'react';
import './ProductDetailInfo.css';
import minusProduct from '../../assets/logos/product-minus-gray.svg';
import plusProduct from '../../assets/logos/product-plus-gray.svg';
import shoppingCart from '../../assets/logos/ph_shopping-cart-light.svg';
import { useProductDetailInfo } from '../../hooks/useProductDetailInfo';
import { Link } from 'react-router-dom';


const ProductDetailInfo = ({name,urlImage,price,category,color}) =>{
    const { addProducts, substractProducts, sizesRef, getSize, quantityProducts } = useProductDetailInfo();

    return(
        <form className='product-info-delay'>
           <h1 className='product-info-tittle'>{name}</h1>
           <article className="product-global-nav">
                 <Link to="/">INICIO</Link>&nbsp;|&nbsp;<Link>{category}:{name}</Link>
            </article> 
            <img className='product-info-image' src={urlImage}/>
            <h3 className='product-info-price'>${price}</h3>
            <h3 className='product-info-collection'>{category}</h3>
            <label className='product-info-colors'>
                <input type="radio"  name="color" checked={true}/>
                <p>{color}</p>
            </label>
            <section className='product-info-selector'>
                <article className='product-info-counter'>
                    <button className='product-info-minus' onClick={substractProducts}><img src={minusProduct}/></button>
                    <input className='product-info-number' type='number' value={quantityProducts} min="1" max="20"/>
                    <button className='product-info-plus' onClick={addProducts}><img src={plusProduct} /></button>
                </article>
                <p className='product-info-unities'>Unidades</p>
            </section>
            <section className='product-size-selector'>
                <article className='product-size-numbers' ref={sizesRef} >
                    <label className='product-size-button' onClick={()=>{getSize(0)}}>
                        <p>35</p>
                        <input type="radio" name="size" value="35"/> 
                    </label>
                    <label className='product-size-button' onClick={()=>{getSize(1)}}>
                        <p>36</p>
                        <input type="radio" name="size" value="36" />
                    </label>
                    <label className='product-size-button' onClick={()=>{getSize(2)}}>
                        <input type="radio" name="size" value="37"/>    
                        <p>37</p>
                    </label> 
                    <label className='product-size-button' onClick={()=>{getSize(3)}}>
                        <p>38</p>
                        <input type="radio" name="size" value="38"/>
                    </label>
                    <label className='product-size-button' onClick={()=>{getSize(4)}}>
                        <p>39</p>
                        <input type="radio" name="size" value="39"/>
                    </label>
                </article>
                <p className='product-size-p'>Talla</p>
            </section>
            <button className='product-info-send'>
                <p>Añadir al carrito</p>
                <img src={shoppingCart}/>
            </button>
        </form> 
    )
}

export default ProductDetailInfo;