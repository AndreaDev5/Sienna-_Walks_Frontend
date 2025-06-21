import './SidebarCartTarget.css';
import discardPurchase from '../../assets/logos/x-bold.svg';
import { useContext } from 'react';
import { ShoppgingCartContext } from '../../context/StoreContext';

const SidebarCartTarget = ({name,image,size,unities,total,id}) => {
  const { onDeleteFirstPurchase } = useContext(ShoppgingCartContext);
  //console.log(onDeleteFirstPurchase)
  

  return (
    <article className='sidebar-cart-target'>
    <h1 className='sidebar-purchase-tittle'>{name}</h1>
    <img className='sidebar-discard-purchase' src={discardPurchase} onClick={()=>{onDeleteFirstPurchase(id)}} alt="descartar compra"/>  
    <img className='sidebar-purchase-image' src={image}/>
    <section className='sidebar-purchase-size'>
      <p>Talla: </p>
      <p>{size}</p>
    </section>
    <section className='sidebar-purchase-unities'>
      <p>Unidades: </p>
      <p>{unities}</p>
    </section>
    <section className="sidebar-purchase-color">
      <p>Color: </p>
      <span></span>
      <p>Negro</p>
    </section>
    <section className="sidebar-total-purchase">
      <p>Total: </p>
      <p>${total}</p>
    </section>
  </article>
  )
}

export default SidebarCartTarget
