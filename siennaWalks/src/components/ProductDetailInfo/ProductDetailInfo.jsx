import './ProductDetailInfo.css';
import minusProduct from '../../assets/logos/product-minus-gray.svg';
import plusProduct from '../../assets/logos/product-plus-gray.svg';
import purchaseIcon from '../../assets/logos/purchase-icon.svg';
import shoppingCart from '../../assets/logos/ph_shopping-cart-light.svg';
import { useProductDetailInfo } from '../../hooks/useProductDetailInfo';
import { ShoppgingCartContext } from '../../context/StoreContext'; 
import { Link } from 'react-router-dom';
import { useReducer,useState,useEffect,useRef, useLayoutEffect } from 'react';


function createInitialPurchase(){
    const newPurchase = []

    return {
        id:'',
        purchase: newPurchase,
    }
}

function firstPurchaseReducer(state,action){
    switch (action.type) {
        case 'substract-product':
            return {
             ...state,
             unities: state.unities - 1,
            }    
        case 'add-product':
            return {
             ...state,
             unities: state.unities + 1,
            }
        case 'change-size':
            return{
            ...state,
            size: action.NextSize     
        }

        case 'get-purchase':
            return {
            ...state,
            name: action.NextName,
            urlImage: action.NextUrlImage,
            price: action.NextPrice,
            category: action.NextCategory,
            color: action.NextColor,
            total: state.price * state.unities
            }
    }
}

const ProductDetailInfo = ({name,urlImage,price,category,color}) =>{  
    
    const [state,dispatch] = useReducer(firstPurchaseReducer,{
        name: name,
        urlImage: urlImage, 
        price: price,
        category: category,
        color: color,
        unities: 1,
        size: 35,
        total: 0,    
    });    
    
   /*funciones de useReducer orientadas a modifcar la cantidad de unidades compradas🤍🖤🚀*/     
    const substractProduct = (e) =>{
        e.preventDefault();
        const quantityProducts = state.unities;
        if(quantityProducts>=1 && quantityProducts<=4){
            dispatch({ 
                type: 'substract-product',
            })
        }
    }
    
    const addProduct = (e) =>{
        e.preventDefault();
        const quantityProducts = state.unities;
        if(quantityProducts>=0 && quantityProducts<=3){
            dispatch({ 
                type: 'add-product',
            })
        }
    }
         
    const getInitialPurchase = (e) =>{
        e.preventDefault();
        let initialPurchase = {
            name: name,
            urlImage: urlImage,
            price: price,
            category: category,
            color: color,
        }

        dispatch({
            type:'get-purchase',
            NextName: initialPurchase.name,
            NextUrlImage: initialPurchase.urlImage,
            NextPrice: initialPurchase.price,
            NextCategory: initialPurchase.category,
            NextColor: initialPurchase.color,
            NextTotal: state.price * state.unities
        });
        console.log(state);
    }   
    

    const getSizeValue = (e) =>{
        let inputValue = Number(e.target.value);
        dispatch({
            type: 'change-size',
            NextSize: inputValue
        })
    }

    /*funciones para cambiar la talla 👢🤍🖤*/
    const sizesRef = useRef(null);
    let [sizeValue,setSizeValue] = useState(state.size); 
    
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
                    <input className='product-info-number' type='number' name="unities" value={state.unities} min="1" max="4"/>
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
                <button className='product-info-send' onClick={getInitialPurchase}>
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