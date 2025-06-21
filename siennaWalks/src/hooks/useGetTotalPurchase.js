import { FirstPurchaseReducer } from "../reducers/FirstPurchaseReducer";
import { useReducer,useState, useEffect } from 'react';

const useGetTotalPurchase = () =>{
    const [productInfo, setProductInfo] = useState([])      
       

    const getOneProduct = async (idProduct) =>{
     /*obtner la url del servidor a partir del id de la url del producto*/
     const urlProduct = `http://localhost:3000/api/products/${idProduct}`;
 
     /*hacer la petición a la API rest del producto*/ 
     const request =  await fetch(urlProduct)
     const productData = await request.json();
     const { data } = productData;
     setProductInfo(data)
   }

    /*funcion para cargar la información de un solo producto*/     
      const [product,dispatch] = useReducer(FirstPurchaseReducer,{
        name: productInfo.name,
        urlImage: productInfo.image, 
        price: productInfo.price,
        category: productInfo.category,
        color: productInfo.color,
        id: 0,
        unities: 1,
        size: 35,
        total: 0,
        purchase:[]    
    });   

    /*funciones de useReducer orientadas a modifcar la cantidad de unidades compradas🤍🖤🚀*/     
        const substractProduct = (e) =>{
            e.preventDefault();
            const quantityProducts = product.unities;
            if(quantityProducts>=1 && quantityProducts<=4){
                dispatch({ 
                    type: 'substract-product',
                })
            }
        }
        
        const addProduct = (e) =>{
            e.preventDefault();
            const quantityProducts = product.unities;
            if(quantityProducts>=0 && quantityProducts<=3){
                dispatch({ 
                    type: 'add-product',
                })
            }
        }
             
        const getInitialPurchase = () =>{
            dispatch({
                type:'get-purchase',
                NextName: productInfo.name,
                NextUrlImage: productInfo.image,
                NextPrice: productInfo.price,
                NextCategory: productInfo.category,
                NextColor: productInfo.color,
                NextId: new Date().getTime(),
                NextTotal: product.price * product.unities
            });        
        }   
    
        const onAddFirstPurchase = (e) =>{
            e.preventDefault();
            getInitialPurchase();        
            dispatch({
                type:'add-purchase'
            })
            console.log(product.purchase)
        }
        
        const onDeleteFirstPurchase = (newId) =>{
           dispatch({
                type:'delete-purchase',
                id: newId
           })     
        }

        const getSizeValue = (e) =>{
            let inputValue = Number(e.target.value);
            dispatch({
                type: 'change-size',
                NextSize: inputValue
            })
        }

        /*funciones de useReducer orientadas a modifcar unidades en el carrito de compras🤍🖤🚀*/
        const addProductShoppingCart = (newId) =>{
            const filteredProduct = product.purchase.find((item)=>item.id ===newId);
            let filteredProductsUnities = filteredProduct.unities + 1;
            //console.log(filteredProductsUnities)
            dispatch({
                    type:'add-products-shopping',
                    id: newId
                })
        }

    return { product,substractProduct,addProduct,onAddFirstPurchase,onDeleteFirstPurchase,
        getSizeValue,productInfo,getOneProduct,addProductShoppingCart }
}

export { useGetTotalPurchase }