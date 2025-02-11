import { useEffect, useRef, useState } from 'react';

const useProductDetailInfo = () =>{
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


   return { addProducts, substractProducts, sizesRef, getSize, quantityProducts }
}

export  { useProductDetailInfo }