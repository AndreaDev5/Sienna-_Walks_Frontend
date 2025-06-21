import { useContext, useLayoutEffect, useRef, useState } from "react"
import { ShoppgingCartContext } from "../../context/StoreContext";
import './ShoppingCartTarget.css';
import discardPurchase from '../../assets/logos/x-bold.svg';
import minusProduct from '../../assets/logos/product-minus-gray.svg';
import plusProduct from '../../assets/logos/product-plus-gray.svg';
import { useEffect } from "react";

const ShoppingCartTarget = ({name,urlImage,color,unities,totals,id}) => {
const { product,onDeleteFirstPurchase,substractProduct,addProductShoppingCart } = useContext(ShoppgingCartContext);

//console.log(product.purchase.unities)
const [quantityProducts,setQuantityProducts] = useState(Number(unities)); 
let [ cartInputMarker,setCartInputMarker ] = useState(0);

//const filteredProduct = product.purchase.find((item)=>item.id ===idProduct);
//console.log(filteredProduct)

const addNewProducts = (e)=>{
  e.preventDefault();
  const idProduct = id;
  console.log(idProduct)
  addProductShoppingCart(idProduct)
}

const substractNewPorducts = (e) =>{
  e.preventDefault()
  if(quantityProducts>=1 && quantityProducts<=4) setQuantityProducts(quantityProducts=>quantityProducts-1);
}

const sizeCollectionRef = useRef(null); 

 const handleChangeSize = (num) =>{ 
    setCartInputMarker(num)
    const { current } = sizeCollectionRef;

    const listNewSizeNumber = current.childNodes;
    
    
    switch (cartInputMarker) {
      case 0:
        listNewSizeNumber[0].classList.replace('shopping-cart-size-button','shopping-cart-size-button-change');
        listNewSizeNumber[1].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[2].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[3].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[4].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
      break;
      case 1:
        listNewSizeNumber[0].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[1].classList.replace('shopping-cart-size-button','shopping-cart-size-button-change');
        listNewSizeNumber[2].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[3].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[4].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
      break;
      case 2:
        listNewSizeNumber[0].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[1].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[2].classList.replace('shopping-cart-size-button','shopping-cart-size-button-change');
        listNewSizeNumber[3].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[4].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
      break;
      case 3:
        listNewSizeNumber[0].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[1].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[2].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[3].classList.replace('shopping-cart-size-button','shopping-cart-size-button-change');
        listNewSizeNumber[4].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
      break;
      case 4:
        listNewSizeNumber[0].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[1].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[2].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[3].classList.replace('shopping-cart-size-button-change','shopping-cart-size-button');
        listNewSizeNumber[4].classList.replace('shopping-cart-size-button','shopping-cart-size-button-change');
      break;
    } 
} 

useEffect(()=>{
  handleChangeSize();
},[])

  return (
    <form className="shopping-cart-target">
            <img src={urlImage} className="shopping-cart-image"/>
            <h2 className="shopping-cart-name">{name}</h2>
            <img src={discardPurchase}  className="shopping-cart-discard-purchase" onClick={()=>{onDeleteFirstPurchase(id)}}/>
            <section className='shopping-cart-size-selector'>
                <article className='shopping-cart-size-numbers' ref={sizeCollectionRef}>
                    <label className='shopping-cart-size-button' onClick={()=>{handleChangeSize(0)}}>
                        <p>35</p>
                        <input type="radio" name="size"  value="35" defaultChecked={true} /> 
                    </label>
                    <label className='shopping-cart-size-button' onClick={()=>{handleChangeSize(1)}}>
                        <p>36</p>
                        <input type="radio" name="size" value="36" />
                    </label>
                    <label className='shopping-cart-size-button' onClick={()=>{handleChangeSize(2)}}>
                        <input type="radio" name="size" value="37"/>    
                        <p>37</p>
                    </label> 
                    <label className='shopping-cart-size-button' onClick={()=>{handleChangeSize(3)}}>
                        <p>38</p>
                        <input type="radio" name="size" value="38"/>
                    </label>
                    <label className='shopping-cart-size-button'onClick={()=>{handleChangeSize(4)}}>
                        <p>39</p>
                        <input type="radio" name="size" value="39"/>
                    </label>
                </article>
                <p className='shopping-cart-size-p'>Talla</p>
            </section>
            <section className='shopping-cart-info-selector'>
              <article className='shopping-cart-info-counter'>
                <button className='shopping-cart-info-minus' onClick={substractProduct}><img src={minusProduct}/></button>
                <input className='shopping-cart-info-number' type='number' name="unities" value={product.unities} min="1" max="20"/>
                <button className='shopping-cart-info-plus' onClick={addNewProducts}><img src={plusProduct} /></button>
              </article>
              <p className='shopping-cart-info-unities'>Unidades</p>
            </section>
            <label className='shopping-cart-info-colors'>
                <input type="radio"  name="color"  readOnly={true} value={color}/>
                <p>{color}</p>
            </label>
            <section className="shopping-cart-totals">
              <p>Total: </p>
              <p>{totals}</p>
            </section>
          </form> 
  )
}

export default ShoppingCartTarget
