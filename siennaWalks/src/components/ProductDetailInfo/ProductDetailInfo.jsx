import './ProductDetailInfo.css';
import minusProduct from '../../assets/logos/product-minus-gray.svg';
import plusProduct from '../../assets/logos/product-plus-gray.svg';
import purchaseIcon from '../../assets/logos/purchase-icon.svg';
import shoppingCart from '../../assets/logos/ph_shopping-cart-light.svg';
//import { useProductDetailInfo } from '../../hooks/useProductDetailInfo';
import { ShoppgingCartContext } from '../../context/StoreContext'; 
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const ProductDetailInfo = ({name,urlImage,price,category,color}) =>{
    /*variables para obtener información del producto 🛒*/
    const { addProducts, substractProducts, sizesRef, getSize, quantityProducts } = useProductDetailInfo();

    /*variables para crear el arreglo del carrito de compras*/
    const { formReference } = useContext(ShoppgingCartContext);

    return(
        <form className='product-info-delay' ref={formReference}>
           <label className='product-info-tittle'>
            {name}
            <input type="radio" readOnly={true} name="name" value={name}/>
           </label>
           <article className="product-global-nav">
                <Link to="/">INICIO</Link>&nbsp;|&nbsp;<Link>{category}:{name}</Link>
            </article>
            <label className='product-info-image-container'>
                <img className='product-info-image' src={urlImage}/>    
                <input type="radio"  name="image" value={urlImage}/>
            </label> 
            <label className='product-info-price'>
            ${price}
            <input type="radio"  name="price" value={price}/> 
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
                    <button className='product-info-minus' onClick={substractProducts}><img src={minusProduct}/></button>
                    <input className='product-info-number' type='number' name="unities" value={quantityProducts} min="1" max="20"/>
                    <button className='product-info-plus' onClick={addProducts}><img src={plusProduct} /></button>
                </article>
                <p className='product-info-unities'>Unidades</p>
            </section>
            <section className='product-size-selector'>
                <article className='product-size-numbers' ref={sizesRef} >
                    <label className='product-size-button' onClick={()=>{getSize(0)}} defaultChecked={true}>
                        <p>35</p>
                        <input type="radio" name="size"  value="35"/> 
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
            <section className='product-action-options'>
                <button className='product-info-send' onClick={getPurchase}>
                    <p>Añadir al carrito</p>
                    <img src={shoppingCart}/>
                </button>
                <button className='product-info-buy'>
                    <p>Comprar</p>
                    <img src={purchaseIcon}/>
                </button>
            </section>
        </form> 
    )
}

export default ProductDetailInfo;