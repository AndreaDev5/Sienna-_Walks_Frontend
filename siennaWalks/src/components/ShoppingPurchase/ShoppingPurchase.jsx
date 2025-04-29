import './ShoppingPurchase.css';
import { useContext } from 'react';
import { ShoppgingCartContext } from '../../context/StoreContext';
import blackIconWhatsApp from '../../assets/logos/black-icon-whatsapp.svg';
import closeModal from '../../assets/logos/x-bold.svg';
import backShoppingCart from '../../assets/logos/tabler_arrow-left.svg'

/*card para un solo producto de tu factura 🤍🖤🛒*/
const PurchaseInvoiceItem = ({name,image,unities,color,size,purchase}) =>{
    return(
        <section className='shopping-purchase-invoice-item'>
            <h1 className='shopping-invoice-name'>{name}</h1>
            <img className='shopping-purchase-product-image' src={image}/>
            <article className='shopping-purchase-unities'>
                <p>Unidades</p>
                <p>{unities}</p>
            </article>
            <article className='shopping-purchase-colors'>
                <p>Color</p>
                <p>{color}</p>
            </article>
            <article className='shopping-purchase-size'>
                <p>Talla</p>
                <p>{size}</p>
            </article>
            <article className='shopping-purchase-total'>
                <p>Total</p>
                <p>${purchase}</p>
            </article>
        </section>
    )
}

const ShoppingPurchase = () => {
   const { purchase, totalPurchase,onChangeModal,shoppingPurchase,onChangeShoppingPurchase,onChangeCartComponent } =  useContext(ShoppgingCartContext);
   const onBackShoppingCart = () =>{
    onChangeCartComponent()
    onChangeShoppingPurchase()
  }  

  return (
    <section className={shoppingPurchase}>
        <header className='shopping-purchase-header'>
            <button className='shopping-back-cart' onClick={onBackShoppingCart}>
                <img src={backShoppingCart}/>
            </button>    
            <h1>Sienna Walks</h1>    
            <button className='shoppin-close-modal' onClick={onChangeModal}>
                <img src={closeModal}/>
            </button>
        </header>
        <h2>Datos de Facturación</h2>
        <form className='shopping-purchase-profile-form'>
            <label className='shopping-purchase-name'>
                <span>Nombre</span>
                <input type="text" /> 
            </label>
            <label className='shopping-purchase-email'>
                <span>Correo</span>
                <input type="email" />
            </label>
            <label className='shopping-purchase-cellphone'>
                <span>Teléfono</span>
                <input type="text"/>
            </label>
            <label className='shopping-purchase-city'>
                <span>Ciudad</span>
                <select>
                    <option>Bogotá</option>
                    <option>Medellín</option>
                </select>
            </label>
            <label className='shopping-pruchase-address'>
                <span>Dirección</span>
                <input type="text"/>
            </label>
            <label className='shopping-purchase-type-document'>
                <span>Tipo de documento</span>
                <select>
                    <option>Cédula de ciudadanía</option>
                    <option>Documento de identidad</option>
                    <option>Cédula de extranjería</option>
                </select>
            </label>
            <label className='shopping-purchase-number-document'>
                <span>Número de documento</span>
                <input type="text"/>
            </label>
        </form>
        <article className="shopping-purchase-invoice">
            <h1>Resumen de tu compra</h1>
            <section className='shopping-purchase-invoice-container'>
            <div className='shopping-purchase-products'>    
            {purchase.map((product)=>{
            return <PurchaseInvoiceItem
                    name={product.name}
                    unities={product.unities}
                    image={product.image}
                    color={product.color}
                    size={product.size}
                    purchase={product.purchase}  
                />
            })}        
            </div>
            <div className='shopping-purchase-invoice-totals'>
                <p>Subtotal</p>
                <p>$ {totalPurchase}</p>
                <p>Total</p>
                <p>$ {totalPurchase}</p>
            </div>
            <button className='shopping-purchase-end-purchase'>
                <p>Finalizar Compra</p>
                <img src={blackIconWhatsApp}/>
            </button>
            </section>
        </article>
    </section>
  )
}

export default ShoppingPurchase;
