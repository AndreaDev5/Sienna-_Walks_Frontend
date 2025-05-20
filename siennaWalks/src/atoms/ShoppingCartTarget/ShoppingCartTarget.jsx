import { useContext, useLayoutEffect, useRef, useState } from "react"
import { ShoppgingCartContext } from "../../context/StoreContext";
import './ShoppingCartTarget.css';
import discardPurchase from '../../assets/logos/x-bold.svg';
import minusProduct from '../../assets/logos/product-minus-gray.svg';
import plusProduct from '../../assets/logos/product-plus-gray.svg';

const ShoppingCartTarget = ({name,urlImage,color,unities,totals,id}) => {
const { deletePurchase } = useContext(ShoppgingCartContext);

//cambiar a gris el botón que esté seleccionado
const sizeCollectionRef = useRef(null);
  //1. Seleccionar a todos los inputs 
  const { current } = sizeCollectionRef;

const handleChangeSize = (num) =>{ 
    setCartSize(num)
  const selectInputSize = () =>{
    if(current){
      let  inputNodes = current.querySelectorAll('label'); 
      let inputList = [...inputNodes];

      return inputList
    }
  }
  
  const selectedInputSizes = selectInputSize();
  
  const selectedInput = selectedInputSizes[num];
  selectedInput.classList.replace('shopping-cart-size-button','shopping-cart-size-button-change')

  const filteredInput = selectedInputSizes.filter((item)=>item!==selectedInputSizes[num]);
  filteredInput.forEach((input)=>input.classList.replace('shopping-cart-size-button-change','shopping-cart-size-button'))
} 

//

  return (
    <form className="shopping-cart-target">
            <img src={urlImage} className="shopping-cart-image"/>
            <h2 className="shopping-cart-name">{name}</h2>
            <img src={discardPurchase}  className="shopping-cart-discard-purchase" onClick={()=>{deletePurchase(id)}}/>
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
                <button className='shopping-cart-info-minus'><img src={minusProduct}/></button>
                <input className='shopping-cart-info-number' type='number' name="unities" value={unities} min="1" max="20"/>
                <button className='shopping-cart-info-plus' ><img src={plusProduct} /></button>
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
