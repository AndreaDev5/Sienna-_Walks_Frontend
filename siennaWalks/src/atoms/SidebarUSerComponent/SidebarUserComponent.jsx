import React from 'react';
import './SidebarUserComponent.css';
import emptyUSer from '../../assets/logos/ph_user-rectangle-thin.svg';
import { Link } from 'react-router-dom';
import { StoreContext,HeaderContext } from '../../context/StoreContext';

const SidebarUserComponent = ({sidebarUserComponent,sidebarEmptyUser,sidebarUserTittle,sidebarUserLinks }) => {
/*variable de entorno de hamburguesa*/   
const { onChangeLightBurguer} = React.useContext(StoreContext);   
const { toggleUSerCart } = React.useContext(HeaderContext);

const onChangeLinks = () =>{
  onChangeLightBurguer();
  toggleUSerCart();  
}
/*variables de entorno para renderizar */
  return (
      <section className={sidebarUserComponent}>
        <img  className={sidebarEmptyUser} src={emptyUSer}/>
        <h1 className={sidebarUserTittle}>¿Aún no ingresas o no tienes perfil?</h1>
        <article className={sidebarUserLinks}>
            <Link to="/ingresa" onClick={onChangeLinks}>Ingresa</Link>
            <Link to="/registrate" onClick={onChangeLinks}>Regístrate</Link>
        </article>
      </section>
  )
}

export default SidebarUserComponent
