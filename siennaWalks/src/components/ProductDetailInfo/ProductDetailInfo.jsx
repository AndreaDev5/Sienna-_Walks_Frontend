import { useEffect, useRef } from 'react';
import './ProductDetailInfo.css';
//import urlImage from '../../assets/images/shoeItemProv.png';
import minusProduct from '../../assets/logos/product-minus-gray.svg';
import plusProduct from '../../assets/logos/product-plus-gray.svg';
import shoppingCart from '../../assets/logos/ph_shopping-cart-light.svg';

const ProductDetailInfo = ({name,urlImage,price,category}) =>{
    const sizeReference = useRef(null);

    useEffect(()=>{
        const { current } = sizeReference;
        const sizeNumbers = current.querySelectorAll('input');
        //console.log(sizeNumbers);
    },[])
    
    return(
        <form className='product-info-delay'>
           <h1 className='product-info-tittle'>{name}</h1>
            <img className='product-info-image' src={urlImage}/>
            <h3 className='product-info-price'>{price}</h3>
            <h3 className='product-info-collection'>{category}</h3>
            <label className='product-info-colors'>
                <input type="radio"  name="color" checked={true}/>
                <p>Negro</p>
            </label>
            <section className='product-info-selector'>
                <article className='product-info-counter'>
                    <button className='product-info-minus'><img src={minusProduct}/></button>
                    <div className='product-info-number'>1</div>
                    <button className='product-info-plus'><img src={plusProduct}/></button>
                </article>
                <p className='product-info-unities'>Unidades</p>
            </section>
            <section className='product-size-selector'>
                <article className='product-size-numbers' ref={sizeReference}>
                    <label className='product-size-button'>
                        <p>35</p>
                        <input type="radio" name="size" value="35"/> 
                    </label>
                    <label className='product-size-button'>
                        <p>36</p>
                        <input type="radio" name="size" value="36"/>
                    </label>
                    <label className='product-size-button'>
                        <input type="radio" name="size" value="37"/>    
                        <p>37</p>
                    </label> 
                    <label className='product-size-button'>
                        <p>38</p>
                        <input type="radio" name="size" value="38"/>
                    </label>
                    <label className='product-size-button'>
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