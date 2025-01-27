import { useEffect, useRef, useState } from 'react';
import './ProductDetailInfo.css';
import minusProduct from '../../assets/logos/product-minus-gray.svg';
import plusProduct from '../../assets/logos/product-plus-gray.svg';
import shoppingCart from '../../assets/logos/ph_shopping-cart-light.svg';
import { Link } from 'react-router-dom';


const ProductDetailInfo = ({name,urlImage,price,category,color}) =>{
     let [quantityProducts,setQuantityProducts] = useState(1);
     let [sizeValue,setSizeValue] = useState(0)   

    /*funcion para sumar  y restar productos*/
    const addProducts = (e) =>{
        e.preventDefault();
        if(quantityProducts>=0 && quantityProducts<=99) setQuantityProducts(quantityProducts=>quantityProducts+1); 
    }

    const substractProducts = (e) =>{
        e.preventDefault();
        if(quantityProducts>=1 && quantityProducts<=99) setQuantityProducts(quantityProducts=>quantityProducts-1);
    }

    /*nodos para  la selección de las tallas*/
    const sizesRef = useRef(null);

    /*función para captar el nodo*/

    const getSize = (num) =>{
        setSizeValue(num)

        const { current } = sizesRef;
        
        /*lista de inputs relacionados con las tallas*/
        const listSizeNumbers = current.childNodes;

        switch (sizeValue) {
            case 0:
                listSizeNumbers[0].classList.replace('product-size-button','product-size-button-change')
                listSizeNumbers[1].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[2].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[3].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[4].classList.replace('product-size-button-change','product-size-button')
            break;
            case 1:
                listSizeNumbers[0].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[1].classList.replace('product-size-button','product-size-button-change')
                listSizeNumbers[2].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[3].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[4].classList.replace('product-size-button-change','product-size-button')
            break;
            case 2:
                listSizeNumbers[0].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[1].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[2].classList.replace('product-size-button','product-size-button-change')
                listSizeNumbers[3].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[4].classList.replace('product-size-button-change','product-size-button')
            break;
            case 3:
                listSizeNumbers[0].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[1].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[2].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[3].classList.replace('product-size-button','product-size-button-change')
                listSizeNumbers[4].classList.replace('product-size-button-change','product-size-button')
            break;
            case 4:
                listSizeNumbers[0].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[1].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[2].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[3].classList.replace('product-size-button-change','product-size-button')
                listSizeNumbers[4].classList.replace('product-size-button','product-size-button-change')
            break;
        }
    }

    useEffect(()=>{
        getSize()
    },[sizeValue])

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