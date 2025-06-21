import './ProductDetailInfo.css';
import minusProduct from '../../assets/logos/product-minus-gray.svg';
import plusProduct from '../../assets/logos/product-plus-gray.svg';
import purchaseIcon from '../../assets/logos/purchase-icon.svg';
import shoppingCart from '../../assets/logos/ph_shopping-cart-light.svg';
import { Link } from 'react-router-dom';
import { useState,useEffect,useRef,useContext } from 'react';
import  { ShoppgingCartContext } from '../../context/StoreContext.jsx'

const ProductDetailInfo = ({name,urlImage,price,category,color,id}) =>{                
    const { product,substractProduct,addProduct,onAddFirstPurchase,getSizeValue,onChangeModal } = useContext(ShoppgingCartContext);
    
    /*funciones para cambiar la talla 👢🤍🖤*/
    const sizesRef = useRef(null);
    let [sizeValue,setSizeValue] = useState(product.size); 
    
    const onChangeColorInput = (num) =>{
        setSizeValue(num)

        const { current } = sizesRef;
       
       /*lista de inputs relacionados con las tallas*/
       const listSizeNumbers = current.childNodes;

       switch (sizeValue) {
           case 35:
               listSizeNumbers[0].classList.replace('product-size-button','product-size-button-change')
               listSizeNumbers[1].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[2].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[3].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[4].classList.replace('product-size-button-change','product-size-button')
           break;
           case 36:
               listSizeNumbers[0].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[1].classList.replace('product-size-button','product-size-button-change')
               listSizeNumbers[2].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[3].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[4].classList.replace('product-size-button-change','product-size-button')
           break;
           case 37:
               listSizeNumbers[0].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[1].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[2].classList.replace('product-size-button','product-size-button-change')
               listSizeNumbers[3].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[4].classList.replace('product-size-button-change','product-size-button')
           break;
           case 38:
               listSizeNumbers[0].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[1].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[2].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[3].classList.replace('product-size-button','product-size-button-change')
               listSizeNumbers[4].classList.replace('product-size-button-change','product-size-button')
           break;
           case 39:
               listSizeNumbers[0].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[1].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[2].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[3].classList.replace('product-size-button-change','product-size-button')
               listSizeNumbers[4].classList.replace('product-size-button','product-size-button-change')
           break;
       }
    }

    useEffect(()=>{
        onChangeColorInput();
    },[sizeValue])

    return(
        <form className='product-info-delay' >
           <label className='product-info-tittle'>
            {name}
            <input type="radio" readOnly={true} name="name" value={name}/>
           </label>
           <article className="product-global-nav">
                <Link to="/">INICIO</Link>&nbsp;|&nbsp;<Link>{category}:{name}</Link>
            </article>
            <label className='product-info-image-container'>
                <img className='product-info-image' src={urlImage}/>    
                <input type="radio"  name="image"  value={urlImage} defaultChecked={true}/>
            </label> 
            <label className='product-info-price'>
            ${price}
            <input type="radio"  name="price"  value={price}/> 
            </label>
            <label className='product-info-collection'>
            {category}
            <input type="radio"  name="category" value={category}/>
            </label>
            <label className='product-info-colors'>
                <input type="radio"  name="color"  value={color}/>
                <p>{color}</p>
            </label>
            <section className='product-info-selector'>
                <article className='product-info-counter'>
                    <button className='product-info-minus' onClick={substractProduct}><img src={minusProduct}/></button>
                    <input className='product-info-number' type='number' name="unities" value={product.unities} min="1" max="4"/>
                    <button className='product-info-plus' onClick={addProduct}><img src={plusProduct} /></button>
                </article>
                <p className='product-info-unities'>Unidades</p>
            </section>
            <section className='product-size-selector'>
                <article className='product-size-numbers' ref={sizesRef}>
                    <label className='product-size-button' onClick={()=>{onChangeColorInput(35)}}>
                        <p>35</p>
                        <input type="radio" name="size" onChange={getSizeValue} value="35"/> 
                    </label>
                    <label className='product-size-button' onClick={()=>{onChangeColorInput(36)}}>
                        <p>36</p>
                        <input type="radio" name="size" onChange={getSizeValue} value="36" />
                    </label>
                    <label className='product-size-button' onClick={()=>{onChangeColorInput(37)}}>
                        <input type="radio" name="size" onChange={getSizeValue} value="37"/>    
                        <p>37</p>
                    </label> 
                    <label className='product-size-button' onClick={()=>{onChangeColorInput(38)}}>
                        <p>38</p>
                        <input type="radio" name="size" onChange={getSizeValue} value="38"/>
                    </label>
                    <label className='product-size-button' onClick={()=>{onChangeColorInput(39)}}>
                        <p>39</p>
                        <input type="radio" name="size" onChange={getSizeValue} value="39"/>
                    </label>
                </article>
                <p className='product-size-p'>Talla</p>
            </section>
            <section className='product-action-options'>
                <button className='product-info-send' onClick={onAddFirstPurchase}>
                    <p>Añadir al carrito</p>
                    <img src={shoppingCart}/>
                </button>
                {/*boton para añaidr la compra ⚠*/}
                <button className='product-info-buy'>
                    <p>Comprar</p>
                    <img src={purchaseIcon}/>
                </button>
            </section>
        </form> 
    )
}

export default ProductDetailInfo;