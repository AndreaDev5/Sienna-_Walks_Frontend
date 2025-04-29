import { useContext, useState } from "react"
import { ShoppgingCartContext } from "../../context/StoreContext";
import './ShoppingCartComponent.css';
import ShoppingCartTarget from "../../atoms/ShoppingCartTarget/ShoppingCartTarget";
import closeModal from '../../assets/logos/x-bold.svg';
import blackIconWhatsApp from '../../assets/logos/black-icon-whatsapp.svg';

function ShoppingCartComponent() {
  const { purchase, onChangeModal,totalPurchase,shoppingCartComponent,onChangeShoppingPurchase,onChangeCartComponent } = useContext(ShoppgingCartContext);

  /*funcion para cerrar el carrito de compras e ir a la factura 🛒➡💰*/
  const onBackShoppingCart = () =>{
    onChangeCartComponent()
    onChangeShoppingPurchase()
  } 

    return (
      <section className={shoppingCartComponent}>
        <header className="shopping-cart-header">
          <h1 className="shopping-cart-tittle">Carrito de compras</h1>
          <img className="shopping-close-modal" src={closeModal} onClick={onChangeModal}/>  
        </header>
        <div className="shopping-cart-items">
          {purchase.map((product)=>{
            return <ShoppingCartTarget
                      name={product.name}
                      urlImage={product.image}
                      color={product.color}
                      unities={product.unities}
                      totals={product.purchase}
                      id={product.id}
                      key={product.id}
                  />
          })}
        </div>
        <div className="shopping-cart-options-purchase">
          <article className="shopping-cart-total-purchase">
            <h3>Subtotal</h3>
            <h3>${totalPurchase}</h3>
            <h3>Total</h3>
            <h3>${totalPurchase}</h3>
          </article>
          <button className="shopping-cart-adress-purchase" onClick={onBackShoppingCart}>
            <p>Comprar</p>
            <img  src={blackIconWhatsApp}/>
          </button>      
        </div>
      </section>
    )  
}

export default ShoppingCartComponent;
